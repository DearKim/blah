# BLAH

> 고객의 편의를 위한 정보 서비스를 만드는 회사, **BLAH(블라)** 의 공식 사이트.

[blah.co.kr](https://blah.co.kr) — 회사 소개와 제품 포트폴리오를 안내하는 정적 사이트입니다.

## 무엇을 보여주는 사이트인가

- **BLAH라는 회사**가 무엇을 하는 회사인지
- 어떤 **제품**을 만들고 있는지 (현재: 의료 AI 정보 플랫폼 **A.PAGO(아파고)**, 초단기 긱워크 매칭 **TEUM(틈새)**)
- 각 제품이 어떤 **서비스**를 제공하는지, 누구에게 도움이 되는지
- 회사에 **연락**하는 방법

특별한 동적 기능 없이, 정보 전달에 집중한 정적(static) 사이트입니다.

## 기술 스택

- **React 19** + **TypeScript**
- **Vite 7** (빌드/개발 서버)
- **Tailwind CSS 4** (스타일, `@tailwindcss/vite`)
- **React Router 7** (멀티 페이지 라우팅)
- **Pretendard** 본문 폰트

자세한 결정 배경은 [docs/architecture/tech-stack-01.md](docs/architecture/tech-stack-01.md) 에 있습니다.

## 빠른 시작

```bash
pnpm install      # 의존성 설치
pnpm dev          # 로컬 개발 서버 (http://localhost:5173)
pnpm build        # 정적 빌드 (dist/)
pnpm preview      # 빌드 결과 로컬 확인
pnpm lint         # ESLint
```

## 라우트

- `/` — 홈
- `/products` — 제품 목록
- `/products/:slug` — 제품 상세 (현재 `apago`, `teum`)
- `/about` — 회사 소개
- `/contact` — 문의

새 제품 추가는 [docs/architecture/content-strategy-03.md](docs/architecture/content-strategy-03.md) 절차를 따릅니다.

## 디렉터리

```
blah/
├── public/
│   └── brand/                  로고·파비콘·앱 아이콘 (브랜드 자산)
│       ├── logos/              5종 (horizontal/vertical/symbol/mono/white)
│       └── icons/              favicon.svg, app-icon.svg
├── src/
│   ├── App.tsx                 라우트 정의
│   ├── main.tsx
│   ├── content/                회사 / 제품 / 네비 데이터
│   ├── routes/                 페이지 컴포넌트
│   ├── components/             layout / ui / home / product
│   ├── lib/                    cn, useSeo
│   └── styles/globals.css      Tailwind + Echo Wave 토큰
├── docs/                       모든 의사결정·시안·계획
└── ... (vite.config.ts, tsconfig.json, eslint.config.js, ...)
```

## 문서

작업을 시작하기 전에 [docs/index.md](docs/index.md) 를 먼저 읽어 주세요.

핵심 문서:
- 회사·제품 정보 — [docs/overview/](docs/overview/)
- 사이트에 들어갈 콘텐츠 시안 — [docs/content/](docs/content/)
- 기술 결정과 디렉터리 구조 — [docs/architecture/](docs/architecture/)
- 디자인 시스템·브랜드 자산 — [docs/design/](docs/design/)
- 페이지별 와이어프레임 — [docs/pages/](docs/pages/)
- 빌드·배포·SEO — [docs/deployment/](docs/deployment/)
- 일정과 미정 항목 — [docs/roadmap/](docs/roadmap/)

## 라이선스

내부용. 외부 공개 라이선스는 미정.
