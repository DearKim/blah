# 홈 (`/`)

## 페이지 목적

방문자가 5초 안에 다음 세 가지를 파악하게 한다.

1. BLAH가 어떤 회사인가
2. 어떤 제품이 있는가 — 각각이 무엇을 하는지까지
3. 더 알아보려면 어디로 가는가

## 섹션 구성

```
┌─────────────────────────────────────────┐
│ Header                                  │
├─────────────────────────────────────────┤
│ 1. Hero                                 │
│   - 회사 한 줄 정의                      │
│   - 보조 설명 1~2 줄                    │
│   - CTA: [제품 보기] [회사 소개]          │
├─────────────────────────────────────────┤
│ 2. 브랜드 스토리 (ValueProps)             │
│   - 배경 영상 (블러 태블릿 화면)           │
│   - "정보와 소통, 그 사이를 잇는 일." (그린) │
│   - "정보 · 소통" pill                   │
├─────────────────────────────────────────┤
│ 3. A.PAGO 섹션 (ProductSection #1)       │
│   ┌────────────┐  ┌─────────────────┐   │
│   │ [영상 비주얼] │  │ Product 01      │   │
│   │  지도 핀     │  │ tagline · pillar│   │
│   └────────────┘  └─────────────────┘   │
├─────────────────────────────────────────┤
│ 4. TEUM 섹션 (ProductSection #2)         │
│   ┌─────────────────┐  ┌────────────┐   │
│   │ Product 02      │  │ [영상 비주얼] │   │
│   │ tagline · pillar│  │  스마트폰 작업 │   │
│   └─────────────────┘  └────────────┘   │
├─────────────────────────────────────────┤
│ 5. 마지막 CTA                            │
│   "함께 일하거나, 협업을 제안하고 싶다면"    │
│   → [문의하기] (mailto: 또는 /contact)   │
├─────────────────────────────────────────┤
│ Footer                                  │
└─────────────────────────────────────────┘
```

배경 리듬: brand teal → 화이트(영상 텍스처) → muted slate-50 → 화이트 → muted slate-50

## 1. Hero

- **헤드라인:** 고객의 편의를 위한 정보 서비스를 만듭니다.
- **서브:** 흩어져 있는 데이터를 한곳에서 객관적으로 비교하고 탐색할 수 있도록 만듭니다.
- **CTA:** "제품 보기" (`/products`) — `primary-inverse` / "회사 소개" (`/about`) — `outline-inverse`
- **배경:** `bg-brand` (Echo Wave teal). 텍스트는 흰색 / `text-brand-mist` 액센트.
- **시그니처:** 우측 데스크톱에 `EchoWaveBars` 흰색 막대.

## 2. 브랜드 스토리 (ValueProps)

회사 가치 3카드 → **단일 시네마틱 블록**으로 재구성. 콘텐츠는 가운데 정렬 + 스크롤 진입 시 stagger 등장.

- **배경:** Coverr 무료 영상(블러 태블릿 화면 close-up)을 풀블리드로 깔고, **화이트 그라디언트 오버레이**(`from-white/90 via-white/20 to-white/95`)로 영상이 옅은 텍스처처럼만 비치도록.
- **eyebrow:** "우리가 다루는 것" (`text-brand-deep`)
- **H2:** "정보와 소통, 그 사이를 잇는 일." — `text-brand` (브랜드 그린)
- **본문(2 단락):**
  > 세상은 빠르게 변하고, 정보는 그보다 더 빠르게 흐릅니다. 그 흐름 속에서, 우리에게 진짜 필요한 정보는 무엇일까요?
  >
  > BLAH는 흩어진 데이터 속에서 의미 있는 정보를 골라내어, 필요한 사람에게 가장 명료한 방식으로 전합니다.
