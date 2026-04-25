import { LinkButton } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";

export function Hero() {
  return (
    <section className="border-b border-slate-200 bg-white">
      <Container className="py-20 md:py-32">
        <p className="text-sm font-medium tracking-widest text-brand-deep uppercase">
          BLAH
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
          고객의 편의를 위한 <br className="hidden md:inline" />
          정보 서비스를 만듭니다.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-600 md:text-xl">
          흩어져 있는 데이터를 한곳에서 객관적으로 비교하고 탐색할 수 있도록 만듭니다.
          광고가 아닌 정보, 추천이 아닌 사실 — 정보의 공백을 메우는 디지털 서비스입니다.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <LinkButton to="/products" size="lg">
            제품 보기
          </LinkButton>
          <LinkButton to="/about" size="lg" variant="outline">
            회사 소개
          </LinkButton>
        </div>
      </Container>
    </section>
  );
}
