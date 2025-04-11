"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnchorProps } from "./button";
import styles from "./nav-link.module.scss";

const NavLink = (props: AnchorProps) => {
  const pathname = usePathname();
  const isActive = pathname.startsWith(props.href);
  return (
    <Link
      href={props.href}
      className={
        isActive
          ? `${styles["nav-link--active"]} ${styles["nav-link"]} ${props.className}`
          : ` ${styles["nav-link"]} ${props.className}`
      }
    >
      {props.children}
    </Link>
  );
};

export default NavLink;
