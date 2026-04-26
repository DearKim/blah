# 문서 인덱스

`blah` 사이트(blah.co.kr)를 만들고 운영하기 위한 모든 의사결정·콘텐츠·작업 계획을 모아둔 디렉터리입니다.

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
│   └── build-and-deploy-01.md         Vite 빌드, 호스팅, SEO, 도메인
│
└── roadmap/                           일정과 미정 사항
    ├── index.md
    ├── milestones-01.md
    └── open-questions-02.md
```

## 어디서부터 읽으면 되나요

**처음 합류한 사람**
1. [overview/company-01.md](overview/company-01.md) — 회사가 뭐 하는 곳인지
2. [overview/products-02.md](overview/products-02.md) — 무슨 제품을 안내하는 사이트인지
3. [roadmap/milestones-01.md](roadmap/milestones-01.md) — 지금 어디까지 와 있는지

**코드를 막 시작할 사람**
1. [architecture/tech-stack-01.md](architecture/tech-stack-01.md)
2. [architecture/directory-layout-02.md](architecture/directory-layout-02.md)
3. [architecture/content-strategy-03.md](architecture/content-strategy-03.md)
4. [pages/](pages/) 의 페이지 시안을 위에서부터 차례로

**콘텐츠 작업자**
1. [content/](content/) 의 제품별 카피 시안
2. [design/brand-01.md](design/brand-01.md) — 톤·금칙어
3. A.PAGO(의료) 카피를 다룬다면 [content/medical-compliance-03.md](content/medical-compliance-03.md) 필수

**디자이너**
1. [design/index.md](design/index.md)
2. [design/brand-assets-04.md](design/brand-assets-04.md) — 로고·파비콘·앱 아이콘 사용법

## 작성 규칙

- 모든 문서는 **한국어**로 작성합니다 (사이트 콘텐츠와 일치).
- 카테고리 폴더 단위로 관리합니다. 새 주제는 새 폴더를 만들고 `index.md` 를 먼저 작성합니다.
- 카테고리 안의 문서는 `<주제>-<NN>.md` 형식으로 넘버링합니다 (예: `brand-assets-04.md`).
  - 번호는 **추가 순서**(작성된 순서)이며, 폴더 안에서 유일하면 됩니다.
  - 폴더의 `index.md` 에 새 문서를 등록합니다.
- 의사결정이 끝나지 않은 항목은 본문에 `(미정)` 또는 `TBD` 로 표시하고 [roadmap/open-questions-02.md](roadmap/open-questions-02.md) 에도 등록합니다.
- 결정이 끝나면 해당 문서를 갱신하고 open-questions 에서 항목을 옮기거나 ✅ 처리합니다.

## 새 문서를 추가하려면

1. 어떤 카테고리에 속하는지 결정합니다 (없으면 새 폴더 + `index.md` 부터 시작).
2. 그 폴더의 마지막 번호 +1 로 파일명을 짓습니다 — `<주제>-<NN>.md`.
3. 폴더의 `index.md` 에 한 줄 항목을 추가합니다.
4. 다른 문서에서 새 문서를 참조해야 한다면 상대 경로 마크다운 링크를 사용합니다.
