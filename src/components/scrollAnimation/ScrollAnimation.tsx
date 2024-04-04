import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./ScrollAnimation.module.css";

interface ScrollAnimationType {
  children: any;
  index: any;
}

export const ScrollAnimation = ({ children, index }: ScrollAnimationType) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // 한 번만 트리거되도록 설정
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.5 }}
    >
      <div className={styles.container}>
        <p className={styles.item}>{children} </p>
      </div>
    </motion.div>
  );
};
