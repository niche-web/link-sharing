import useStore from "@/store/store";
import SharingLink from "./sharing-link";
import styles from "./links.module.scss";

const Links = () => {
  const { links } = useStore(true)[0];
  return (
    <ul className={styles.links}>
      {links.map((link, index) => (
        <SharingLink link={link} key={index} index={index} />
      ))}
    </ul>
  );
};
export default Links;
