import styles from "./page.module.css";

export default function DatePage() {
  return (
    <main className={styles.main}>
      <h2>{new Date(Date.now()).toLocaleString()}</h2>
    </main>
  );
}
