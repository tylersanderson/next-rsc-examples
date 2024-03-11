import { ClientComponentOne } from "@/components/client-component-one/client-component-one";
import styles from "./page.module.css";

export default function Bundle() {
  return (
    <main className={styles.main}>
      <h2>Client Boundary Demo</h2>
      <ClientComponentOne />
    </main>
  );
}
