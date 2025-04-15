import ArtLogo from "@/components/art-logo";
import Button from "@/components/UI/button";
import styles from "./main-header.module.scss";
import LinkIcon from "@/assets/images/icon-links-header.svg?react";
import ProfileIcon from "@/assets/images/icon-profile-details-header.svg?react";
import Container from "@/components/UI/container";

const MainHeader = ({ classes }: { classes?: string }) => {
  return (
    <Container
      as="header"
      classes={`${styles["main-header"]} ${classes}`}
      rounded
    >
      <ArtLogo />
      <ul className={styles["main-header__middle"]}>
        <li>
          <Button
            href="/index"
            tab={true}
            className={styles["main-header__index-link"]}
          >
            <LinkIcon />
            Links
          </Button>
        </li>
        <li>
          <Button
            href="/profile"
            tab={true}
            className={styles["main-header__index-link"]}
          >
            <ProfileIcon />
            Profile Details
          </Button>
        </li>
      </ul>
      <ul>
        <li>
          <Button href="/preview" buttonstyle="secondary">
            Preview
          </Button>
        </li>
      </ul>
    </Container>
  );
};

export default MainHeader;
