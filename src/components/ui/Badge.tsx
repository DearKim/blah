import type { HTMLAttributes } from "react";
import type { ProductStatus } from "@/content/products";
import { cn } from "@/lib/cn";

type StatusBadgeProps = HTMLAttributes<HTMLSpanElement> & {
  status: ProductStatus;
};

const statusLabels: Record<ProductStatus, string> = {
  live: "운영 중",
  beta: "베타",
  preparing: "준비 중",
};

const statusStyles: Record<ProductStatus, string> = {
  live: "bg-emerald-50 text-emerald-700 border-emerald-200",
  beta: "bg-amber-50 text-amber-800 border-amber-200",
  preparing: "bg-slate-100 text-slate-600 border-slate-200",
};

export function StatusBadge({ status, className, ...props }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
        statusStyles[status],
        className,
      )}
      {...props}
    >
      {statusLabels[status]}
    </span>
  );
}
