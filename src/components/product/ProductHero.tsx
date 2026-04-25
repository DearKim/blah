import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/content/products";
import { StatusBadge } from "@/components/ui/Badge";
import { LinkButton } from "@/components/ui/Button";

type ProductHeroProps = {
  product: Product;
};

export function ProductHero({ product }: ProductHeroProps) {
  return (
    <div className="border-b border-slate-200 bg-white">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
        <div className="flex flex-wrap items-center gap-3">
          <StatusBadge status={product.status} />
          <span className="text-sm text-slate-500">{product.domain}</span>
        </div>

        <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
          {product.name}
          <span className="ml-3 text-2xl font-normal text-slate-500 md:text-3xl">
            {product.nameKo}
          </span>
        </h1>

        <p className="mt-4 max-w-2xl text-lg text-slate-600 md:text-xl">
          {product.tagline}
        </p>

        {product.externalUrl && (
          <div className="mt-8">
            <LinkButton
              to={product.externalUrl}
              external
              variant="primary"
              size="lg"
            >
              운영 사이트로 이동
              <ArrowUpRight size={18} />
            </LinkButton>
          </div>
        )}
      </div>
    </div>
  );
}
