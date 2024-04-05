import React from "react";
import styles from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";
import { getCurrentYear } from "@/utils/utils";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.sources}>
          <div className={styles.logoWrapper}>
            <p>youtube_detox</p>
          </div>
          <div>
            ©{getCurrentYear()}
            <Link href={"https://github.com/parklego"}> parklego</Link>. All
            rights reserved.
          </div>
        </div>
        <div className={styles.sources}>
          <div>
            - GIF File by
            <Link href={"https://lottiefiles.com/"}> LottieFiles</Link>
          </div>
          <div>
            - 3D Designed by
            <Link href={"www.freepik.com"}> Freepik</Link>
          </div>

          <div>
            - Data by
            <Link href={"https://www.wiseapp.co.kr/"}> Wiseapp</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
