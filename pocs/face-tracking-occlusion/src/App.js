import React, {useRef, useLayoutEffect} from 'react'
import classnames from 'classnames/bind'

import {initStats} from './utils'

import styles from './App.module.scss'

const {JEEFACEFILTERAPI, JeelizResizer, THREE} = window
let THREECAMERA
const cx = classnames.bind(styles)

const handleFaceDetect = (faceIndex, isDetected) => {
    // handle detection events here
}

// Build 3D Scene
const initThreeScene = (spec) => {
    const jeelizThree = THREE.JeelizHelper.init(spec, handleFaceDetect)

    // Load a model
    const loader = new THREE.GLTFLoader()
    loader.load('/assets/models/maskWithOcclusionAR.gltf', function (gltf) {
        const scale = 0.1
        gltf.scene.scale.set(scale, scale, scale)
        const head  = gltf.scene.children.filter(child => child.name === 'Head')[0]
        // head.visible = false
        head.renderOrder = 0
        head.material.colorWrite = false
        console.log(head)
        jeelizThree.faceObject.add(gltf.scene)
    },
    undefined,
    function (error) {
        console.error(error)
    })

    // CREATE A CUBE
    // const cubeGeometry = new THREE.BoxGeometry(1, 1, 1)
    // const cubeMaterial = new THREE.MeshNormalMaterial()
    // const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
    // cube.frustumCulled = false
    // jeelizThree.faceObject.add(cube)

    //CREATE THE CAMERA
    THREECAMERA = THREE.JeelizHelper.create_camera()
}

const initFaceFilter = (videoSettings, stats) => {
    JEEFACEFILTERAPI.init({
        followZRot: true,
        canvasId: 'canvas',
        NNCpath: 'js/vendor/', // root of NNC.json file
        maxFacesDetected: 1,
        callbackReady: (errCode, spec) => {
            if (errCode) {
                console.error('ERR =', errCode)
                return
            }

            initThreeScene(spec)
        },

        // Animation Loop
        callbackTrack: (detectState) => {
            stats && stats.current && stats.current.begin()
            THREE.JeelizHelper.render(detectState, THREECAMERA)
            stats.current.end()
        }
    })
}

function App() {
    // Stats
    const stats = useRef()

    // 🌈 Setup Animation App
    useLayoutEffect(() => {
        // Stats/FPS counter
        initStats(stats)

        JeelizResizer.size_canvas({
            canvasId: 'canvas',
            callback: function (isError, bestVideoSettings) {
                initFaceFilter(bestVideoSettings, stats)
            }
        })
    }, [])

    return (
        <div
            className={cx('app')}
        >
            <canvas id="canvas" className={cx('canvas')}/>
        </div>
    )
}

export default App
