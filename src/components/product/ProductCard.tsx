import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import type { Product } from "@/content/products";
import { StatusBadge } from "@/components/ui/Badge";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      className="group h-full"
    >
      <Link
        to={`/products/${product.slug}`}
        className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-7 transition-[border-color,box-shadow] duration-300 ease-out group-hover:border-brand group-hover:shadow-lg"
      >
        <div className="mb-5 flex items-center gap-2">
          <StatusBadge status={product.status} />
          <span className="text-xs text-slate-500">{product.domain}</span>
        </div>

        <h3 className="text-xl font-bold text-slate-900">
          {product.name}{" "}
          <span className="text-base font-normal text-slate-500">({product.nameKo})</span>
        </h3>
        <p className="mt-1 text-sm text-slate-600">{product.tagline}</p>

        <p className="mt-5 flex-1 text-sm leading-relaxed text-slate-700">{product.summary}</p>

        <div className="mt-6 flex items-center text-sm font-medium text-slate-900 transition-colors group-hover:text-brand-deep">
          자세히 보기
          <ArrowRight
            size={16}
            className="ml-1 transition-transform duration-300 group-hover:translate-x-1"
          />
        </div>
      </Link>
    </motion.div>
  );
}
