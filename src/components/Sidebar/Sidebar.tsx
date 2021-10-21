import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '@/components/Logo/Logo';
import SidebarMenu from '@/components/SidebarMenu/SidebarMenu';
import Button from '@/components/Button/Button';
import styles from './Sidebar.module.scss';
import useAppDispatch from '@/hooks/useAppDispatch';
import { logout } from '@/store/AuthSlice';

const Sidebar = (): JSX.Element => {
  const dispatch = useAppDispatch();
  // const navigate = useNavigate();

  const handleLogoutButton = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  return (
    <div className={styles.sidebar}>
      <Logo className={styles.sidebarLogo} />
      <SidebarMenu />
      <div className={styles.logout}>
        <Button size="small" onClick={handleLogoutButton} fluid>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
