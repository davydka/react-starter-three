import React, {forwardRef} from 'react';
import classnames from 'classnames/bind';

import styles from './Page.module.scss';

const cx = classnames.bind(styles);

const Page = forwardRef(({children, ...rest}, ref) => {
    return (
        <div ref={ref} className={cx('page')} {...rest}>
            {children}
        </div>
    );
});

export default Page;
