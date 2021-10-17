import React from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'medium' | 'large';
  loading?: boolean;
  block?: boolean;
}

const Button = ({
  size = 'medium',
  type = 'button',
  children,
  className,
  block = false,
}: IProps): JSX.Element => {
  const classes = classNames(styles.button, className, styles[size], {
    [`${styles.block}`]: block,
  });

  console.log(classes);
  return (
    <button className={classes} type={type}>
      {children}
    </button>
  );
};

export default Button;
