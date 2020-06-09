import React, { useEffect } from 'react';
import classnames from 'classnames/bind';

import { gsapBlur } from 'lib/utils/gsap-blur'

import { Text, TYPES } from 'components/Text';

import styles from './App.module.scss';

const cx = classnames.bind(styles);

function App() {
  useEffect(() => {
    gsapBlur()
  }, [])

  return (
    <section className={cx('app')}>
      <Text as={TYPES.H1} type={TYPES.H1}>hello world</Text>
    </section>
  );
}

export default App;
