import React, { FC } from "react";
import classNames from "classnames";
import logo from "../../assets/images/logo.svg";
import styles from "./Logo.module.scss";

interface IProps {
  className?: string;
}

const Logo: FC<IProps> = ({ className }) => {
  const logoClassNames = classNames(styles.logo, className);

  return (
    <div className={logoClassNames}>
      <img src={logo} alt="Rentix" />
    </div>
  );
};

export default Logo;
