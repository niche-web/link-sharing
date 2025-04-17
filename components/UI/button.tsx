import { ElementType, type ComponentPropsWithoutRef } from "react";
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
  buttonstyle?: "primary" | "secondary";
  icon?: ElementType;
};

type Props = (ButtonProps | CustomLinkProps) & ExtraStylingProps;

const isLinkProps = (
  props: Props
): props is CustomLinkProps & ExtraStylingProps => {
  return "href" in props;
};

const Button = (props: Props) => {
  const classStyle = styles[`button--${props.buttonstyle}`];
  if (isLinkProps(props)) {
    const {
      href,
      className,
      tab,
      buttonstyle,
      icon: Icon,
      children,
      ...otherProps
    } = props;
    if (props.tab) {
      return (
        <NavLink
          href={href}
          className={`${styles.button} ${className} `}
          {...otherProps}
        >
          <span className={styles.button__icon}>{Icon && <Icon />}</span>
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
          <span className={styles.button__icon}>{Icon && <Icon />}</span>
          {children}
        </Link>
      );
    }
  }
  const {
    href,
    className,
    tab,
    buttonstyle,
    icon: Icon,
    children,
    ...otherProps
  } = props;
  return (
    <button
      className={`${styles.button} ${classStyle} ${className}`}
      {...otherProps}
    >
      <span className={styles.button__icon}>{Icon && <Icon />}</span>
      {children}
    </button>
  );
};

export default Button;
