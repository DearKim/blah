# 빌드 · 배포 · SEO

## 빌드

Vite 가 정적 산출물(`dist/`) 을 생성합니다. 동적 백엔드 없이 어떤 정적 호스팅에든 그대로 올릴 수 있습니다.

```bash
pnpm install
pnpm build       # → dist/ 생성 + ../hompage/www/ 자동 동기화 (카페24 FTP 미러)
pnpm preview     # 로컬에서 빌드 결과 확인
```

`pnpm build` 는 두 단계로 동작합니다:

1. `tsc -b && vite build` — `dist/` 생성 (sourcemap 없음, SRI 자동 주입)
2. `postbuild` 훅 — 형제 디렉터리 `../hompage/www/` 가 존재하면 `rsync -a --delete` 로 dist 와 1:1 미러. 없으면 skip (CI · 카페24 미러 아닌 환경 보호).

`../hompage/` 는 카페24 호스팅 FTP 루트의 로컬 미러입니다 (자세히는 [카페24 배포](#카페24-배포-현-운영-환경) 절). 빌드 한 번으로 dist 생성 + 카페24 업로드 폴더 갱신이 끝납니다.

> **수동 동기화가 필요한 경우** — 빌드 없이 hompage/www 만 다시 동기화 하려면 `pnpm sync:hompage`. (예: hompage 폴더를 수동으로 건드린 뒤 되돌릴 때)
>
> **CI/Vercel 등 다른 환경에서 빌드 시** — `../hompage/` 가 없어 postbuild 가 자동 skip 되므로 별도 처리 불필요.

산출 결과:

```
dist/
├── .htaccess                              ← Apache 보안 헤더 + SPA fallback
├── _redirects                             ← Netlify SPA fallback (다른 호스팅에선 무해)
├── index.html                             ← <script>/<link> 에 SHA-256 SRI 자동 주입
├── robots.txt
├── assets/
│   ├── index-<hash>.js
│   └── index-<hash>.css
├── brand/                                 ← public/brand/ 그대로 복사
│   ├── animations/echo-wave.gif
│   ├── icons/  (favicon · app-icon)
│   ├── logos/  (5종)
│   └── products/  (apago / teum 컬러 + 화이트)
└── fonts/
    └── SUIT-Variable.woff2                ← 자체 호스팅 (610 KB)
```

> 보안 보강(SRI · sourcemap 차단 · CSP · 폰트 자체 호스팅)의 자세한 가이드는 [security-02.md](security-02.md) 참조.

## SPA 라우팅과 호스팅 fallback

라우터로 `/products/apago` 같은 슬러그 URL 을 쓰는데, 정적 호스팅은 그 경로의 파일을 찾을 수 없으면 404 를 반환합니다.
모든 호스팅에서 **알 수 없는 경로는 `index.html` 로 폴백** 하도록 한 줄씩 설정합니다.

| 호스팅 | 설정 방법 |
|---|---|
| **Apache (cPanel·카페24·후이즈·가비아)** | `public/.htaccess` 에 `mod_rewrite` 규칙 박아 둠 — 빌드 시 자동 복사됨 |
| **Vercel** | 별도 설정 없이 SPA 자동 인식. 필요 시 `vercel.json` 의 `rewrites: [{ "source": "/(.*)", "destination": "/" }]` |
| **Netlify** | `public/_redirects` 한 줄: `/* /index.html 200` |
| **Cloudflare Pages** | `public/_redirects` 동일 |
| **GitHub Pages** | `404.html` 트릭. 비권장. |
| **AWS S3 + CloudFront** | CloudFront Functions 또는 Error Document 를 `/index.html` (200) 으로 설정 |

권장: 카페24 (현 운영 환경) · Vercel · Cloudflare Pages 중 택 1.

## 카페24 배포 (현 운영 환경)

### 로컬 미러: `../hompage/`

카페24 FTP 루트를 그대로 본뜬 로컬 폴더가 blah 와 형제 위치에 있습니다:

```
~/Desktop/blah/
├── blah/                ← 이 프로젝트 (소스)
└── hompage/             ← 카페24 FTP 루트 미러
    ├── .ftpaccess       ← 카페24 시스템 파일 (건드리지 말 것)
    ├── .htaccess        ← 카페24 시스템 파일 (건드리지 말 것)
    └── www/             ← 도큐먼트 루트 — `pnpm build` 가 여기 dist 를 동기화
```

`pnpm build` 의 `postbuild` 훅이 `dist/` 를 `../hompage/www/` 에 `rsync -a --delete` 로 복사합니다. 즉, 빌드 직후 `../hompage/www/` 는 **항상 dist 와 동일한 상태**가 됩니다 — stale 한 이전 빌드의 hash 파일도 자동 정리됩니다.

### 도큐먼트 루트

카페24 일반/광 호스팅의 도큐먼트 루트는 **`/www/`** 입니다.
FTP 접속 후 보이는 구조 (= 로컬 `hompage/` 와 동일):

```
/                    ← FTP 루트 (= 로컬 hompage/)
├── www/             ← 여기 (도큐먼트 루트, 도메인 → 이 폴더)
├── log/
├── backup/
└── .htaccess        ← 카페24 시스템(예: PHP_FLAG) — 건드리지 말 것
```

### 업로드할 것

`pnpm build` 후 **`hompage/www/` 내부 파일들을** FTP 로 카페24 `/www/` 로 그대로 미러링합니다.

```
로컬                              카페24
hompage/www/index.html       →   /www/index.html
hompage/www/.htaccess        →   /www/.htaccess
hompage/www/assets/          →   /www/assets/
hompage/www/brand/           →   /www/brand/
hompage/www/fonts/           →   /www/fonts/
hompage/www/robots.txt       →   /www/robots.txt
```

`dist/` 를 직접 FTP 에 올리지 않고 `hompage/www/` 를 올립니다 — 두 폴더의 내용은 빌드 직후 동일하지만, hompage 가 카페24 미러로서 SSOT 입니다.

### FTP 클라이언트 주의

- **FileZilla**: 메뉴 → 서버 → "강제로 숨김 파일 표시" ON (`.htaccess` 가시화)
- **WinSCP**: 환경설정 → 패널 → "숨김 파일 표시"

`.htaccess` 가 누락되면 **보안 헤더·SPA fallback 모두 적용 안 됨**.

### 카페24 모듈 동작

대부분 동작하지만 호스팅 플랜에 따라 차이가 있습니다:

| 모듈 | 일반적으로 |
|---|---|
| `mod_rewrite` (SPA fallback) | ✅ |
| `mod_headers` (CSP, X-Frame 등) | ✅ |
| `mod_expires` (캐시) | ✅ |
| `mod_deflate` (gzip 압축) | ✅ |
| `Strict-Transport-Security` | 카페24 SSL 부가서비스 활성 시에만 의미 |

업로드 후 `https://도메인/products/apago` 를 직접 입력해 확인. 404 가 나면 `mod_rewrite` 비활성 플랜이라 호스팅 콘솔에서 확인 필요.

### 첫 업로드 체크리스트

- [ ] `pnpm build` 실행 완료, postbuild 출력에 `dist → ../hompage/www/ 동기화 완료` 메시지 확인
- [ ] `hompage/www/.htaccess` 가 FTP 클라이언트에 보이는가
- [ ] `/www/` 안 기존 파일(예: `hosting_index.html`) 백업 후 비우기
- [ ] `hompage/www/` 내부 파일들을 `/www/` 로 통째 업로드
- [ ] `https://도메인/` → 홈 정상 노출
- [ ] `https://도메인/products/apago` 직접 입력 → 404 안 나면 mod_rewrite OK
- [ ] DevTools Network → `/fonts/SUIT-Variable.woff2` 200 (jsdelivr 호출 0건)
- [ ] DevTools Network → `/assets/index-XXX.js` 응답 헤더에 `Content-Security-Policy` 존재
- [ ] DevTools Console → SRI 오류 없음

### `_redirects` 파일

Netlify 전용이라 카페24 Apache 에서는 정적 파일로 서빙되며 동작에 영향 0. SPA fallback 은 `.htaccess` 의 mod_rewrite 가 처리합니다. 거슬리면 업로드 시 빼셔도 무방합니다.

## 도메인

- 운영 도메인: `blah.co.kr`
- 카페24 호스팅 측에 도메인 연결 후 DNS 처리.
- HTTPS 는 카페24 SSL 부가서비스(Let's Encrypt 자동 발급) 사용 권장.

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
- CSP 의 `script-src` 와 `connect-src` 에 해당 도메인 추가 필요 — [security-02.md](security-02.md) 참조.

## 환경 변수 (현재 없음)

정적 사이트이므로 런타임 환경변수가 필요한 시점은 분석 도구 ID 같은 빌드타임 토큰 정도입니다.
도입 시:

```
.env.example
VITE_ANALYTICS_ID=
```

`VITE_*` 접두사 변수만 클라이언트에 노출됩니다. 비밀값은 어차피 정적 사이트엔 둘 곳이 없습니다.
