import React from "react";
import styles from "./page.module.css";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const Records = () => {
  return (
    <div className={styles.container}>
      <div className={styles.editWrapper}>
        <div className={styles.editForm}>
          <div className={styles.section}>
            <Label htmlFor="first">
              최초 로그인 시 기록된 유튜브 시청 시간
            </Label>
            <Input type="number" id="firstHH" placeholder="HH" />
            <Input type="number" id="firstMM" placeholder="MM" />
          </div>
          <div className={styles.section}>
            <Label htmlFor="detox">디톡스 이후 기록된 유튜브 시청 시간</Label>
            <Input type="number" id="HH" placeholder="HH" />
            <Input type="number" id="MM" placeholder="MM" />
          </div>

          <Button>저장하기</Button>
        </div>
        <div className={styles.info}>
          <div>
            
            <p>유튜브 시청시간은 보는 방법은 아래와 같습니다.</p>
          </div>
          <div className={styles.infoList}>
            
            <p>1. 유튜브앱을 실행한다.</p>
            <p>2. 유튜브앱의 하단 프로필을 누른다.</p>
            <p>3. 하단으로 스크롤하여 시청 시간 탭을 선택한다.</p>
            <p>4. 지난 7일에 해당하는 시간을 확인한다.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Records;
