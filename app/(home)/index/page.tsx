import EmptyIllustration from "@/components/empty-illustration";
import Button from "@/components/UI/button";
import styles from "./page.module.scss";

const IndexPage = () => {
  return (
    <>
      <header>
        <h1>Customize your links</h1>
        <p>
          Add/edit/remove links below and then share all your profiles with the
          world!
        </p>
      </header>

      <section id="links">
        <Button buttonstyle="secondary" className={styles.index__button_add}>
          + Add new link
        </Button>
        <EmptyIllustration />
      </section>
    </>
  );
};

export default IndexPage;
