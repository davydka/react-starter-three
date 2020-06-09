import React from 'react'

import { Page } from 'components/layout/Page'
import { Text, TYPES as tTypes } from 'components/Text'

import { Blur } from './'

export default {
  title: 'Animations',
}

export const blur = () => (
  <Page>
    <div style={{
      position: 'fixed',
      left: '50%',
      transform: 'translateX(-50%)',
      top: '25%',
    }}>
      <Blur>
        <Text as={tTypes.DIV} type={tTypes.H1}>
          Hello There
        </Text>
      </Blur>
    </div>
  </Page>
)
