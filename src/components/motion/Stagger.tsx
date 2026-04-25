import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeUp, motionTokens, staggerContainer, viewportOnce } from "@/lib/motion";

type StaggerProps = {
  children: ReactNode;
  className?: string;
  /** 자식 간 간격 (초). 기본 0.1. */
  gap?: number;
  /** 마운트 즉시 재생할지. 기본은 스크롤 트리거. */
  immediate?: boolean;
  as?: "div" | "section" | "ul" | "ol";
};

/**
 * 자식들을 순차적으로 페이드업시키는 컨테이너.
 * 자식은 `<StaggerItem>` 으로 감싸야 합니다.
 *
 * @example
 * <Stagger>
 *   <StaggerItem><Card/></StaggerItem>
 *   <StaggerItem><Card/></StaggerItem>
 * </Stagger>
 */
export function Stagger({
  children,
  className,
  gap = motionTokens.stagger.base,
  immediate = false,
  as = "div",
}: StaggerProps) {
  const Component = motion[as];

  const triggerProps = immediate
    ? { initial: "hidden" as const, animate: "visible" as const }
    : {
        initial: "hidden" as const,
        whileInView: "visible" as const,
        viewport: viewportOnce,
      };

  return (
    <Component className={className} variants={staggerContainer(gap)} {...triggerProps}>
      {children}
    </Component>
  );
}

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "li" | "article" | "section";
};

/**
 * Stagger 의 자식. 페이드업 변형을 자동으로 적용받습니다.
 */
export function StaggerItem({ children, className, as = "div" }: StaggerItemProps) {
  const Component = motion[as];
  return (
    <Component className={className} variants={fadeUp}>
      {children}
    </Component>
  );
}
