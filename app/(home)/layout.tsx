import MainHeader from "@/components/layout/main-header";
import styles from "./home-layout.module.scss";
import Button from "@/components/UI/button";
import Container from "@/components/UI/container";

export const metadata = {
  title: "Index Page",
  description: "Customize your links",
};

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <MainHeader classes={styles.container__header} />
      <main id="main-content" className={styles["container__content"]}>
        <Container
          rounded
          as="aside"
          classes={styles["container__content-mockup"]}
          id="mockup"
        >
          <div className={styles["container__content-mockup_app"]}></div>
        </Container>

        <Container rounded classes={styles["container__content-main"]}>
          <article className={styles["container__content-main_article"]}>
            {children}
          </article>
          <section
            id="call-to-action"
            className={styles["container__content-cta"]}
          >
            <Button buttonstyle="primary">Save</Button>
          </section>
        </Container>
      </main>
    </>
  );
};

export default HomeLayout;
