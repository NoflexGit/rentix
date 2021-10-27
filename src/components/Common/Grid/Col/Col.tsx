import React, { PropsWithChildren } from 'react';
import classNames from 'classnames';
import styles from './Col.module.scss';

interface IProps extends PropsWithChildren<any> {
  tag?: keyof JSX.IntrinsicElements;
  className?: string;
  width?: string;
}

const Col = ({ tag: Component = 'div', children, className, width }: IProps): JSX.Element => {
  const classes = classNames(
    styles.component,
    {
      [styles[`width-${width}`]]: width,
    },
    className,
  );
  return <Component className={classes}>{children}</Component>;
};

export default Col;
