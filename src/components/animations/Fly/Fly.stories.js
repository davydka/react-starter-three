import React from 'react'

import { Page } from 'components/layout/Page'
import { Text, TYPES as tTypes } from 'components/Text'

import { Fly } from './'

export default {
  title: 'Animations',
}

const containerStyles = {
  minHeight: '100vh',
}

export const fly = () => {
  return (
    <Page>
      <section style={containerStyles}>
        <Fly>
          <Text as={tTypes.SPAN} type={tTypes.H1}>
            Hello There
          </Text>
        </Fly>
      </section>
    </Page>
  )
}

