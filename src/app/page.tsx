import Image from "next/image";
import { ServerComponentSuspense } from "@/components/server-component/server-component-suspense";
import styles from "./page.module.css";
import { Box } from "@mui/material";
export const dynamic = "force-dynamic";

const suspense = true;
const increment = 3000;

export default function Home() {
  return (
    <main className={styles.main}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          gap: "24px",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        <ServerComponentSuspense ms={increment} suspense={suspense}>
          Server Component 1
        </ServerComponentSuspense>
        <ServerComponentSuspense ms={2 * increment} suspense={suspense}>
          Server Component 2
        </ServerComponentSuspense>
      </Box>
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          gap: "24px",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        <ServerComponentSuspense ms={3 * increment} suspense={suspense}>
          Server Component 3
        </ServerComponentSuspense>
        <ServerComponentSuspense ms={4 * increment} suspense={suspense}>
          Server Component 4
        </ServerComponentSuspense>
      </Box>
    </main>
  );
}
