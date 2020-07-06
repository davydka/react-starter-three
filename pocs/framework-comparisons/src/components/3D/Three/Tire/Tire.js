import React from 'react'
import { useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const Tire = ({selectedTexture = null}, props) => {
  const { nodes, materials } = useLoader(GLTFLoader, '/assets/models/tire.gltf')

  return (
    <group {...props} dispose={null}>
        <mesh material={materials.RUBBER_TIRE} geometry={nodes.tire.children[0].geometry} />
        <mesh material={materials.RUBBER_DUST} geometry={nodes.tire.children[1].geometry} />
    </group>
  )
}

export default Tire
