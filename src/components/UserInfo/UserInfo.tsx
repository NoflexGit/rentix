import React, { FC } from "react";
import styles from "./UserInfo.module.scss";
import Avatar from "../Avatar";
import { ReactComponent as BellSvg } from "../../assets/images/icons/bell.svg";
import { ReactComponent as SettingsSvg } from "../../assets/images/icons/settings.svg";

const UserInfo: FC = () => {
  return (
    <div className={styles.userInfo}>
      <button className={styles.notificationsBtn}>
        <BellSvg />
      </button>
      <button className={styles.settingsBtn}>
        <SettingsSvg />
      </button>
      <Avatar />
      <div className={styles.text}>
        <div className={styles.name}>Maria</div>
        <span>Landlord</span>
      </div>
    </div>
  );
};

export default UserInfo;
