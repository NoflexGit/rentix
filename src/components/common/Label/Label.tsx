import React, { FC } from "react";
import cn from "classnames";
import styles from "./Label.module.scss";

interface IProps {
  color?: string;
  text: string;
  size?: "small" | "medium" | "large";
  className?: string;
}

const Label: FC<IProps> = ({
  color = "blue",
  text,
  className,
  size = "medium",
}) => {
  const classes = cn(styles.label, styles[color], styles[size], className);
  return <span className={classes}>{text}</span>;
};

export default Label;
