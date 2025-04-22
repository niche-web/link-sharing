import { type InputProps } from "@/components/input";
import { type ElementType } from "react";
import styles from "./input-icon.module.scss";

type InputAuthProps = InputProps & {
  icon?: ElementType;
};

const InputIcon = ({
  icon: Icon,
  label,
  classes,
  errorMesage,
  isValid = true,
  ...otherProps
}: InputAuthProps) => {
  return (
    <label className={styles.control}>
      <span
        className={`${styles.control__label} ${
          !isValid ? styles["control__label-error"] : ""
        }`}
      >
        {label}
      </span>
      <span className={styles.control__icon}>{Icon && <Icon />}</span>
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
export default InputIcon;
