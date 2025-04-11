import { type ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import NavLink from "./nav-link";
import styles from "./button.module.scss";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  href: never;
};
export type AnchorProps = ComponentPropsWithoutRef<"a"> & {
  href: string;
};
type ExtraStylingProps = {
  tab?: boolean;
  buttonStyle?: "primary" | "secondary";
};

type Props = (ButtonProps | AnchorProps) & ExtraStylingProps;

const isAnchorProps = (
  props: ButtonProps | AnchorProps
): props is AnchorProps => {
  return "href" in props;
};

const Button = (props: Props) => {
  if (isAnchorProps(props))
    if (props.tab) {
      return (
        <NavLink
          href={props.href}
          className={`${styles.button} ${props.className} `}
          {...props}
        >
          {props.children}
        </NavLink>
      );
    } else {
      return <Link {...props}>{props.children}</Link>;
    }

  return <button {...props}>{props.children}</button>;
};

export default Button;
