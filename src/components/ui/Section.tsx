import type { HTMLAttributes, ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/cn";

type SectionProps = HTMLAttributes<HTMLElement> & {
  muted?: boolean;
  children: ReactNode;
};

export function Section({ muted, className, children, ...props }: SectionProps) {
  return (
    <section
      className={cn("py-14 md:py-24", muted && "bg-slate-50", className)}
      {...props}
    >
      <Container>{children}</Container>
    </section>
  );
}

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-10 md:mb-14", align === "center" && "text-center")}>
      {eyebrow && (
        <div className="mb-3 text-sm font-medium text-slate-500">{eyebrow}</div>
      )}
      <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-2xl text-base text-slate-600 md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
