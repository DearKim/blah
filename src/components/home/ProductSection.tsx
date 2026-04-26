import { ArrowRight, ExternalLink } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import { Link } from "react-router";
import { Section } from "@/components/ui/Section";
import { LinkButton } from "@/components/ui/Button";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { FadeUp } from "@/components/motion/FadeUp";
import { getProductBySlug } from "@/content/products";
import { cn } from "@/lib/cn";

type ProductSectionProps = {
  slug: string;
  /** 1, 2, ... — eyebrow에 "Product 01" 형태로 표기 */
  index: number;
  /** true 면 데스크톱에서 비주얼 블록을 우측에 배치 (기본: 좌측) */
  alternate?: boolean;
  /** Section 배경 muted (slate-50). 미설정 시 흰 배경. */
  muted?: boolean;
};

/**
 * 제품 1개를 단독으로 다루는 풀 섹션.
 * 좌(또는 우): 브랜드 컬러 비주얼 블록 (워드마크) / 반대편: 카피 + 기능 + CTA.
 *
 * 향후 제품별로 다른 시각 처리(스크린샷·일러스트 등)가 필요해지면
 * 이 컴포넌트를 분기하거나 제품별 Section 으로 분리 권장.
 */
export function ProductSection({ slug, index, alternate, muted }: ProductSectionProps) {
  const product = getProductBySlug(slug);
  const reduced = useReducedMotion();
  if (!product) return null;

  const accent = product.accentColor ?? "var(--color-brand)";

  return (
    <Section muted={muted}>
      <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
        {/* 비주얼 블록 — 상단: accent 배경 + 영상, 하단: 흰 패널 위 컬러 로고+워드마크 */}
        <FadeUp className={cn(alternate && "md:order-2")}>
          <div className="relative aspect-square overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
            {/* 상단 영상/accent 영역 (카드 높이의 약 2/3) */}
            <div
              className="relative h-2/3 w-full overflow-hidden"
              style={{ backgroundColor: accent }}
            >
              {!reduced && product.videoSrc && (
                <video
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                >
                  <source src={product.videoSrc} type="video/mp4" />
                </video>
              )}
              {/* 가독성용 그라디언트 — 영상 위, 도메인 라벨 아래 */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-black/5"
              />
              <div className="relative flex h-full items-start p-6 text-white md:p-8">
                <p className="text-xs font-medium tracking-[0.25em] text-white/85 uppercase md:text-sm">
                  {product.domain}
                </p>
              </div>
            </div>

            {/* 하단 흰 패널 — 컬러 로고 + 컬러 워드마크 (요청대로 둘 다 제품 컬러) */}
            <div className="flex h-1/3 w-full items-center gap-4 px-6 md:gap-5 md:px-8">
              {product.logoSrc && (
                <img
                  src={product.logoSrc}
                  alt=""
                  aria-hidden="true"
                  className="h-12 w-auto shrink-0 md:h-14"
                  loading="lazy"
                />
              )}
              <div className="min-w-0">
                <p
                  className="text-3xl font-bold tracking-tight md:text-4xl"
                  style={{ color: accent }}
                >
                  {product.name}
                </p>
                <p className="mt-0.5 text-sm text-slate-500 md:text-base">{product.nameKo}</p>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* 콘텐츠 */}
        <Stagger gap={0.12} className={cn(alternate && "md:order-1")}>
          <StaggerItem>
            <p
              className="text-xs font-medium tracking-[0.25em] uppercase md:text-sm"
              style={{ color: accent }}
            >
              Product {String(index).padStart(2, "0")} · {product.name}
            </p>
          </StaggerItem>

          <StaggerItem>
            <h2
              className="mt-4 text-3xl font-bold tracking-tight md:text-4xl md:leading-[1.2]"
              style={{ color: accent }}
            >
              {product.tagline}
            </h2>
          </StaggerItem>

          <StaggerItem>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
              {product.summary}
            </p>
          </StaggerItem>

          <StaggerItem>
            {product.pillars ? (
              <div className="mt-10 space-y-7">
                {product.pillars.map((p) => (
                  <div key={p.label}>
                    <p
                      className="text-xs font-semibold tracking-[0.2em] uppercase"
                      style={{ color: accent }}
                    >
                      {p.label}
                    </p>
                    <p className="mt-2 max-w-xl text-base leading-relaxed text-slate-700">
                      {p.body}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <ul className="mt-8 space-y-4">
                {product.features.slice(0, 3).map((f) => (
                  <li key={f.title} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ backgroundColor: accent }}
                    />
                    <div>
                      <p className="font-semibold text-slate-900">{f.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">{f.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </StaggerItem>

          <StaggerItem>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              {/* accent 컬러 CTA — 제품별 색을 그대로 입힌다 (브랜드 teal 무시) */}
              <Link
                to={`/products/${product.slug}`}
                className="inline-flex h-10 items-center justify-center gap-2 rounded-md px-4 text-sm font-medium text-white transition-[filter] hover:brightness-110 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                style={{ backgroundColor: accent, ['--tw-ring-color' as string]: accent }}
              >
                자세히 보기
                <ArrowRight size={16} />
              </Link>
              {product.externalUrl && (
                <LinkButton to={product.externalUrl} variant="ghost" size="md" external>
                  운영 사이트
                  <ExternalLink size={14} />
                </LinkButton>
              )}
            </div>
          </StaggerItem>
        </Stagger>
      </div>
    </Section>
  );
}
