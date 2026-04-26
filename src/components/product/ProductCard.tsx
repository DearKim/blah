import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import type { Product } from "@/content/products";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const accent = product.accentColor ?? "var(--color-brand)";
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
        <div className="mb-5 flex items-center gap-3">
          {product.logoSrc && (
            <img
              src={product.logoSrc}
              alt=""
              aria-hidden="true"
              className="h-8 w-auto shrink-0"
              loading="lazy"
            />
          )}
          <span className="text-xs text-slate-500">{product.domain}</span>
        </div>

        <h3 className="text-xl font-bold" style={{ color: accent }}>
          {product.name}{" "}
          <span className="text-base font-normal text-slate-500">({product.nameKo})</span>
        </h3>
        <p className="mt-1 text-sm text-slate-600">{product.tagline}</p>

        <p className="mt-5 flex-1 text-sm leading-relaxed text-slate-700">{product.summary}</p>

        <div
          className="mt-6 flex items-center text-sm font-medium transition-transform group-hover:translate-x-0.5"
          style={{ color: accent }}
        >
          자세히 보기
          <ArrowRight size={16} className="ml-1" />
        </div>
      </Link>
    </motion.div>
  );
}
