import NavPreview from "@/components/nav-preview";
import styles from "./page.module.scss";

const PreviewPage = () => {
  return (
    <div>
      <header className={styles.preview__header}>
        <NavPreview />
      </header>
      <main>
        <div className={styles["preview__mockup-app"]}></div>
      </main>
    </div>
  );
};

export default PreviewPage;
