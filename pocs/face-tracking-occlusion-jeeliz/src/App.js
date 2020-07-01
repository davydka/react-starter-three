import React, { useRef, useLayoutEffect } from 'react'
import classnames from 'classnames/bind'

import { initStats } from './utils'

import styles from './App.module.scss'

const { JEEFACEFILTERAPI, JeelizResizer, THREE } = window
let THREECAMERA, maskMesh, maskMaterial
let selectedTexture = 0
const textures = []
const cx = classnames.bind(styles)

const handleFaceDetect = (faceIndex, isDetected) => {
  // handle detection events here
}

const handleClick = () => {
  selectedTexture++
  if(selectedTexture > textures.length - 1) {
    selectedTexture = 0
  }

  maskMaterial = new THREE.MeshStandardMaterial({
    map:          textures[selectedTexture].map,
    normalMap:    textures[selectedTexture].normal,
    roughnessMap: textures[selectedTexture].rough,
    bumpMap:      textures[selectedTexture].height,
    side: THREE.DoubleSide
  })

  maskMesh.material = maskMaterial
}

const initTextures = () => {
  const textureLoader = new THREE.TextureLoader()

  const argyle_texture = textureLoader.load( '/assets/textures/Fabric_Argyle_001_SD/Fabric_Argyle_001_basecolor.jpg' )
  const argyle_normal  = textureLoader.load( '/assets/textures/Fabric_Argyle_001_SD/Fabric_Argyle_001_normal.jpg' )
  const argyle_rough   = textureLoader.load( '/assets/textures/Fabric_Argyle_001_SD/Fabric_Argyle_001_roughness.jpg' )
  const argyle_height  = textureLoader.load( '/assets/textures/Fabric_Argyle_001_SD/Fabric_Argyle_001_height.jpg' )

  argyle_texture.wrapS = THREE.RepeatWrapping
  argyle_texture.wrapT = THREE.RepeatWrapping
  argyle_texture.repeat.set( 10, 10 )

  argyle_normal.wrapS = THREE.RepeatWrapping
  argyle_normal.wrapT = THREE.RepeatWrapping
  argyle_normal.repeat.set( 10, 10 )

  argyle_rough.wrapS = THREE.RepeatWrapping
  argyle_rough.wrapT = THREE.RepeatWrapping
  argyle_rough.repeat.set( 10, 10 )

  argyle_height.wrapS = THREE.RepeatWrapping
  argyle_height.wrapT = THREE.RepeatWrapping
  argyle_height.repeat.set( 10, 10 )

  textures.push({
    map: argyle_texture,
    normal: argyle_normal,
    rough: argyle_rough,
    height: argyle_height
  })

  const sci_texture = textureLoader.load( '/assets/textures/Sci-Fi_Padded_Fabric_002_SD/Sci-Fi_Padded_Fabric_002_basecolor.jpg' )
  const sci_normal  = textureLoader.load( '/assets/textures/Sci-Fi_Padded_Fabric_002_SD/Sci-Fi_Padded_Fabric_002_normal.jpg' )
  const sci_rough   = textureLoader.load( '/assets/textures/Sci-Fi_Padded_Fabric_002_SD/Sci-Fi_Padded_Fabric_002_roughness.jpg' )
  const sci_height  = textureLoader.load( '/assets/textures/Sci-Fi_Padded_Fabric_002_SD/Sci-Fi_Padded_Fabric_002_height.jpg' )

  sci_texture.wrapS = THREE.RepeatWrapping
  sci_texture.wrapT = THREE.RepeatWrapping
  sci_texture.repeat.set( 20, 20 )

  sci_normal.wrapS = THREE.RepeatWrapping
  sci_normal.wrapT = THREE.RepeatWrapping
  sci_normal.repeat.set( 20, 20 )

  sci_rough.wrapS = THREE.RepeatWrapping
  sci_rough.wrapT = THREE.RepeatWrapping
  sci_rough.repeat.set( 20, 20 )

  sci_height.wrapS = THREE.RepeatWrapping
  sci_height.wrapT = THREE.RepeatWrapping
  sci_height.repeat.set( 20, 20 )

  textures.push({
    map: sci_texture,
    normal: sci_normal,
    rough: sci_rough,
    height: sci_height
  })

  const fab_texture = textureLoader.load( '/assets/textures/Fabric_Knited_002_SD/Fabric_Knitted_002_COLOR.jpg' )
  const fab_normal = textureLoader.load( '/assets/textures/Fabric_Knited_002_SD/Fabric_Knitted_002_NRM.jpg' )
  const fab_rough = textureLoader.load( '/assets/textures/Fabric_Knited_002_SD/Fabric_Knitted_002_ROUGH.jpg' )
  const fab_height = textureLoader.load( '/assets/textures/Fabric_Knited_002_SD/Fabric_Knitted_002_DISP.jpg' )

  fab_texture.wrapS = THREE.RepeatWrapping
  fab_texture.wrapT = THREE.RepeatWrapping
  fab_texture.repeat.set( 10, 10 )

  fab_normal.wrapS = THREE.RepeatWrapping
  fab_normal.wrapT = THREE.RepeatWrapping
  fab_normal.repeat.set( 10, 10 )

  fab_rough.wrapS = THREE.RepeatWrapping
  fab_rough.wrapT = THREE.RepeatWrapping
  fab_rough.repeat.set( 10, 10 )

  fab_height.wrapS = THREE.RepeatWrapping
  fab_height.wrapT = THREE.RepeatWrapping
  fab_height.repeat.set( 10, 10 )

  textures.push({
    map: fab_texture,
    normal: fab_normal,
    rough: fab_rough,
    height: fab_height
  })
}

// Build 3D Scene
const initThreeScene = (spec) => {
  const jeelizThree = THREE.JeelizHelper.init(spec, handleFaceDetect)

  initTextures()
  maskMaterial = new THREE.MeshStandardMaterial({
    map:          textures[selectedTexture].map,
    normalMap:    textures[selectedTexture].normal,
    roughnessMap: textures[selectedTexture].rough,
    bumpMap:      textures[selectedTexture].height,
    side: THREE.DoubleSide
  })

  // Load a model
  const loader = new THREE.GLTFLoader()
  loader.load('/assets/models/maskWithOcclusionAR.gltf', function(gltf) {
      const scale = 0.1
      gltf.scene.scale.set(scale, scale, scale)
      const head = gltf.scene.children.filter(child => child.name === 'Head')[0]
      maskMesh = gltf.scene.children.filter(child => child.name === 'Mask')[0]
      maskMesh.material = maskMaterial
      maskMesh.renderOrder = 1

      head.renderOrder = 0
      head.material.colorWrite = false

      jeelizThree.faceObject.add(gltf.scene)

      const pLight = new THREE.PointLight(0xffffff, 1, 36)
      pLight.position.set(10, 10, 10)
      jeelizThree.faceObject.add(pLight)
      jeelizThree.faceObject.add(new THREE.AmbientLight( 0xffffff, 1.4 ))
    },
    undefined,
    function(error) {
      console.error(error)
    })

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
    },
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
      callback: function(isError, bestVideoSettings) {
        initFaceFilter(bestVideoSettings, stats)
      },
    })
  }, [])

  return (
    <div
      className={cx('app')}
    >
      <div className={cx('controls')}>
        <button onClick={handleClick}>Change Texture</button>
      </div>

      <canvas id="canvas" className={cx('canvas')}/>
    </div>
  )
}

export default App
