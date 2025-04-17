import InputAuth from "./input-auth";
import Button from "./UI/button";
import styles from "./signup-form.module.scss";
import Link from "next/link";
import EmailIcon from "@/assets/images/icon-email.svg?react";
import PasswordIcon from "@/assets/images/icon-password.svg?react";

const SignupForm = () => {
  return (
    <form action="" className={styles["signup-form"]}>
      <InputAuth
        label="Email address"
        icon={EmailIcon}
        placeholder="e.g. alex@email.com"
        errorMesage="Can't be empty"
      />
      <InputAuth
        label="Create password"
        icon={PasswordIcon}
        placeholder="At least 8 characters"
        errorMesage="Please check again"
      />
      <InputAuth
        label="Confirm password"
        icon={PasswordIcon}
        placeholder="At least 8 characters"
        errorMesage="Please check again"
      />
      <Button buttonstyle="primary" type="submit">
        Create new account
      </Button>
      <p className={styles["signup-form__footer"]}>
        Already have an account? <Link href="/login">Login</Link>{" "}
      </p>
    </form>
  );
};
export default SignupForm;
