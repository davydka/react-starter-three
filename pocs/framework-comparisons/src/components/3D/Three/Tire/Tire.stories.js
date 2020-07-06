import React from 'react'
import { withKnobs, boolean, radios } from '@storybook/addon-knobs'

import { Page } from 'components/layout/Page'
import { TScene } from 'components/3D/Three/Scene'

import { Tire } from './'

import { darkGrey, white } from 'lib/theme/variables.module.scss'

export default {
  title: '3D/Three',
  decorators: [withKnobs],
}

export const TireStory = () => {
  return (
    <Page style={{ backgroundColor: white, color: darkGrey }}>
      <TScene showGridHelper={boolean('showGridHelper', true)}>
        <Tire />
      </TScene>
    </Page>
  )
}
TireStory.story = {
  name: 'Tire',
}

