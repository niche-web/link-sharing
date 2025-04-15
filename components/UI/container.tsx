import {
  type ElementType,
  type ReactNode,
  type ComponentPropsWithoutRef,
  type ComponentPropsWithRef,
} from "react";
import styles from "./container.module.scss";

type ContainerProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  dark?: boolean;
  padSize?: "small" | "large";
  rounded?: boolean;
  classes?: string;
} & ComponentPropsWithRef<T>;

const Container = function <C extends ElementType>({
  children,
  as,
  dark,
  padSize,
  rounded,
  classes,
  ...props
}: ContainerProps<C>) {
  const Component = as || "div";
  const darkClass = dark ? styles["container__background-dark"] : "";
  const padSizeClass = padSize ? styles[`container__padding-${padSize}`] : "";
  const roundedClass = rounded ? styles["container__rounded"] : "";
  return (
    <Component
      className={`${styles.container} ${darkClass} ${padSizeClass} ${roundedClass} ${classes}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Container;
