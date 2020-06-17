import React from 'react'

import { Page } from 'components/layout/Page'

import { BScene } from './'

import { darkGrey, white } from 'lib/theme/variables.module.scss'

export default {
  title: '3D/Babylon',
}

export const scene = () => {
  return (
    <Page style={{ backgroundColor: white, color: darkGrey }}>
      <BScene />
    </Page>
  )
}

