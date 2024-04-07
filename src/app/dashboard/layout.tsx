import Link from "next/link";
import styles from "./page.module.css";
import { navList } from "../resources/list";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className={styles.container}>
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
      </div>
    </>
  );
};

export default DashboardLayout;
