import { Info, LayoutGrid, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";

type Value = {
  icon: LucideIcon;
  title: string;
  body: string;
};

const values: Value[] = [
  {
    icon: Info,
    title: "정보 우선",
    body: "광고가 아닌 정보, 추천이 아닌 사실을 전합니다.",
  },
  {
    icon: LayoutGrid,
    title: "편의성",
    body: "흩어진 데이터를 한 화면에서 비교·탐색할 수 있도록 만듭니다.",
  },
  {
    icon: ShieldCheck,
    title: "신뢰",
    body: "출처를 밝히고, 법적·윤리적 가이드라인을 지킵니다.",
  },
];

export function ValueProps() {
  return (
    <Section>
      <SectionHeader
        eyebrow="우리가 일하는 방식"
        title="BLAH가 지키는 세 가지"
      />
      <div className="grid gap-6 md:grid-cols-3">
        {values.map(({ icon: Icon, title, body }) => (
          <div
            key={title}
            className="rounded-xl border border-slate-200 bg-white p-7"
          >
            <Icon size={28} className="text-slate-900" strokeWidth={1.75} />
            <h3 className="mt-5 text-lg font-semibold text-slate-900">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
