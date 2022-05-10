import React, { FC } from "react";
import Logo from "../Logo";
import SidebarMenu from "../SidebarMenu";
import Button from "../common/Button";
import styles from "./Sidebar.module.scss";
import useAppDispatch from "../../hooks/useAppDispatch";
import { logoutUser } from "../../store/user/slice";

const Sidebar: FC = () => {
  const dispatch = useAppDispatch();

  const handleLogoutButton = () => {
    dispatch(logoutUser());
  };

  return (
    <div className={styles.sidebar}>
      <Logo className={styles.sidebarLogo} />
      <SidebarMenu />
      <div className={styles.logout}>
        <Button size="small" onClick={handleLogoutButton} fluid>
          Sign out
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
