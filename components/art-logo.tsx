import { getImageProps } from "next/image";
import largeLogo from "@/assets/images/logo-devlinks-large.svg";
import smallLogo from "@/assets/images/logo-devlinks-small.svg";
import styles from "./art-logo.module.scss";

export default function ArtLogo({ classes }: { classes?: string }) {
  const common = { alt: "Devlinks logo", sizes: "100vw" };
  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    width: 183,
    height: 40,
    src: largeLogo,
    priority: true,
  });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    width: 32,
    height: 32,
    src: smallLogo,
    priority: true,
  });

  return (
    <picture className={`${classes} ${styles["art-logo"]}`}>
      <source media="(min-width: 701px)" srcSet={desktop} />
      <source media="(max-width: 700px)" srcSet={mobile} />
      <img {...rest} alt={common.alt} />
    </picture>
  );
}
