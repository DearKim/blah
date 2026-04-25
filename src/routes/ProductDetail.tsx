import { useParams } from "react-router";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ProductHero } from "@/components/product/ProductHero";
import { FeatureList } from "@/components/product/FeatureList";
import { ProductCard } from "@/components/product/ProductCard";
import { getOtherProducts, getProductBySlug } from "@/content/products";
import { useSeo, buildTitle } from "@/lib/seo";
import NotFound from "./NotFound";

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug);

  // Hooks must run unconditionally
  useSeo({
    title: buildTitle(product ? product.name : "제품을 찾을 수 없습니다"),
    description: product?.summary,
  });

  if (!product) {
    return <NotFound />;
  }

  const others = getOtherProducts(product.slug);

  return (
    <>
      <ProductHero product={product} />

      <Section>
        <div className="mx-auto max-w-3xl">
          <p className="text-lg leading-relaxed text-slate-700 md:text-xl">
            {product.description}
          </p>
        </div>
      </Section>

      <Section muted>
        <SectionHeader title="핵심 기능" />
        <FeatureList features={product.features} />
      </Section>

      <Section>
        <SectionHeader title="누구에게 도움이 되는가" />
        <ul className="grid gap-3 md:grid-cols-2">
          {product.audiences.map((audience) => (
            <li
              key={audience}
              className="rounded-lg border border-slate-200 bg-white px-5 py-4 text-sm text-slate-700"
            >
              {audience}
            </li>
          ))}
        </ul>
      </Section>

      {product.promises && product.promises.length > 0 && (
        <Section muted>
          <SectionHeader title="약속" />
          <ul className="space-y-3">
            {product.promises.map((promise, idx) => (
              <li
                key={idx}
                className="flex gap-3 rounded-lg border border-slate-200 bg-white px-5 py-4 text-sm text-slate-700"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
                  {idx + 1}
                </span>
                {promise}
              </li>
            ))}
          </ul>
        </Section>
      )}

      {others.length > 0 && (
        <Section>
          <SectionHeader title="다른 제품 보기" />
          <div className="grid gap-6 md:grid-cols-2">
            {others.map((other) => (
              <ProductCard key={other.slug} product={other} />
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
