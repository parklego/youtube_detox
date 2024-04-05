"use client";
import React from "react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { links } from "./link";
import styles from "./Header.module.css";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";

const Menu = () => {
  const session = useSession();

  return (
    <div className={styles.links}>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>menu</MenubarTrigger>
          <MenubarContent>
            {links.map((link) => (
              <Link key={link.id} className={styles.link} href={link.url}>
                <MenubarItem>{link.title}</MenubarItem>
              </Link>
            ))}
            {session.status === "authenticated" ? (
              <>
                <Link className={styles.link} href={"/dashboard"}>
                  <MenubarItem>dashboard </MenubarItem>
                </Link>
                <MenubarSeparator />
                <MenubarItem className={styles.link} onClick={() => signOut()}>
                  sign_out
                </MenubarItem>
              </>
            ) : (
              <>
                <MenubarSeparator />
                <Link className={styles.link} href={"/signin"}>
                  <MenubarItem> sign_in </MenubarItem>
                </Link>
              </>
            )}
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
};

export default Menu;
