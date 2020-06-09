import React from 'react';
import classnames from 'classnames/bind';

import { Text, TYPES } from 'components/Text';

import styles from './App.module.scss';

const cx = classnames.bind(styles);

function App() {
  return (
    <section className={cx('app')}>
      <Text as={TYPES.H1} type={TYPES.H1}>hello world</Text>
    </section>
  );
}

export default App;
