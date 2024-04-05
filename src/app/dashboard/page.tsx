"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import useSWR from "swr";
import { fetcher } from "@/utils/fetcher";

const Dashboard = () => {
  const session = useSession();
  const router = useRouter();

  if (session.status === "loading") {
    return <div className={styles.container}>loading..</div>;
  }

  if (session.status !== "authenticated") {
    router.push("/signin");
  }

  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>반가워요 </div>
    </div>
  );
};

export default Dashboard;
