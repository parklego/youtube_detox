import Image from "next/image";
import styles from "./ScrollDown.module.css";

const ScrollDownIcon = () => {
  return (
    <div className={styles.scrollDown}>
      <Image src="/scroll-down.gif" alt="Example GIF" width={35} height={35} />
    </div>
  );
};

export default ScrollDownIcon;
