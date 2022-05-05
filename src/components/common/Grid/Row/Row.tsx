import React, { FC } from "react";
import classNames from "classnames";
import styles from "./Row.module.scss";

interface IProps {
  children?: React.ReactNode;
  tag?: keyof JSX.IntrinsicElements;
  className?: string;
  dataTestId?: string;
}

const Row: FC<IProps> = ({
  tag: Component = "div",
  children,
  className,
  dataTestId,
}) => {
  const classes = classNames(styles.row, className);

  return (
    <Component className={classes} data-test-id={dataTestId}>
      {children}
    </Component>
  );
};

export default Row;
