import React from 'react'
import { Canvas } from 'react-three-fiber'
import { OrbitControls } from 'drei'

const TScene = ({ children }) => {
  return (
    <Canvas camera={{ position: [0, 6, 6] }}>
      <OrbitControls />
      <ambientLight/>
      <pointLight position={[10, 10, 10]}/>
      <gridHelper args={[30, 12]} />
      {children}
    </Canvas>
  )
}

export default TScene
