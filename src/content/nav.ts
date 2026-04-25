export type NavItem = {
  label: string;
  to: string;
};

export const headerNav: readonly NavItem[] = [
  { label: "제품", to: "/products" },
  { label: "회사 소개", to: "/about" },
  { label: "문의", to: "/contact" },
] as const;

export const footerNav: readonly NavItem[] = [
  { label: "제품", to: "/products" },
  { label: "회사 소개", to: "/about" },
  { label: "문의", to: "/contact" },
] as const;
