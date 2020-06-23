import React, { useEffect, useState } from 'react'
import * as THREE from 'three'
import { useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const Mask = ({selectedTexture = null}, props) => {
  const textures = []
  const [argyle_texture, argyle_normal, argyle_rough, argyle_height] = useLoader(THREE.TextureLoader, [
    '/assets/textures/Fabric_Argyle_001_SD/Fabric_Argyle_001_basecolor.jpg',
    '/assets/textures/Fabric_Argyle_001_SD/Fabric_Argyle_001_normal.jpg',
    '/assets/textures/Fabric_Argyle_001_SD/Fabric_Argyle_001_roughness.jpg',
    '/assets/textures/Fabric_Argyle_001_SD/Fabric_Argyle_001_height.png',
  ])

  argyle_texture.wrapS = THREE.RepeatWrapping
  argyle_texture.wrapT = THREE.RepeatWrapping
  argyle_texture.repeat.set( 20, 20 )

  argyle_normal.wrapS = THREE.RepeatWrapping
  argyle_normal.wrapT = THREE.RepeatWrapping
  argyle_normal.repeat.set( 20, 20 )

  argyle_rough.wrapS = THREE.RepeatWrapping
  argyle_rough.wrapT = THREE.RepeatWrapping
  argyle_rough.repeat.set( 20, 20 )

  argyle_height.wrapS = THREE.RepeatWrapping
  argyle_height.wrapT = THREE.RepeatWrapping
  argyle_height.repeat.set( 20, 20 )

  textures.push({
    map: argyle_texture,
    normal: argyle_normal,
    rough: argyle_rough,
    height: argyle_height
  })

  const [sci_texture, sci_normal, sci_rough, sci_height] = useLoader(THREE.TextureLoader, [
    '/assets/textures/Sci-Fi_Padded_Fabric_002_SD/Sci-Fi_Padded_Fabric_002_basecolor.jpg',
    '/assets/textures/Sci-Fi_Padded_Fabric_002_SD/Sci-Fi_Padded_Fabric_002_normal.jpg',
    '/assets/textures/Sci-Fi_Padded_Fabric_002_SD/Sci-Fi_Padded_Fabric_002_roughness.jpg',
    '/assets/textures/Sci-Fi_Padded_Fabric_002_SD/Sci-Fi_Padded_Fabric_002_height.png',
  ])

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

  const [fab_texture, fab_normal, fab_rough, fab_height] = useLoader(THREE.TextureLoader, [
    '/assets/textures/Fabric_Knited_002_SD/Fabric_Knitted_002_COLOR.jpg',
    '/assets/textures/Fabric_Knited_002_SD/Fabric_Knitted_002_NRM.jpg',
    '/assets/textures/Fabric_Knited_002_SD/Fabric_Knitted_002_ROUGH.jpg',
    '/assets/textures/Fabric_Knited_002_SD/Fabric_Knitted_002_DISP.png',
  ])

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

  const { nodes, materials } = useLoader(GLTFLoader, '/assets/models/mask.gltf')
  return (
    <group {...props} dispose={null}>
      {typeof selectedTexture !== 'number' && (
        <mesh material={materials['lambert1.001']} geometry={nodes.Mask.geometry} />
      )}
      {selectedTexture >= 0 && (
        <mesh geometry={nodes.Mask.geometry}>
          <meshStandardMaterial
            attach="material"
            side={THREE.DoubleSide}
            map={textures[selectedTexture].map}
            normalMap={textures[selectedTexture].normal}
            roughnessMap={textures[selectedTexture].rough}
            bumpMap={textures[selectedTexture].height}
          />
        </mesh>
      )}
    </group>
  )
}

export default Mask
