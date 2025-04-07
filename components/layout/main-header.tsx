import ArtLogo from "@/components/art-logo";
import Link from "next/link";
import NavLink from "@/components/UI/nav-link";

const MainHeader = () => {
  return (
    <header>
      <ArtLogo />
      <ul>
        <li>
          <NavLink href="/index">Links</NavLink>
        </li>
        <li>
          <NavLink href="/profile">Profile Details</NavLink>
        </li>
      </ul>
      <ul>
        <li>
          <Link href="/preview">Preview</Link>
        </li>
      </ul>
    </header>
  );
};

export default MainHeader;
