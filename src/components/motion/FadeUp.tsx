import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";

type FadeUpProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** 마운트 즉시 재생할지(스크롤 트리거 안 함). 기본은 스크롤 트리거. */
  immediate?: boolean;
  as?: "div" | "section" | "article" | "header" | "footer" | "li" | "ul";
};

/**
 * 자식을 24px 아래에서 페이드업으로 등장시킵니다.
 * 기본은 뷰포트 진입 시 1회 트리거. `immediate` 로 마운트 즉시 재생.
 */
export function FadeUp({
  children,
  className,
  delay = 0,
  immediate = false,
  as = "div",
}: FadeUpProps) {
  const Component = motion[as];

  const triggerProps = immediate
    ? { initial: "hidden" as const, animate: "visible" as const }
    : {
        initial: "hidden" as const,
        whileInView: "visible" as const,
        viewport: viewportOnce,
      };

  return (
    <Component
      className={className}
      variants={fadeUp}
      transition={{ delay }}
      {...triggerProps}
    >
      {children}
    </Component>
  );
}
