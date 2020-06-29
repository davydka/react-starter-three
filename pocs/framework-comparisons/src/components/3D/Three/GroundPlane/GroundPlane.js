import React from 'react'
import { usePlane } from 'use-cannon'

const GroundPlane = (props) => {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }))
  return (
    <mesh ref={ref} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[15, 15]} />
      <meshStandardMaterial
        attach="material"
        color='#990099'
      />
    </mesh>
  )
}

export default GroundPlane
