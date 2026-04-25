import { Section, SectionHeader } from "@/components/ui/Section";
import { ProductCard } from "@/components/product/ProductCard";
import { products } from "@/content/products";
import { useSeo, buildTitle } from "@/lib/seo";

export default function ProductsList() {
  useSeo({
    title: buildTitle("제품"),
    description:
      "BLAH가 만들고 운영하는 정보 서비스 — 의료 AI 정보 플랫폼 A.PAGO, 초단기 긱워크 매칭 TEUM.",
  });

  return (
    <Section>
      <SectionHeader
        eyebrow="Products"
        title="제품"
        description="BLAH가 만들고 운영하는 정보 서비스입니다. 각각의 자세한 내용은 카드를 눌러 확인해 주세요."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>

      <div className="mt-16 rounded-xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center">
        <p className="text-sm text-slate-600">
          더 많은 정보 서비스가 준비 중입니다.
        </p>
      </div>
    </Section>
  );
}
