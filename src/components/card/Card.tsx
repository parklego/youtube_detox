import React from "react";
import styles from "./Card.module.css";
import Image from "next/image";
import Link from "next/link";

interface CradProps {
  item: GoodItemType;
}

const Card = ({ item }: CradProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={item.image} alt="" fill />
      </div>
      <div className={styles.content}>
        <div className={styles.title}>{item.title}</div>
        <div className={styles.description}>{item.description}</div>
      </div>
    </div>
  );
};

export default Card;
