import React from 'react'
import { withKnobs, boolean } from '@storybook/addon-knobs'

import { Page } from 'components/layout/Page'
import { BScene } from 'components/3D/Babylon/Scene'

import { Wheel } from './'

import { darkGrey, white } from 'lib/theme/variables.module.scss'

export default {
  title: '3D/Babylon',
  decorators: [withKnobs],
}

export const wheel = () => {
  return (
    <Page style={{ backgroundColor: white, color: darkGrey }}>
      <BScene showGridHelper={boolean('showGridHelper', true)}>
        <Wheel/>
      </BScene>
    </Page>
  )
}