- **시그니처 pill:** `정보 · 소통` (`bg-brand-mist/80` + `ring-brand/20`)
- **영상 출처:** [Coverr Free License](https://coverr.co/license) — 상업 사용 가능, 출처 표기 불필요. URL 은 컴포넌트 상단 `BRAND_VIDEO_SRC` 상수로 분리.
- **접근성:** `prefers-reduced-motion` 시 영상 비렌더, 베이스 흰 배경만 노출.

## 3·4. 제품 섹션 (`ProductSection`)

기존 단일 그리드(2 카드) → **제품마다 풀 섹션 1 개**로 분할. 좌·우 alternate.

### 공통 구조

```
[영상 비주얼 블록 · 정사각]    [콘텐츠]
                              Product 0X (eyebrow)
                              [tagline] (h2)
                              [summary] (lead 단락)
                              ▎pillar 1 라벨
                                pillar 1 본문
                              ▎pillar 2 라벨
                                pillar 2 본문
                              [자세히 보기 →]
                              [운영 사이트 ↗]
```

### 비주얼 블록 — 흰 카드 + 위·아래 분할

```
┌─────────────────────────┐
│                         │
│  (accent + 영상 + 도메인 │  ← 카드 위 2/3 (h-2/3)
│   라벨, 흰 텍스트)        │
│                         │
├─────────────────────────┤
│ [컬러 로고]  A.PAGO      │  ← 카드 아래 1/3 (h-1/3, 흰 패널)
│             아파고       │     로고·워드마크 둘 다 accent 컬러
└─────────────────────────┘
```

- **카드 외곽**: `bg-white` + `ring-1 ring-slate-200` + `shadow-sm` + `aspect-square`.
- **상단 (h-2/3)**: accent 색 풀블리드 + Coverr 영상 + 하단 그라디언트 오버레이(`from-black/55 via-black/15 to-black/5`). 도메인 라벨만 흰색으로 좌상단 노출.
- **하단 (h-1/3, 흰 패널)**: `logoSrc` (컬러) + `name` (accent 색) + `nameKo` (slate-500) 좌측 정렬.
- **status 배지는 사이트 전 영역에서 미노출** — "운영 중"·"베타" 라벨 자체를 제거하고, 데이터 모델만 보존(`Product.status`).

### 데이터 소스

[`src/content/products.ts`](../architecture/content-strategy-03.md) 의 각 객체에서 다음 필드 사용:

| 필드 | 사용처 |
|---|---|
| `name`, `nameKo`, `domain` | 비주얼 블록 워드마크 + 도메인 라벨 |
| `accentColor` | 비주얼 블록 상단 배경 / 워드마크 색 / eyebrow / tagline h2 / 카드 CTA / pillar 라벨 |
| `videoSrc` | 비주얼 블록 상단 배경 영상 |
| `logoSrc` | 비주얼 블록 하단 흰 패널의 컬러 로고 마크 |
| `tagline` | h2 — accent 색 |
| `summary` | lead 단락 |
| `pillars` (있으면) | 단락 블록 — 없으면 `features.slice(0, 3)` 폴백 |
| `externalUrl` (있으면) | "운영 사이트" 보조 CTA (ghost) |

### A.PAGO 섹션 (Product 01, alternate=false, muted)

- **accent:** brand teal (`#1D9E75`) — `accentColor` 미설정 시 `--color-brand` 자동 사용
- **영상:** `coverr-pinpointing-locations-on-a-map-452/720p.mp4` — 지도 위치 핀
- **pillars(2):** 병의원·동물병원 지도 / 의료 AI 카탈로그
- **자세한 카피:** [content/apago-01.md](../content/apago-01.md)

### TEUM 섹션 (Product 02, alternate=true)

- **accent:** 라임 (`#82C926`)
- **영상:** `coverr-a-young-man-using-a-smartphone-at-work-5494/720p.mp4` — 폰으로 일거리 확인
- **pillars(3):** 시간 단위 긱워크 매칭 / AI 기반 틈새 매칭 / 공공 고용·노동 정보
- **자세한 카피:** [content/teum-02.md](../content/teum-02.md)

## 5. 마지막 CTA

- 텍스트: "함께 만들어 갈 동료, 그리고 협업할 파트너를 찾고 있습니다."
- 버튼: [문의하기] → `/contact`
- 시그니처: 카드 상단 `EchoWaveBars` (brand 색, loop)

## 인터랙션

각 섹션의 모션은 [../design/motion-05.md](../design/motion-05.md) 의 토큰·컴포넌트로 구현.

| 섹션 | 인터랙션 |
|---|---|
| **1. Hero** | brand 배경 + 흰 텍스트. stagger 마운트 진입. 스크롤 시 콘텐츠가 살짝 떠오르며 페이드. 우측 상단 `brand-200` 글로우 패럴랙스. CTA 우측에 `EchoWaveBars` |
| **2. ValueProps** | 풀블리드 영상 자동재생(루프, 무음). 스크롤 진입 시 카피가 stagger 로 한 번 페이드업 (eyebrow → h2 → 본문 1 → 본문 2 → pill) |
| **3. A.PAGO** | 비주얼 블록 fade-up + 콘텐츠 stagger (eyebrow → h2 → summary → pillars → CTA). 영상은 자동 루프 |
| **4. TEUM** | 동일 패턴, 좌우 미러 |
| **5. 마지막 CTA** | 박스 fade-up + 상단 `EchoWaveBars` 무한 호흡 |
| **글로벌** | 페이지 상단 2px ScrollProgress 바 |

모든 모션은 `prefers-reduced-motion: reduce` 시 자동 비활성. 비주얼 블록 영상도 reduced motion 환경에서는 렌더하지 않고 accent 솔리드 블록으로 폴백.

## 영상 자산

홈에서 노출되는 모든 배경 영상은 [Coverr Free License](https://coverr.co/license) 하의 상업 사용 가능 무료 영상이며, CDN 직접 hotlink 방식.

| 위치 | URL | 테마 |
|---|---|---|
| 2. ValueProps | `cdn.coverr.co/videos/coverr-blurred-tablet-screen-close-up/720p.mp4` | 정보 흐름 (추상) |
| 3. A.PAGO | `cdn.coverr.co/videos/coverr-pinpointing-locations-on-a-map-452/720p.mp4` | 지도 위치 핀 |
| 4. TEUM | `cdn.coverr.co/videos/coverr-a-young-man-using-a-smartphone-at-work-5494/720p.mp4` | 폰으로 일거리 확인 |

교체 절차: 후보 URL 을 Coverr 카테고리에서 찾아 Range 요청으로 mp4 매직바이트 검증 → 해당 위치의 상수(또는 `videoSrc` 필드) 한 줄 갱신.

## SEO

- `<title>`: `BLAH — 고객의 편의를 위한 정보 서비스`
- `<meta name="description">`: 회사 한 줄 정의 + 제품 두 개 언급
- OG 이미지: 회사 워드마크 + 슬로건 (`public/og-image.png` — TBD)
