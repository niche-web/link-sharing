import Container from "./UI/container";
import InputIcon from "./input-icon";
import LinkIcon from "@/assets/images/icon-link.svg?react";
import DragDropIcon from "@/assets/images/icon-drag-and-drop.svg?react";
import Select from "./custom-select/custom-select";
import styles from "./sharing-link.module.scss";

type SharingLinkProps = {
  number: number;
};

const SharingLink = ({ number }: SharingLinkProps) => {
  return (
    <Container
      as="form"
      rounded
      dark
      padSize="small"
      classes={styles["sharing-link"]}
    >
      <div className={styles["sharing-link__header"]}>
        <h2 className={styles["sharing-link__title"]}>
          <span className={styles["sharing-link__title-icon"]}>
            <DragDropIcon />
          </span>
          <span>Link #{number}</span>
        </h2>
        <button type="button" className={styles["sharing-link__remove-button"]}>
          Remove
        </button>
      </div>
      <Select defaultPlatformIndex={number} />
      <InputIcon
        type="text"
        placeholder="https://example.com"
        icon={LinkIcon}
        label="Link"
        value="https://example.com"
        readOnly
      />
    </Container>
  );
};
export default SharingLink;
