"use client";
import Link from "next/link";
import styles from "./page.module.css";
import { navList } from "../resources/list";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const session = useSession();
  const router = useRouter();

  const { status } = session;

  useEffect(() => {
    if (status !== "authenticated" && status !== "loading") {
      router.push("/");
    }
  }, [router, status]);

  return (
    <>
      <div className={styles.container}>
        {status === "loading" && (
          <div className={styles.loadingWrapper}>
            <p>loading...</p>
          </div>
        )}
        {status === "authenticated" && (
          <div className={styles.wrapper}>
            <div className={styles.sidebarWrapper}>
              <div className={styles.sidebar}>
                {navList.map((item: NavItemType) => {
                  return (
                    <Link
                      href={`/dashboard${item.url}`}
                      key={item.id}
                      className={styles.sideItem}
                    >
                      {item.title}
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className={styles.contentWrapper}>
              <div>{children}</div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default DashboardLayout;
