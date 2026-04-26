# 컬러 팔레트 — Echo Wave

## 상태

> ✅ 결정 완료. Echo Wave 팔레트(teal 계열) 가 회사 메인 컬러입니다.
> 이 문서가 정의하는 토큰은 [src/styles/globals.css](../../src/styles/globals.css) 에 그대로 반영되어 있습니다.

## 결정 원칙

- **차분한 활력.** 정보를 다루는 회사답게 채도가 높지 않으면서도 활기 있는 청록 계열.
- **중립을 기본으로.** 회사 사이트의 메시지 자체가 "객관적인 정보 제공" 이므로, 화면도 그렇게 보여야 한다.
- **제품의 색을 침범하지 않는다.** A.PAGO/TEUM 의 브랜드 색은 각 제품 페이지의 액센트로만 쓰고, 사이트 전반은 회사 컬러를 유지.
- **접근성**: 본문 대비비 (WCAG AA) 4.5:1 이상.

## 코어 토큰

| 토큰 | HEX | 의미 | 주 용도 |
|---|---|---|---|
| `--color-brand` | `#1D9E75` | 차분한 활력, 정보의 청량함 | 메인 액션 버튼, 심볼 컬러, 로고 메인 |
| `--color-brand-deep` | `#0F6E56` | 깊이, 신뢰, 안정감 | 워드마크, 본문 강조 텍스트, 버튼 호버 |
| `--color-brand-mist` | `#E1F5EE` | 여백, 부드러운 강조 | 보조 배경, 알림 박스, 호버 상태 |
| `--color-brand-charcoal` | `#04342C` | 차분함, 무게감 | 본문 텍스트, 다크 모드 배경 |
| `--color-brand-fg` | `#FFFFFF` | 브랜드 색 위 글자 | 메인 색 위 텍스트 |

## 확장 램프 (50 → 900)

| 토큰 | HEX |
|---|---|
| `--color-brand-50`  | `#E1F5EE` |
| `--color-brand-100` | `#9FE1CB` |
| `--color-brand-200` | `#5DCAA5` |
| `--color-brand-400` | `#1D9E75` (= `--color-brand`) |
| `--color-brand-600` | `#0F6E56` (= `--color-brand-deep`) |
| `--color-brand-800` | `#085041` |
| `--color-brand-900` | `#04342C` (= `--color-brand-charcoal`) |

## 사용 비율 가이드

| 영역 | 비율 | 색 |
|---|---|---|
| 흰 배경 / Mist | 약 50% | `#FFFFFF`, `--color-brand-mist` |
| 메인 강조 | 약 30% | `--color-brand` |
| 깊은 강조 / 텍스트 | 약 20% | `--color-brand-deep`, `--color-brand-charcoal` |

이 비율을 지키면 BLAH의 톤이 자연스럽게 살아납니다.

## Tailwind 사용 예

코드의 [src/styles/globals.css](../../src/styles/globals.css) 에서 `@theme` 으로 토큰을 등록해 두었기 때문에,
컴포넌트에서는 Tailwind 유틸리티로 그대로 쓰면 됩니다.

```tsx
// 1차 CTA
<button className="bg-brand text-brand-fg hover:bg-brand-deep">
  제품 보기
</button>

// 2차 / 보조
<button className="border border-slate-300 hover:border-brand hover:bg-brand-mist hover:text-brand-deep">
  회사 소개
</button>

// 강조 텍스트
<p className="text-brand-deep">강조하고 싶은 한 줄</p>

// 알림 / 부드러운 배경
<div className="bg-brand-mist text-brand-deep">
  공지 박스
</div>
```

## 본문·UI 보조 색상

브랜드 색은 강조용입니다. 본문·구분선·중립 UI 는 Tailwind 기본 `slate` 계열을 그대로 사용합니다.

| 용도 | Tailwind 클래스 |
|---|---|
| 본문 글자 | `text-slate-900` (가장 진함), `text-slate-700` (일반) |
| 보조 글자 | `text-slate-600`, `text-slate-500` |
| 구분선 / 카드 테두리 | `border-slate-200` |
| 옅은 섹션 배경 | `bg-slate-50` |

## 제품별 액센트 (per-product accent)

회사 컬러(brand teal) 와 별도로, 각 제품은 자기 페이지에서 자기 색을 입습니다. CSS 토큰으로 등록하지 않고 [`src/content/products.ts`](../architecture/content-strategy-03.md) 의 `accentColor` 필드에 16진 코드로 박혀, 컴포넌트가 inline `style={{ color | backgroundColor: accent }}` 로 렌더합니다.

| 제품 | HEX | 출처 | 적용 범위 |
|---|---|---|---|
| **A.PAGO** | `#1878CE` | A.PAGO Blue ([apago/docs/10-brand-guidelines.md](../../../apago/docs/10-brand-guidelines.md)) | 홈 섹션 3 / `/products/apago` 풀페이지 / 카드 / About 그리드 |
| **TEUM** | `#82C926` | TEUM Lime (Yeondu) | 홈 섹션 4 / `/products/teum` 풀페이지 / 카드 / About 그리드 |

### 적용 원칙

- **사이트 전반 (홈·About·Contact·Footer 등)** — BLAH brand teal 그대로
- **제품 상세 페이지(`/products/:slug`) 와 그 진입 카드** — 제품 accent 가 페이지의 주인. Hero 풀블리드 / 모든 섹션 eyebrow·heading / 마커 / CTA 까지 일관 적용
- **Contact 카드 4종** — BLAH + 두 제품 색을 자연스럽게 인용한 4종 팔레트(brand / apago blue / teum lime / brand-deep)

### 미설정 시 폴백

`accentColor` 가 없는 제품은 `var(--color-brand)` (회사 teal) 로 자동 폴백합니다. 새 제품을 추가할 때 자기 색이 없다면 잠정 폴백 사용 OK.

## 다크 모드

1차 출시 미지원. 다크 모드 도입 시 다음 매핑을 기준으로 확장합니다.

| 라이트 | 다크 |
|---|---|
| `bg: #FFFFFF` | `bg: #04342C` |
| `bg-subtle: #E1F5EE` | `bg-subtle: #085041` |
| `text: #04342C` | `text: #E1F5EE` |
| `action: #1D9E75` | `action: #5DCAA5` |
| `action-hover: #0F6E56` | `action-hover: #9FE1CB` |
| `border: #9FE1CB` | `border: #0F6E56` |

다크 모드 도입 여부는 [../roadmap/open-questions-02.md](../roadmap/open-questions-02.md) 에서 추적합니다.
