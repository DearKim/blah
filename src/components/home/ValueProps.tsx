import { useReducedMotion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

/**
 * 메인 페이지 2번 섹션 — 브랜드 스토리.
 * 영상이 섹션 풀블리드 배경으로 흐르고, 그 위에 카피가 스크롤 진입 시 stagger로 등장.
 *
 * 영상 출처: Coverr (https://coverr.co) — 상업 사용 가능, 출처 표기 불필요.
 * 다른 영상으로 교체하려면 BRAND_VIDEO_SRC 한 줄만 바꾸면 됩니다.
 */
const BRAND_VIDEO_SRC =
  "https://cdn.coverr.co/videos/coverr-blurred-tablet-screen-close-up/720p.mp4";

export function ValueProps() {
  const reduced = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden">
      {/* 1) 베이스 컬러 — 영상 로딩 전 / reduced motion 시 노출 */}
      <div aria-hidden="true" className="absolute inset-0 -z-30 bg-white" />

      {/* 2) 풀블리드 배경 영상 */}
      {!reduced && (
        <video
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src={BRAND_VIDEO_SRC} type="video/mp4" />
        </video>
      )}

      {/* 3) 화이트 오버레이 — 영상이 옅은 텍스처처럼만 비치도록 */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-white/90 via-white/10 to-white/95"
      />

      {/* 4) 콘텐츠 — Stagger 가 viewport 진입 시 한 번 자식들을 순차 페이드업 */}
      <Container className="relative py-28 md:py-44">
        <Stagger gap={0.16} className="mx-auto max-w-3xl text-center">
          <StaggerItem>
            <p className="text-xs font-medium tracking-[0.25em] text-brand-deep uppercase md:text-sm">
              우리가 다루는 것
            </p>
          </StaggerItem>

          <StaggerItem>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-brand md:text-5xl md:leading-[1.15]">
              정보와 소통,
              <br />그 사이를 잇는 일.
            </h2>
          </StaggerItem>

          <StaggerItem>
            <p className="mx-auto mt-10 max-w-xl text-base leading-relaxed text-slate-700 md:text-lg">
              세상은 빠르게 변하고, 정보는 그보다 더 빠르게 흐릅니다.
              <br className="hidden md:inline" />그 흐름 속에서, 우리에게 진짜 필요한 정보는
              무엇일까요?
            </p>
          </StaggerItem>

          <StaggerItem>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-700 md:text-lg">
              BLAH는 흩어진 데이터 속에서 의미 있는 정보를 골라내어,
              <br className="hidden md:inline" />
              필요한 사람에게 가장 명료한 방식으로 전합니다.
            </p>
          </StaggerItem>

          <StaggerItem>
            <div className="mt-12 inline-flex items-center gap-3 rounded-full bg-brand-mist/80 px-6 py-2 ring-1 ring-brand/20 backdrop-blur-sm">
              <span className="text-sm font-medium tracking-wide text-brand-deep">정보</span>
              <span className="h-1 w-1 rounded-full bg-brand-deep/50" />
              <span className="text-sm font-medium tracking-wide text-brand-deep">소통</span>
            </div>
          </StaggerItem>
        </Stagger>
      </Container>
    </section>
  );
}
