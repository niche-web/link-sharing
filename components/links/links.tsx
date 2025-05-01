"use client";

import useStore from "@/store/store";
import SharingLink from "./sharing-link";
import styles from "./links.module.scss";
import LinkWrapper from "./link-wrapper";

const Links = () => {
  const { links } = useStore(true)[0];

  return (
    <ul className={styles.links}>
      {links.map((link, index) => (
        <LinkWrapper key={index} index={index}>
          <SharingLink link={link} index={index} key={index} id={link.id} />
        </LinkWrapper>
      ))}
    </ul>
  );
};
export default Links;
