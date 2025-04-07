import { getImageProps } from "next/image";
import largeLogo from "@/assets/images/logo-devlinks-large.svg";
import smallLogo from "@/assets/images/logo-devlinks-small.svg";

export default function ArtLogo({ classes }: { classes?: string }) {
  const common = { alt: "Devlinks logo", sizes: "100vw" };
  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    width: 183,
    height: 40,
    src: largeLogo,
  });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    width: 32,
    height: 32,
    src: smallLogo,
  });

  return (
    <picture className={classes}>
      <source media="(min-width: 701px)" srcSet={desktop} />
      <source media="(max-width: 700px)" srcSet={mobile} />
      <img
        {...rest}
        style={{ width: "100%", height: "auto" }}
        alt={common.alt}
      />
    </picture>
  );
}
