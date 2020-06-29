import React from 'react'
import { withKnobs, boolean } from '@storybook/addon-knobs'

import { Page } from 'components/layout/Page'
import { TScene } from 'components/3D/Three/Scene'

import { GroundPlane } from './'

import { darkGrey, white } from 'lib/theme/variables.module.scss'

export default {
  title: '3D/Three',
  decorators: [withKnobs],
}

export const GroundPlaneStory = () => {
  return (
    <Page style={{ backgroundColor: white, color: darkGrey }}>
      <TScene showGridHelper={boolean('showGridHelper', true)}>
        <GroundPlane />
      </TScene>
    </Page>
  )
}
GroundPlaneStory.story = {
  name: 'GroundPlane',
}

