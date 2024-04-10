"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";

const Dashboard = () => {
  const session = useSession();
  const router = useRouter();

  const [record, setRecord] = useState({
    initialTime: "",
    detoxTime: "",
  });

  const { status, data } = session;

  useEffect(() => {
    const dataFetch = async () => {
      if (data) {
        const response = await axios.post("/api/dashboard", {
          id: data.user.id,
        });

        if (response.status === 200) {
          setRecord(response.data);
        } else {
          toast.error("기록된 정보를 불러오는데 실패하였습니다.");
        }
      }
    };

    dataFetch();
  }, [data]);
  // console.log(record);
  if (status === "loading") {
    return <div className={styles.container}>loading..</div>;
  }

  if (status === "unauthenticated") {
    router.push("/signin");
  }

  return (
    <div className={styles.dashboard}>
      <p>{`반가워요. ${data?.user?.name}님.`}</p>
      <p>오늘도 소중한 시간을 만들어봐요.</p>

      <div className={styles.recordWrapper}>
        <div className={styles.timeWrapper}>
          <p> 디톡스 전 기록된 유튜브 시청 시간</p>
          <p>
            {record?.initialTime ? record.initialTime : "아직 입력 전입니다."}
          </p>
        </div>

        <div className={styles.timeWrapper}>
          <p>디톡스 후 기록된 유튜브 시청 시간</p>
          <p>{record?.detoxTime ? record.detoxTime : "아직 입력 전입니다."}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
