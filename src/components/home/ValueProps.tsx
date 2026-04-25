import { Info, LayoutGrid, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { FadeUp } from "@/components/motion/FadeUp";
import { motionTokens } from "@/lib/motion";

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
  const reduced = useReducedMotion();

  return (
    <Section>
      <FadeUp>
        <SectionHeader eyebrow="우리가 일하는 방식" title="BLAH가 지키는 세 가지" />
      </FadeUp>

      <Stagger className="grid gap-6 md:grid-cols-3" gap={0.12}>
        {values.map(({ icon: Icon, title, body }) => (
          <StaggerItem key={title} className="h-full">
            <motion.div
              whileHover={reduced ? undefined : { y: -2 }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
              className="group h-full rounded-xl border border-slate-200 bg-white p-7 transition-colors hover:border-brand"
            >
              <motion.div
                initial={reduced ? false : { rotate: -8, scale: 0.9 }}
                whileInView={{ rotate: 0, scale: 1 }}
                viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                transition={{
                  duration: motionTokens.duration.base,
                  ease: motionTokens.ease,
                  delay: 0.1,
                }}
                className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-mist text-brand-deep transition-colors group-hover:bg-brand group-hover:text-brand-fg"
              >
                <Icon size={22} strokeWidth={1.75} />
              </motion.div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{body}</p>
            </motion.div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
