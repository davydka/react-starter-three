import React, { Suspense } from 'react'
import { Canvas } from 'react-three-fiber'
import { OrbitControls } from 'drei'


const TScene = ({ children = null, showGridHelper = false }) => {
  return (
    <Canvas camera={{ position: [0, 17, 17], fov: 45 }}>
      <OrbitControls/>
      <ambientLight intensity={0.75}/>
      <pointLight position={[10, 10, 10]} intensity={0.5}/>
      {(!children || showGridHelper) && <gridHelper args={[30, 12]}/>}
      <Suspense fallback={null}>
        {children}
      </Suspense>
    </Canvas>
  )
}

export default TScene
