import { Section } from "@/components/ui/Section";
import { Container } from "@/components/layout/Container";
import { ProductSection } from "@/components/home/ProductSection";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { products } from "@/content/products";
import { useSeo, buildTitle } from "@/lib/seo";

export default function ProductsList() {
  useSeo({
    title: buildTitle("제품"),
    description:
      "BLAH가 만들고 운영하는 정보 서비스 — 의료 AI 정보 플랫폼 A.PAGO, 초단기 긱워크 매칭 TEUM.",
  });

  return (
    <>
      {/* Hero — 홈 ValueProps 결로 페이지 인트로 */}
      <Section>
        <Container className="!px-0">
          <Stagger gap={0.14} className="mx-auto max-w-3xl text-center">
            <StaggerItem>
              <p className="text-xs font-medium tracking-[0.25em] text-brand-deep uppercase md:text-sm">
                Products
              </p>
            </StaggerItem>

            <StaggerItem>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-brand md:text-5xl md:leading-[1.15]">
                BLAH가 만드는 <br className="md:hidden" />
                정보 서비스.
              </h1>
            </StaggerItem>

            <StaggerItem>
              <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-700 [word-break:keep-all] md:text-lg">
                흩어져 있던 데이터를 한곳에서 비교하고 탐색할 수 있도록,
                <br className="hidden md:inline" />
                영역마다 한 갈래씩 정리합니다.
              </p>
            </StaggerItem>
          </Stagger>
        </Container>
      </Section>

      {/* 홈 섹션 3·4 와 동일한 ProductSection — 한 제품씩 풀섹션으로 노출 */}
      {products.map((product, idx) => (
        <ProductSection
          key={product.slug}
          slug={product.slug}
          index={idx + 1}
          alternate={idx % 2 === 1}
          muted={idx % 2 === 0}
        />
      ))}

      {/* 풋터 — 새 제품 슬롯 안내 */}
      <Section>
        <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center">
          <p className="text-sm text-slate-600">
            더 많은 정보 서비스가 준비 중입니다.
          </p>
        </div>
      </Section>
    </>
  );
}
