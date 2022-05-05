import React, { FC, useMemo } from "react";
import cx from "classnames";
import styles from "./Col.module.scss";

interface IResponsiveBreakpoints extends Record<string, any> {
  xs?: number | string;
  sm?: number | string;
  md?: number | string;
  lg?: number | string;
}

interface IProps {
  children?: React.ReactNode;
  tag?: keyof JSX.IntrinsicElements;
  className?: string;
  width?: IResponsiveBreakpoints | number | string;
  dataTestId?: string;
}

const createClassName = (props?: IResponsiveBreakpoints | string | number) => {
  const classNames: string[] = [];

  if (typeof props === "object") {
    Object.keys(props).forEach((name) => {
      const prop = props[name];

      if (!prop) return;

      classNames.push(styles[`width-${name}-${prop}`]);
    });
  } else {
    classNames.push(styles[`width-${props}`]);
  }

  return classNames;
};

const Col: FC<IProps> = ({
  tag: Component = "div",
  children,
  className,
  width,
  dataTestId,
}) => {
  const widthClasses = useMemo(() => createClassName(width), [width]);
  const classes = cx(styles.component, ...widthClasses, className);

  return (
    <Component className={classes} data-test-id={dataTestId}>
      {children}
    </Component>
  );
};

export default Col;
