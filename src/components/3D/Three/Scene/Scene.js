import React from 'react'
import { Canvas } from 'react-three-fiber'
import { OrbitControls } from 'drei'

const Scene = ({ children }) => {
  return (
    <Canvas camera={{ position: [0, 2, 2] }}>
      <OrbitControls />
      <ambientLight/>
      <pointLight position={[10, 10, 10]}/>
      <gridHelper args={[30, 30, 30]} />
      {children}
    </Canvas>
  )
}

export default Scene
