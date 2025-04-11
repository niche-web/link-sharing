"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CustomLinkProps } from "./button";
import styles from "./nav-link.module.scss";

const NavLink = ({ href, className, ...otherProps }: CustomLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname.startsWith(href);
  return (
    <Link
      href={href}
      className={
        isActive
          ? `${styles["nav-link--active"]} ${styles["nav-link"]} ${className}`
          : ` ${styles["nav-link"]} ${className}`
      }
      {...otherProps}
    >
      {otherProps.children}
    </Link>
  );
};

export default NavLink;
