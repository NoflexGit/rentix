import React from 'react';
import styles from './ContentHeader.module.scss';
import UserInfo from '@/components/UserInfo/UserInfo';

const ContentHeader = (): JSX.Element => {
  return (
    <div className={styles.contentHeader}>
      <div className={styles.pageTitle}>Overview</div>
      <UserInfo />
    </div>
  );
};

export default ContentHeader;
