"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

const NavLink = ({ href, children }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname.startsWith(href);
  href;
  return (
    <Link href={href} className={isActive ? "active" : undefined}>
      {children}
    </Link>
  );
};

export default NavLink;
