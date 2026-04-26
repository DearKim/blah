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

export type ProductFeature = {
  title: string;
  body: string;
};

export type ProductPillar = {
  label: string;     // 짧은 영역 라벨 (예: "병의원·동물병원 지도")
  body: string;      // 한두 문장의 단락 — 굿닥식 서비스 소개 톤
};

export type Product = {
  slug: "apago" | "teum" | string;        // URL 식별자
  name: string;                            // 영문 표기
  nameKo: string;                          // 한글 표기
  tagline: string;                         // 한 줄 슬로건
  domain: string;                          // 분야 (헬스케어 등)
  status: ProductStatus;                   // 라이프사이클 상태 (현재 화면 미노출, 데이터로만 보존)
  audiences: string[];                     // 타깃 사용자
  summary: string;                         // 2~3줄 요약 (카드·홈 lead 용)
  description: string;                     // 상세 본문 (한 단락 ~ 여러 단락)
  features: ProductFeature[];              // 상세 페이지의 세분화 기능 리스트
  pillars?: ProductPillar[];               // 홈 섹션 단락 블록 — 있으면 features 대신 사용
  promises?: string[];                     // "약속" 섹션 항목
  externalUrl?: string;                    // 운영 사이트 URL
  accentColor?: string;                    // 비주얼 블록 배경·pillar 라벨·CTA 색
  videoSrc?: string;                       // 홈 비주얼 블록 배경 영상 URL (Coverr 등)
  logoSrc?: string;                        // 컬러 로고 (밝은 배경용) — 카드/상세 영역
  logoWhiteSrc?: string;                   // 흰색 로고 (accent 배경 위) — 제품 상세 Hero
};

export const products: Product[] = [
  // apago, teum
];

export const getProductBySlug = (slug: string) =>
  products.find((p) => p.slug === slug);
```

### 신규 필드 보충 설명

- **`pillars`** — 홈 `ProductSection` 에서만 사용. 굿닥식 "라벨 + 단락" 형태로 서비스의 핵심 갈래를 2~3 개 보여줌. 없으면 `features.slice(0, 3)` 이 불릿 리스트로 폴백.
- **`videoSrc`** — 비주얼 블록 배경 영상. 미설정 시 `accentColor` 솔리드 블록만 노출. Coverr 처럼 hotlink 가능한 무료 라이선스 CDN 권장. `prefers-reduced-motion` 환경에서는 자동 비렌더. CSP 의 `media-src` 에 출처가 등록돼야 함.
- **`accentColor`** — 미설정 시 `var(--color-brand)` 자동 사용. 비주얼 블록 배경 / pillar 라벨 / 상세 페이지 Hero 풀블리드 / 섹션 헤딩 / 마커 / CTA 까지 페이지 전반에 적용되어 제품별 시각 차별화.
- **`logoSrc` / `logoWhiteSrc`** — `public/brand/products/<slug>-icon.svg` / `<slug>-icon-white.svg` 한 쌍. 컬러 로고는 흰 배경(홈 카드 하단·상세 페이지 카드·About products 그리드)에, 흰 로고는 accent 배경(제품 상세 Hero)에 사용. 자세한 자산 사양은 [`../design/brand-assets-04.md`](../design/brand-assets-04.md) §6 참조.
- **`status`** — 현재 화면에서 노출하지 않습니다 ("운영 중"·"베타" 라벨 제거). 데이터 모델에는 남겨 두어 후일 필터/정렬/RSS 등에 재활용 가능. 기존 `StatusBadge` 컴포넌트는 삭제됨.

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
3. 로고는 `public/brand/products/<slug>-icon.svg` (컬러) + `<slug>-icon-white.svg` (흰색) 한 쌍을 두고, `logoSrc` / `logoWhiteSrc` 필드에 절대 경로(`/brand/products/...`) 를 적는다.
4. `accentColor` 는 그 제품의 공식 브랜드 색을 16진 코드로 (예: A.PAGO `#1878CE`, TEUM `#82C926`).
5. [`docs/overview/products-02.md`](../overview/products-02.md) 의 표에도 한 줄을 추가한다.
6. [`docs/content/index.md`](../content/index.md) 의 표에도 한 줄을 추가한다.

이게 전부입니다. 라우트나 컴포넌트는 수정할 필요가 없습니다 — 목록·상세 페이지가 데이터 기반으로 자동 렌더링됩니다 (홈 섹션 / `/products` 풀섹션 / `/products/:slug` 상세 모두).

## 콘텐츠 변경 시 체크리스트

- [ ] 시안 문서(`docs/content/`) 와 데이터 모듈(`src/content/`) 의 내용이 일치하는가
- [ ] 모든 제품에 `summary`, `description`, `audiences`, `tagline` 이 있는가
- [ ] 외부 링크가 들어갔다면 실제로 살아 있는 URL 인가
- [ ] OG 이미지가 필요한 페이지에 자산이 준비되었는가 ([../deployment/build-and-deploy-01.md](../deployment/build-and-deploy-01.md))

## 왜 MDX 가 아닌가

상세 페이지가 단순 본문·기능 리스트·CTA 정도라 MDX 의 표현력이 필요하지 않습니다.
나중에 블로그·릴리스 노트가 필요해지면 그때 MDX 도입을 재검토합니다.
