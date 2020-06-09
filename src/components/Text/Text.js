import React, { forwardRef } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import styles from './Text.module.scss'
import { TYPES } from './constants'

const cx = classnames.bind(styles);

const Text = forwardRef(({ as: Tag = 'span', children, className, type = TYPES.B1, ...rest }, ref) => (
    <Tag ref={ref} className={cx(styles[type], className)} {...rest}>
        {children}
    </Tag>
))

Text.displayName = 'Text'

Text.propTypes = {
    as: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
    className: PropTypes.string,
    type: PropTypes.oneOf(TYPES),
}

export default Text
