import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import type { Product } from "@/content/products";
import { fadeUp, motionTokens, staggerContainer } from "@/lib/motion";

type ProductHeroProps = {
  product: Product;
};

/**
 * 제품 상세의 Hero. 홈 Hero 와 동일한 결이지만
 * 배경을 BLAH brand teal 이 아니라 **제품 accent 색**으로 잠그도록 inline style 을 사용.
 * 워드마크는 흰 변형(`logoWhiteSrc`)을 우측 위 글로우와 함께 노출.
 */
export function ProductHero({ product }: ProductHeroProps) {
  const accent = product.accentColor ?? "var(--color-brand)";
  return (
    <section
      className="relative isolate overflow-hidden"
      style={{ backgroundColor: accent }}
    >
      {/* 우상단 화이트 글로우 — 홈 Hero 의 brand-200 글로우와 동일 결, accent 색에 백색을 섞어 톤을 끌어올린다. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-32 h-[480px] w-[480px] rounded-full bg-white/25 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-20 md:py-28">
        <motion.div
          variants={staggerContainer(motionTokens.stagger.base)}
          initial="hidden"
          animate="visible"
        >
          {/* 도메인 라벨 + 흰 로고 마크 */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3">
            {product.logoWhiteSrc && (
              <img
                src={product.logoWhiteSrc}
                alt=""
                aria-hidden="true"
                className="h-9 w-auto shrink-0 md:h-10"
                loading="lazy"
              />
            )}
            <span className="text-sm font-medium tracking-[0.2em] text-white/85 uppercase">
              {product.domain}
            </span>
          </motion.div>

          {/* 제품명 + 한글명 */}
          <motion.h1
            variants={fadeUp}
            className="mt-5 text-4xl font-bold tracking-tight text-white md:text-6xl"
          >
            {product.name}
            <span className="ml-3 text-2xl font-normal text-white/75 md:text-3xl">
              {product.nameKo}
            </span>
          </motion.h1>

          {/* 태그라인 */}
          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-2xl text-lg text-white/85 md:text-xl"
          >
            {product.tagline}
          </motion.p>

          {/* 운영 사이트 CTA — 흰 배경 + accent 색 텍스트 (Hero 위에 또렷하게 보이도록) */}
          {product.externalUrl && (
            <motion.div variants={fadeUp} className="mt-8">
              <a
                href={product.externalUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center gap-2 rounded-md bg-white px-6 text-base font-semibold shadow-sm transition-[filter] hover:brightness-95"
                style={{ color: accent }}
              >
                운영 사이트로 이동
                <ArrowUpRight size={18} />
              </a>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
