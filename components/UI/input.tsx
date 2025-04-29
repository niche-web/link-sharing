import { type ComponentPropsWithRef, type ElementType } from "react";
import styles from "./input.module.scss";

export type InputProps = ComponentPropsWithRef<"input"> & {
  label?: string;
  classes?: string;
  errorMesage?: string;
  isValid?: boolean;
};

const Input = ({
  label,
  classes,
  errorMesage,
  isValid = true,
  ...otherProps
}: InputProps) => {
  return (
    <label className={styles.control}>
      {label}
      <input
        className={`${styles.control__input} ${
          !isValid ? styles["control__input-error"] : ""
        }`}
        {...otherProps}
      />
      {!isValid && <span className={styles.control__error}>{errorMesage}</span>}
    </label>
  );
};

export default Input;
