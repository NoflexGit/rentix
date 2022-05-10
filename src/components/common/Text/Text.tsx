import React, { HTMLAttributes } from "react";
import cn from "classnames";
import styles from "./Text.module.scss";

export interface IProps extends HTMLAttributes<HTMLSpanElement> {
  tag?: "span" | "p" | "div";
  size?: "small" | "medium" | "large";
  weight?: "regular" | "semi-bold" | "bold";
  color?: "primary" | "secondary" | "primary-inverted" | "secondary-inverted";
  className?: string;
  dataTestId?: string;
}

const Text: React.FC<IProps> = ({
  children,
  tag: Component = "span",
  size = "medium",
  weight = "regular",
  className,
  dataTestId,
  color,
}) => {
  const classes = cn(
    styles.component,
    className,
    styles[weight],
    styles[size],
    styles[color]
  );
  return (
    <Component className={classes} data-test-id={dataTestId}>
      {children}
    </Component>
  );
};

export default Text;
