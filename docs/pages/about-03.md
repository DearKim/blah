# 회사 소개 (`/about`)

## 페이지 목적

홈에서 더 자세히 알고 싶은 사람·파트너 후보·채용 후보가 들어오는 페이지.
**홈의 디자인 결을 그대로 따라** "BLAH 가 어떤 사람들이 뭘 위해 만든 회사인지" 를 길게 풀어 둔다.

## 섹션 구성

```
┌─────────────────────────────────────────┐
│ 1. Hero — bg-brand 풀블리드              │
│   - eyebrow: ABOUT (brand-mist)          │
│   - h1: "정보의 공백을 / 메우는 일." (흰글자)│
│   - lead: 1-2 문장 회사 정의              │
│   - EchoWaveBars + "정보 · 신뢰 · 울림"    │
│   - 우상단 brand-200 글로우               │
├─────────────────────────────────────────┤
│ 2. Mission — ValueProps 결                │
│   - eyebrow: 우리의 자세 (brand-deep)     │
│   - h2: "흩어진 데이터에서, 한 줄의 사실을." │
│         (text-brand)                    │
│   - 인용문 + 자세 천명 두 단락             │
│   - pill: 광고가 아닌 정보 · 추천이 아닌 사실│
├─────────────────────────────────────────┤
│ 3. Values (4 cards) — muted 배경         │
│   - 좌측 brand 스트라이프                 │
│   - 01·02·03·04 brand-deep eyebrow       │
│   - 정보 우선 / 편의성 / 신뢰 / 확장성       │
├─────────────────────────────────────────┤
│ 4. 우리가 다루는 영역                       │
│   - 제품 카드 미니 (홈 ProductSection 축소)│
│   - 컬러 로고 + 컬러 워드마크 + ArrowRight  │
│   - 각 제품 자기 색으로                    │
├─────────────────────────────────────────┤
│ 5. 회사 정보 — muted 배경                 │
│   - eyebrow: 회사 정보 (brand-deep)       │
│   - h2: 사실은 사실대로.                  │
│   - dl 표: 회사명 / 법인명 / 대표자 / ...   │
├─────────────────────────────────────────┤
│ 6. Final CTA — 홈 마지막 섹션과 동일 패턴   │
│   - 흰 패널 + 상단 EchoWaveBars (brand)   │
│   - "함께 만들어 갈 동료, 협업할 파트너..."  │
│   - 버튼: [Mail] 문의하기                 │
└─────────────────────────────────────────┘
```

## 모션·인터랙션

| 섹션 | 동작 |
|---|---|
| 1. Hero | `Stagger` + `StaggerItem` (홈 Hero 와 동일 결) |
| 2. Mission | `Stagger` (eyebrow → h2 → 본문 1 → 본문 2 → pill) |
| 3. Values | 카드별 `FadeUp` 50ms 시차 진입 |
| 4. 운영 영역 | 카드별 `FadeUp` 50ms 시차 진입 |
| 5. 회사 정보 | 헤더 + dl 각각 `FadeUp` |
| 6. CTA | 박스 `FadeUp` + 상단 EchoWaveBars 무한 호흡 |

`prefers-reduced-motion: reduce` 시 모든 모션 자동 비활성.

## 본문 카피

미션 카피와 가치 카피는 컴포넌트 안에 직접 넣고 ([`src/routes/About.tsx`](../architecture/directory-layout-02.md) 의 `values` 배열),
회사 메타 정보(이름·등록번호·주소·이메일) 는 [`src/content/company.ts`](../architecture/content-strategy-03.md) 에서 읽어 옵니다.

## 회사 정보 표

```
회사명               BLAH (블라)
법인명               (미정)
대표자               김성현
설립일               (미정)
사업자등록번호        367-03-03973
본사 주소            서울특별시 구로구 디지털로35길 7
대표 이메일          blah.official0417@gmail.com
웹사이트             blah.co.kr
```

위 항목 중 결정되지 않은 값은 화면에 빈 행을 그리지 않고 **숨깁니다** (행 자체를 렌더링하지 않음). 이메일 링크는 `text-brand-deep` 으로 강조.

## 한국어 줄바꿈

본문 단락 중 길이가 긴 문장은 `[word-break:keep-all]` 로 음절 단위 분리를 막고, 자연스러운 호흡 지점에서 `<br className="hidden md:inline" />` 로 명시적 끊기를 넣어 모바일·데스크톱 모두에서 widow/orphan 방지.

## 반응형

- 모든 섹션은 모바일 단열(`grid-cols-1`) → 데스크톱 2열(`md:grid-cols-2`).
- Hero 우상단 `bg-brand-200` 글로우는 480px 이지만 `overflow-hidden` 으로 클리핑.
- Values · 운영 영역 카드 그리드 `gap-5 md:gap-6`.

## SEO

- `<title>`: `회사 소개 | BLAH`
- description: "BLAH는 고객의 편의를 위한 정보 서비스를 만드는 회사입니다. 미션·가치·운영 영역을 소개합니다."
