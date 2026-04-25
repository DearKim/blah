import type { ProductFeature } from "@/content/products";

type FeatureListProps = {
  features: ProductFeature[];
};

export function FeatureList({ features }: FeatureListProps) {
  return (
    <ul className="grid gap-5 md:grid-cols-2">
      {features.map((feature) => (
        <li
          key={feature.title}
          className="rounded-xl border border-slate-200 bg-white p-6"
        >
          <h3 className="text-base font-semibold text-slate-900">{feature.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            {feature.body}
          </p>
        </li>
      ))}
    </ul>
  );
}
