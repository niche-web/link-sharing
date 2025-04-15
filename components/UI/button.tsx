import { type ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import NavLink from "./nav-link";
import styles from "./button.module.scss";
import { LinkProps } from "next/link";
import { log } from "console";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  href?: never;
};
export type CustomLinkProps = ComponentPropsWithoutRef<"a"> &
  LinkProps & {
    href: string;
  };

type ExtraStylingProps = {
  tab?: boolean;
  buttonstyle?: "primary" | "secondary";
};

type Props = (ButtonProps | CustomLinkProps) & ExtraStylingProps;

const isLinkProps = (
  props: Props
): props is CustomLinkProps & ExtraStylingProps => {
  return "href" in props;
};

const Button = (props: Props) => {
  // const { buttonstyle, className, href, children, ...otherProps } = props;
  const classStyle = styles[`button--${props.buttonstyle}`];
  if (isLinkProps(props)) {
    const { href, className, tab, buttonstyle, children, ...otherProps } =
      props;
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
  const { href, className, tab, buttonstyle, children, ...otherProps } = props;
  return (
    <button
      className={`${styles.button} ${classStyle} ${className}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
