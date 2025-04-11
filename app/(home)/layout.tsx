import MainHeader from "@/components/layout/main-header";
import styles from "./home-layout.module.scss";
import Image from "next/image";
import phoneMockup from "@/assets/images/illustration-phone-mockup.svg";

export const metadata = {
  title: "Index Page",
  description: "Customize your links",
};

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <MainHeader classes={styles.container__header} />
      <main className={styles.container__content}>
        <section id="mockup" className={styles["container__content-mockup"]}>
          <div></div>
        </section>
        <section
          id="main-content"
          className={styles["container__content-main"]}
        >
          {children}
        </section>
      </main>
    </>
  );
};

export default HomeLayout;
