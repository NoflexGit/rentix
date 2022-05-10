import React, { FC } from "react";
import cn from "classnames";
import styles from "./Avatar.module.scss";

interface IProps {
  image: string;
  name: string;
  size?: "small" | "medium" | "large";
  type?: "default" | "rounded";
  className?: string;
}

const Avatar: FC<IProps> = ({
  image,
  name,
  type = "default",
  className,
  size = "medium",
}) => {
  const classes = cn(styles.avatar, styles[type], styles[size], className);
  return (
    <div className={classes}>
      <img src={image} alt={name} />
    </div>
  );
};

export default Avatar;
