import React, { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
  className: string;
  size: number;
  isLast: boolean;
}

const SpaceItem = ({ children, size, className, isLast }: IProps): JSX.Element => {
  let style: React.CSSProperties = {};

  if (!isLast) {
    style = { marginBottom: size };
  }

  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
};

export default SpaceItem;
