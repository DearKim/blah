# 보안 하드닝 — 정적 사이트 배포 가드레일

> 정적 사이트라도 FTP 호스트가 변조되거나, CDN 의존이 변질되거나, 디버그 산출물이 노출될 위험은 있습니다.
> 이 문서는 그 위험을 줄이기 위해 빌드·배포 단계에 박은 5겹의 안전장치를 정리합니다.

## 1. 한눈에

| 위협 | 대책 | 적용 위치 |
|---|---|---|
| 번들 변조 (FTP·서버 측) | **Subresource Integrity (SHA-256)** 자동 주입 | [vite.config.ts](../../vite.config.ts) `sri()` 인라인 플러그인 |
| 소스맵 노출 (코드 역추적) | sourcemap 비활성 + 서버 측 deny | `build.sourcemap: false` + `.htaccess` |
| 디버그 산출물 노출 | `console.*` / `debugger` 제거 | esbuild `drop` 옵션 |
| 외부 CDN 변조 | SUIT 폰트 **자체 호스팅** | `public/fonts/SUIT-Variable.woff2` |
| MIME 스니핑·클릭재킹·referrer 누출 | 보안 응답 헤더 (CSP·X-Frame·Referrer-Policy 등) | `public/.htaccess` |

## 2. Subresource Integrity (SRI)

`dist/index.html` 의 모든 self-hosted `<script>` / `<link>` 에 **빌드 시 자동으로 SHA-256 해시가 주입**됩니다. 변조된 번들이 서빙되면 브라우저가 실행을 거부합니다.

### 동작 원리

[vite.config.ts](../../vite.config.ts) 안의 `sri()` 인라인 플러그인이:

1. `transformIndexHtml` (post) hook 으로 빌드 산출물 번들을 받아온다
2. 각 `OutputAsset` / `OutputChunk` 의 바이트에 SHA-256 을 계산하여 base64 로 인코딩
3. `<script src="/assets/X.js">` / `<link href="/assets/X.css">` 패턴을 매칭해 `integrity="sha256-..."` 속성 주입
4. `<script>` 는 Vite 가 이미 `crossorigin` 를 박아 둠 → SRI 검증 가능

### 결과 예시

```html
<script type="module" crossorigin
        src="/assets/index-CNjOCrwo.js"
        integrity="sha256-tEsYCUcQVg6Zn1rGyJx9Qbe1q/bHtqgVpPVpJ2IjKRM="></script>
<link rel="stylesheet" crossorigin
      href="/assets/index-CfsLvhwx.css"
      integrity="sha256-jxVHmklS6DzpJIjcMUXTjyADqwPAmYe38H32hOGtnYg=">
```

### 검증

```bash
# HTML 박힌 값과 실제 파일 SHA-256 이 일치해야 한다
openssl dgst -sha256 -binary dist/assets/index-CNjOCrwo.js | base64
grep -o 'integrity="sha256-[^"]*"' dist/index.html
```

### 폰트는 SRI 적용 안 함

`SUIT-Variable.woff2` 는 자체 호스팅이지만 `<link rel="preload" as="font">` 에 SRI 를 박지 않습니다. 이유:
- @font-face 는 SRI 적용 대상 아님 (Spec 미지원)
- woff2 는 메인 CSS 번들(SRI 보호됨)에 의해 참조되며, 그 CSS 가 변조되지 않는 한 잘못된 woff2 가 로드될 경로 자체가 막혀 있음

## 3. 소스맵 비공개

| 적용 | 내용 |
|---|---|
| `vite.config.ts` `build.sourcemap: false` | 빌드 시 .map 자체를 생성하지 않음 |
| `vite.config.ts` `esbuild.legalComments: "none"` | 라이선스 외 부산물 주석 제거 |
| `.htaccess` `<FilesMatch "\.map$"> Require all denied` | 실수로 올라가도 서버에서 거부 + `X-Robots-Tag: noindex` |

이중 안전장치라서 한쪽이 깨져도 한쪽이 막아 줍니다.

## 4. 프로덕션 번들 위생

[vite.config.ts](../../vite.config.ts):

```ts
esbuild: {
  drop: ["console", "debugger"],   // 모든 console.*, debugger 문 제거
  legalComments: "none",
}
```

검증:
```bash
grep -c "console\.\|debugger" dist/assets/*.js   # → 0
```

## 5. 폰트 자체 호스팅

**옵션 B 채택** (외부 CDN → 자체 호스팅).

| 이전 | 지금 |
|---|---|
| `cdn.jsdelivr.net` 에서 SUIT-Variable.css + woff2 로드 | `/fonts/SUIT-Variable.woff2` 자체 호스팅 (610 KB) |
| CSP 에 `https://cdn.jsdelivr.net` 출처 허용 필요 | CSP `font-src 'self'` 만 |
| jsdelivr 변조 시 본 사이트도 영향 | 자기 도메인 외 의존 0 |

### @font-face 선언 위치

`src/styles/globals.css` 상단:

