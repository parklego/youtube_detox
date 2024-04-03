"use client";

import ScrollDownIcon from "@/components/scrollDown/ScrollDown";
import styles from "./page.module.css";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <section className={styles.section}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
          >
            <h1 className={styles.title}>
              여러분은 평소에 SNS를 얼마나 사용하시나요?
            </h1>

            <h1 className={styles.subTitle}>
              통계에 의하면 하루평균 수면시간을 7~8시간으로 가정했을때
              <br />
              깨어있는 시간중 15%를 SNS사용에 소비한다고 해요.
            </h1>
          </motion.div>
        </section>

        <section className={styles.section}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 4 }}
          >
            <h1 className={styles.subTitle}>
              한국 스마트폰 사용자들은 매달 40시간을 유튜브 시청에 쓰고 있는
              것으로 나타났어요.
            </h1>
            <h1 className={styles.subTitle}>
              5년 만에 두 배 가까이로 늘어난 수치에요.
            </h1>
            <div className={styles.chart}>{/* Todo : chart */}</div>
          </motion.div>
        </section>
        <section className={styles.section}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 4 }}
          >
            <h1 className={styles.subTitle}>뇌가 녹는중..</h1>
            <div>{/* Todo : 단점 */}</div>
          </motion.div>
        </section>
        <section className={styles.section}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 4 }}
          >
            <h1 className={styles.subTitle}>이러한 것을 할 수 있어요..</h1>
            <div>{/* Todo : 장점 */}</div>
          </motion.div>
        </section>
        <section className={styles.section}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 4 }}
          >
            <h1 className={styles.subTitle}>같이 떠나요!</h1>
            <div>{/* Todo : 소개페이지로 리디렉션 버튼 */}</div>
          </motion.div>
        </section>
      </div>
      <ScrollDownIcon />
    </>
  );
}

{
  /* <h3 className={styles.sources}>
[하루 2시간 30분 SNS에...세계인 60%가 사용 중, 김현정기자,
아시아경제, 2023.07.21]
</h3> */
}
