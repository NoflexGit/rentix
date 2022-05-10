import React, { FC } from "react";
import classNames from "classnames";
import styles from "./Button.module.scss";
import Spinner from "../Spinner";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "small" | "medium" | "large";
  view?: "default" | "outlined";
  icon?: React.ReactNode;
  fluid?: boolean;
  loading?: boolean;
}

const Button: FC<IProps> = ({
  size = "medium",
  type = "button",
  view = "default",
  children,
  className,
  loading,
  fluid = false,
  disabled,
  icon,
  ...restProps
}) => {
  const classes = classNames(
    styles.button,
    className,
    styles[size],
    styles[view],
    {
      [`${styles.block}`]: fluid,
      [`${styles.disabled}`]: disabled,
    }
  );

  const isDisabled = loading || disabled;

  return (
    <button
      className={classes}
      type={type}
      disabled={isDisabled}
      {...restProps}
    >
      {loading ? (
        <Spinner />
      ) : (
        <>
          {icon && <span className={styles.icon}>{icon}</span>}
          {children}
        </>
      )}
    </button>
  );
};

export default Button;
