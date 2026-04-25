# 작업 단계

## 현재 위치

**M3 — 제품·회사·문의 페이지** 까지 완료. 다음은 **M4 (SEO · 자산 · 배포)** 입니다.

## 단계별 계획

### M0. 문서화 ✅

- [x] 루트 README 작성
- [x] docs 인덱스 작성
- [x] 회사·제품 개요 작성
- [x] A.PAGO / TEUM 콘텐츠 시안 작성
- [x] 기술 스택·디렉터리·콘텐츠 전략 결정
- [x] 디자인(브랜드·색상·레이아웃) 가이드라인 작성
- [x] 페이지별 와이어프레임 작성
- [x] 배포 가이드 작성
- [x] 브랜드 자산(Echo Wave 팔레트·로고 5종·아이콘 2종) 결정
- [ ] 남은 미정 항목(법인 정식 명칭·설립일·호스팅 선택 등) — [open-questions-02.md](open-questions-02.md) 참조

### M1. 스캐폴딩 ✅

- [x] Vite + React 19 + TS 템플릿 생성
- [x] Tailwind CSS 4 설치·설정 (`@tailwindcss/vite`)
- [x] React Router v7 설치, 라우트 6개 골격(Home / ProductsList / ProductDetail / About / Contact / NotFound) 추가
- [x] ESLint + Prettier 설정
- [x] `src/content/{company,products,nav}.ts` 스캐폴드, 타입 정의
- [x] 글로벌 레이아웃(Header / Footer / Container) 구현
- [x] `pnpm dev`, `pnpm build`, `pnpm preview` 정상 동작 확인
- [x] `.gitignore` 정비

### M2. 디자인 시스템 + 홈 ✅

- [x] Echo Wave 컬러 토큰 적용 ([../design/color-palette-02.md](../design/color-palette-02.md))
- [x] 브랜드 자산 적용 — 로고는 Header / Footer 에, 파비콘·앱 아이콘은 `index.html` 에
- [x] 타이포그래피(Pretendard) 적용
- [x] 공통 UI: `Button`, `Section`, `SectionHeader`, `Container`, `StatusBadge`
- [x] Header / Footer 정식 구현 (apago / TEUM 과 동일한 사업자 정보 블록 포함)
- [x] 홈 페이지 4개 섹션 구현 ([../pages/home-01.md](../pages/home-01.md))
- [ ] 반응형 검수 (모바일 / 태블릿 / 데스크톱) — 디자이너 확인 대기

### M3. 제품 · 회사 · 문의 페이지 ✅

- [x] 제품 목록 페이지 (`/products`) 카드 그리드
- [x] 제품 상세 페이지 (`/products/:slug`) 데이터 매핑
- [x] A.PAGO 콘텐츠를 `src/content/products.ts` 로 옮기기
- [x] TEUM 콘텐츠를 `src/content/products.ts` 로 옮기기
- [x] About 페이지 (회사 정보 표 자동 렌더링)
- [x] Contact 페이지 (메일 채널 + 카테고리별 가이드)
- [x] 404 페이지

### M4. SEO · 자산 · 배포 (다음 단계)

- [x] `useSeo` 훅으로 페이지별 title/description/OG 메타 적용
- [x] favicon, apple-touch-icon 적용
- [ ] OG 이미지 1장 제작 (1200×630) — 워드마크 + 슬로건
- [ ] `sitemap.xml` 생성 (정적 라우트 5개)
- [ ] 호스팅 결정·연결 (Vercel / Cloudflare Pages 중)
- [ ] 도메인 `blah.co.kr` 연결
- [ ] 프리뷰 → 운영 배포

### M5. 최소 운영 · 측정 (선택)

- [ ] 분석 도구 도입 결정 시 추가
- [ ] 성능 점검 (Lighthouse 90+ 목표)
- [ ] 접근성 (alt 텍스트, 시맨틱 마크업) 점검

### 향후 후보 (현재 범위 밖)

- 다국어(ko/en) 분리
- 다크 모드
- 블로그 / 릴리스 노트 (MDX 도입 시점)
- 채용 페이지 (포지션 데이터 모듈화)

## 작업 순서 원칙

- **데이터(콘텐츠) → 스캐폴드 → 디자인 → 페이지 → 배포** 순서로 직렬 진행.
- 페이지는 만든 순서대로 라우터에 연결하고, 미구현 페이지는 NotFound 로 폴백.
- 미정 디자인 토큰은 **임시 토큰** 으로 작업을 시작 — 변경 비용은 토큰만 교체하면 끝.
