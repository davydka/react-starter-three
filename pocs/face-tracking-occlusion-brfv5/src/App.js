import React, { useRef, useLayoutEffect } from 'react'
import classnames from 'classnames/bind'

import { initStats } from './utils'

import styles from './App.module.scss'


const { THREE } = window
let maskMesh, maskMaterial
let selectedTexture = 0
const textures = []
const cx = classnames.bind(styles)

const handleClick = () => {
  selectedTexture++
  if (selectedTexture > textures.length - 1) {
    selectedTexture = 0
  }

  maskMaterial = new THREE.MeshStandardMaterial({
    map: textures[selectedTexture].map,
    normalMap: textures[selectedTexture].normal,
    roughnessMap: textures[selectedTexture].rough,
    bumpMap: textures[selectedTexture].height,
    side: THREE.DoubleSide,
  })

  maskMesh.material = maskMaterial
}

const initTextures = () => {
  const textureLoader = new THREE.TextureLoader()

  const argyle_texture = textureLoader.load('/assets/textures/Fabric_Argyle_001_SD/Fabric_Argyle_001_basecolor.jpg')
  const argyle_normal = textureLoader.load('/assets/textures/Fabric_Argyle_001_SD/Fabric_Argyle_001_normal.jpg')
  const argyle_rough = textureLoader.load('/assets/textures/Fabric_Argyle_001_SD/Fabric_Argyle_001_roughness.jpg')
  const argyle_height = textureLoader.load('/assets/textures/Fabric_Argyle_001_SD/Fabric_Argyle_001_height.jpg')

  argyle_texture.wrapS = THREE.RepeatWrapping
  argyle_texture.wrapT = THREE.RepeatWrapping
  argyle_texture.repeat.set(10, 10)

  argyle_normal.wrapS = THREE.RepeatWrapping
  argyle_normal.wrapT = THREE.RepeatWrapping
  argyle_normal.repeat.set(10, 10)

  argyle_rough.wrapS = THREE.RepeatWrapping
  argyle_rough.wrapT = THREE.RepeatWrapping
  argyle_rough.repeat.set(10, 10)

  argyle_height.wrapS = THREE.RepeatWrapping
  argyle_height.wrapT = THREE.RepeatWrapping
  argyle_height.repeat.set(10, 10)

  textures.push({
    map: argyle_texture,
    normal: argyle_normal,
    rough: argyle_rough,
    height: argyle_height,
  })

  const sci_texture = textureLoader.load('/assets/textures/Sci-Fi_Padded_Fabric_002_SD/Sci-Fi_Padded_Fabric_002_basecolor.jpg')
  const sci_normal = textureLoader.load('/assets/textures/Sci-Fi_Padded_Fabric_002_SD/Sci-Fi_Padded_Fabric_002_normal.jpg')
  const sci_rough = textureLoader.load('/assets/textures/Sci-Fi_Padded_Fabric_002_SD/Sci-Fi_Padded_Fabric_002_roughness.jpg')
  const sci_height = textureLoader.load('/assets/textures/Sci-Fi_Padded_Fabric_002_SD/Sci-Fi_Padded_Fabric_002_height.jpg')

  sci_texture.wrapS = THREE.RepeatWrapping
  sci_texture.wrapT = THREE.RepeatWrapping
  sci_texture.repeat.set(20, 20)

  sci_normal.wrapS = THREE.RepeatWrapping
  sci_normal.wrapT = THREE.RepeatWrapping
  sci_normal.repeat.set(20, 20)

  sci_rough.wrapS = THREE.RepeatWrapping
  sci_rough.wrapT = THREE.RepeatWrapping
  sci_rough.repeat.set(20, 20)

  sci_height.wrapS = THREE.RepeatWrapping
  sci_height.wrapT = THREE.RepeatWrapping
  sci_height.repeat.set(20, 20)

  textures.push({
    map: sci_texture,
    normal: sci_normal,
    rough: sci_rough,
    height: sci_height,
  })

  const fab_texture = textureLoader.load('/assets/textures/Fabric_Knited_002_SD/Fabric_Knitted_002_COLOR.jpg')
  const fab_normal = textureLoader.load('/assets/textures/Fabric_Knited_002_SD/Fabric_Knitted_002_NRM.jpg')
  const fab_rough = textureLoader.load('/assets/textures/Fabric_Knited_002_SD/Fabric_Knitted_002_ROUGH.jpg')
  const fab_height = textureLoader.load('/assets/textures/Fabric_Knited_002_SD/Fabric_Knitted_002_DISP.jpg')

  fab_texture.wrapS = THREE.RepeatWrapping
  fab_texture.wrapT = THREE.RepeatWrapping
  fab_texture.repeat.set(10, 10)

  fab_normal.wrapS = THREE.RepeatWrapping
  fab_normal.wrapT = THREE.RepeatWrapping
  fab_normal.repeat.set(10, 10)

  fab_rough.wrapS = THREE.RepeatWrapping
  fab_rough.wrapT = THREE.RepeatWrapping
  fab_rough.repeat.set(10, 10)

  fab_height.wrapS = THREE.RepeatWrapping
  fab_height.wrapT = THREE.RepeatWrapping
  fab_height.repeat.set(10, 10)

  textures.push({
    map: fab_texture,
    normal: fab_normal,
    rough: fab_rough,
    height: fab_height,
  })
}

