import Container from "../UI/container";
import InputIcon from "../UI/input-icon";
import LinkIcon from "@/assets/images/icon-link.svg?react";
import DragDropIcon from "@/assets/images/icon-drag-and-drop.svg?react";
import Select from "../custom-select/custom-select";
import styles from "./sharing-link.module.scss";
import { platformsUrlSlug } from "@/utils/dummy-data";
import { type Link } from "@/types/store-types";
import useStore from "@/store/store";
import { useContext, type DragEvent } from "react";
import { dropContext } from "./link-wrapper";

type SharingLinkProps = {
  link: Link;
  index: number;
  id: string;
};

const SharingLink = ({ link, index, id, ...otherProps }: SharingLinkProps) => {
  const dispatch = useStore(true)[1];

  const { disableDropStyle, enableDropStyle } = useContext(dropContext);

  const handlePlatformChange = (platform: Link["platform"]) => {
    dispatch("UPDATE_LINK", { ...link, platform });
  };

  const handleRemoveLink = () => {
    dispatch("REMOVE_LINK", link.id);
  };

  const handleDragStart = (event: DragEvent) => {
    event.dataTransfer.setData("linkIndex", index.toString());
    disableDropStyle();
  };

  return (
    <Container
      onDragStart={handleDragStart}
      onDragEnd={() => enableDropStyle()}
      draggable={true}
      rounded
      dark
      padSize="small"
      id={id}
      classes={styles.link}
      {...otherProps}
    >
      <div className={styles.link__header}>
        <h2 className={styles.link__title}>
          <span className={styles["link__title-icon"]}>
            <DragDropIcon />
          </span>
          <span>Link #{index + 1}</span>
        </h2>
        <button
          type="button"
          className={styles["link__remove-button"]}
          onClick={handleRemoveLink}
        >
          Remove
        </button>
      </div>
      <Select
        platform={link.platform}
        onChange={handlePlatformChange}
        label="Platform"
      />
      <InputIcon
        type="text"
        placeholder={`e.g. ${platformsUrlSlug[link.platform]}jhondoe`}
        icon={LinkIcon}
        label="Link"
        pattern={`${platformsUrlSlug[link.platform]}.+`}
      />
    </Container>
  );
};
export default SharingLink;
