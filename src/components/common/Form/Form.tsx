import React, { FC } from "react";

interface IProps extends Omit<React.FormHTMLAttributes<any>, "onSubmit"> {
  children: React.ReactNode;
  onSubmit: () => void;
}

const Form: FC<IProps> = ({ children, onSubmit, ...restProps }) => {
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (typeof onSubmit === "function") {
      onSubmit();
    }
  };

  return (
    <form onSubmit={handleSubmit} {...restProps}>
      {children}
    </form>
  );
};

export default Form;
