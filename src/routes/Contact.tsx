import { Mail } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { LinkButton } from "@/components/ui/Button";
import { company } from "@/content/company";
import { useSeo, buildTitle } from "@/lib/seo";

const inquiryGuides = [
  {
    label: "일반 문의",
    subjectTag: "[문의]",
    body: "제목에 [문의] 를 붙이고, 내용을 간단히 적어 주세요.",
  },
  {
    label: "파트너십",
    subjectTag: "[파트너십]",
    body: "제목에 [파트너십], 본문에 회사명·담당자·제안 요지를 적어 주세요.",
  },
  {
    label: "채용",
    subjectTag: "[채용]",
    body: "제목에 [채용] 을 붙이고, 이력서·포트폴리오를 첨부해 주세요.",
  },
  {
    label: "미디어",
    subjectTag: "[미디어]",
    body: "제목에 [미디어] 를 붙여 주세요.",
  },
];

export default function Contact() {
  useSeo({
    title: buildTitle("문의"),
    description: "BLAH 에 문의하는 채널과 가이드를 안내합니다.",
  });

  return (
    <>
      <Section>
        <SectionHeader
          eyebrow="Contact"
          title="문의"
          description="어떤 이유로 연락을 주시는지 알려 주시면 가장 빠르게 응답합니다."
        />

        <div className="rounded-2xl border border-slate-200 bg-white p-8 md:p-12">
          <div className="flex items-center gap-3 text-sm font-medium text-slate-500">
            <Mail size={18} />
            대표 이메일
          </div>
          <div className="mt-3">
            {company.email ? (
              <a
                href={`mailto:${company.email}`}
                className="text-2xl font-bold text-slate-900 underline-offset-4 hover:underline md:text-3xl"
              >
                {company.email}
              </a>
            ) : (
              <span className="text-2xl font-bold text-slate-400 md:text-3xl">
                대표 이메일 (준비 중)
              </span>
            )}
          </div>

          {company.email && (
            <div className="mt-8">
              <LinkButton to={`mailto:${company.email}`} external size="lg">
                메일 보내기
              </LinkButton>
            </div>
          )}
        </div>
      </Section>

      <Section muted>
        <SectionHeader
          title="어떤 문의를 어떤 채널로"
          description="아래 가이드대로 제목을 붙여 주시면 더 빠르고 정확하게 응답할 수 있습니다."
        />
        <ul className="grid gap-4 md:grid-cols-2">
          {inquiryGuides.map((g) => (
            <li
              key={g.label}
              className="rounded-xl border border-slate-200 bg-white p-6"
            >
              <div className="text-sm font-medium text-slate-500">{g.label}</div>
              <div className="mt-1 font-mono text-sm text-slate-900">
                {g.subjectTag}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{g.body}</p>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
