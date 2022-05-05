import React, { FC } from "react";

import styles from "./Input.module.scss";

interface IProps extends React.InputHTMLAttributes<any> {
  label?: string;
  block?: boolean;
}

const Input: FC<IProps> = ({ label, ...restProps }) => {
  return (
    <div className={styles.inputWrapper}>
      {label && (
        <label className={styles.inputLabel} htmlFor={restProps.name}>
          {label}
        </label>
      )}
      <input className={styles.input} {...restProps} />
    </div>
  );
};

export default Input;
