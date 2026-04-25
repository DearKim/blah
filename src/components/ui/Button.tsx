import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router";
import { cn } from "@/lib/cn";

type Variant = "primary" | "outline" | "ghost" | "primary-inverse" | "outline-inverse";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:outline-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary: "bg-brand text-brand-fg hover:bg-brand-deep",
  outline:
    "border border-slate-300 bg-white text-slate-900 hover:border-brand hover:bg-brand-mist hover:text-brand-deep",
  ghost: "text-slate-700 hover:bg-brand-mist hover:text-brand-deep",
  // brand 배경 위에서 사용. 흰색 배경 + brand 텍스트(또렷한 #1D9E75 + semibold).
  "primary-inverse": "bg-white font-semibold text-brand hover:bg-brand-mist",
  // brand 배경 위에서 사용. 투명 + 흰색 보더/텍스트.
  "outline-inverse":
    "border border-white/60 bg-transparent text-white hover:border-white hover:bg-white/10 hover:text-white",
};

const sizes: Record<Size, string> = {
  sm: "h-8 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}

type LinkButtonProps = CommonProps & {
  to: string;
  external?: boolean;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

export function LinkButton({
  variant = "primary",
  size = "md",
  className,
  to,
  external,
  children,
  ...props
}: LinkButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);
  if (external) {
    return (
      <a href={to} target="_blank" rel="noreferrer" className={classes} {...props}>
        {children}
      </a>
    );
  }
  return (
    <Link to={to} className={classes} {...props}>
      {children}
    </Link>
  );
}
