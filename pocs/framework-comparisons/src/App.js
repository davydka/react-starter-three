import React, { useEffect } from 'react';
import classnames from 'classnames/bind';
import gsap from 'gsap'

import { gsapBlur } from 'lib/utils/gsap-blur'

import { Text, TYPES } from 'components/Text';

import styles from './App.module.scss';

const cx = classnames.bind(styles);

function App() {
  useEffect(() => {
    gsapBlur()
    gsap.config({
      force3D: true,
    })
  }, [])

  return (
    <section className={cx('app')}>
      <Text as={TYPES.H1} type={TYPES.H1}>hello world</Text>
    </section>
  );
}

export default App;
