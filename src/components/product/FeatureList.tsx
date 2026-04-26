import type { ProductFeature } from "@/content/products";
import { FadeUp } from "@/components/motion/FadeUp";

type FeatureListProps = {
  features: ProductFeature[];
  /** 제목·좌측 스트라이프 색. 미설정 시 BLAH brand. */
  accent?: string;
};

export function FeatureList({ features, accent }: FeatureListProps) {
  const color = accent ?? "var(--color-brand)";

  return (
    <ul className="grid gap-5 md:grid-cols-2">
      {features.map((feature, i) => (
        <FadeUp key={feature.title} delay={i * 0.04} as="li">
          <div className="group relative h-full overflow-hidden rounded-xl border border-slate-200 bg-white p-6 transition-shadow hover:shadow-md">
            <span
              aria-hidden="true"
              className="absolute top-0 left-0 h-full w-1 transition-[filter] group-hover:brightness-90"
              style={{ backgroundColor: color }}
            />
            <h3 className="text-base font-semibold" style={{ color }}>
              {feature.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{feature.body}</p>
          </div>
        </FadeUp>
      ))}
    </ul>
  );
}
