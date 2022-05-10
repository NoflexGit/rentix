import React, {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ElementType,
  FC,
} from "react";
import cn from "classnames";
import styles from "./IconButton.module.scss";

interface IProps {
  size?: "small" | "medium" | "large";
  view?: "default" | "outlined";
  icon?: React.ReactNode;
  fluid?: boolean;
  href?: string;
  loading?: boolean;
  Component?: ElementType;
}

type AnchorButtonProps = IProps & AnchorHTMLAttributes<HTMLAnchorElement>;
type NativeButtonProps = IProps & ButtonHTMLAttributes<HTMLButtonElement>;

const IconButton: FC<AnchorButtonProps | NativeButtonProps> = ({
  size = "medium",
  view = "default",
  icon,
  className,
  fluid = false,
  href,
  loading,
  Component = href ? "a" : "button",
  ...restProps
}) => {
  const showLoader = loading;

  const componentProps = {
    className: cn(styles.button, className, styles[size], styles[view], {
      [`${styles.block}`]: fluid,
    }),
  };

  if (href) {
    const { target } = restProps as AnchorHTMLAttributes<HTMLAnchorElement>;
    const hrefProps = { [typeof Component === "string" ? "href" : "to"]: href };

    return (
      <Component
        rel={target === "_blank" ? "noreferrer noopener" : undefined}
        {...componentProps}
        {...(restProps as AnchorHTMLAttributes<HTMLAnchorElement>)}
        {...hrefProps}
      >
        {icon}
      </Component>
    );
  }

  const {
    disabled,
    type = "button",
    ...restButtonProps
  } = restProps as ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <Component
      {...componentProps}
      {...restButtonProps}
      type={type}
      disabled={disabled || showLoader}
    >
      {icon}
    </Component>
  );
};

export default IconButton;
