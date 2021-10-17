import React from 'react';
import styles from './UserInfo.module.scss';
import Avatar from '@/components/Avatar/Avatar';
import { ReactComponent as BellSvg } from '@/assets/images/icons/bell.svg';
import { ReactComponent as SettingsSvg } from '@/assets/images/icons/settings.svg';

const UserInfo = (): JSX.Element => {
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
        <span>Tenant</span>
      </div>
    </div>
  );
};

export default UserInfo;
