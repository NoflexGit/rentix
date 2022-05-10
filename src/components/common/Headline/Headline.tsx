import React, { HTMLAttributes } from "react";
import cn from "classnames";
import styles from "./Headline.module.scss";

export interface IProps extends HTMLAttributes<HTMLHeadingElement> {
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div";
  size?: "small" | "large";
  weight?: "regular" | "bold";
  className?: string;
  dataTestId?: string;
}

const Headline: React.FC<IProps> = ({
  children,
  tag: Component = "div",
  size = "large",
  weight = "bold",
  className,
  dataTestId,
}) => {
  const classes = cn(styles.component, className, styles[weight], styles[size]);
  return (
    <Component className={classes} data-test-id={dataTestId}>
      {children}
    </Component>
  );
};

export default Headline;
