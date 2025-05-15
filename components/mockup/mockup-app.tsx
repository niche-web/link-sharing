"use client";

import Image from "next/image";
import useStore from "@/store/store";
import PlatformElem from "../platform";
import styles from "./mockup-app.module.scss";
import { slugify } from "@/utils/format";
import RightArrowIcon from "@/assets/images/icon-arrow-right.svg?react";
import { usePathname } from "next/navigation";

const MockupApp = ({
  linkLimit = 5,
  preview = false,
}: {
  linkLimit?: number;
  preview?: boolean;
}) => {
  const { links, userDetails } = useStore(true)[0];
  const pathname = usePathname();

  const isProfilePage = pathname === "/profile";

  const initials = (
    userDetails?.firstName[0] + userDetails?.lastName[0] || ""
  )?.toUpperCase();
  const imageElem = <Image src={userDetails?.image} alt="user image" fill />;

  return (
    <>
      <header className={styles["mockup-app__header"]}>
        <div
          className={`${styles["mockup-app__image"]} ${
            preview ? styles["mockup-app__image-preview"] : ""
          }`}
        >
          {userDetails?.image ? (
            imageElem
          ) : (
            <div className={styles["mockup-app__initials"]}>{initials}</div>
          )}
        </div>
        <h2
          className={`${styles["mockup-app__name"]} ${
            preview ? styles["mockup-app__name-preview"] : ""
          }`}
        >{`${userDetails.firstName} ${userDetails.lastName}`}</h2>
        <p>{userDetails.email}</p>
      </header>
      <ul
        className={`${styles["mockup-app__platforms"]} ${
          isProfilePage ? styles["mockup-app__platforms-profile"] : ""
        } ${preview ? styles["mockup-app__platforms-preview"] : ""}`}
      >
        {links.map((link, index) => {
          if (index < linkLimit) {
            return (
              <li
                className={`${styles["mockup-app__item"]}
                  ${
                    link.platform === "Frontend Mentor"
                      ? styles["mockup-app__item-frontendmentor"]
                      : ""
                  }
                  ${styles["color-" + slugify(link.platform, "colorSlug")]} ${
                  preview ? styles["mockup-app__item-preview"] : ""
                }`}
                key={index}
              >
                <PlatformElem
                  name={link.platform}
                  classes={`${styles["mockup-app__platform"]} ${
                    preview ? styles["mockup-app__platform-preview"] : ""
                  }`}
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
