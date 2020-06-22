import React, { useEffect, useRef } from 'react'
import classnames from 'classnames/bind'
import gsap, { Linear } from 'gsap'

import styles from './Fly.module.scss'

const cx = classnames.bind(styles)

const Fly = ({children}) => {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) {
      return
    }
    const { current } = ref
    gsap.to(current, {
      x: `${document.body.clientWidth / 2}px`,
      y: `${document.body.clientHeight / 2}px`,
      duration: 2,
      ease: Linear.easeNone,
      repeat: -1,
      repeatDelay: 0.4,
      startAt: {
        x: `-100px`,
        y: `-100px`,
      },
      yoyo: true,
    })
  }, [ref])

  return <div ref={ref} className={cx('fly')}>{children}</div>
}

export default Fly