```css
@font-face {
  font-family: "SUIT Variable";
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
  src: url("/fonts/SUIT-Variable.woff2") format("woff2-variations");
}
```

이 CSS 는 메인 번들 (SRI 보호됨) 에 인라인되어, woff2 의 URL 자체가 변조 불가능합니다.

### 폰트 갱신 절차

자체 호스팅이므로 자동 업데이트 없음. SUIT 의 새 버전을 따라가려면:

```bash
curl -sfo public/fonts/SUIT-Variable.woff2 \
  https://cdn.jsdelivr.net/gh/sun-typeface/SUIT@latest/fonts/variable/woff2/SUIT-Variable.woff2
```

다음 빌드에서 새 CSS 해시 → 새 SRI 가 자동 반영됩니다.

## 6. 응답 헤더 — `.htaccess`

`public/.htaccess` 가 빌드 시 자동으로 `dist/.htaccess` 로 복사됩니다. cPanel/Apache 기반 FTP 호스트(카페24·후이즈·가비아 등)에서 즉시 적용.

### 적용 헤더

| 헤더 | 값 | 효과 |
|---|---|---|
| `Content-Security-Policy` | `default-src 'self'; ... media-src 'self' https://cdn.coverr.co; ...` | 외부 도메인은 영상(coverr.co) 만 허용 |
| `X-Content-Type-Options` | `nosniff` | MIME 스니핑 차단 |
| `X-Frame-Options` | `DENY` | 클릭재킹 방지 |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | 외부로 경로 노출 안 함 |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=(), ...` | 사용 안 하는 강력 권한 일괄 차단 |
| `Strict-Transport-Security` | `max-age=31536000; includeSubDomains` | HTTPS 강제 (1년) |

### CSP 디테일

```
default-src 'self';
script-src  'self';
style-src   'self' 'unsafe-inline';
font-src    'self';
img-src     'self' data:;
media-src   'self' https://cdn.coverr.co;
connect-src 'self';
frame-ancestors 'none';
base-uri    'self';
form-action 'self';
object-src  'none';
```

- `style-src 'unsafe-inline'` 은 React 의 inline `style={{}}` 와 framer-motion 의 동적 스타일을 위해 필요
- `media-src https://cdn.coverr.co` 는 홈/제품 섹션의 배경 영상 hotlink. 자체 호스팅으로 옮기면 `'self'` 만으로 정리 가능

### 추가 차단

```apache
# 디렉터리 인덱싱 비활성
Options -Indexes

# 시스템·메타 파일 직접 접근 차단
<FilesMatch "(^\.|\.(env|gitignore|gitattributes|lock|log|md|json|tsbuildinfo|toml|yml|yaml)$)">
  Require all denied
</FilesMatch>
```

## 7. 메타 보안 (이중)

`.htaccess` 가 비활성/무시되는 호스트를 위한 보조:

```html
<meta name="referrer" content="strict-origin-when-cross-origin" />
<meta http-equiv="X-Content-Type-Options" content="nosniff" />
```

CSP·X-Frame-Options 는 `<meta>` 로는 일부 효력만 있으므로 서버 헤더가 본 라인.

## 8. 배포 후 검증 체크리스트

- [ ] `find dist -name "*.map"` → 0건
- [ ] `dist/index.html` 의 모든 `<script>` / `<link>` 에 `integrity="sha256-..."`
- [ ] `grep -c "console\.\|debugger" dist/assets/*.js` → 0
- [ ] 브라우저 DevTools Network → 외부 도메인 요청은 `cdn.coverr.co` (영상) 만
- [ ] DevTools Network → `/fonts/SUIT-Variable.woff2` 200, jsdelivr 호출 0건
- [ ] DevTools Network → `/assets/*.js` 응답 헤더에 `Content-Security-Policy` 박혀 있음 (없으면 호스트 mod_headers 비활성)
- [ ] DevTools Console → "Failed to find a valid digest in the integrity attribute" 메시지 없음
- [ ] `https://도메인/products/apago` 직접 접근 시 200 + 정상 라우팅 (mod_rewrite OK)
- [ ] `https://도메인/dist.map` 접근 시 403 또는 404 (.map deny 동작)

## 9. 알려진 제약과 트레이드오프

- **`'unsafe-inline'` 스타일 허용**: React 인라인 style·framer-motion 동적 스타일 때문에 어쩔 수 없음. nonce 기반으로 가려면 SSR 필요.
- **영상 CDN (coverr.co)**: 자체 호스팅으로 옮기면 CSP `'self'` 화 가능, 단 약 5–10MB 증가. 현재는 hotlink 유지.
- **HSTS preload 미신청**: `Strict-Transport-Security` 만 박아 둠. preload list 등록까지는 안 함 (도메인 확정 후 검토 가능).
- **Apache mod_headers 비활성 호스트**: CSP/Frame-Options 가 적용되지 않음. 사후 호스팅 콘솔에서 보안 모듈 활성 확인 필요.