// Build 3D Scene
const initThreeScene = (scene, camera, renderer, controls, t3d) => {
  // const jeelizThree = THREE.JeelizHelper.init(spec, handleFaceDetect)

  t3d.current.modelNodes = []
  // t3d.occlusionNodes  = []
  t3d.current.baseNodes = []
  t3d.current.transforms = []
  t3d.current.materialIdMap = []
  t3d.current.materialNameMap = []

  initTextures()
  maskMaterial = new THREE.MeshStandardMaterial({
    map: textures[selectedTexture].map,
    normalMap: textures[selectedTexture].normal,
    roughnessMap: textures[selectedTexture].rough,
    bumpMap: textures[selectedTexture].height,
    side: THREE.DoubleSide,
  })

  scene.current = new THREE.Scene()
  t3d.current.scene = scene.current
  // scene.current.background = new THREE.Color(0xff1515)

  camera.current = new THREE.PerspectiveCamera(20, 640 / 480, 0.1, 10000)
  t3d.current.camera = camera.current
  camera.current.position.set(0, 0, 0)
  camera.current.lookAt(new THREE.Vector3(0, 0, 1))
  camera.current.updateProjectionMatrix()

  renderer.current = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
    canvas: document.getElementById('canvas'),
    powerPreference: 'high-performance', //'high-performance' 'low-power'
  })
  t3d.current.renderer = renderer.current
  renderer.current.setSize(640, 480)
  renderer.current.setClearColor(0x000000, 0.0)
  // renderer.current.setClearColor(0x550055, 1.0)
  // renderer.current.setPixelRatio(window.devicePixelRatio)

  // controls.current = new THREE.OrbitControls(camera.current, renderer.current.domElement)

  setNumFaces(t3d, 1)

  const fileLoader = new THREE.FileLoader()
  fileLoader.load('/assets/models/occlusion_head_reference.json', function(response) {
      const objLoader = new THREE.ObjectLoader()

      const object3D = objLoader.parse(JSON.parse(response))
      object3D.name = 'occlusion'
      // t3d.current.occlusion = object3D
      // object3D.scale.set(.1, .1, .1)
      object3D.traverse((child) => {
        // child.renderOrder = 0
        if (child.material) {
          // console.log(child)
          child.material.color.set(0x0000ff)
          // child.material.opacity    = 0.0
          child.material.colorWrite = false
        }
      })
      object3D.renderOrder = 1
      // object3D.material.colorWrite = false
      // scene.current.add(object3D)
      // console.log(scene.current)
    },
    undefined,
    function(error) {
      console.error(error)
    })

  const loader = new THREE.GLTFLoader()
  loader.load('/assets/models/mask.gltf', function(gltf) {
      // const scale = 0.1
      // gltf.scene.scale.set(scale, scale, scale)
      // const head = gltf.scene.children.filter(child => child.name === 'Head')[0]
      maskMesh = gltf.scene.children.filter(child => child.name === 'Mask')[0]
      maskMesh.material = maskMaterial
      maskMesh.renderOrder = 1
      t3d.current.mask = maskMesh

      const occlusion = gltf.scene.children.filter(child => child.name === 'occlusion_mesh')[0]
      // occlusion.material = maskMaterial
      occlusion.material.colorWrite = false
      occlusion.renderOrder = 0
      t3d.current.occlusion = occlusion
      // head.visible = false
      // head.renderOrder = 0
      // head.material.colorWrite = false

      // jeelizThree.faceObject.add(gltf.scene)
      // scene.current.add(gltf.scene)
      scene.current.add(maskMesh)
      scene.current.add(occlusion)
      // console.log(scene.current)

      const pLight = new THREE.PointLight(0xffffff, 1, 100)
      pLight.position.set(-15, -0, 1302)
      // const sphereSize = 10
      // const pointLightHelper = new THREE.PointLightHelper(pLight, sphereSize)
      // scene.current.add(pointLightHelper)
      scene.current.add(pLight)
      scene.current.add(new THREE.AmbientLight(0xffffff, 0.5))
    },
    undefined,
    function(error) {
      console.error(error)
    })
}

