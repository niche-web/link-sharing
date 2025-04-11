import Image from "next/image";
import emptyIllustration from "@/assets/images/illustration-empty.svg";
import styles from "./empty-illustration.module.scss";

const EmptyIllustration = ({ classes }: { classes?: string }) => {
  return (
    <figure className={`${styles["empty-illustration"]} ${classes}`}>
      <Image src={emptyIllustration} alt="Empty illustration" />
      <figcaption>
        <h2>Let&apos;s get you started</h2>{" "}
        <p>
          Use the “Add new link” button to get started. Once you have more than
          one link, you can reorder and edit them. We&apos;re here to help you
          share your profiles with everyone!
        </p>{" "}
      </figcaption>
    </figure>
  );
};

export default EmptyIllustration;
