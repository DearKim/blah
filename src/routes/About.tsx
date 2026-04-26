import type { ReactNode } from "react";
import { ArrowRight, Mail } from "lucide-react";
import { Link } from "react-router";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/layout/Container";
import { LinkButton } from "@/components/ui/Button";
import { EchoWaveBars } from "@/components/motion/EchoWaveBars";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { FadeUp } from "@/components/motion/FadeUp";
import { company } from "@/content/company";
import { products } from "@/content/products";
import { useSeo, buildTitle } from "@/lib/seo";

const values = [
  {
    title: "정보 우선",
    body: "광고가 아닌 정보를, 추천이 아닌 사실을 전합니다. 사용자의 판단을 흐리지 않고 충분한 근거를 먼저 둡니다.",
  },
  {
    title: "편의성",
    body: "필요한 정보가 어딘가에 있긴 하지만 흩어져 있어 비교가 어려운 상황을 좁히는 것, 그게 우리의 일입니다.",
  },
  {
    title: "신뢰",
    body: "출처를 밝히고, 그 영역의 법적·윤리적 가이드라인을 지킵니다. 톤은 차분하게, 근거는 분명하게.",
  },
  {
    title: "확장성",
    body: "사람·반려동물·일·시간 — 영역을 좁히지 않고 정보가 필요한 곳을 찾아갑니다.",
  },
];

