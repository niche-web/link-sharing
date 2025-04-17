import EmptyIllustration from "@/components/empty-illustration";
import Button from "@/components/UI/button";
import styles from "./links.module.scss";

const Links = () => {
  return (
    <section id="links">
      <Button buttonstyle="secondary" className={styles.links__button_add}>
        + Add new link
      </Button>
      <EmptyIllustration />
    </section>
  );
};

export default Links;
