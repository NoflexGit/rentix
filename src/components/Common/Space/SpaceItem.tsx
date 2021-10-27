import React, { FC } from 'react';

interface IProps {
  className: string;
  size: number;
  isLast: boolean;
}

const SpaceItem: FC<IProps> = ({ children, size, className, isLast }): JSX.Element => {
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
