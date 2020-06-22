import React, { useEffect, useRef } from 'react'
import classnames from 'classnames/bind'
import gsap, { Linear } from 'gsap'

import styles from './Blur.module.scss'

const cx = classnames.bind(styles)

const Blur = ({ as: Tag = 'span', children, ...rest }) => {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) {
      return
    }
    const { current } = ref
    gsap.to(current, {
      blur: 8,
      duration: 1,
      ease: Linear.easeNone,
      repeat: -1,
      repeatDelay: 0.4,
      startAt: {
        blur: 0,
      },
      yoyo: true,
    })
  }, [ref])

  return <Tag ref={ref} className={cx('blur')} {...rest}>{children}</Tag>
}

export default Blur
