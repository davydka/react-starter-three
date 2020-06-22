import React from 'react';

import { Text, TYPES } from './';

export default {
    title: 'Typography'
}

export const textComponent = () => {
    return (
        <>
            <Text as="h1" type={TYPES.H1}>
                Heading 1
            </Text>
            <Text as="h2" type={TYPES.H2}>
                Heading 2
            </Text>
            <Text as="h3" type={TYPES.H3}>
                Heading 3
            </Text>
            <Text as="h4" type={TYPES.H4}>
                Heading 4
            </Text>
            <Text as="h5" type={TYPES.H5}>
                Heading 5
            </Text>
            <Text as="h6" type={TYPES.H6}>
                Heading 6
            </Text>
            <Text as="p" type={TYPES.B1}>
                Body 1
            </Text>
            <Text as="p" type={TYPES.B2}>
                Body 2
            </Text>
        </>
    )
}