# 디렉터리 구조 계획

코드 작업이 시작되면 만들어질 디렉터리 구조입니다. 변경이 생기면 이 문서를 먼저 수정하고 코드를 옮깁니다.

## 루트

```
blah/
├── README.md                  # 프로젝트 소개·빠른 시작
├── docs/                      # 본 디렉터리 (계획·시안·운영)
├── public/                    # 정적 자산 (그대로 dist/ 에 복사됨)
│   ├── .htaccess              #   Apache 보안 헤더 + SPA fallback
│   ├── _redirects             #   Netlify SPA fallback
│   ├── robots.txt
│   ├── brand/                 #   로고·아이콘·애니메이션 + products 컬러 로고
│   └── fonts/                 #   SUIT-Variable.woff2 (자체 호스팅, 610 KB)
├── src/                       # 애플리케이션 코드
├── index.html                 # Vite 진입 HTML
├── vite.config.ts             # SRI 인라인 플러그인 + sourcemap 차단 + esbuild.drop
├── tsconfig.json
├── eslint.config.js
├── package.json
├── pnpm-lock.yaml
└── .gitignore
```

## src/

```
src/
├── main.tsx                   # 앱 부트스트랩 (RouterProvider 마운트)
├── App.tsx                    # 글로벌 레이아웃 + Routes
├── routes/                    # 페이지 단위 컴포넌트 (라우터 노드)
│   ├── Home.tsx
│   ├── ProductsList.tsx       # /products
│   ├── ProductDetail.tsx      # /products/:slug
│   ├── About.tsx              # /about
│   ├── Contact.tsx            # /contact
│   └── NotFound.tsx
│
├── components/                # 재사용 컴포넌트
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Container.tsx
│   ├── product/
│   │   ├── ProductCard.tsx    # /products 목록(다른 제품 보기) — 컬러 로고 + accent CTA
│   │   ├── ProductHero.tsx    # /products/:slug accent 풀블리드 Hero
│   │   └── FeatureList.tsx    # accent 좌측 스트라이프 카드 리스트
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── ValueProps.tsx     # 풀블리드 영상 + 시그니처 pill
│   │   └── ProductSection.tsx # accent + 영상 + 컬러 로고/워드마크 카드
│   ├── motion/                # FadeUp / Stagger / EchoWaveBars / ScrollProgress
│   └── ui/                    # 원자 컴포넌트 (Button, Section, ...)
│
├── content/                   # 사이트에 들어가는 정적 콘텐츠 (TS 모듈)
│   ├── company.ts             # 회사 정보 (이름, 미션, 연락처 등)
│   ├── products.ts            # 제품 목록 + 상세 데이터 (accentColor, logoSrc 포함)
│   └── nav.ts                 # 헤더·푸터 네비게이션 항목
│
├── lib/
│   ├── seo.ts                 # 페이지별 title/description/og 설정 헬퍼
│   ├── motion.ts              # framer-motion 토큰·variants
│   └── cn.ts                  # className 합치기 유틸 (clsx + tailwind-merge)
│
└── styles/
    └── globals.css            # Tailwind 진입 + @font-face (SUIT 자체 호스팅) + 전역 토큰
```

> 별도의 `src/assets/` 는 두지 않습니다. 모든 정적 이미지는 `public/brand/` 절대 경로로 참조 — 빌드 후 그대로 dist/ 에 복사돼 캐시 친화적이고, 컴포넌트 코드와 자산 경로가 분리됩니다.

## 라우트 정의 (예시)

[`src/App.tsx`](#) 에 정의될 라우트 배열의 모양:

```ts
const routes = [
  { path: "/",                element: <Home /> },
  { path: "/products",        element: <ProductsList /> },
  { path: "/products/:slug",  element: <ProductDetail /> },
  { path: "/about",           element: <About /> },
  { path: "/contact",         element: <Contact /> },
  { path: "*",                element: <NotFound /> },
];
```

상세 페이지는 `:slug` 파라미터로 [`src/content/products.ts`](content-strategy-03.md) 에서 매칭되는 항목을 찾아 렌더링합니다 (404 처리 포함).

## 결정 원칙

- **routes/ 와 components/ 분리**: 라우터 노드와 재사용 컴포넌트의 책임을 시각적으로 구분.
- **content/ 분리**: 사이트의 모든 텍스트성 정보는 `content/` 모듈에 모아 두어, 콘텐츠 수정자가 한 곳만 보면 되도록 한다.
- **상품·도메인별 폴더**: `components/product/`, `components/home/` 처럼 페이지/도메인 단위로 묶는다. 너무 잘게 쪼개지 않는다.
- **파일 1개 = 컴포넌트 1개**: `default export` 한 컴포넌트가 파일명과 일치.
- **경로 별칭**: `tsconfig.json` 에서 `@/*` → `src/*` 정도만. 깊은 별칭 트리 만들지 않음.

## 무엇을 만들지 않을지

- 글로벌 상태 관리 라이브러리 (Zustand/Redux 등) — 정적 사이트라 불필요
- 폼 라이브러리 — 동적 폼 없음
- 데이터 패칭 라이브러리 (TanStack Query) — 외부 API 호출 없음
- 컴포넌트 라이브러리 — 필요한 만큼만 직접 만들거나 shadcn 스타일로 복사 후 인라인
