import React from 'react'
import { useBox } from 'use-cannon'

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

export default Cube
