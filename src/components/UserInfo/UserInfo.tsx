import React, { FC } from "react";
import { capitalize } from "lodash";
import Avatar from "../common/Avatar";
import useAppSelector from "../../hooks/useAppSelector";
import { ReactComponent as BellSvg } from "../../assets/images/icons/bell.svg";

import styles from "./UserInfo.module.scss";

const UserInfo: FC = () => {
  const { firstName, role, image } = useAppSelector(({ user }) => user);

  return (
    <div className={styles.userInfo}>
      <button className={styles.notificationsBtn}>
        <BellSvg />
      </button>
      <Avatar image={image} name={firstName} size="small" />
      <div className={styles.text}>
        <div className={styles.name}>{firstName}</div>
        <span>{capitalize(role as string)}</span>
      </div>
    </div>
  );
};

export default UserInfo;
