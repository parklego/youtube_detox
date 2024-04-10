"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useSession } from "next-auth/react";
import { toast } from "sonner";

const Records = () => {
  const [initialTime, setInitialTime] = useState({
    initialHH: "",
    initialMM: "",
    initialState: false,
  });

  const [detoxTime, setDetoxTime] = useState({
    initialHH: "",
    initialMM: "",
  });

  const { data } = useSession();

  useEffect(() => {
    const dataFetch = async () => {
      if (data) {
        const response = await axios.post("/api/record/read", {
          id: data.user.id,
        });

        if (response.status === 200) {
          setInitialTime(response.data);
        } else {
          toast.error("카테고리를 불러오는데 실패하였습니다.");
        }
      }
    };
    dataFetch();
  }, [data]);

  const handleInitailTime = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // time
    const initialTimeToString = `${initialTime.initialHH}시간${initialTime.initialMM}분`;

    const response = await axios.post("/api/record/save", {
      id: data?.user?.id,
      initialTimeToString,
    });

    toast.success("저장되었습니다.");
  };

  const handleDetoxTime = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // time
    const detoxTimeToString = `${detoxTime.initialHH}시간${detoxTime.initialMM}분`;

    const response = await axios.post("/api/record/detox", {
      id: data?.user?.id,
      detoxTimeToString,
    });

    toast.success("저장되었습니다.");
  };

  return (
    <div className={styles.container}>
      <div className={styles.editWrapper}>
        <form className={styles.editForm} onSubmit={handleInitailTime}>
          <div className={styles.section}>
            <Label htmlFor="first">디톡스 전 기록된 유튜브 시청 시간</Label>
            <Input
              type="number"
              name="initialHH"
              placeholder="HH"
              max={99}
              disabled={initialTime.initialState}
              value={initialTime.initialHH}
              onChange={(e) =>
                setInitialTime({
                  ...initialTime,
                  initialHH: e.target.value,
                })
              }
            />
            <Input
              type="number"
              name="initailMM"
              placeholder="MM"
              max={59}
              disabled={initialTime.initialState}
              value={initialTime.initialMM}
              onChange={(e) =>
                setInitialTime({
                  ...initialTime,
                  initialMM: e.target.value,
                })
              }
            />
          </div>
          <Button type="submit" disabled={initialTime.initialState}>
            저장하기
          </Button>
        </form>

        <form className={styles.editForm} onSubmit={handleDetoxTime}>
          <div className={styles.section}>
            <Label htmlFor="first">디톡스 이후 기록된 유튜브 시청 시간</Label>
            <Input
              type="number"
              name="initialHH"
              placeholder="HH"
              max={99}
              value={detoxTime.initialHH}
              onChange={(e) =>
                setDetoxTime({
                  ...detoxTime,
                  initialHH: e.target.value,
                })
              }
            />
            <Input
              type="number"
              name="initailMM"
              placeholder="MM"
              max={59}
              value={detoxTime.initialMM}
              onChange={(e) =>
                setDetoxTime({
                  ...detoxTime,
                  initialMM: e.target.value,
                })
              }
            />
          </div>
          <Button type="submit">저장하기</Button>
        </form>

        <div className={styles.info}>
          <div>
            <p>
              ✓ 디톡스 전 기록된 유튜브 시청 시간은 한 번 저장 이후 수정 할 수
              없으니 신중하게 입력해주세요.
            </p>
          </div>
          <div>
            <p>✓ 유튜브 시청시간은 보는 방법은 아래와 같습니다.</p>
          </div>
          <div className={styles.infoList}>
            <p>1. 유튜브앱을 실행한다.</p>
            <p>2. 유튜브앱의 하단 프로필을 누른다.</p>
            <p>3. 하단으로 스크롤하여 시청 시간 탭을 선택한다.</p>
            <p>4. 지난 7일에 해당하는 시간을 확인한다.</p>
            <p>
              5. 디톡스 이후 기록된 유튜브 시청 시간을 입력하면, 대시보드에서
              결과를 확인 할 수 있습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Records;
