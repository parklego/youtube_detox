"use client";

import React from "react";
import styles from "./Header.module.css";
import { links } from "./link";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

const Header = () => {
  const session = useSession();

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
          {session.status === "authenticated" ? (
            <>
              <Link className={styles.link} href={"/dashboard"}>
                dashboard
              </Link>
              <button className={styles.link} onClick={() => signOut()}>
                sign_out
              </button>
            </>
          ) : (
            <Link className={styles.link} href={"/signin"}>
              sign_in
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
