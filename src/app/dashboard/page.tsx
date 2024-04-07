"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

const Dashboard = () => {
  const session = useSession();
  const router = useRouter();

  if (session.status === "loading") {
    return <div className={styles.container}>loading..</div>;
  }

  if (session.status !== "authenticated") {
    router.push("/signin");
  }

  if (session.status === "authenticated") {
    return (
      <div className={styles.dashboard}>
        <p>{`반가워요. ${session.data.user?.name}님`}</p>
        <p>오늘도 소중한 시간을 만들어봐요.</p>
      </div>
    );
  }
};

export default Dashboard;