let count = 0
const updateByFace = (brfv5App, t3d, face, index, show) => {
  if (!t3d.current.baseNodes || !t3d.current.mask) {
    return
  }
  count = count + 0.1
  const transforms = t3d.current.transforms
  const baseNodes = t3d.current.baseNodes
  // const scene = t3d.current.scene
  const mask = t3d.current.mask
  const occlusion = t3d.current.occlusion
  // console.log(scene)

  const baseNode = baseNodes[index]
  const transform = transforms[index]

  let modelZ = 1362
  // let modelZ = 720
  // if(t3d.camera.isPerspectiveCamera) {
  if (t3d.current.camera.isPerspectiveCamera) {
    // modelZ = 1362 * (canvasHeight / 480)
    modelZ = 1362 * (480 / 480)
  }

  // if(show) {
  // const si  = t3d.sceneScale
  // const cw  = (canvasWidth  / si)
  // const ch  = (canvasHeight / si)
  const si = 1.0
  const cw = (640 / si)
  const ch = (480 / si)

  let scale = face.scale * si * 0.0133
  let x = -(face.translationX - cw * 0.5) * si
  let y = -(face.translationY - ch * 0.5) * si
  let rx = -face.rotationX * 1.30
  let ry = -face.rotationY * 1.30
  let rz = face.rotationZ

  let ryp = Math.abs(ry) / 30.0
  let rxp = Math.abs(rx) / 30.0

  if (rx < 0) {
    rx *= 1.0 + ryp
    ry *= 0.95
    y -= rxp * 10
  } else {
    rx *= 1.33
    y += rxp * 7
  }

  if (ry < 0) {
    if (rx > 0) {
      rz -= ryp + (ryp * rxp) * 10
    } else {
      rz += ryp + (ryp * rxp) * 10
    }
  } else {
    if (rx > 0) {
      rz += ryp + (ryp * rxp) * 10
    } else {
      rz -= ryp + (ryp * rxp) * 10
    }
  }
  // }

  // if(t3d.camera.isPerspectiveCamera) {
  if (t3d.current.camera.isPerspectiveCamera) {
    rx -= brfv5App.toDegree(Math.atan(y / modelZ)) // perspective camera needs an adjustment for ry.
    ry += brfv5App.toDegree(Math.atan(x / modelZ)) // perspective camera needs an adjustment for ry.
  }

  const diffX = (x - transform.x)
  const diffY = (y - transform.y)
  const diffXAbs = Math.abs(diffX)
  const diffYAbs = Math.abs(diffY)

  if (!baseNode.visible || diffXAbs > 3 || diffYAbs > 3) {
    transform.x = transform.x + diffX
    transform.y = transform.y + diffY
  } else {
    transform.x = transform.x + diffX * (diffXAbs < 1.0 ? 0.25 : (diffXAbs < 2.0 ? 0.50 : 0.75))
    transform.y = transform.y + diffY * (diffYAbs < 1.0 ? 0.25 : (diffYAbs < 2.0 ? 0.50 : 0.75))
  }

  transform.z = modelZ - scale * 0.1 // offset a little bit for z sorting
  transform.scale = scale// * 0.01 * si * 1.33

  const diffRx = (rx - transform.rx)
  const diffRy = (ry - transform.ry)
  const diffRz = (rz - transform.rz)
  const diffRxAbs = Math.abs(diffRx)
  const diffRyAbs = Math.abs(diffRy)
  const diffRzAbs = Math.abs(diffRz)

  transform.rx = transform.rx + diffRx * (diffRxAbs < 1.0 ? 0.25 : (diffRxAbs < 2.0 ? 0.50 : 0.75))
  transform.ry = transform.ry + diffRy * (diffRyAbs < 1.0 ? 0.25 : (diffRyAbs < 2.0 ? 0.50 : 0.75))
  transform.rz = transform.rz + diffRz * (diffRzAbs < 1.0 ? 0.25 : (diffRzAbs < 2.0 ? 0.50 : 0.75))

  // baseNode.position.set(transform.x, transform.y, transform.z)
  // baseNode.rotation.set(brfv5App.toRadian(transform.rx), brfv5App.toRadian(transform.ry), brfv5App.toRadian(transform.rz))
  // baseNode.scale.set(transform.scale, transform.scale, transform.scale)

  // modelNode.position.set(0.0, -4.0, -3.0)

  mask.position.set(transform.x, transform.y, transform.z)
  mask.rotation.set(brfv5App.toRadian(transform.rx), brfv5App.toRadian(transform.ry), brfv5App.toRadian(transform.rz))
  mask.scale.set(transform.scale, transform.scale, transform.scale)

  occlusion.position.set(transform.x, transform.y, transform.z)
  occlusion.rotation.set(brfv5App.toRadian(transform.rx), brfv5App.toRadian(transform.ry), brfv5App.toRadian(transform.rz))
  occlusion.scale.set(transform.scale, transform.scale, transform.scale)

}

