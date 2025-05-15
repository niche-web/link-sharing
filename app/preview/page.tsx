import NavPreview from "@/components/nav-preview";
import styles from "./page.module.scss";
import MockupApp from "@/components/mockup/mockup-app";

const PreviewPage = () => {
  return (
    <div className={styles.preview}>
      <header className={styles.preview__header}>
        <NavPreview classes={styles["preview__header-nav"]} />
      </header>
      <main className={styles.preview__main}>
        <div className={styles["preview__main--app-container"]}>
          <MockupApp preview linkLimit={3} />
        </div>
      </main>
    </div>
  );
};

export default PreviewPage;
