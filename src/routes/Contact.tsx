import type { LucideIcon } from "lucide-react";
import { Briefcase, Handshake, Mail, MessageSquare, Newspaper } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { LinkButton } from "@/components/ui/Button";
import { FadeUp } from "@/components/motion/FadeUp";
import { company } from "@/content/company";
import { useSeo, buildTitle } from "@/lib/seo";

type InquiryGuide = {
  label: string;
  eyebrow: string;
  subjectTag: string;
  body: string;
  accent: string;
  icon: LucideIcon;
};

const inquiryGuides: InquiryGuide[] = [
  {
    label: "일반 문의",
    eyebrow: "General",
    subjectTag: "[문의]",
    body: "제목에 [문의] 를 붙이고, 내용을 간단히 적어 주세요.",
    accent: "#1d9e75", // BLAH brand teal
    icon: MessageSquare,
  },
  {
    label: "파트너십",
    eyebrow: "Partnership",
    subjectTag: "[파트너십]",
    body: "제목에 [파트너십], 본문에 회사명·담당자·제안 요지를 적어 주세요.",
    accent: "#1878CE", // A.PAGO blue
    icon: Handshake,
  },
  {
    label: "채용",
    eyebrow: "Careers",
    subjectTag: "[채용]",
    body: "제목에 [채용] 을 붙이고, 이력서·포트폴리오를 첨부해 주세요.",
    accent: "#82C926", // TEUM lime
    icon: Briefcase,
  },
  {
    label: "미디어",
    eyebrow: "Media",
    subjectTag: "[미디어]",
    body: "제목에 [미디어] 를 붙여 주세요.",
    accent: "#0f6e56", // BLAH brand-deep
    icon: Newspaper,
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
                className="block text-xl font-bold break-all text-slate-900 underline-offset-4 hover:underline sm:text-2xl md:text-3xl"
              >
                {company.email}
              </a>
            ) : (
              <span className="block text-xl font-bold text-slate-400 sm:text-2xl md:text-3xl">
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
        <ul className="grid gap-5 md:grid-cols-2">
          {inquiryGuides.map((g, i) => {
            const Icon = g.icon;
            return (
              <FadeUp key={g.label} delay={i * 0.05} as="li">
                <article className="group h-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                  {/* 컬러 헤더 — 카테고리별 accent 풀블리드 */}
                  <header
                    className="flex items-center justify-between gap-4 px-6 py-5 text-white"
                    style={{ backgroundColor: g.accent }}
                  >
                    <div className="min-w-0">
                      <p className="text-xs font-medium tracking-[0.25em] text-white/75 uppercase">
                        {g.eyebrow}
                      </p>
                      <h3 className="mt-1 truncate text-lg font-bold">{g.label}</h3>
                    </div>
                    <span
                      aria-hidden="true"
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/25 backdrop-blur-sm transition-transform duration-300 group-hover:scale-105"
                    >
                      <Icon size={18} />
                    </span>
                  </header>

                  {/* 바디 */}
                  <div className="p-6">
                    <div
                      className="font-mono text-sm font-medium"
                      style={{ color: g.accent }}
                    >
                      {g.subjectTag}
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{g.body}</p>
                  </div>
                </article>
              </FadeUp>
            );
          })}
        </ul>
      </Section>
    </>
  );
}
