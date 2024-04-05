"use client";
import { signIn, useSession } from "next-auth/react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { FaGoogle } from "react-icons/fa";
import { SiKakaotalk } from "react-icons/si";

const SignInPage = () => {
  const session = useSession();
  const router = useRouter();

  if (session.status === "loading") {
    return <div className={styles.container}>loading..</div>;
  }

  if (session.status === "authenticated") {
    router.push("/dashboard");
  }

  return (
    <div className={styles.container}>
      <div className={styles.signinWrapper}>
        <div className={styles.titleWrapper}>
          <div className={styles.signinTitle}>sign_in_with</div>
          <div className={styles.infoTitle}>
            간편하게 로그인하고
            <br /> 다양한 서비스를 이용해보세요
          </div>
        </div>
        <div className={styles.buttonWrapper}>
          <button
            className={styles.signinButton}
            onClick={() => signIn("google")}
          >
            구글로 로그인하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
