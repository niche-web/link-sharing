import MainHeader from "@/components/layout/main-header";
import styles from "./home-layout.module.scss";
import SaveButton from "@/components/UI/save-button";
import Button from "@/components/UI/button";
import Container from "@/components/UI/container";
import MockupApp from "@/components/mockup/mockup-app";

export const metadata = {
  title: "Index Page",
  description: "Customize your links",
};

const HomeLayout = async ({ children }: { children: React.ReactNode }) => {
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
          <div className={styles["container__content-mockup_app"]}>
            <MockupApp />
          </div>
        </Container>

        <Container rounded classes={styles["container__content-main"]}>
          <article className={styles["container__content-main_article"]}>
            {children}
          </article>
          <section
            id="call-to-action"
            className={styles["container__content-cta"]}
          >
            <SaveButton />
          </section>
        </Container>
      </main>
    </>
  );
};

export default HomeLayout;
