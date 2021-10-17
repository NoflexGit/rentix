import React from 'react';
import styles from './Sidebar.module.scss';
import Logo from '@/components/Logo/Logo';
import SidebarMenu from '@/components/SidebarMenu/SidebarMenu';
import Button from '@/components/Button/Button';

const Sidebar = (): JSX.Element => {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <SidebarMenu />
      <div className={styles.logout}>
        <Button size="small" block>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
