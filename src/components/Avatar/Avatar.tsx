import React from 'react';
import styles from './Avatar.module.scss';
import avatar from '@/assets/images/avatar.png';

const Avatar = (): JSX.Element => {
  return (
    <div className={styles.avatar}>
      <img src={avatar} alt="Maria" />
    </div>
  );
};

export default Avatar;
