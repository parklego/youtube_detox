"use client";

import styles from "./page.module.css";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollAnimation } from "../components/scrollAnimation/ScrollAnimation";
import { badItems, goodItems } from "./resources/list";
import Card from "../components/card/Card";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <section className={`${styles.section} ${styles.bgOne}`}>
          <div className={styles.contentContainer}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2 }}
            >
              <h1 className={styles.title}>
                여러분은 평소에 SNS를 얼마나 사용하시나요?
              </h1>
              <h2 className={styles.subTitle}>
                통계에 의하면 하루평균 수면시간을 7~8시간으로 가정했을때
                <br />
                깨어있는 시간중 15%를 SNS사용에 소비한다고 해요.
              </h2>
            </motion.div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.bgTwo}`}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 3 }}
          >
            <h1 className={styles.subTitle}>
              한국 스마트폰 사용자들은 매달 40시간을 유튜브 시청에 쓰고 있는
              것으로 나타났어요.
              <br />
              <br />
              5년 만에 두 배 가까이로 늘어난 수치에요.
            </h1>
            <motion.div
              initial={{ opacity: 0, scale: 0.4 }}
              transition={{ duration: 2 }}
              whileInView={{ opacity: 1, scale: 1 }}
            >
              <div className={styles.chartContainer}>
                <div className={styles.imgContainer}>
                  <Image src={"/youtube_average.png"} alt="" fill />
                </div>
                <div className={styles.imgContainer}>
                  <Image src={"/best_app.jpg"} alt="" fill />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>
        <section className={`${styles.section} ${styles.bgThree}`}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 3 }}
          >
            <h1 className={styles.subTitle}>지금 우리의 뇌는 녹는중...</h1>

            <div className={styles.listContainer}>
              <AnimatePresence>
                {badItems.map((item, index) => (
                  <ScrollAnimation key={index} index={index}>
                    {item}
                  </ScrollAnimation>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        </section>
        <section className={`${styles.section} ${styles.bgFour}`}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 3 }}
          >
            <h1 className={styles.subTitle}>
              우리는 생각보다 많은 것을 할 수 있어요...
            </h1>
          </motion.div>
        </section>
        <section className={`${styles.section} ${styles.bgFour}`}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 3 }}
          >
            <div className={styles.cardContainer}>
              {goodItems.map((item) => (
                <Card key={item.id} item={item} />
              ))}
            </div>
          </motion.div>
        </section>
        <section className={`${styles.section}`}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 3 }}
          >
            <div className={styles.lastContent}>
              <h1 className={styles.subTitle}>
                낭비되고 있는 시간을 나와 소중한 사람들에게 써보는 것은
                어떨까요?
              </h1>

              <Link href="/about">
                <button className={styles.button}>둘러보기</button>
              </Link>
            </div>
          </motion.div>
        </section>
      </div>
      {/* <ScrollDownIcon /> */}
    </>
  );
}
