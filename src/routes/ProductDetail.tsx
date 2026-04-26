import { useParams } from "react-router";
import { Section } from "@/components/ui/Section";
import { ProductHero } from "@/components/product/ProductHero";
import { FeatureList } from "@/components/product/FeatureList";
import { ProductCard } from "@/components/product/ProductCard";
import { FadeUp } from "@/components/motion/FadeUp";
import { getOtherProducts, getProductBySlug } from "@/content/products";
import { useSeo, buildTitle } from "@/lib/seo";
import NotFound from "./NotFound";

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug);

  // Hooks must run unconditionally
  useSeo({
    title: buildTitle(product ? product.name : "제품을 찾을 수 없습니다"),
    description: product?.summary,
  });

  if (!product) {
    return <NotFound />;
  }

  const accent = product.accentColor ?? "var(--color-brand)";
  const others = getOtherProducts(product.slug);

  return (
    <>
      <ProductHero product={product} />

      {/* 1. Overview — 제품 description 을 lead 로 */}
      <Section>
        <FadeUp className="mx-auto max-w-3xl">
          <p
            className="text-xs font-medium tracking-[0.25em] uppercase md:text-sm"
            style={{ color: accent }}
          >
            Overview
          </p>
          <p className="mt-4 text-lg leading-relaxed text-slate-700 [word-break:keep-all] md:text-xl">
            {product.description}
          </p>
        </FadeUp>
      </Section>

      {/* 2. 핵심 기능 — accent eyebrow + accent stripe FeatureList */}
      <Section muted>
        <FadeUp className="mb-10 md:mb-14">
          <p
            className="text-xs font-medium tracking-[0.25em] uppercase md:text-sm"
            style={{ color: accent }}
          >
            Features
          </p>
          <h2
            className="mt-3 text-2xl font-bold tracking-tight md:text-3xl"
            style={{ color: accent }}
          >
            핵심 기능
          </h2>
        </FadeUp>
        <FeatureList features={product.features} accent={accent} />
      </Section>

      {/* 3. 누구에게 도움이 되는가 — accent 도트 */}
      <Section>
        <FadeUp className="mb-10 md:mb-14">
          <p
            className="text-xs font-medium tracking-[0.25em] uppercase md:text-sm"
            style={{ color: accent }}
          >
            Audiences
          </p>
          <h2
            className="mt-3 text-2xl font-bold tracking-tight md:text-3xl"
            style={{ color: accent }}
          >
            누구에게 도움이 되는가
          </h2>
        </FadeUp>
        <ul className="grid gap-3 md:grid-cols-2">
          {product.audiences.map((audience, i) => (
            <FadeUp key={audience} delay={i * 0.04} as="li">
              <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white px-5 py-4 text-sm text-slate-700">
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ backgroundColor: accent }}
                />
                <span>{audience}</span>
              </div>
            </FadeUp>
          ))}
        </ul>
      </Section>

      {/* 4. 약속 — accent 번호 원형 */}
      {product.promises && product.promises.length > 0 && (
        <Section muted>
          <FadeUp className="mb-10 md:mb-14">
            <p
              className="text-xs font-medium tracking-[0.25em] uppercase md:text-sm"
              style={{ color: accent }}
            >
              Promises
            </p>
            <h2
              className="mt-3 text-2xl font-bold tracking-tight md:text-3xl"
              style={{ color: accent }}
            >
              약속
            </h2>
          </FadeUp>
          <ul className="space-y-3">
            {product.promises.map((promise, idx) => (
              <FadeUp key={idx} delay={idx * 0.03} as="li">
                <div className="flex gap-3 rounded-lg border border-slate-200 bg-white px-5 py-4 text-sm leading-relaxed text-slate-700">
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                    style={{ backgroundColor: accent }}
                  >
                    {idx + 1}
                  </span>
                  <span>{promise}</span>
                </div>
              </FadeUp>
            ))}
          </ul>
        </Section>
      )}

      {/* 5. 다른 제품 — 카드 (각 제품의 자기 색으로 자동 렌더) */}
      {others.length > 0 && (
        <Section>
          <FadeUp className="mb-10 md:mb-14">
            <p className="text-xs font-medium tracking-[0.25em] text-brand-deep uppercase md:text-sm">
              More from BLAH
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              다른 제품 보기
            </h2>
          </FadeUp>
          <div className="grid gap-6 md:grid-cols-2">
            {others.map((other) => (
              <ProductCard key={other.slug} product={other} />
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
