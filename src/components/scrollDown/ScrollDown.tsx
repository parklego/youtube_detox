import Image from "next/image";
import styles from "./ScrollDown.module.css";

const ScrollDownIcon = () => {
  return (
    <div className={styles.scrollDown}>
      <Image src="/scroll-down.gif" alt="scroll down" width={25} height={25} />
    </div>
  );
};

export default ScrollDownIcon;
