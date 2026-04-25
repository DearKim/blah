# 기술 스택

## 결정 사항

| 영역 | 선택 | 버전 (목표) |
|---|---|---|
| 언어 | TypeScript | 5.x |
| UI 프레임워크 | React | 19.x |
| 빌드 도구 | **Vite** | 7.x |
| 스타일 | Tailwind CSS | 4.x |
| 라우팅 | react-router-dom | 7.x |
| 아이콘 | lucide-react | 최신 |
| 패키지 매니저 | pnpm | 10.x |
| 린트/포맷 | ESLint + Prettier | 최신 |
| Node 런타임 | Node.js LTS | 20.x 이상 |

## 왜 이 조합인가

### React + TypeScript
회사의 다른 제품들(A.PAGO, TEUM) 이 모두 React + TypeScript 기반이라 **인력·디자인 시스템 재사용**이 가장 큽니다.
컴포넌트 스타일과 컨벤션을 가능한 한 동일하게 가져갑니다.

### 왜 Vite (Next.js가 아니라)
다른 제품들은 Next.js 를 쓰지만, 본 사이트의 요구는 다음과 같습니다.

- 정적 콘텐츠 위주, 동적 페이지 없음
- 서버사이드 렌더링 불필요
- 인증·DB·API 라우트 불필요
- "회사 정보 사이트" 라는 단순함을 유지

이 경우 Vite SPA 가 가장 단순하고, 빌드 산출물(`dist/`) 을 어떤 정적 호스팅에든 그대로 올릴 수 있어 운영 부담이 가장 적습니다.

### Tailwind CSS
A.PAGO·TEUM 과 동일한 디자인 토큰·유틸리티 사용 경험을 유지합니다.
디자인 시스템 토큰은 [../design/color-palette-02.md](../design/color-palette-02.md) 참조.

### React Router
페이지 수가 적지만(홈, 제품 목록, 제품 상세, 회사 소개, 문의), 다음 이유로 정식 라우팅 라이브러리를 씁니다.

- URL 별 OG/SEO 메타 분리 가능 (`react-router` + `react-helmet-async` 또는 v7 `meta`)
- 향후 페이지 추가 시 비용이 거의 0
- 단일 SPA 산출물에서도 `/products/apago` 같은 슬러그 라우팅 가능

### pnpm
의존성 디스크 사용량과 설치 속도, 모노레포 호환성. 회사 내 다른 프로젝트와 일관.

## 채택하지 않은 대안

| 후보 | 채택하지 않은 이유 |
|---|---|
| **Next.js (static export)** | 정적 사이트 한 페이지 만들자고 App Router·서버 컴포넌트 멘탈 모델을 가져올 필요 없음. 빌드/배포가 더 무겁다. |
| **Astro** | 좋은 선택지지만 React 외 멘탈 모델이 추가되고, 회사 내 React/Tailwind 사용 경험을 그대로 살리는 이점이 약해짐. |
| **순수 정적 HTML** | 페이지 추가·공통 레이아웃 관리 비용이 가장 큼. |

## 추가로 결정되지 않은 항목

- **분석/계측** — Google Analytics? Plausible? 현재는 도입 전제 (TBD, [../roadmap/open-questions-02.md](../roadmap/open-questions-02.md))
- **이미지 최적화** — Vite plugin? 단순 정적 파일? (TBD)
- **다국어** — 한국어 단일 vs ko/en 분리. 1차 출시는 한국어만 (TBD)
- **다크 모드** — 1차 미지원. 향후 검토 (TBD)

위 항목은 본 문서가 아니라 [../roadmap/open-questions-02.md](../roadmap/open-questions-02.md) 에서 단일하게 추적합니다.
