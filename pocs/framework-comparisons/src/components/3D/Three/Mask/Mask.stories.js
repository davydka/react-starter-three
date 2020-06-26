import React from 'react'
import { withKnobs, boolean, radios } from '@storybook/addon-knobs'

import { Page } from 'components/layout/Page'
import { TScene } from 'components/3D/Three/Scene'

import { Mask } from './'

import { darkGrey, white } from 'lib/theme/variables.module.scss'

export default {
  title: '3D/Three',
  decorators: [withKnobs],
}

export const MaskStory = () => {

  const label = 'Textures';
  const options = {
    Default: 'null',
    Argyle: '0',
    Padded: '1',
    Knitted: '2',
  };
  const defaultValue = 'null';


  return (
    <Page style={{ backgroundColor: white, color: darkGrey }}>
      <TScene showGridHelper={boolean('showGridHelper', true)}>
        <Mask selectedTexture={radios(label, options, defaultValue)}/>
      </TScene>
    </Page>
  )
}
MaskStory.story = {
  name: 'Mask',
}

