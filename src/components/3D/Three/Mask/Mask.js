import React from 'react'
import { useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const Mask = (props) => {
  const { nodes, materials } = useLoader(GLTFLoader, '/assets/models/mask.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh material={materials['lambert1.001']} geometry={nodes.Mask.geometry} />
    </group>
  )
}

export default Mask
