import React, { PropsWithChildren } from 'react';
import classNames from 'classnames';
import styles from './Row.module.scss';

interface IProps extends PropsWithChildren<any> {
  tag?: keyof JSX.IntrinsicElements;
  className?: string;
}

const Row = ({ tag: Component = 'div', children, className }: IProps): JSX.Element => {
  const classes = classNames(styles.row, className);

  return <Component className={classes}>{children}</Component>;
};

export default Row;
