import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Liveblog from "@/components/liveblog";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  return (
    <main className={styles.main}>
      <Liveblog />
    </main>
  );
}
