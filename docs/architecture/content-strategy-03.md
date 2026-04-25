# 콘텐츠 관리 전략

사이트에 노출되는 모든 텍스트·메타·링크를 어떻게 관리할지 정한 문서입니다.

## 원칙

1. **콘텐츠는 코드와 분리하지만, 같은 저장소에 둔다.**
   별도 CMS 없음. `src/content/` 하위의 TypeScript 모듈로 관리.
2. **타입을 강하게 잡는다.**
   누락된 필드, 잘못된 슬러그, 빠진 이미지 경로는 빌드 단계에서 잡힌다.
3. **시안은 [`docs/content/`](../content/) 에서, 최종 데이터는 `src/content/` 에서.**
   기획자는 `docs/content/<slug>.md` 만 보면 되고, 개발자는 그 내용을 타입 객체로 옮긴다.

## 콘텐츠 모듈

### `src/content/company.ts`

회사 정보. About 페이지·푸터·OG 메타·문의 페이지에서 공통 사용.

```ts
export const company = {
  name: "BLAH",
  legalName: "(미정)",
  tagline: "고객의 편의를 위한 정보 서비스",
  domain: "blah.co.kr",
  email: "(미정)",
  address: "(미정)",
  registration: "(미정)",
  social: {
    // 미정 — 결정 시 추가
  },
} as const;
```

### `src/content/products.ts`

제품 목록·상세에서 사용하는 데이터.

```ts
export type ProductStatus = "live" | "beta" | "preparing";

export type Product = {
  slug: "apago" | "teum" | string;        // URL 식별자
  name: string;                            // 영문 표기
  nameKo: string;                          // 한글 표기
  tagline: string;                         // 한 줄 슬로건
  domain: string;                          // 분야 (헬스케어 등)
  status: ProductStatus;                   // 라이프사이클 상태
  audiences: string[];                     // 타깃 사용자
  summary: string;                         // 2~3줄 요약 (카드용)
  description: string;                     // 상세 본문 (한 단락 ~ 여러 단락)
  features: { title: string; body: string }[];
  promises?: string[];                     // "약속" 섹션 항목
  externalUrl?: string;                    // 운영 사이트 URL
  logo?: string;                           // 카드용 로고 자산 경로
};

export const products: Product[] = [
  // apago, teum
];

export const getProductBySlug = (slug: string) =>
  products.find((p) => p.slug === slug);
```

### `src/content/nav.ts`

헤더·푸터 네비게이션 항목.

```ts
export const headerNav = [
  { label: "제품", to: "/products" },
  { label: "회사 소개", to: "/about" },
  { label: "문의", to: "/contact" },
] as const;

export const footerNav = [
  // ...
] as const;
```

## 새 제품을 추가할 때

1. `docs/content/<slug>-<NN>.md` 에 카피 시안을 먼저 작성한다 (기존 `apago-01.md`, `teum-02.md` 형식 따라).
2. 본 문서의 `Product` 타입에 맞춰 `src/content/products.ts` 의 `products` 배열에 객체 한 개를 추가한다.
3. 로고·이미지는 `src/assets/products/<slug>/` 아래에 두고, `logo` 필드에 경로를 적는다.
4. [`docs/overview/products-02.md`](../overview/products-02.md) 의 표에도 한 줄을 추가한다.
5. [`docs/content/index.md`](../content/index.md) 의 표에도 한 줄을 추가한다.

이게 전부입니다. 라우트나 컴포넌트는 수정할 필요가 없습니다 — 목록·상세 페이지가 데이터 기반으로 자동 렌더링됩니다.

## 콘텐츠 변경 시 체크리스트

- [ ] 시안 문서(`docs/content/`) 와 데이터 모듈(`src/content/`) 의 내용이 일치하는가
- [ ] 모든 제품에 `summary`, `description`, `audiences`, `tagline` 이 있는가
- [ ] 외부 링크가 들어갔다면 실제로 살아 있는 URL 인가
- [ ] OG 이미지가 필요한 페이지에 자산이 준비되었는가 ([../deployment/build-and-deploy-01.md](../deployment/build-and-deploy-01.md))

## 왜 MDX 가 아닌가

상세 페이지가 단순 본문·기능 리스트·CTA 정도라 MDX 의 표현력이 필요하지 않습니다.
나중에 블로그·릴리스 노트가 필요해지면 그때 MDX 도입을 재검토합니다.
