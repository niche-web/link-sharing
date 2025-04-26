"use client";

import EmptyIllustration from "@/components/empty-illustration";
import Button from "@/components/UI/button";
import Links from "./links";
import styles from "./links-container.module.scss";
import useStore from "@/store/store";
import { platforms } from "@/utils/dummy-data";

const LinksContainer = () => {
  const [{ links }, dispatch] = useStore(true); // Replace 'false' with the appropriate value if needed

  const clickHandler = () => {
    const newLink = {
      id: Math.floor(Math.random() * 100) + Date.now(),
      platform: platforms[links.length],
    };
    dispatch("ADD_LINK", newLink);
  };
  return (
    <section id="links" className={styles.links}>
      <Button
        buttonstyle="secondary"
        className={styles.links__button_add}
        onClick={clickHandler}
      >
        + Add new link
      </Button>
      {links.length === 0 ? <EmptyIllustration /> : <Links />}
    </section>
  );
};

export default LinksContainer;
