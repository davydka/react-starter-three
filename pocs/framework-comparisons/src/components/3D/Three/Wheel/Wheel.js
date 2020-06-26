import React, { useRef } from 'react'
import { useFrame, useLoader } from 'react-three-fiber'
import { useBox, usePlane } from 'use-cannon'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const Plane = (props) => {
  const [ref] = usePlane(() => ({ ...props }))
  return (
    <mesh ref={ref} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[15, 15]}/>
      <meshStandardMaterial
        attach="material"
        color='#990099'
      />
    </mesh>
  )
}

const Cube = (props) => {
  const [ref] = useBox(() => ({ mass: 1, position: [2, 5, 0], ...props }))
  return (
    <mesh ref={ref}>
      <boxBufferGeometry attach="geometry"/>
      <meshStandardMaterial
        attach="material"
        color='#009900'
      />
    </mesh>
  )
}

const Collection = ({nodes}, props) => {
  const wheelNodes = Object.keys(nodes).reduce((a, node, index) => {
    if(nodes[node].name.includes('Plane') || nodes[node].name.includes('Wheel') || nodes[node].name.includes('Text')) {
      nodes[node].position.set(nodes[node].position.x, nodes[node].position.y - 5, nodes[node].position.z)
      a.push(<mesh key={node} {...nodes[node]} />)
    }
    return a
  }, [])

  const velocity = useRef(10 + (Math.random() * 2))
  const [collectionRef, collectionApi] = useBox(() => ({
    mass: .5 + (Math.random() * .5),
    args: [
      1, 1, 1,
    ],
    position: [0, 5, 0],
    type: 'Kinematic',
  }))

  useFrame(() => {
    if (!collectionApi) {
      return
    }
    if (velocity.current <= 0) {
      collectionApi.angularVelocity.set(0, 0, 0)
      return
    }
    velocity.current = velocity.current - 0.02
    collectionApi.angularVelocity.set(0, 0, velocity.current)
  })

  return (
    <group ref={collectionRef} {...props}>
      {wheelNodes}
    </group>
  )
}

const Wheel = (props) => {
  const { nodes, materials } = useLoader(GLTFLoader, '/assets/models/wheel.gltf')
  console.log(nodes)

  return (
    <>
      <group {...props} dispose={null}>
        <mesh {...nodes.Pointer} />
        <Collection nodes={nodes} materials={materials} />
        {/*<Plane rotation={[-Math.PI / 2, 0, 0]}/>*/}
      </group>
    </>
  )
}

export default Wheel
