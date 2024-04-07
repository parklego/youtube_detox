"use client";
import React from "react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { links } from "./link";
import styles from "./Header.module.css";
import Menu from "./Menu";
import { navList } from "@/app/resources/list";

const Header = () => {
  const session = useSession();

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link className={styles.logo} href={"/"}>
          youtube_detox
        </Link>
        <div className={`${styles.links} ${styles.nav}`}>
          {links.map((link) => (
            <Link key={link.id} className={styles.link} href={link.url}>
              {link.title}
            </Link>
          ))}
          {session.status === "authenticated" ? (
            <>
              <Link className={styles.link} href={"/dashboard"}>
                dashboard
              </Link>

              <div className={styles.link} onClick={() => signOut()}>
                sign_out
              </div>
            </>
          ) : (
            <>
              <Link className={styles.link} href={"/signin"}>
                sign_in
              </Link>
            </>
          )}
        </div>

        <div className={styles.menu}>
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default Header;
