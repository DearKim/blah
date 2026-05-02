# BLAH 문서 인덱스

`blah` 사이트(blah.co.kr)를 만들고 운영하기 위한 모든 의사결정·콘텐츠·작업 계획을 모아둔 디렉터리입니다.
본 프로젝트는 [DOCS_CONVENTION.md](../DOCS_CONVENTION.md) 의 **카테고리 폴더 + `<주제>-NN.md`** 표준 형식(§2-1)을 따릅니다.

## 디렉터리 구조

```
docs/
├── index.md                           이 문서 (전체 인덱스)
│
├── overview/                          회사·제품 개요
│   ├── index.md
│   ├── company-01.md                  BLAH 회사 정체성과 미션
│   └── products-02.md                 제품 포트폴리오 한눈에 보기
│
├── content/                           사이트에 실제로 노출될 콘텐츠 시안
│   ├── index.md
│   ├── apago-01.md                    A.PAGO 제품 페이지 카피
│   ├── teum-02.md                     TEUM 제품 페이지 카피
│   └── medical-compliance-03.md       A.PAGO 카피의 의료법·의료기기법·수의사법 컴플라이언스 가이드
│
├── architecture/                      기술 결정과 코드 구조
│   ├── index.md
│   ├── tech-stack-01.md               스택 선택 근거 (React + Vite + Tailwind)
│   ├── directory-layout-02.md         src/ 디렉터리 계획
│   └── content-strategy-03.md         정적 콘텐츠 관리 방식
│
├── design/                            디자인 시스템
│   ├── index.md
│   ├── brand-01.md                    브랜드 톤·보이스
│   ├── color-palette-02.md            컬러 토큰
│   ├── layout-03.md                   글로벌 레이아웃·반응형
│   └── brand-assets-04.md             로고·아이콘 자산 사용 가이드
│
├── pages/                             페이지 단위 시안 (와이어프레임)
│   ├── index.md
│   ├── home-01.md                     /
│   ├── products-02.md                 /products, /products/:slug
│   ├── about-03.md                    /about
│   └── contact-04.md                  /contact
│
├── deployment/                        배포·운영
│   ├── index.md
│   ├── build-and-deploy-01.md         Vite 빌드, 카페24 배포, SEO, 도메인
│   └── security-02.md                 SRI · sourcemap 차단 · CSP · 폰트 자체 호스팅
│
└── roadmap/                           일정과 미정 사항
    ├── index.md
    ├── milestones-01.md
    └── open-questions-02.md
```

## 어디서부터 읽으면 되나요 — 직군별 진입 경로

직군별 표준 가이드는 [DOCS_CONVENTION.md §6](../DOCS_CONVENTION.md), 아래는 BLAH 사이트 실정에 맞춘 구체적 경로입니다.

### 처음 합류한 사람 (역할 무관)
1. [overview/company-01.md](overview/company-01.md) — 회사가 뭐 하는 곳인지
2. [overview/products-02.md](overview/products-02.md) — 무슨 제품을 안내하는 사이트인지
3. [roadmap/milestones-01.md](roadmap/milestones-01.md) — 지금 어디까지 와 있는지

### Frontend
1. [architecture/tech-stack-01.md](architecture/tech-stack-01.md)
2. [architecture/directory-layout-02.md](architecture/directory-layout-02.md)
3. [architecture/content-strategy-03.md](architecture/content-strategy-03.md)
4. [design/index.md](design/index.md) — 디자인 토큰·레이아웃
5. 작업 대상 [pages/](pages/) 의 페이지 시안

### Designer
1. [design/index.md](design/index.md)
2. [design/brand-01.md](design/brand-01.md) — 톤·금칙어
3. [design/color-palette-02.md](design/color-palette-02.md), [design/layout-03.md](design/layout-03.md)
4. [design/brand-assets-04.md](design/brand-assets-04.md) — 로고·파비콘·앱 아이콘 사용법
5. [pages/](pages/) — 화면 단위 컨텍스트

### Content / Copywriter
1. [content/](content/) 의 제품별 카피 시안
2. [design/brand-01.md](design/brand-01.md) — 톤·금칙어
3. **A.PAGO(의료) 카피를 다룬다면** [content/medical-compliance-03.md](content/medical-compliance-03.md) 필수

### DevOps / 배포 운영자
1. [deployment/build-and-deploy-01.md](deployment/build-and-deploy-01.md) — 카페24 배포 절차, FTP 업로드 체크리스트
2. [deployment/security-02.md](deployment/security-02.md) — SRI / CSP / sourcemap / 폰트 자체 호스팅 — 5겹 안전장치
3. [architecture/tech-stack-01.md](architecture/tech-stack-01.md) — 빌드 산출물 형식

### PM / 콘텐츠 기획
1. [overview/](overview/) 전체
2. [pages/](pages/) — 페이지 단위 시안
3. [roadmap/milestones-01.md](roadmap/milestones-01.md), [roadmap/open-questions-02.md](roadmap/open-questions-02.md)

## 작성 규칙

본 프로젝트의 모든 문서는 [DOCS_CONVENTION.md](../DOCS_CONVENTION.md) 를 따릅니다. 핵심 요약:

- 모든 문서는 **한국어**로 작성합니다 (사이트 콘텐츠와 일치).
- 카테고리 폴더 단위로 관리. 새 주제는 새 폴더를 만들고 `index.md` 를 먼저 작성.
- 카테고리 안의 문서는 `<주제>-<NN>.md` 형식 (예: `brand-assets-04.md`). 번호는 **추가 순서**, 한 번 부여된 번호는 재사용 금지.
- 폴더의 `index.md` 에 새 문서를 등록.
- `architecture/` 의 의사결정 문서는 **ADR 3절 구조**(Status / Context / Decision / Consequences) 를 권고 ([컨벤션 §3-3](../DOCS_CONVENTION.md)).
- 미정 사항은 `(미정)` / `TBD` 로 표시하고 [roadmap/open-questions-02.md](roadmap/open-questions-02.md) 에도 등록.

## 새 문서를 추가하려면

1. 어떤 카테고리에 속하는지 결정 (없으면 새 폴더 + `index.md` 부터).
2. 그 폴더의 마지막 번호 +1 로 파일명을 짓습니다 — `<주제>-<NN>.md`.
3. 폴더의 `index.md` 에 한 줄 항목 추가.
4. `architecture/` 의 의사결정 문서라면 ADR 3절 구조 사용.
5. 영향 받는 직군이 변경되면 위 "어디서부터 읽으면 되나요" 도 갱신.
6. 다른 문서를 참조할 때는 상대 경로 마크다운 링크 사용.
