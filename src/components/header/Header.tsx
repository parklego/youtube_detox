"use client";

import React from "react";
import styles from "./Header.module.css";
import { links } from "./link";
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link className={styles.logo} href={"/"}>
          youtube_detox
        </Link>
        <div className={styles.links}>
          {links.map((link) => (
            <Link key={link.id} className={styles.link} href={link.url}>
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
