# 작업 단계

## 현재 위치

**M4 — SEO · 자산 · 배포 보강** 까지 완료. 카페24 첫 배포 단계 진입.

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
- [x] 타이포그래피(SUIT Variable) 적용 — 자체 호스팅, 외부 CDN 의존 0
- [x] 공통 UI: `Button`, `Section`, `SectionHeader`, `Container`
- [x] Header / Footer 정식 구현 (apago / TEUM 과 동일한 사업자 정보 블록 포함)
- [x] 홈 페이지 5개 섹션 구현 ([../pages/home-01.md](../pages/home-01.md))
- [x] 반응형 검수 + 핵심 안전장치 (Header nav 작은 모바일·Contact 이메일 break-all·Footer 등)

### M3. 제품 · 회사 · 문의 페이지 ✅

- [x] 제품 목록 페이지 (`/products`) — 홈 ProductSection 풀섹션 재사용
- [x] 제품 상세 페이지 (`/products/:slug`) — accent 풀블리드 Hero + 모든 섹션 accent 정렬
- [x] A.PAGO 콘텐츠 + 의료법 컴플라이언스 가이드 ([../content/medical-compliance-03.md](../content/medical-compliance-03.md))
- [x] TEUM 콘텐츠
- [x] About 페이지 — 6개 섹션 (Hero·Mission·Values·운영 영역·회사 정보·CTA), 홈 결로 통일
- [x] Contact 페이지 — 4종 컬러 헤더 카드 (BLAH + apago + teum + brand-deep)
- [x] 404 페이지
- [x] "운영 중"·"베타" status 배지 사이트 전 영역에서 제거
- [x] 제품 컬러 로고 자산 추가 (`public/brand/products/`)

### M4. SEO · 자산 · 배포 ✅

- [x] `useSeo` 훅으로 페이지별 title/description/OG 메타 적용
- [x] favicon, apple-touch-icon 적용
- [x] **보안 보강** — SRI(SHA-256) 자동 주입, sourcemap 차단, esbuild.drop, .htaccess CSP/Frame/Permissions 헤더 ([../deployment/security-02.md](../deployment/security-02.md))
- [x] **SUIT 폰트 자체 호스팅** — `public/fonts/SUIT-Variable.woff2`, 외부 CDN 의존 0
- [x] 카페24 호스팅 연결 + `/www/` 배포 절차 ([../deployment/build-and-deploy-01.md](../deployment/build-and-deploy-01.md))
- [ ] OG 이미지 1장 제작 (1200×630) — 워드마크 + 슬로건
- [ ] `sitemap.xml` 생성 (정적 라우트 5개)
- [ ] 운영 도메인 `blah.co.kr` 연결 + HTTPS 활성

### M5. 최소 운영 · 측정 (다음 단계)

- [ ] 분석 도구 도입 결정 시 추가 (CSP `script-src` / `connect-src` 동시 갱신)
- [ ] 성능 점검 (Lighthouse 90+ 목표)
- [ ] 접근성 (alt 텍스트, 시맨틱 마크업) 점검
- [ ] 영상 자체 호스팅 검토 (CSP `media-src 'self'` 화)

### 향후 후보 (현재 범위 밖)

- 다국어(ko/en) 분리
- 다크 모드
- 블로그 / 릴리스 노트 (MDX 도입 시점)
- 채용 페이지 (포지션 데이터 모듈화)

## 작업 순서 원칙

- **데이터(콘텐츠) → 스캐폴드 → 디자인 → 페이지 → 배포** 순서로 직렬 진행.
- 페이지는 만든 순서대로 라우터에 연결하고, 미구현 페이지는 NotFound 로 폴백.
- 미정 디자인 토큰은 **임시 토큰** 으로 작업을 시작 — 변경 비용은 토큰만 교체하면 끝.
