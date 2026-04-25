import { useEffect } from "react";

type SeoOptions = {
  title: string;
  description?: string;
  ogImage?: string;
};

const DEFAULT_OG_IMAGE = "/og-image.png";

function setMeta(attr: "name" | "property", key: string, content: string): void {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export function useSeo({ title, description, ogImage }: SeoOptions): void {
  useEffect(() => {
    document.title = title;
    if (description) {
      setMeta("name", "description", description);
      setMeta("property", "og:description", description);
    }
    setMeta("property", "og:title", title);
    setMeta("property", "og:image", ogImage ?? DEFAULT_OG_IMAGE);
    setMeta("property", "og:url", window.location.href);
  }, [title, description, ogImage]);
}

export function buildTitle(pageName?: string): string {
  return pageName ? `${pageName} | BLAH` : "BLAH — 고객의 편의를 위한 정보 서비스";
}
