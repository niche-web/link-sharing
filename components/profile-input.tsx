import { ComponentPropsWithoutRef } from "react";
import styles from "./profile-input.module.scss";

type ProfileInputProps = ComponentPropsWithoutRef<"input"> & {
  label?: string;
  classes?: string;
  errorMesage?: string;
  isValid?: boolean;
};

const ProfileInput = ({
  label,
  classes,
  errorMesage,
  isValid = true,
  ...otherProps
}: ProfileInputProps) => {
  return (
    <label className={styles["profile-input"]}>
      {label}
      <input {...otherProps} className={styles["profile-input__input"]} />
      {!isValid && (
        <span className={styles["profile-input__error"]}>{errorMesage}</span>
      )}
    </label>
  );
};

export default ProfileInput;
