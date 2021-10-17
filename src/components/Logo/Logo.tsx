import React from 'react';
import logo from '@/assets/images/logo.svg';
import styles from './Logo.module.scss';

const Logo = (): JSX.Element => {
  return (
    <div className={styles.logo}>
      <img src={logo} alt="Rentix" />
    </div>
  );
};

export default Logo;
