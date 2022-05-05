import React, { FC } from "react";
import classNames from "classnames";
import styles from "./Button.module.scss";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "small" | "medium" | "large";
  view?: "default" | "outlined";
  fluid?: boolean;
}

const Button: FC<IProps> = ({
  size = "medium",
  type = "button",
  view = "default",
  children,
  className,
  fluid = false,
  onClick,
}) => {
  const classes = classNames(
    styles.button,
    className,
    styles[size],
    styles[view],
    {
      [`${styles.block}`]: fluid,
    }
  );

  return (
    <button className={classes} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
