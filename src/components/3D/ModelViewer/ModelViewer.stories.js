import React from 'react'

import { Page } from 'components/layout/Page'

import { ModelViewer } from './'

import { darkGrey, white } from 'lib/theme/variables.module.scss'

export default {
  title: '3D',
}

export const modelViewer = () => {
  return (
    <Page style={{ backgroundColor: white, color: darkGrey }}>
      <ModelViewer/>
    </Page>
  )
}
