import React, { FC } from "react";
import UserInfo from "../UserInfo";
import PageTitle from "../common/PageTitle";
import styles from "./ContentHeader.module.scss";

const ContentHeader: FC = () => {
  return (
    <div className={styles.contentHeader}>
      <PageTitle />
      <UserInfo />
    </div>
  );
};

export default ContentHeader;
