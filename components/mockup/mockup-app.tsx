"use client";

import Image from "next/image";
import useStore from "@/store/store";
import PlatformElem from "../platform";
import styles from "./mockup-app.module.scss";
import { slugify } from "@/utils/format";
import RightArrowIcon from "@/assets/images/icon-arrow-right.svg?react";
import { usePathname } from "next/navigation";

const MockupApp = ({
  linkLimit,
  profile = false,
}: {
  linkLimit?: number;
  profile?: boolean;
}) => {
  const { links } = useStore(true)[0];
  const pathname = usePathname();

  const isProfilePage = pathname === "/profile";

  return (
    <>
      {" "}
      <header className={styles["mockup-app__header"]}>
        <div></div>
        <h2></h2>
        <p></p>
      </header>
      <ul
        className={`${styles["mockup-app__platforms"]} ${
          isProfilePage ? styles["mockup-app__platforms-profile"] : ""
        }`}
      >
        {links.map((link, index) => {
          if (index < linkLimit) {
            return (
              <li
                className={
                  (link.platform !== "Frontend Mentor"
                    ? styles["mockup-app__item"]
                    : styles["mockup-app__item-frontendmentor"]) +
                  " " +
                  styles["color-" + slugify(link.platform, "colorSlug")]
                }
                key={index}
              >
                <PlatformElem
                  name={link.platform}
                  classes={styles["mockup-app__platform"]}
                />
                {link.platform === "Frontend Mentor" && (
                  <RightArrowIcon className={styles.right__arrow} />
                )}
              </li>
            );
          }
        })}
      </ul>
    </>
  );
};
export default MockupApp;
