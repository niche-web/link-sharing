"use client";

import EmptyIllustration from "@/components/empty-illustration";
import Button from "@/components/UI/button";
import SharingLink from "./sharing-link";
import styles from "./links.module.scss";
import { useState } from "react";

const Links = () => {
  const [linkCount, setLinkCount] = useState<number[]>([]);

  const clickHandler = () => {
    setLinkCount((prevCount) => [...prevCount, prevCount.length + 1]);
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
      {linkCount.length === 0 ? (
        <EmptyIllustration />
      ) : (
        <ul className={styles.links__list}>
          {linkCount.map((linkNumber, index) => (
            <li key={index}>
              <SharingLink number={linkNumber} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Links;
