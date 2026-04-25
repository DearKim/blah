import type { ReactNode } from "react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { LinkButton } from "@/components/ui/Button";
import { company } from "@/content/company";
import { products } from "@/content/products";
import { useSeo, buildTitle } from "@/lib/seo";

const values = [
  {
    title: "정보 우선",
    body: "광고가 아닌 정보를, 추천이 아닌 사실을 전합니다. 사용자의 판단을 흐리지 않고 충분한 근거를 제시하는 것이 우선입니다.",
  },
  {
    title: "편의성",
    body: "필요한 정보가 어딘가에 있긴 하지만 흩어져 있어 비교가 어려운 상황을 좁히는 일이 우리의 일입니다.",
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
      <Section>
        <SectionHeader
          eyebrow="About"
          title="BLAH는 어떤 회사인가요"
          description="고객의 편의를 위한 정보 서비스를 만듭니다. 일상에서 마주치는 정보의 공백을 메우는 디지털 서비스가 회사의 일관된 방향입니다."
        />

        <div className="mt-4 max-w-3xl space-y-6 text-base leading-relaxed text-slate-700 md:text-lg">
          <p>
            "내가 필요한 정보가 어딘가에 있긴 한데, 흩어져 있고, 비교가 어렵고, 신뢰하기 힘든" 상황을
            한곳에서 객관적으로 비교·탐색할 수 있도록 정리하는 것이 BLAH가 일하는 방식입니다.
          </p>
          <p>
            우리는 화려한 약속보다 분명한 근거를, 추천보다 정보를, 빠른 광고보다 단단한 데이터를 택합니다.
          </p>
        </div>
      </Section>

      <Section muted>
        <SectionHeader title="우리가 지키는 가치" />
        <div className="grid gap-6 md:grid-cols-2">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-xl border border-slate-200 bg-white p-7"
            >
              <h3 className="text-lg font-semibold text-slate-900">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{v.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          title="우리가 다루는 영역"
          description="현재 운영 중이거나 준비 중인 영역입니다. 새로운 정보의 공백을 발견하면 이 목록은 자연스럽게 늘어납니다."
        />
        <ul className="grid gap-4">
          {products.map((p) => (
            <li
              key={p.slug}
              className="flex flex-col gap-1 rounded-xl border border-slate-200 bg-white p-6 md:flex-row md:items-center md:justify-between"
            >
              <div>
                <div className="text-base font-semibold text-slate-900">
                  {p.name}{" "}
                  <span className="text-sm font-normal text-slate-500">
                    ({p.nameKo})
                  </span>
                </div>
                <div className="mt-1 text-sm text-slate-600">{p.summary}</div>
              </div>
              <div className="text-sm text-slate-500">{p.domain}</div>
            </li>
          ))}
        </ul>
      </Section>

      <Section muted>
        <SectionHeader title="회사 정보" />
        <dl className="rounded-xl border border-slate-200 bg-white p-2 md:p-4">
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
                  className="underline-offset-2 hover:underline"
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
      </Section>

      <Section>
        <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center md:p-16">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
            함께 일하거나 협업을 제안하고 싶다면
          </h2>
          <div className="mt-8 flex justify-center">
            <LinkButton to="/contact" size="lg">
              문의하기
            </LinkButton>
          </div>
        </div>
      </Section>
    </>
  );
}

function Row({ term, value }: { term: string; value: ReactNode }) {
  return (
    <div className="flex flex-col gap-1 border-b border-slate-100 px-4 py-4 last:border-0 md:flex-row md:items-center md:gap-6">
      <dt className="w-32 shrink-0 text-sm font-medium text-slate-500">{term}</dt>
      <dd className="text-sm text-slate-800">{value}</dd>
    </div>
  );
}
