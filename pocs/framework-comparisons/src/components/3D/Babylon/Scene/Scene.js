import React from 'react'
import { Engine, Scene } from 'react-babylonjs'
import { Vector3, Color3 } from '@babylonjs/core'
import classnames from 'classnames/bind'

import styles from './Scene.module.scss'

const cx = classnames.bind(styles)


const BScene = ({ children = null, showGridHelper = false, hemisphereIntensity = 0.7 }) => {

  return (
    <div className={cx('container')}>
      <Engine antialias adaptToDeviceRatio canvasId="canvas">
        <Scene clearColor={new Color3(1.0, 1.0, 1.0)}>
          {/*https://doc.babylonjs.com/babylon101/cameras#constructing-an-arc-rotate-camera*/}
          <arcRotateCamera
            name="arcRotateCamera"
            alpha={Math.PI / 2}
            beta={(Math.PI / 2) / 2}
            radius={24}
            target={Vector3.Zero()}
            minZ={0.1}
            fov={(45 * Math.PI) / 180}
          />
          <hemisphericLight
            name="hemisphericLight"
            intensity={hemisphereIntensity}
            direction={new Vector3(0, 1, 1)}
          />
          {(!children || showGridHelper) && (
            <ground name="ground" width={30} height={30} subdivisions={12} wireframe={true}>
              <standardMaterial name='groundMaterial' wireframe={true}/>
            </ground>
          )}
          {children}
        </Scene>
      </Engine>
    </div>
  )
}

export default BScene
