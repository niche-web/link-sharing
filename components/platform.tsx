import { type ElementType } from "react";
import { slugify } from "@/utils/format";
import { type Platform } from "@/utils/dummy-data";
import styles from "./platform.module.scss";

export type PlatformElemProps = {
  name: Platform;
  classes?: string;
};

const PlatformElem = ({ name, classes }: PlatformElemProps) => {
  const Icon: ElementType = require(`@/assets/images/icon-${slugify(
    name
  )}.svg?react`).default;

  return (
    <div className={`${styles.platform} ${classes}`}>
      <span className={styles.platform__icon} aria-hidden={true}>
        <Icon />
      </span>
      <span className={styles.platform__name}>{name}</span>
    </div>
  );
};
export default PlatformElem;
