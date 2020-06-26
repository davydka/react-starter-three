import React, { Suspense } from 'react'
import { Canvas } from 'react-three-fiber'
import { Physics, useBox, usePlane } from 'use-cannon'
import { OrbitControls } from 'drei'

const Plane = (props) => {
  const [ref] = usePlane(() => ({ ...props }))
  return (
    <mesh ref={ref} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[15, 15]}/>
      {/*<shadowMaterial attach="material" color="#171717" />*/}
      <meshStandardMaterial
        attach="material"
        color='#990099'
      />
    </mesh>
  )
}

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
        {/*<Plane rotation={[-Math.PI / 2, 0, 0]}/>*/}
      </Physics>
    </Canvas>
  )
}

export default TScene
