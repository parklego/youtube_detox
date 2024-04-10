"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { toast } from "sonner";
import DoughnutChart from "@/components/doughnutChart/DoughnutChart";
import { getDecreasePercentTime, getSaveTime } from "@/utils/utils";
import { FaLongArrowAltUp } from "react-icons/fa";
import { FaLongArrowAltDown } from "react-icons/fa";

const Dashboard = () => {
  const session = useSession();
  const router = useRouter();

  const [record, setRecord] = useState({
    initialTime: "",
    detoxTime: "",
  });

  const { status, data } = session;

  const result = getDecreasePercentTime(record.initialTime, record.detoxTime);

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
          <DoughnutChart
            title={"디톡스 전 기록된 유튜브 시청 시간"}
            labels={["생산 시간", "시청 시간"]}
            data={getSaveTime(record.initialTime)}
          />
        </div>

        <div className={styles.timeWrapper}>
          <DoughnutChart
            title={"디톡스 후 기록된 유튜브 시청 시간"}
            labels={["생산 시간", "시청 시간"]}
            data={getSaveTime(record.detoxTime)}
          />
        </div>
      </div>
      <p className=" text-sm m-10">
        {result.isPossible && (
          <PercentComponent percent={Number(result.percentage)} />
        )}
      </p>
      <p className=" text-xs m-20">
        생산 시간(50h) = 하루(24h) x 7일 - 수면(8h) x 7일 - 일과시간(8h) x 5일 -
        밥시간(3h) x 7일 - 기타시간(1h)
      </p>
    </div>
  );
};

export default Dashboard;

const PercentComponent = ({ percent }: { percent: number }) => {
  const removeMinusSign = (number: number): string => {
    return `${Math.abs(number)}`;
  };

  if (percent >= 0) {
    return (
      <div className={styles.percentWrapper}>
        <FaLongArrowAltDown />
        {removeMinusSign(percent)}
      </div>
    );
  } else if (percent < 0) {
    return (
      <div className={styles.percentWrapper}>
        <FaLongArrowAltUp />
        {removeMinusSign(percent)}
      </div>
    );
  } else {
    return null;
  }
};
