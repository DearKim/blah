import { Section, SectionHeader } from "@/components/ui/Section";
import { ProductCard } from "@/components/product/ProductCard";
import { products } from "@/content/products";

export function ProductGrid() {
  return (
    <Section muted>
      <SectionHeader
        eyebrow="제품"
        title="BLAH가 만드는 정보 서비스"
        description="현재 운영 중이거나 준비 중인 제품입니다. 각각 흩어진 정보를 한곳에서 비교·탐색할 수 있도록 설계되었습니다."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </Section>
  );
}
