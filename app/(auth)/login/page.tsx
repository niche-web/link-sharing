import Container from "@/components/UI/container";
import LoginForm from "@/components/login-form";
import styles from "./page.module.scss";

export const metadata = {
  title: "Login",
  description: "Login to your account",
};

const LoginPage = () => {
  return (
    <Container as="main" rounded padSize="large">
      <header className={styles.login__header}>
        <h1>Login</h1>
        <p>Add your details below to get back into the app</p>
      </header>

      <LoginForm />
    </Container>
  );
};

export default LoginPage;
