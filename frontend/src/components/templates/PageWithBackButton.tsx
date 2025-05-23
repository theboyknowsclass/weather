import { useRouter } from "next/navigation";
import styles from "./PageWithBackButton.module.css";

interface PageWithBackButtonProps {
  children: React.ReactNode;
  title?: string;
}

export const PageWithBackButton: React.FC<PageWithBackButtonProps> = ({
  children,
  title,
}) => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <div className={styles.headerContent}>
          <button onClick={handleBack} className={styles.backButton}>
            ← Back to Search
          </button>
          {title && <h1 className={styles.appTitle}>{title}</h1>}
        </div>
      </header>
      <main className={styles.mainContent}>{children}</main>
    </div>
  );
};
