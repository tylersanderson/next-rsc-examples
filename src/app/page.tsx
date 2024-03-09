import Image from "next/image";
import { ServerComponentSuspense } from "@/components/server-component/server-component-suspense";
import styles from "./page.module.css";
export const dynamic = "force-dynamic";

const suspense = true;
const increment = 3000;

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <ServerComponentSuspense ms={increment} suspense={suspense}>
          Server Component 1
        </ServerComponentSuspense>
        <ServerComponentSuspense ms={2 * increment} suspense={suspense}>
          Server Component 2
        </ServerComponentSuspense>
      </div>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <div className={styles.container}>
        <ServerComponentSuspense ms={3 * increment} suspense={suspense}>
          Server Component 3
        </ServerComponentSuspense>
        <ServerComponentSuspense ms={4 * increment} suspense={suspense}>
          Server Component 4
        </ServerComponentSuspense>
      </div>
    </main>
  );
}
