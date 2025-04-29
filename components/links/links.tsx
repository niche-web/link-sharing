import useStore from "@/store/store";
import SharingLink from "./sharing-link";
import styles from "./links.module.scss";
import LinkWrapper from "./link-wrapper";

const Links = () => {
  const [{ links }, dispatch] = useStore(true);

  const handleMoveLink = (fromIndex: number, toIndex: number) => {
    dispatch("MOVE_LINK", { fromIndex, toIndex });
  };

  return (
    <ul className={styles.links}>
      {links.map((link, index) => (
        <LinkWrapper key={index} index={index}>
          <SharingLink
            link={link}
            index={index}
            key={index}
            id={link.id}
            onMoveLink={handleMoveLink}
          />
        </LinkWrapper>
      ))}
    </ul>
  );
};
export default Links;
