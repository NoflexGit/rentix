import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '@/components/Logo/Logo';
import SidebarMenu from '@/components/SidebarMenu/SidebarMenu';
import Button from '@/components/Button/Button';
import styles from './Sidebar.module.scss';

const Sidebar = (): JSX.Element => {
  const navigate = useNavigate();

  const logout = useCallback(() => {
    navigate('../login');
  }, [navigate]);

  return (
    <div className={styles.sidebar}>
      <Logo className={styles.sidebarLogo} />
      <SidebarMenu />
      <div className={styles.logout}>
        <Button size="small" onClick={logout} fluid>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
