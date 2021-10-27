import React, { useCallback } from 'react';

interface IProps extends Omit<React.FormHTMLAttributes<any>, 'onSubmit'> {
  children: React.ReactNode;
  onSubmit: () => void;
}

const Form = ({ children, onSubmit, ...restProps }: IProps): JSX.Element => {
  const handleSubmit = useCallback(
    (e: React.SyntheticEvent) => {
      e.preventDefault();
      if (typeof onSubmit === 'function') {
        onSubmit();
      }
    },
    [onSubmit],
  );

  return (
    <form onSubmit={handleSubmit} {...restProps}>
      {children}
    </form>
  );
};

export default Form;
