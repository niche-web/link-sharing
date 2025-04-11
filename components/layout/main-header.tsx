import ArtLogo from "@/components/art-logo";
import Button from "@/components/UI/button";
import styles from "./main-header.module.scss";

const MainHeader = ({ classes }: { classes?: string }) => {
  return (
    <header className={`${styles["main-header"]} ${classes}`}>
      <ArtLogo />
      <ul className={styles["main-header__middle"]}>
        <li>
          <Button href="/index" tab>
            Links
          </Button>
        </li>
        <li>
          <Button href="/profile" tab>
            Profile Details
          </Button>
        </li>
      </ul>
      <ul>
        <li>
          <Button href="/preview" buttonStyle="secondary">
            Preview
          </Button>
        </li>
      </ul>
    </header>
  );
};

export default MainHeader;
