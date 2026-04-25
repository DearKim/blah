# pages — 페이지 단위 와이어프레임

각 라우트가 어떤 섹션으로 구성되는지, 어떤 데이터를 어디서 끌어오는지, SEO 메타를 어떻게 설정하는지 페이지 단위로 정리한 폴더입니다.

## 무엇이 들어가나

- 라우트별 섹션 구성 (ASCII 와이어프레임)
- 섹션의 카피 / 데이터 매핑
- 페이지별 `<title>`, `<meta description>`, OG 메타 설정값

코드 측 라우트 정의는 [../architecture/directory-layout-02.md](../architecture/directory-layout-02.md), 콘텐츠 데이터 모듈은 [../architecture/content-strategy-03.md](../architecture/content-strategy-03.md) 입니다.

## 문서 목록

| # | 문서 | 라우트 |
|---|---|---|
| 01 | [home-01.md](home-01.md) | `/` |
| 02 | [products-02.md](products-02.md) | `/products`, `/products/:slug` |
| 03 | [about-03.md](about-03.md) | `/about` |
| 04 | [contact-04.md](contact-04.md) | `/contact` |

> 404 페이지는 별도 시안 없이 [../architecture/directory-layout-02.md](../architecture/directory-layout-02.md) 의 라우트 정의에 따라 단순 안내로 처리합니다.

## 새 문서를 추가할 때 (= 새 페이지 추가 시)

1. 새 라우트가 추가되면 이 폴더에 `<page-slug>-<NN>.md` 를 만듭니다.
2. 와이어프레임 → 섹션 카피 → 데이터 매핑 → SEO 순으로 정리합니다.
3. 위 표에 한 줄을 추가합니다.
4. 코드 측 라우트는 [src/App.tsx](../../src/App.tsx) 에 추가합니다.
