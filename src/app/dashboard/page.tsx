"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

const Dashboard = () => {
  const session = useSession();
  const router = useRouter();

  if (session.status !== "authenticated") {
    router.push("/signin");
  }

  if (session.status === "authenticated") {
    return (
      <div className={styles.container}>
        <div className={styles.contentWrapper}>반가워요 </div>
      </div>
    );
  }
};

export default Dashboard;
