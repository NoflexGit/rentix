import React, { Children, useMemo, FC } from 'react';
import SpaceItem from './SpaceItem';
import classNames from 'classnames';
import styles from './Space.module.scss';

type TSizes = 'small' | 'medium' | 'large';

interface IProps {
  size?: TSizes | number;
  className?: string;
  fluid?: boolean;
}

const sizes: { [key in TSizes]: number } = {
  small: 15,
  medium: 25,
  large: 35,
};

const getNumberSize = (size: TSizes | number) => {
  return typeof size === 'string' ? sizes[size] : size || 0;
};

const Space: FC<IProps> = ({ size = 'medium', className, children, fluid }): JSX.Element => {
  const containerClassNames = classNames(styles.container, className, {
    [styles.containerFluid]: fluid,
  });

  const itemClassName = classNames(styles.spaceItem, {
    [styles.itemFluid]: fluid,
  });

  const itemSize = useMemo(() => getNumberSize(size), [size]);

  const childNodes = Children.toArray(children);

  const nodes = useMemo(() => {
    return childNodes.map((node, i) => (
      <SpaceItem
        isLast={i === childNodes.length - 1}
        size={itemSize}
        key={`${itemClassName}-${i}`}
        className={itemClassName}>
        {node}
      </SpaceItem>
    ));
  }, [itemClassName, childNodes, itemSize]);

  return <div className={containerClassNames}>{nodes}</div>;
};

export default Space;
