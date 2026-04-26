# 제품 페이지 (`/products`, `/products/:slug`)

두 페이지의 시안을 한 문서에 정리합니다. 둘 다 동일한 데이터 소스([`src/content/products.ts`](../architecture/content-strategy-03.md))를 씁니다.

## 1. 제품 목록 (`/products`)

### 목적

회사가 만든 모든 제품을 한 화면에서 훑게 한다. 작은 카드 그리드 대신 **홈의 ProductSection 풀섹션을 그대로 재사용** 해, 각 제품을 자기 색·영상·로고 그대로 노출.

### 섹션 구성

```
┌─────────────────────────────────────────┐
│ 1. Hero (ValueProps 결)                  │
│   - eyebrow: "Products" (brand-deep)     │
│   - h2: "BLAH가 만드는 정보 서비스." (brand) │
│   - lead: 영역마다 한 갈래씩 정리.          │
├─────────────────────────────────────────┤
│ 2. ProductSection — A.PAGO (홈 섹션 그대로)│
├─────────────────────────────────────────┤
│ 3. ProductSection — TEUM (alternate)     │
├─────────────────────────────────────────┤
│ 4. 풋터 — "더 많은 정보 서비스가 준비 중"     │
└─────────────────────────────────────────┘
```

### 컴포넌트 재사용

[`src/components/home/ProductSection.tsx`](../architecture/directory-layout-02.md) 를 그대로 import:

```tsx
{products.map((product, idx) => (
  <ProductSection
    key={product.slug}
    slug={product.slug}
    index={idx + 1}
    alternate={idx % 2 === 1}
    muted={idx % 2 === 0}
  />
))}
```

### SEO

- `<title>`: `제품 | BLAH`
- description: 제품들의 요약을 합친 1문장.

---

## 2. 제품 상세 (`/products/:slug`)

### 목적

제품 하나를 처음 본 사람이 "**이게 뭐고, 누구한테 좋고, 어디로 들어가면 되는지**" 를 파악하게 한다. **페이지 전반이 그 제품의 accent 색** 으로 통일되어, 회사 사이트의 회사 색(brand teal) 과 명확히 구분되는 정체성을 가진다.

### 섹션 구성

```
┌─────────────────────────────────────────┐
│ 1. Hero — accent 풀블리드                 │
│   ┌────────────────────────────────┐    │
│   │ accent 배경 + 우상단 화이트 글로우  │    │
│   │ [흰 로고 마크] [도메인 라벨]        │    │
│   │ A.PAGO 아파고 (흰 글자, h1)        │    │
│   │ tagline (white/85)               │    │
│   │ [흰 배경 + accent 글자 CTA]        │    │
│   └────────────────────────────────┘    │
├─────────────────────────────────────────┤
│ 2. Overview — accent eyebrow + lead     │
│    description 본문 한 단락               │
├─────────────────────────────────────────┤
│ 3. 핵심 기능 — accent eyebrow + h2(accent)│
│    FeatureList — 좌측 accent 스트라이프 카드│
├─────────────────────────────────────────┤
│ 4. 누구에게 도움이 되는가                   │
│    accent eyebrow + accent 도트 마커      │
├─────────────────────────────────────────┤
│ 5. 약속 (있을 때만)                       │
│    accent eyebrow + accent 번호 원형      │
├─────────────────────────────────────────┤
│ 6. 다른 제품 보기 (BLAH 결로 복귀)          │
│    eyebrow `More from BLAH` (brand-deep) │
│    제품 카드 — 각 제품 자기 색 사용         │
└─────────────────────────────────────────┘
```

### 데이터 매핑

| 섹션 | 사용 필드 |
|---|---|
| Hero 흰 로고 | `logoWhiteSrc` |
| Hero 도메인·제품명 | `domain`, `name`, `nameKo` |
| Hero 슬로건 | `tagline` |
| Hero 배경·CTA 색 | `accentColor` |
| Hero 외부 CTA | `externalUrl` (없으면 버튼 숨김) |
| Overview | `description` |
| 핵심 기능 | `features[]` (FeatureList accent prop) |
| 누구에게 | `audiences[]` |
| 약속 | `promises?` |
| 다른 제품 | `getOtherProducts(slug)` — 자기 색으로 자동 렌더 |

> **status 배지는 노출하지 않음** — 사이트 전 영역에서 "운영 중"·"베타" 라벨 제거. `Product.status` 데이터는 보존.

### 슬러그 매칭과 404

- 라우트 파라미터 `:slug` 를 `getProductBySlug(slug)` 로 조회.
- 결과가 `undefined` 면 `<NotFound />` 를 그대로 렌더링하고 응답 시 200 으로 보내되 OG title 을 `404 | BLAH` 로 설정.
- 정적 호스팅 측 SPA fallback 설정은 [../deployment/build-and-deploy-01.md](../deployment/build-and-deploy-01.md) 참조.

### accent 색 적용 일관성

`accent` 변수를 ProductDetail 진입부에서 한 번 계산한 뒤(`product.accentColor ?? "var(--color-brand)"`) 모든 섹션에 inline `style` 로 흩뿌립니다. Tailwind 동적 클래스는 사용하지 않음 — 임의 16진 코드를 안전하게 처리하기 위함.

### SEO

- `<title>`: `{제품명} | BLAH` (예: `A.PAGO | BLAH`)
- description: 제품 `summary` 그대로
- OG 이미지: 제품 전용이 있으면 사용, 없으면 사이트 기본 OG 사용

### 콘텐츠 시안

각 제품의 본문은 다음 시안 문서를 그대로 옮깁니다.

- A.PAGO: [../content/apago-01.md](../content/apago-01.md)
  - 의료법·의료기기법·수의사법 컴플라이언스 가이드: [../content/medical-compliance-03.md](../content/medical-compliance-03.md)
- TEUM: [../content/teum-02.md](../content/teum-02.md)
