# deployment — 배포·운영

빌드 산출물, 호스팅, 도메인 연결, SEO 기본기, 분석 도구 같은 **사이트가 살아 있게 하는 모든 것** 을 모아두는 폴더입니다.

## 무엇이 들어가나

- 빌드 명령과 산출물 구조
- 호스팅 옵션 비교와 SPA 폴백 설정
- 도메인 / HTTPS / DNS
- SEO 메타·OG·sitemap·robots
- 분석 / 계측 / 환경변수

스택 자체에 대한 결정은 [../architecture/](../architecture/) 입니다.

## 문서 목록

| # | 문서 | 요약 |
|---|---|---|
| 01 | [build-and-deploy-01.md](build-and-deploy-01.md) | Vite 빌드, SPA 폴백, 호스팅 비교(Apache/Vercel/Cloudflare/Netlify), 카페24 배포 절차, 도메인, SEO 기본기, 분석 |
| 02 | [security-02.md](security-02.md) | SRI(SHA-256) · 소스맵 차단 · CSP / 응답 헤더 · 폰트 자체 호스팅 — 정적 사이트 5겹 안전장치 |

## 새 문서를 추가할 때

다음과 같은 운영 항목이 추가되면 새 문서를 만듭니다.

- CI/CD 워크플로 (GitHub Actions 등) 가 도입될 때
- 도메인·호스팅 변경 사례 / 마이그레이션 가이드
- 모니터링·에러 트래킹 도입
- 보안 / 컴플라이언스 점검 절차

번호는 다음 미사용 번호(`02`, `03`, …) 를 씁니다.
