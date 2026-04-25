# 빌드 · 배포 · SEO

## 빌드

Vite 가 정적 산출물(`dist/`) 을 생성합니다. 동적 백엔드 없이 어떤 정적 호스팅에든 그대로 올릴 수 있습니다.

```bash
pnpm install
pnpm build       # → dist/ 생성
pnpm preview     # 로컬에서 빌드 결과 확인
```

산출 결과:

```
dist/
├── index.html
├── assets/
│   ├── *.js
│   └── *.css
├── favicon.ico
├── og-image.png
├── robots.txt
└── sitemap.xml
```

## SPA 라우팅과 호스팅 fallback

라우터로 `/products/apago` 같은 슬러그 URL 을 쓰는데, 정적 호스팅은 그 경로의 파일을 찾을 수 없으면 404 를 반환합니다.
모든 호스팅에서 **알 수 없는 경로는 `index.html` 로 폴백** 하도록 한 줄씩 설정합니다.

| 호스팅 | 설정 방법 |
|---|---|
| **Vercel** | 별도 설정 없이 SPA 자동 인식. 필요 시 `vercel.json` 의 `rewrites: [{ "source": "/(.*)", "destination": "/" }]` |
| **Netlify** | `public/_redirects` 파일에 한 줄: `/* /index.html 200` |
| **Cloudflare Pages** | `public/_redirects` 동일 (`/* /index.html 200`) |
| **GitHub Pages** | `404.html` 트릭 또는 `vite-plugin-gh-pages-spa` 사용. 비권장. |
| **AWS S3 + CloudFront** | CloudFront Functions 또는 Error Document 를 `/index.html` (200) 으로 설정 |

권장: **Vercel** 또는 **Cloudflare Pages**. 이유는 (1) 무료 티어 충분, (2) 커스텀 도메인 + HTTPS 자동, (3) PR 단위 프리뷰 배포.
최종 선택은 [../roadmap/open-questions-02.md](../roadmap/open-questions-02.md) 참조.

## 도메인

- 운영 도메인: `blah.co.kr`
- 호스팅 측에 도메인 추가 후 DNS (A / CNAME) 설정.
- HTTPS 는 호스팅 자동 발급(Let's Encrypt) 사용.

도메인 운영 전 임시:
- 호스팅 기본 도메인(예: `blah.vercel.app`) 으로 먼저 확인.

## SEO 기본기

### `<head>` 메타

- `<title>`: 페이지별 다르게. 형식 `{페이지명} | BLAH`. 홈만 `BLAH — ...`.
- `<meta name="description">`: 페이지별 다르게. 한국어 80~120자.
- `<meta name="viewport" content="width=device-width, initial-scale=1">`
- `<link rel="canonical" href="...">` — 기본은 현재 절대 URL.

페이지별 메타는 [`src/lib/seo.ts`](../architecture/directory-layout-02.md) 헬퍼(`useSeo`)로 관리합니다.

### Open Graph / Twitter

- `<meta property="og:type" content="website">`
- `<meta property="og:title">`, `<meta property="og:description">`, `<meta property="og:image">`
- `<meta property="og:url">`
- `<meta name="twitter:card" content="summary_large_image">`

OG 이미지는 페이지별 따로 만들지 않고 사이트 1장으로 시작 — `public/og-image.png` (1200×630).

### sitemap / robots

- `public/robots.txt` — `User-agent: *` `Allow: /` `Sitemap: https://blah.co.kr/sitemap.xml`
- `public/sitemap.xml` — 빌드 시 정적 라우트(홈, /products, /products/:slug 각각, /about, /contact) 를 자동 생성하는 스크립트로 만듦. 1차에는 손으로 작성해도 충분.

### `lang` 속성

`index.html` 의 `<html lang="ko">` — 한국어 사이트.

## 분석/계측 (선택)

- 도입 여부 자체가 미정 — [../roadmap/open-questions-02.md](../roadmap/open-questions-02.md)
- 도입한다면 후보:
  - **Plausible** — 쿠키 없음, 가벼움, 유료
  - **GA4** — 무료, 한국 시장 친숙도 높음, 동의 배너 필요
- 어느 쪽이든 `index.html` 에 한 줄, 환경변수로 측정 ID 분리.

## 배포 절차 (예정)

1. `main` 브랜치에 푸시
2. 호스팅(Vercel/CF) 이 자동 빌드
3. 프리뷰 URL 확인 → 운영 도메인 자동 배포

CI 워크플로우(`.github/workflows/`) 별도 작성은 1차 출시에는 불필요. 호스팅 자동 빌드로 충분.

## 환경 변수 (현재 없음)

정적 사이트이므로 런타임 환경변수가 필요한 시점은 분석 도구 ID 같은 빌드타임 토큰 정도입니다.
도입 시:

```
.env.example
VITE_ANALYTICS_ID=
```

`VITE_*` 접두사 변수만 클라이언트에 노출됩니다. 비밀값은 어차피 정적 사이트엔 둘 곳이 없습니다.
