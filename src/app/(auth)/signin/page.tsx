"use client";
import { signIn, useSession } from "next-auth/react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

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
      <div className={styles.signinTitle}>sign_in_with</div>
      <div className={styles.buttonWrapper}>
        <button
          className={styles.signinButton}
          onClick={() => signIn("google")}
        >
          구글로 로그인하기
        </button>
        <button className={styles.signinButton}>카카오로 로그인하기</button>
      </div>
    </div>
  );
};

export default SignInPage;
