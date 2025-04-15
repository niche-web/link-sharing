import largeLogo from "@/assets/images/logo-devlinks-large.svg";
import smallLogo from "@/assets/images/logo-devlinks-small.svg";
import styles from "./art-logo.module.scss";

export default function ArtLogo({ classes }: { classes?: string }) {
  return (
    <picture className={`${classes} ${styles["art-logo"]}`}>
      <source media="(min-width: 701px)" srcSet={largeLogo} />
      <source media="(max-width: 700px)" srcSet={smallLogo} />
      <img src={largeLogo} alt="Devlinks logo" />
    </picture>
  );
}
