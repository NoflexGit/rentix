import React from 'react';
import UserInfo from '@/components/UserInfo/UserInfo';
import PageTitle from '@/components/PageTitle/PageTitle';
import styles from './ContentHeader.module.scss';

const ContentHeader = (): JSX.Element => {
  return (
    <div className={styles.contentHeader}>
      <PageTitle />
      <UserInfo />
    </div>
  );
};

export default ContentHeader;
