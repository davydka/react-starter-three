import React from 'react'

import { Page } from 'components/layout/Page'

import { ModelViewer } from './'

import { darkGrey, white } from 'lib/theme/variables.module.scss'

export default {
  title: '3D/ModelViewer',
}

export const LatticeModel = () => {
  return (
    <Page style={{ backgroundColor: white, color: darkGrey }}>
      <ModelViewer model={'/assets/models/groundLattice.gltf'}/>
    </Page>
  )
}

export const Mask = () => {
  return (
    <Page style={{ backgroundColor: white, color: darkGrey }}>
      <ModelViewer model={'/assets/models/mask.gltf'} cameraOrbit={`${(Math.PI / 2) * 180}rad ${(Math.PI / 2) / 1.6}rad 24m`}/>
    </Page>
  )
}

