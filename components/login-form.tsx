import InputAuth from "./input-auth";
import Button from "./UI/button";
import styles from "./login-form.module.scss";
import Link from "next/link";
import EmailIcon from "@/assets/images/icon-email.svg?react";
import PasswordIcon from "@/assets/images/icon-password.svg?react";

const LoginForm = () => {
  return (
    <form action="" className={styles["login-form"]}>
      <InputAuth
        label="Email address"
        icon={EmailIcon}
        placeholder="e.g. alex@email.com"
        errorMesage="Can't be empty"
      />
      <InputAuth
        label="Password"
        icon={PasswordIcon}
        placeholder="Enter your password"
        errorMesage="Please check again"
      />
      <Button buttonstyle="primary" type="submit">
        Login
      </Button>
      <p className={styles["login-form__footer"]}>
        Don&apos;t have an account? <Link href="/signup">Create account</Link>{" "}
      </p>
    </form>
  );
};
export default LoginForm;
