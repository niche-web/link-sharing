import { type ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import NavLink from "./nav-link";
import styles from "./button.module.scss";
import { LinkProps } from "next/link";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  href?: never;
};
export type CustomLinkProps = ComponentPropsWithoutRef<"a"> &
  LinkProps & {
    href: string;
  };

type ExtraStylingProps = {
  tab?: boolean;
  buttonStyle?: "primary" | "secondary";
};

type Props = (ButtonProps | CustomLinkProps) & ExtraStylingProps;

const isLinkProps = (props: Props): props is CustomLinkProps => {
  return "href" in props;
};

const Button = (props: Props) => {
  const classStyle = styles[`button--${props.buttonStyle}`];
  if (isLinkProps(props)) {
    const { buttonStyle, className, href, children, ...otherProps } = props;
    if (props.tab) {
      return (
        <NavLink
          href={href}
          className={`${styles.button} ${className} `}
          {...otherProps}
        >
          {children}
        </NavLink>
      );
    } else {
      return (
        <Link
          href={href}
          className={`${styles.button} ${classStyle} ${className}`}
          {...otherProps}
        >
          {children}
        </Link>
      );
    }
  }

  return (
    <button
      className={`${styles.button} ${classStyle} ${props.className}`}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;
