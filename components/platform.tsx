import { ElementType } from "react";
import styles from "./platform.module.scss";
import { slugify } from "@/utils/format";

export const platforms = [
  "GitHub",
  "Frontend Mentor",
  "Twitter",
  "LinkedIn",
  "YouTube",
  "Facebook",
  "Twitch",
  "Dev.to",
  "Codewars",
  "CodePen",
  "FreeCodeCamp",
  "GitLab",
  "Hashnode",
  "Stack Overflow",
] as const;

export type Platform = (typeof platforms)[number];
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
      <span className={styles.platform__icon}>
        <Icon />
      </span>
      <span className={styles.platform__name}>{name}</span>
    </div>
  );
};
export default PlatformElem;
