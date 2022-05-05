import React, { FC } from "react";
import styles from "./Content.module.scss";
import ContentHeader from "../ContentHeader";

interface IProps {
  children: React.ReactNode;
}

const Content: FC<IProps> = ({ children }) => {
  return (
    <div className={styles.content}>
      <ContentHeader />
      <div className={styles.wrapper}>{children}</div>
    </div>
  );
};

export default Content;
