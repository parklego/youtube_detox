import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <Image src="/update.jpg" alt="update" fill />
      </div>
    </div>
  );
};

export default About;
