import Container from "@/components/UI/container";
import SignupForm from "@/components/signup-form";
import styles from "./page.module.scss";

export const metadata = {
  title: "Signup",
  description: "Create a new account",
};

const SignupPage = () => {
  return (
    <Container as="main" rounded padSize="large">
      <header className={styles.signup__header}>
        <h1>Create account</h1>
        <p>Let&apos;s get you started sharing your links!</p>
      </header>

      <SignupForm />
    </Container>
  );
};

export default SignupPage;
