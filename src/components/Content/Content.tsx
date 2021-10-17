import React from 'react';
import styles from './Content.module.scss';
import ContentHeader from '@/components/ContentHeader/ContentHeader';

interface IProps {
  children: React.ReactNode;
}

const Content = ({ children }: IProps): JSX.Element => {
  return (
    <div className={styles.content}>
      <ContentHeader />
      {children}
    </div>
  );
};

export default Content;