export default function About() {
  useSeo({
    title: buildTitle("회사 소개"),
    description:
      "BLAH는 고객의 편의를 위한 정보 서비스를 만드는 회사입니다. 미션·가치·운영 영역을 소개합니다.",
  });

  return (
    <>
      {/* 1. Hero — brand 풀블리드. 홈 Hero 와 같은 결, 더 차분한 버전. */}
      <section className="relative overflow-hidden bg-brand">
        {/* 우상단 글로우 — 홈 Hero 와 동일한 깊이감 */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 -right-32 h-[480px] w-[480px] rounded-full bg-brand-200 opacity-40 blur-3xl"
        />

        <Container className="relative py-20 md:py-28">
          <Stagger gap={0.14}>
            <StaggerItem>
              <p className="text-sm font-medium tracking-[0.25em] text-brand-mist uppercase">
                ABOUT
              </p>
            </StaggerItem>

            <StaggerItem>
              <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-white md:text-6xl md:leading-[1.15]">
                정보의 공백을 <br className="hidden md:inline" />
                메우는 일.
              </h1>
            </StaggerItem>

            <StaggerItem>
              <p className="mt-6 max-w-2xl text-lg text-white/85 md:text-xl">
                BLAH는 고객의 편의를 위한 정보 서비스를 만드는 회사입니다.
                <br className="hidden md:inline" /> 화려한 약속보다 분명한 근거를, 추천보다 정보를
                택합니다.
              </p>
            </StaggerItem>

            <StaggerItem>
              <div className="mt-10 flex items-center gap-3 text-white/80" aria-hidden="true">
                <EchoWaveBars size={28} loop />
                <span className="text-sm tracking-wide">정보 · 신뢰 · 울림</span>
              </div>
            </StaggerItem>
          </Stagger>
        </Container>
      </section>

      {/* 2. Mission — ValueProps 의 결을 그대로. 흰 바닥, 시적 끊기, brand 컬러 헤딩. */}
      <Section>
        <Stagger gap={0.16} className="mx-auto max-w-3xl text-center">
          <StaggerItem>
            <p className="text-xs font-medium tracking-[0.25em] text-brand-deep uppercase md:text-sm">
              우리의 자세
            </p>
          </StaggerItem>

          <StaggerItem>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-brand md:text-5xl md:leading-[1.15]">
              흩어진 데이터에서, <br />
              한 줄의 사실을.
            </h2>
          </StaggerItem>

          <StaggerItem>
            <p className="mx-auto mt-10 max-w-xl text-base leading-relaxed text-slate-700 md:text-lg">
              "내게 필요한 정보가 어딘가에 있긴 한데,
              <br className="hidden md:inline" /> 흩어져 있고, 비교가 어렵고, 신뢰하기 힘든."
            </p>
          </StaggerItem>

          <StaggerItem>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-700 [word-break:keep-all] md:text-lg">
              우리는 그 빈 자리를 좁히는 회사입니다.
              <br className="hidden md:inline" />
              한곳에서 객관적으로 비교·탐색할 수 있도록 정리하는 것,
              <br className="hidden md:inline" />
              그게 일관된 방향입니다.
            </p>
          </StaggerItem>

          <StaggerItem>
            <div className="mt-12 inline-flex items-center gap-3 rounded-full bg-brand-mist/80 px-6 py-2 ring-1 ring-brand/20 backdrop-blur-sm">
              <span className="text-sm font-medium tracking-wide text-brand-deep">
                광고가 아닌 정보
              </span>
              <span className="h-1 w-1 rounded-full bg-brand-deep/50" />
              <span className="text-sm font-medium tracking-wide text-brand-deep">
                추천이 아닌 사실
              </span>
            </div>
          </StaggerItem>
        </Stagger>
      </Section>

      {/* 3. Values — 카드 4개. brand 좌측 스트라이프 + 번호 eyebrow. */}
      <Section muted>
        <FadeUp className="mb-10 md:mb-14">
          <p className="text-xs font-medium tracking-[0.25em] text-brand-deep uppercase md:text-sm">
            우리가 지키는 가치
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
            네 가지 약속을 <br className="md:hidden" />흔들지 않습니다.
          </h2>
        </FadeUp>

        <div className="grid gap-5 md:grid-cols-2 md:gap-6">
          {values.map((v, i) => (
            <FadeUp key={v.title} delay={i * 0.05}>
              <div className="group relative h-full overflow-hidden rounded-xl border border-slate-200 bg-white p-7 transition-shadow hover:shadow-md">
                {/* 좌측 brand 스트라이프 — hover 시 진해짐 */}
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-0 h-full w-1 bg-brand transition-colors group-hover:bg-brand-deep"
                />
                <p className="text-xs font-semibold tracking-[0.2em] text-brand-deep uppercase">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{v.body}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </Section>

      {/* 4. 운영 영역 — 제품 카드 미니 버전. 컬러 로고 + 컬러 워드마크. */}
      <Section>
        <FadeUp className="mb-10 md:mb-14">
          <p className="text-xs font-medium tracking-[0.25em] text-brand-deep uppercase md:text-sm">
            우리가 다루는 영역
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
            정보의 공백이 있는 곳을 <br className="md:hidden" />찾아갑니다.
          </h2>
          <p className="mt-3 max-w-2xl text-base text-slate-600 [word-break:keep-all] md:text-lg">
            지금 운영 중이거나 준비 중인 영역입니다.
            <br className="hidden md:inline" />
            새로운 빈 자리를 발견하면 이 목록은 자연스럽게 늘어납니다.
          </p>
        </FadeUp>

        <div className="grid gap-5 md:grid-cols-2 md:gap-6">
          {products.map((p, i) => {
            const accent = p.accentColor ?? "var(--color-brand)";
            return (
              <FadeUp key={p.slug} delay={i * 0.05}>
                <Link
                  to={`/products/${p.slug}`}
                  className="group flex h-full flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-7 transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="flex items-center gap-4">
                    {p.logoSrc && (
                      <img
                        src={p.logoSrc}
                        alt=""
                        aria-hidden="true"
                        className="h-10 w-auto shrink-0 md:h-12"
                        loading="lazy"
                      />
                    )}
                    <div className="min-w-0">
                      <p
                        className="text-2xl font-bold tracking-tight md:text-3xl"
                        style={{ color: accent }}
                      >
                        {p.name}
                      </p>
                      <p className="text-sm text-slate-500">{p.nameKo}</p>
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed text-slate-600">{p.summary}</p>

                  <div className="mt-auto flex items-center justify-between pt-2">
                    <span className="text-xs font-medium tracking-wide text-slate-500 uppercase">
                      {p.domain}
                    </span>
                    <span
                      className="inline-flex items-center gap-1 text-sm font-medium transition-transform group-hover:translate-x-0.5"
                      style={{ color: accent }}
                    >
                      자세히 <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </FadeUp>
            );
          })}
        </div>
      </Section>

      {/* 5. 회사 정보 — 사실 전달 모드. brand-deep 헤더로 카테고리 인지 강화. */}
      <Section muted>
        <FadeUp className="mb-8 md:mb-10">
          <p className="text-xs font-medium tracking-[0.25em] text-brand-deep uppercase md:text-sm">
            회사 정보
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
            사실은 사실대로.
          </h2>
        </FadeUp>

        <FadeUp>
          <dl className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Row term="회사명" value={company.name} />
            {company.legalName && <Row term="법인명" value={company.legalName} />}
            {company.founder && <Row term="대표자" value={company.founder} />}
            {company.foundedAt && <Row term="설립일" value={company.foundedAt} />}
            {company.registration && (
              <Row term="사업자등록번호" value={company.registration} />
            )}
            {company.address && <Row term="본사 주소" value={company.address} />}
            {company.email && (
              <Row
                term="대표 이메일"
                value={
                  <a
                    href={`mailto:${company.email}`}
                    className="text-brand-deep underline-offset-2 hover:underline"
                  >
                    {company.email}
                  </a>
                }
              />
            )}
            <Row term="웹사이트" value={company.domain} />
          </dl>
          {!company.email && (
            <p className="mt-4 text-sm text-slate-500">
              * 일부 회사 정보는 정리되는 대로 업데이트됩니다.
            </p>
          )}
        </FadeUp>
      </Section>

      {/* 6. Final CTA — 홈 마지막 섹션과 동일 패턴. */}
      <Section muted>
        <FadeUp className="rounded-2xl border border-slate-200 bg-white p-10 text-center md:p-16">
          <div className="mb-6 flex justify-center text-brand">
            <EchoWaveBars size={32} loop />
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
            함께 만들어 갈 동료, <br className="md:hidden" />그리고 협업할 파트너를 찾고 있습니다.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-slate-600">
            BLAH가 다루는 영역에 대한 제안이나 협업 문의를 기다립니다.
          </p>
          <div className="mt-8 flex justify-center">
            <LinkButton to="/contact" size="lg">
              <Mail size={18} />
              문의하기
            </LinkButton>
          </div>
        </FadeUp>
      </Section>
    </>
  );
}

function Row({ term, value }: { term: string; value: ReactNode }) {
  return (
    <div className="flex flex-col gap-1 border-b border-slate-100 px-5 py-4 last:border-0 md:flex-row md:items-center md:gap-6">
      <dt className="w-32 shrink-0 text-sm font-medium tracking-wide text-slate-500">
        {term}
      </dt>
      <dd className="text-sm text-slate-800">{value}</dd>
    </div>
  );
}
