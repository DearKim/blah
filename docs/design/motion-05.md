# 모션 가이드 — 절제된 인터랙션

## 한 줄 정의

> BLAH 의 모션은 **콘텐츠가 살아있다는 신호**이지, 자기를 봐달라는 요청이 아니다.

회사 톤("정보 우선, 추천이 아닌 사실")을 유지하면서, 사이트가 정적 PDF 처럼 느껴지지 않게 한다 — 이게 모션의 유일한 목표입니다.

## 5가지 원칙

1. **빠르고 부드럽다** — 진입 애니메이션은 0.6초 이하. 사용자가 기다리는 느낌이 들면 실패.
2. **한 방향으로만 움직인다** — 페이드업, 페이드인, 옅은 패럴랙스. 회전·튕김·반짝임은 쓰지 않는다.
3. **한 번만 트리거된다** — `viewport={{ once: true }}`. 스크롤 위로 다시 가도 재생되지 않는다 (정보를 다시 강조하는 회사가 아니다).
4. **`prefers-reduced-motion` 을 항상 존중한다** — `useReducedMotion()` 훅으로 감지. 시스템 설정이 reduce 면 모션은 즉시 비활성.
5. **시그니처는 Echo Wave** — 강조가 필요한 순간에는 5단 막대 모티브를 쓴다. 다른 장식은 더하지 않는다.

## 토큰

[src/lib/motion.ts](../../src/lib/motion.ts) 의 `motionTokens` 가 모든 컴포넌트의 단일 출처입니다.

| 토큰 | 값 | 용도 |
|---|---|---|
| `ease` | `[0.22, 1, 0.36, 1]` | 거의 모든 진입·전환 |
| `duration.fast` | `0.35s` | 호버 피드백, 마이크로 모션 |
| `duration.base` | `0.6s` | 페이드업, stagger 자식 |
| `duration.slow` | `0.9s` | Hero 콘텐츠, 큰 박스 등장 |
| `stagger.tight` | `0.06s` | 텍스트 줄 단위 |
| `stagger.base` | `0.1s` | 카드·아이콘 그리드 |
| `stagger.loose` | `0.16s` | 강조용 (드물게 사용) |
| `rise` | `24px` | fade-up 의 시작 거리 |

## 재사용 컴포넌트

[src/components/motion/](../../src/components/motion/) 아래에 모든 모션 원시형이 모여 있습니다.

| 컴포넌트 | 역할 | 트리거 |
|---|---|---|
| [`FadeUp`](../../src/components/motion/FadeUp.tsx) | 자식을 24px 아래에서 페이드업으로 등장시킴 | 뷰포트 진입 (또는 `immediate` 로 즉시) |
| [`Stagger`](../../src/components/motion/Stagger.tsx) / `StaggerItem` | 자식들을 순차적으로 페이드업 | 뷰포트 진입 |
| [`ScrollProgress`](../../src/components/motion/ScrollProgress.tsx) | 페이지 상단의 2px 진행 바 | 스크롤 위치 |
| [`EchoWaveBars`](../../src/components/motion/EchoWaveBars.tsx) | 5단 막대 사운드 파장 인라인 SVG | 무한 호흡 루프 또는 1회 재생 |

## 섹션별 인터랙션 (홈 기준)

| 섹션 | 인터랙션 |
|---|---|
| **Hero** | 마운트 시 stagger 등장(라벨 → 헤드라인 → 본문 → CTA → echo-wave). 스크롤하면 콘텐츠가 살짝 떠오르며 페이드. 우측 상단의 mist blob 이 살짝 패럴랙스. |
| **ProductGrid** | 헤더 fade-up. 카드들이 stagger 로 등장. 카드 호버 시 −4px 떠오르고 테두리 색이 slate → brand 로 전환되며 그림자가 짙어짐. "자세히 보기" 텍스트도 brand-deep 으로 전환되고 화살표가 우측으로 이동. |
| **ValueProps** | 헤더 fade-up. 카드 stagger. 아이콘 박스가 −8° 회전한 상태로 진입해 0° 로 돌아오면서 scale 1 도달. 호버 시 아이콘 박스 색이 mist → brand 로 전환. |
| **Final CTA** | 박스 전체가 fade-up. 상단에 EchoWaveBars 가 호흡하며 시그니처 역할. |
| **글로벌** | 페이지 상단 2px ScrollProgress 바가 좌→우로 차오름. |

## 사용 예시

가장 자주 만나게 될 두 패턴.

### A. 단순 페이드업 (1회)

```tsx
import { FadeUp } from "@/components/motion/FadeUp";

<FadeUp>
  <SectionHeader title="..." />
</FadeUp>
```

### B. 그리드 stagger

```tsx
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

<Stagger className="grid gap-6 md:grid-cols-3" gap={0.12}>
  {items.map((item) => (
    <StaggerItem key={item.id}>
      <Card {...item} />
    </StaggerItem>
  ))}
</Stagger>
```

### C. 시그니처 — Echo Wave 액센트

```tsx
import { EchoWaveBars } from "@/components/motion/EchoWaveBars";

<div className="text-brand">
  <EchoWaveBars size={32} />
</div>
```

`text-{color}` 가 `currentColor` 로 흘러들어가 막대 색이 됩니다.

## 하지 말 것 (Don'ts)

- **반복 트리거 금지** — 스크롤 위로 가도 같은 모션이 다시 재생되지 않게 한다 (`once: true`).
- **장식적 회전·바운스 금지** — 정보 사이트의 신뢰감을 깬다.
- **본문 텍스트에 모션 금지** — 가독성을 해친다. 모션은 헤딩·CTA·시각 요소에만.
- **`autoplay` 영상 금지** — 데이터 사용량과 접근성 문제.
- **GIF 무한 반복 (3초 이상) 금지** — `echo-wave.gif` 처럼 1.8초 이내의 짧은 루프만 허용.

## 새 모션을 추가할 때

1. 같은 동작이 이미 [src/components/motion/](../../src/components/motion/) 에 있는지 확인.
2. 없다면 `motionTokens` 의 토큰을 사용해서 새 컴포넌트를 만든다.
3. 항상 `useReducedMotion()` 분기를 둔다.
4. 본 문서 "재사용 컴포넌트" 표에 한 줄 추가.

## 관련 문서

- 컬러 토큰 — [color-palette-02.md](color-palette-02.md)
- 브랜드 자산 (echo-wave.gif 포함) — [brand-assets-04.md](brand-assets-04.md)
- 페이지별 시안 — [../pages/](../pages/)
