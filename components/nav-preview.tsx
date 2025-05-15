import Button from "./UI/button";
import Container from "./UI/container";
import styles from "./nav-preview.module.scss";

const NavPreview = ({ classes }: { classes?: string }) => {
  return (
    <Container rounded classes={`${styles["nav-preview"]} ${classes}`}>
      <ul>
        <li>
          <Button href="/profile" buttonstyle="secondary">
            Back to Editor
          </Button>
        </li>
        <li>
          <Button buttonstyle="primary">Share Link</Button>
        </li>
      </ul>
    </Container>
  );
};

export default NavPreview;
