import { PopoverWithButton } from "@/components/popover-with-button/popover-with-button";
import { ServerComponent } from "@/components/server-component/server-component";
import styles from "./page.module.css";

export default function Children() {
  return (
    <main className={styles.main}>
      <h2>Server Component Passed as Prop</h2>
      <PopoverWithButton>
        <ServerComponent ms={10}>Server Component</ServerComponent>
      </PopoverWithButton>
    </main>
  );
}
