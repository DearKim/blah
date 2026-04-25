import { LinkButton } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { useSeo, buildTitle } from "@/lib/seo";

export default function NotFound() {
  useSeo({ title: buildTitle("404") });

  return (
    <Section>
      <div className="mx-auto max-w-xl py-16 text-center md:py-24">
        <div className="text-sm font-medium tracking-widest text-slate-500 uppercase">
          404
        </div>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          페이지를 찾을 수 없습니다.
        </h1>
        <p className="mt-4 text-base text-slate-600">
          주소가 잘못되었거나 페이지가 이동되었을 수 있습니다.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <LinkButton to="/" size="lg">
            홈으로
          </LinkButton>
          <LinkButton to="/products" size="lg" variant="outline">
            제품 보기
          </LinkButton>
        </div>
      </div>
    </Section>
  );
}
