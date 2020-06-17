import React, { useEffect, useRef } from 'react'
import { Engine, Scene } from 'react-babylonjs'
import { Vector3, Color3 } from '@babylonjs/core'
import classnames from 'classnames/bind'

import styles from './Scene.module.scss'

const cx = classnames.bind(styles)


const BScene = () => {

  return (
    <div className={cx('container')}>
      <Engine canvasId="canvas">
        <Scene clearColor={new Color3(1.0, 1.0, 1.0)}>
          <arcRotateCamera
            name="camera1"
            alpha={-Math.PI / 2}
            beta={(0.5 + (Math.PI / 6))}
            radius={16}
            target={Vector3.Zero()}
            minZ={0.1}
            // lowerRadiusLimit={8} upperRadiusLimit={20} upperBetaLimit={Math.PI / 2}
            // fov={2.0944}
          />
          <hemisphericLight
            name="light1"
            intensity={0.7}
            direction={Vector3.Up()}
          />
          <ground name="ground1" width={30} height={30} subdivisions={12} wireframe={true}>
            <standardMaterial name='starMaterial' wireframe={true} />
          </ground>
        </Scene>
      </Engine>
    </div>
  )
}

export default BScene
