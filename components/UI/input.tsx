import { type ComponentPropsWithRef, useState, useRef } from "react";
import styles from "./input.module.scss";

export type InputProps = ComponentPropsWithRef<"input"> & {
  label?: string;
  classes?: string;
  errorMesage?: string;
  required?: boolean;
  onUpdate?: (value: string, validLink?: boolean) => void;
  validation?: (value: string) => boolean;
  initialValue?: string | null;
};

const Input = ({
  label,
  classes,
  errorMesage,
  validation,
  required,
  onUpdate,
  initialValue,
  ...otherProps
}: InputProps) => {
  const [didType, setDidType] = useState(false);
  const [error, setError] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [inputValue, setInputValue] = useState(initialValue || "");

  const showError = !isValid && didType;

  const validationHandler = (value) => {
    if (required && value.trim() === "") {
      setError("Can't be empty");
      setIsValid(false);
    } else if (validation && !validation(value)) {
      setError(errorMesage || "Invalid input");
      setIsValid(false);
    } else {
      setError("");
      setIsValid(true);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    setDidType(false);
    if (onUpdate) {
      onUpdate(value || "");
    }
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const value = event.target.value;
    validationHandler(value);
    setDidType(true);
  };

  return (
    <label className={`${styles.control} ${classes ? classes : ""}`}>
      {label}
      <input
        // ref={inputRef}
        className={`${styles.control__input} ${
          showError ? styles["control__input-error"] : ""
        }`}
        onBlur={handleBlur}
        onInput={() => setDidType(false)}
        onChange={handleChange}
        value={inputValue}
        {...otherProps}
      />
      {!showError && <span className={styles.control__error}>{error}</span>}
    </label>
  );
};

export default Input;
