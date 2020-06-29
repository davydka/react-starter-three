import React from 'react'
import { withKnobs, boolean } from '@storybook/addon-knobs'

import { Page } from 'components/layout/Page'
import { TScene } from 'components/3D/Three/Scene'
import { GroundPlane } from 'components/3D/Three/GroundPlane'

import { Cube } from './'

import { darkGrey, white } from 'lib/theme/variables.module.scss'

export default {
  title: '3D/Three',
  decorators: [withKnobs],
}

export const CubeStory = () => {
  return (
    <Page style={{ backgroundColor: white, color: darkGrey }}>
      <TScene showGridHelper={boolean('showGridHelper', true)}>
        <Cube />
      </TScene>
    </Page>
  )
}

CubeStory.story = {
  name: 'Cube',
}


export const CubeWithPlaneStory = () => {
  return (
    <Page style={{ backgroundColor: white, color: darkGrey }}>
      <TScene showGridHelper={boolean('showGridHelper', true)}>
        <Cube />
        <GroundPlane />
      </TScene>
    </Page>
  )
}

CubeWithPlaneStory.story = {
  name: 'Cube w/ GroundPlane',
}

