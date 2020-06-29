import React, { Suspense } from 'react'
import { Canvas } from 'react-three-fiber'
import { Physics } from 'use-cannon'
import { OrbitControls } from 'drei'

const TScene = ({ children = null, showGridHelper = false }) => {
  return (
    <Canvas invalidateFrameloop camera={{ position: [0, 17, 17], fov: 45 }}>
      <Physics gravity={[0, -10, 0]}>
        <OrbitControls/>
        <ambientLight intensity={0.75}/>
        <pointLight position={[10, 10, 10]} intensity={0.5}/>
        {(!children || showGridHelper) && <gridHelper args={[30, 12]}/>}
        <Suspense fallback={null}>
          {children}
        </Suspense>
      </Physics>
    </Canvas>
  )
}

export default TScene
