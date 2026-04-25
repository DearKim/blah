import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import type { Product } from "@/content/products";
import { StatusBadge } from "@/components/ui/Badge";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      to={`/products/${product.slug}`}
      className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white p-7 transition-all hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
    >
      <div className="mb-5 flex items-center gap-2">
        <StatusBadge status={product.status} />
        <span className="text-xs text-slate-500">{product.domain}</span>
      </div>

      <h3 className="text-xl font-bold text-slate-900">
        {product.name}{" "}
        <span className="text-base font-normal text-slate-500">
          ({product.nameKo})
        </span>
      </h3>
      <p className="mt-1 text-sm text-slate-600">{product.tagline}</p>

      <p className="mt-5 flex-1 text-sm leading-relaxed text-slate-700">
        {product.summary}
      </p>

      <div className="mt-6 flex items-center text-sm font-medium text-slate-900">
        자세히 보기
        <ArrowRight
          size={16}
          className="ml-1 transition-transform group-hover:translate-x-0.5"
        />
      </div>
    </Link>
  );
}
