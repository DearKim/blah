import type { Variants } from "framer-motion";

/**
 * 공통 모션 토큰 — 모든 인터랙션이 공유하는 스프링·이즈·딜레이 값.
 * 새 모션 컴포넌트를 만들 때 이 파일에서 토큰을 가져다 씁니다.
 */
export const motionTokens = {
  // 부드럽고 살짝 무게감 있는 이즈. 대부분의 페이드/슬라이드에 사용.
  ease: [0.22, 1, 0.36, 1] as const,
  // 진입 애니메이션 기본 길이
  duration: {
    fast: 0.35,
    base: 0.6,
    slow: 0.9,
  },
  // 자식 stagger 간격
  stagger: {
    tight: 0.06,
    base: 0.1,
    loose: 0.16,
  },
  // 스크롤로 콘텐츠가 올라올 때의 거리
  rise: 24,
};

/**
 * 가장 자주 쓰는 fade-up 변형.
 * `<motion.div variants={fadeUp} initial="hidden" whileInView="visible">` 형태로.
 */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: motionTokens.rise },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: motionTokens.duration.base,
      ease: motionTokens.ease,
    },
  },
};

/**
 * 부모 컨테이너에 사용. 자식들에 stagger 적용.
 */
export const staggerContainer = (gap: number = motionTokens.stagger.base): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: gap, delayChildren: 0.05 },
  },
});

/**
 * 뷰포트 진입 트리거 공통 옵션.
 * once: true — 한 번 보이면 다시 트리거되지 않음 (스크롤 위로 다시 가도 재생 X)
 * margin — 뷰포트 진입 임계점. 살짝 안쪽에서 시작해 스크롤 도착 시점에 자연스럽게 끝나도록.
 */
export const viewportOnce = {
  once: true,
  margin: "0px 0px -10% 0px",
} as const;
