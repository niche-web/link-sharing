import Image from "next/image";
import logo from "@/assets/images/logo-devlinks-large.svg";
import styles from "./auth-layout.module.scss";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.auth__container}>
      <div className={styles.auth__content}>
        <header className={styles.auth__header}>
          <Image src={logo} alt="Devlinks logo" width={183} height={40} />
        </header>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
