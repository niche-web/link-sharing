"use client";

import { type InputProps } from "@/components/UI/input";
import { type ElementType, useState, useEffect, useCallback } from "react";
import styles from "./input-icon.module.scss";

type InputAuthProps = InputProps & {
  icon?: ElementType;
};

const InputIcon = ({
  icon: Icon,
  label,
  classes,
  errorMesage,
  initialValue,
  onUpdate,
  required,
  pattern,
  ...otherProps
}: InputAuthProps & {
  onUpdate: (value: string, validLink: boolean) => void;
}) => {
  const [didType, setDidType] = useState(false);
  const [error, setError] = useState("");
  const [isValid, setIsValid] = useState(true);

  const validationHandler = useCallback(
    (value: string) => {
      if (required && value.trim() === "") {
        setError("Can't be empty");
        setIsValid(false);
        return;
      }
      if (pattern) {
        const regex = new RegExp(pattern);
        if (!regex.test(value)) {
          setError(errorMesage || "Please check the URL");
          setIsValid(false);
          return;
        }
      }
      setError("");
      setIsValid(true);
      return;
    },
    [required, pattern, errorMesage]
  );

  useEffect(() => {
    if (initialValue) {
      validationHandler(initialValue);
    }
  }, [initialValue, validationHandler]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    validationHandler(value);
    setDidType(false);
    if (onUpdate) {
      onUpdate(value || "", isValid);
    }
  };

  const handleBlur = () => {
    setDidType(true);
  };

  return (
    <label className={styles.control}>
      <span className={styles.control__label}>{label}</span>
      <span className={styles.control__icon}>{Icon && <Icon />}</span>
      <input
        className={`${styles.control__input} ${
          !isValid ? styles["control__input-error"] : ""
        }`}
        onBlur={handleBlur}
        onChange={handleChange}
        value={initialValue}
        {...otherProps}
      />

      {!isValid && didType && (
        <span className={styles.control__error}>{errorMesage || error}</span>
      )}
    </label>
  );
};
export default InputIcon;
