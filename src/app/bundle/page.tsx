import { IconGenerator } from "@/components/icon-generator/icon-generator";
import styles from "./page.module.css";

export default function Bundle() {
  return (
    <main className={styles.main}>
      <h2>Bundle Demo</h2>
      <IconGenerator />
    </main>
  );
}
