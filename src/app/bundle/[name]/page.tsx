import { IconGenerator } from "@/components/icon-generator/icon-generator";
import styles from "./page.module.css";

export const dynamic = "force-dynamic";

type BundlePageProps = {
  params: {
    name: string;
  };
};

export default function Bundle(props: Readonly<BundlePageProps>) {
  const { params } = props;
  const { name } = params;

  return (
    <main className={styles.main}>
      <h2>Bundle Demo</h2>
      <IconGenerator name={name} />
    </main>
  );
}
