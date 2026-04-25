import { motion, useScroll, useSpring } from "framer-motion";

/**
 * 페이지 상단 1.5px 진행 바.
 * 헤더(64px) 의 위쪽 가장자리에 고정. 스크롤 위치를 좌→우로 채워줍니다.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-50 h-[2px] origin-left bg-brand"
      style={{ scaleX }}
    />
  );
}