const setNumFaces = (t3d, numFaces) => {
  // log(logName, 'setNumFaces', t3d, numFaces)

  // Call this function before loading the 3d models and before the tracking starts.

  // if(!isInitialized(t3d)) return false

  const modelNodes = t3d.current.modelNodes
  const baseNodes = t3d.current.baseNodes
  const transforms = t3d.current.transforms
  const scene = t3d.current.scene

  for (let i = baseNodes.length; i < numFaces; i++) {
    const baseNode = new THREE.Group()
    baseNode.name = 'baseNode_' + i
    baseNodes.push(baseNode)

    const modelNode = new THREE.Group()
    modelNode.name = 'modelNode_' + i
    modelNodes.push(modelNode)

    transforms.push({ x: 0, y: 0, z: 0, rx: 0, ry: 0, rz: 0, scale: 0 })

    baseNode.add(modelNode)
    scene.add(baseNode)
  }

  return true
}

function App({ brfv5App }) {
  const stats = useRef(null)
  const ctx = useRef(null)
  const scene = useRef(null)
  const camera = useRef(null)
  const renderer = useRef(null)
  const controls = useRef(null)
  const t3d = useRef({})

  // 🌈 Setup Animation App
  useLayoutEffect(() => {
    // Stats/FPS counter
    initStats(stats)

    const _appId = 'brfv5.browser.minimal.modules.threejs' // (mandatory): 8 to 64 characters, a-z . 0-9 allowed
    const _webcam = document.getElementById('_webcam')
    const _imageData = document.getElementById('_imageData')

    // Those variables will be retrieved from the stream and the library.
    let _brfv5Manager = null
    let _brfv5Config = null
    let _width = 0
    let _height = 0

    // loadBRFv5Model and openCamera are being done simultaneously thanks to Promises. Both call
    // configureTracking which only gets executed once both Promises were successful. Once configured
    // trackFaces will do the tracking work and draw the results.

    brfv5App.startCamera(_webcam, { width: 640, height: 480, frameRate: 60, facingMode: 'user' }).then(({ video }) => {
      // console.log('openCamera: done: ' + video.videoWidth + 'x' + video.videoHeight)
      _width = video.videoWidth
      _height = video.videoHeight
      _imageData.width = _width
      _imageData.height = _height
      configureTracking()
    }).catch((e) => {
      if (e) {
        console.error('Camera failed: ', e)
      }
    })

    brfv5App.loadBRFv5Model('68l', 8, '/js/vendor/brfv5/models/', _appId,
      // brfv5App.loadBRFv5Model('42l', 4, '/js/vendor/brfv5/models/', _appId,
      (progress) => { /*console.log(progress)*/
      }).then(({ brfv5Manager, brfv5Config }) => {
      // console.log('loadBRFv5Model: done')
      _brfv5Manager = brfv5Manager
      _brfv5Config = brfv5Config
      configureTracking()
    }).catch((e) => {
      console.error('BRFv5 failed: ', e)
    })

    const configureTracking = () => {
      // if(_brfv5Config !== null && _width > 0 && _modelsLoaded) {
      if (_brfv5Config !== null && _width > 0) {
        brfv5App.configureCameraInput(_brfv5Config, _width, _height)
        brfv5App.configureNumFacesToTrack(_brfv5Config, 1)
        brfv5App.configureFaceTracking(_brfv5Config, 3, true)

        // TODO: Restrict tilt
        _brfv5Config.faceTrackingConfig.enableFreeRotation = true
        // _brfv5Config.faceTrackingConfig.maxRotationZReset = 34.0
        _brfv5Config.faceTrackingConfig.maxRotationZReset = 999.0
        _brfv5Manager.configure(_brfv5Config)
        // update3DLayout(t3d, _width, _height)
        // _threejs.style.transform = 'scale(' + (1.0 / t3d.sceneScale) + ')'
        trackFaces()

        initThreeScene(scene, camera, renderer, controls, t3d)
      }
    }

    ctx.current = _imageData.getContext('2d')
    const trackFaces = () => {
      if (!_brfv5Manager || !_brfv5Config || !_imageData) {
        return
      }

      stats && stats.current && stats.current.begin()
      // const ctx = _imageData.getContext('2d')
      brfv5App.drawInputMirrored(ctx.current, _width, _height, _webcam)
      _brfv5Manager.update(ctx.current.getImageData(0, 0, _width, _height))
      let doDrawFaceDetection = !_brfv5Config.enableFaceTracking

      if (_brfv5Config.enableFaceTracking) {
        const sizeFactor = Math.min(_width, _height) / 480.0
        const faces = _brfv5Manager.getFaces()

        for (let i = 0; i < faces.length; i++) {
          const face = faces[i]

          if (face.state === brfv5App.brfv5.BRFv5State.FACE_TRACKING) {
            // Update the 3d model placement.
            // updateByFace(t3d, face, i, true)
            updateByFace(brfv5App, t3d, face, i, true)

            brfv5App.drawRect(ctx.current, _brfv5Config.faceTrackingConfig.regionOfInterest, '#00a0ff', 2.0)
            brfv5App.drawCircles(ctx.current, face.landmarks, '#00a0ff', 2.0 * sizeFactor)
            brfv5App.drawRect(ctx.current, face.bounds, '#ffffff', 1.0)
          } else {
            doDrawFaceDetection = true
            // updateByFace(t3d, face, i, false)
          }
        }
        // render3DScene(t3d)
      }

      if (doDrawFaceDetection) {
        // Only draw face detection results, if face detection was performed.
        brfv5App.drawRect(ctx.current, _brfv5Config.faceDetectionConfig.regionOfInterest, '#ffffff', 2.0)
        brfv5App.drawRects(ctx.current, _brfv5Manager.getDetectedRects(), '#00a0ff', 1.0)
        brfv5App.drawRects(ctx.current, _brfv5Manager.getMergedRects(), '#ffffff', 3.0)
      }

      if (renderer.current) {
        renderer.current.render(scene.current, camera.current)
        // controls.current.update()
      }

      stats.current.end()
      requestAnimationFrame(trackFaces)
    }

  }, [brfv5App])

  return (
    <div
      className={cx('app')}
    >
      <div className={cx('controls')}>
        <button onClick={handleClick}>Change Texture</button>
      </div>

      <canvas id="canvas" className={cx('canvas')}/>
      <video id="_webcam" style={{ display: 'none' }} playsInline/>
      <canvas id="_imageData" style={{ top: '0px', position: 'absolute', border: '1px solid red' }}/>
    </div>
  )
}

export default App
