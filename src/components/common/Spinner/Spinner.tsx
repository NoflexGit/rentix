import React, { FC } from "react";
import cn from "classnames";
import styles from "./Spinner.module.scss";

interface IProps {
  size?: "small" | "medium" | "large";
  className?: string;
}

const Spinner: FC<IProps> = ({ size, className }) => {
  const classes = cn(styles.loader, className, styles[size]);
  return <span className={classes} />;
};

export default Spinner;
