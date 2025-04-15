import emptyImage from "@/assets/images/illustration-empty.svg";
import styles from "./empty-illustration.module.scss";
import Image from "next/image";
import Container from "./UI/container";

const EmptyIllustration = ({ classes }: { classes?: string }) => {
  return (
    <Container
      as="figure"
      rounded
      dark
      classes={`${styles["empty-illustration"]} ${classes}`}
    >
      <Image
        src={emptyImage}
        alt="Empty illustration"
        className={styles["empty-illustration__image"]}
        width={250}
        height={161}
      />
      <figcaption>
        <h2>Let&apos;s get you started</h2>{" "}
        <p>
          Use the “Add new link” button to get started. Once you have more than
          one link, you can reorder and edit them. We&apos;re here to help you
          share your profiles with everyone!
        </p>{" "}
      </figcaption>
    </Container>
  );
};

export default EmptyIllustration;
