import Container from "./UI/container";
import InputIcon from "./input-icon";
import LinkIcon from "@/assets/images/icon-link.svg?react";
import DragDropIcon from "@/assets/images/icon-drag-and-drop.svg?react";
import Select from "./custom-select/custom-select";
import styles from "./sharing-link.module.scss";
import { platformsUrlSlug } from "@/utils/dummy-data";
import { type Link } from "@/types/store-types";
import useStore from "@/store/store";

type SharingLinkProps = {
  link: Link;
  index: number;
};

const SharingLink = ({ link, index, ...otherProps }: SharingLinkProps) => {
  const dispatch = useStore(true)[1];
  console.log("link-platform", link.platform);
  const handlePlatformChange = (platform: Link["platform"]) => {
    dispatch("UPDATE_LINK", { ...link, platform });
  };

  const handleRemoveLink = () => {
    dispatch("REMOVE_LINK", link.id);
  };
  return (
    <Container
      as="li"
      rounded
      dark
      padSize="small"
      classes={styles["sharing-link"]}
      {...otherProps}
    >
      <form action="" className={styles["sharing-link__form"]}>
        <div className={styles["sharing-link__header"]}>
          <h2 className={styles["sharing-link__title"]}>
            <span className={styles["sharing-link__title-icon"]}>
              <DragDropIcon />
            </span>
            <span>Link #{index + 1}</span>
          </h2>
          <button
            type="button"
            className={styles["sharing-link__remove-button"]}
            onClick={handleRemoveLink}
          >
            Remove
          </button>
        </div>
        <Select platform={link.platform} onChange={handlePlatformChange} />
        <InputIcon
          type="text"
          placeholder={`e.g. ${platformsUrlSlug[link.platform]}jhondoe`}
          icon={LinkIcon}
          label="Link"
          pattern={`${platformsUrlSlug[link.platform]}.+`}
        />
      </form>
    </Container>
  );
};
export default SharingLink;
