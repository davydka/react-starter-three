import React from 'react'
import '@google/model-viewer/dist/model-viewer'
import classnames from 'classnames/bind'

import styles from './ModelViewer.module.scss'

import model from 'assets/models/groundLattice.gltf'

const cx = classnames.bind(styles)

const ModelViewer = () => {
  return (
    <model-viewer
      src={model}
      alt='A 3D model'
      camera-controls
      interaction-prompt='none'
      field-of-view='45deg'
      camera-orbit={`${-Math.PI / 2}rad ${(Math.PI / 2) / 2}rad 24m`}
      camera-target='0 0 0'
      class={cx('modelViewer')} // note: model-viewer does not respect React className
    />
  )
}

export default ModelViewer
