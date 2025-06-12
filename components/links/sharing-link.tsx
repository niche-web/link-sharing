"use client";

import Container from "../UI/container";
import InputIcon from "../UI/input-icon";
import LinkIcon from "@/assets/images/icon-link.svg?react";
import DragDropIcon from "@/assets/images/icon-drag-and-drop.svg?react";
import Select from "../custom-select/custom-select";
import styles from "./sharing-link.module.scss";
import { platformsUrlSlug } from "@/utils/platforms-data";
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

  const {
    disableDropStyle,
    enableDropStyle,
    enableDragging,
    disableDragging,
    dragging,
  } = useContext(dropContext);

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

  const handleUrlUpdate = (value: string, validLink: boolean) => {
    dispatch("UPDATE_LINK", { ...link, linkUrl: value, validLink });
  };

  interface EnableDraggingEvent extends React.MouseEvent<HTMLButtonElement> {}

  const HandleEnableDragging = (e: EnableDraggingEvent): void => {
    e.preventDefault();
    enableDragging();
  };

  const handledisableDragging = (e: EnableDraggingEvent): void => {
    e.preventDefault();
    disableDragging();
  };

  return (
    <Container
      onDragStart={handleDragStart}
      onDragEnd={() => enableDropStyle()}
      draggable={dragging}
      rounded
      dark
      padSize="small"
      id={id}
      classes={styles.link}
      {...otherProps}
    >
      <div className={styles.link__header}>
        <h2 className={styles.link__title}>
          <button
            className={styles["link__title-icon"]}
            onMouseEnter={HandleEnableDragging}
            onMouseLeave={handledisableDragging}
            title="drag and drop link"
          >
            <DragDropIcon />
          </button>
          <span>Link #{index + 1}</span>
        </h2>
        <button
          type="button"
          className={styles["link__remove-button"]}
          onClick={handleRemoveLink}
          title="remove link"
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
        title={`${platformsUrlSlug[link.platform]}jhondoe`}
        pattern={platformsUrlSlug[link.platform] + ".+"}
        onUpdate={handleUrlUpdate}
        initialValue={link.linkUrl ?? ""}
        required={true}
        autoComplete={`${platformsUrlSlug[link.platform]}jhondoe`}
      />
    </Container>
  );
};
export default SharingLink;
