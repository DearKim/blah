import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { LinkButton } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { EchoWaveBars } from "@/components/motion/EchoWaveBars";
import { fadeUp, motionTokens, staggerContainer } from "@/lib/motion";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  // 콘텐츠가 스크롤되며 살짝 위로 떠오르고 페이드. (reduced motion 시 비활성)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [0, -60]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, reduced ? 1 : 0.4]);
  const blobY = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [0, 80]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-brand">
      {/* 우측 상단의 흐릿한 글로우 — 깊이감용. 스크롤 따라 살짝 패럴랙스. */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-32 h-[480px] w-[480px] rounded-full bg-brand-200 opacity-40 blur-3xl"
        style={{ y: blobY }}
      />

      <Container className="relative py-20 md:py-32">
        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          variants={staggerContainer(motionTokens.stagger.base)}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={fadeUp}
            className="text-sm font-medium tracking-widest text-brand-mist uppercase"
          >
            BLAH
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-white md:text-6xl"
          >
            고객의 편의를 위한 <br className="hidden md:inline" />
            정보 서비스를 만듭니다.
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-lg text-white/85 md:text-xl">
            흩어져 있는 데이터를 한곳에서 객관적으로 비교하고 탐색할 수 있도록 만듭니다.
            광고가 아닌 정보, 추천이 아닌 사실 — 정보의 공백을 메우는 디지털 서비스입니다.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-4">
            <LinkButton to="/products" size="lg" variant="primary-inverse">
              제품 보기
            </LinkButton>
            <LinkButton
              to="/about"
              size="lg"
              variant="outline-inverse"
              className="text-white hover:text-white"
            >
              회사 소개
            </LinkButton>

            {/* echo-wave 인라인 SVG — brand 배경 위에서 흰색 막대로 호흡. */}
            <motion.div
              className="ml-2 hidden text-white/80 md:block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: motionTokens.duration.slow }}
              aria-hidden="true"
            >
              <EchoWaveBars size={32} loop />
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
