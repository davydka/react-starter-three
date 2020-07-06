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
      <ModelViewer exposure='0.1' model={'/assets/models/groundLattice.gltf'}/>
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

export const Wheel = () => {
  return (
    <Page style={{ backgroundColor: white, color: darkGrey }}>
      <ModelViewer model={'/assets/models/Wheel.gltf'} exposure='0.4' cameraOrbit={`${(Math.PI / 2) * 180}rad ${(Math.PI / 2) / 1.6}rad 24m`}/>
    </Page>
  )
}

export const Tire = () => {
  return (
    <Page style={{ backgroundColor: white, color: darkGrey }}>
      <ModelViewer model={'/assets/models/tire.gltf'} exposure='0.1' cameraOrbit={`${(Math.PI / 2) * 180}rad ${(Math.PI / 2) / 1.6}rad 24m`}/>
    </Page>
  )
}

