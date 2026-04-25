# 브랜드 자산 — 로고·아이콘 사용 가이드

> 실제 SVG 파일은 [/public/brand/](../../public/brand/) 아래에 있습니다.
> 사이트에서는 절대 경로 `/brand/...` 로 참조합니다.

## 1. 자산 위치

```
public/brand/
├── logos/
│   ├── logo-horizontal.svg   가로형 메인 락업
│   ├── logo-vertical.svg     세로형 락업
│   ├── logo-symbol.svg       막대 심볼만
│   ├── logo-mono.svg         모노크롬 (charcoal 단색)
│   └── logo-white.svg        화이트 단색
├── icons/
│   ├── favicon.svg           브라우저 탭·북마크용 단순화 버전
│   └── app-icon.svg          1024×1024 squircle 앱 아이콘
└── animations/
    └── echo-wave.gif         사운드 파장 루프 (360×180, 1.8s)
```

## 2. 로고 5종 — 어디에 어떤 것을

### `logo-horizontal.svg` — 가로형 메인
- **사용처:** 웹 헤더, 푸터, 명함, 이메일 서명, 보고서 표지, 프레젠테이션 첫 슬라이드
- **특징:** 가장 표준적인 락업. 가로 폭이 충분한 모든 환경에서 우선 사용
- **viewBox:** 220×60
- **현재 사이트 사용 위치:** [src/components/layout/Header.tsx](../../src/components/layout/Header.tsx), [src/components/layout/Footer.tsx](../../src/components/layout/Footer.tsx)

### `logo-vertical.svg` — 세로형
- **사용처:** SNS 프로필, 앱 스플래시, 정사각형 프레임, 굿즈 중앙 배치
- **특징:** 가로 공간이 제한적이거나 정사각/세로 비율이 강제되는 곳
- **viewBox:** 120×110

### `logo-symbol.svg` — 심볼 단독
- **사용처:** 워터마크, 푸터 마크, 패턴/배경 그래픽, 로고 사이즈가 매우 작은 영역
- **특징:** 워드마크 없이 막대 심볼만 사용. 브랜드가 충분히 인지된 환경에서
- **viewBox:** 54×60

### `logo-mono.svg` — 모노크롬 (charcoal)
- **사용처:** 흑백 인쇄, 팩스, 한 도수만 사용 가능한 매체, 음각 인쇄
- **viewBox:** 220×60

### `logo-white.svg` — 화이트
- **사용처:** 다크 배경, 사진 위, 브랜드 컬러 배경 위, 영상 워터마크
- **viewBox:** 220×60

## 3. 아이콘 2종

### `favicon.svg`
- **사용처:** 브라우저 탭, 북마크, PWA 매니페스트
- **특징:** 16px 가독성을 위해 막대를 3개로 단순화한 버전. Primary 둥근 사각형 배경에 흰색 막대
- **viewBox:** 16×16
- **사용 코드:** [index.html](../../index.html) 의 `<link rel="icon" type="image/svg+xml" href="/brand/icons/favicon.svg" />`

### `app-icon.svg`
- **사용처:** iOS/Android 앱 아이콘, 데스크톱 런처, 큰 사이즈가 필요한 모든 곳
- **특징:** 1024×1024 squircle. 5개 막대 정상 비율. 사이즈별 익스포트 시 모서리 radius 비율(약 22%) 유지
- **viewBox:** 1024×1024
- **사용 코드:** [index.html](../../index.html) 의 `<link rel="apple-touch-icon" href="/brand/icons/app-icon.svg" />`

## 3-1. 애니메이션 — `echo-wave.gif`

- **사용처:** 웹사이트 인트로/시그니처 액센트, 영상 인트로·아웃트로, SNS 게시물, 슬랙·노션 임베드, 스플래시 화면
- **포맷:** GIF, **360×180**, 36프레임, **1.8초 루프**, 흰 배경
- **모션 컨셉:** 부드러운 사인파 기반의 *center-out wave*. 가운데 막대가 lead 로 정점에 먼저 도달하고, 양쪽 막대가 π/4·π/2 위상차를 두고 따라옴 — 정보가 중심에서 외부로 전달되는 BLAH 의 핵심 메타포
- **현재 사이트 사용 위치:** 자산만 보관 중. (Hero / Final CTA 모두 색·크기 동적 제어가 필요해 인라인 SVG `EchoWaveBars` 를 사용 중)
- **인라인 SVG 권장:** brand 배경·다크 배경 등 흰 배경이 어울리지 않는 곳, 또는 색·크기·재생 횟수를 코드로 제어해야 하는 곳에서는 [src/components/motion/EchoWaveBars.tsx](../../src/components/motion/EchoWaveBars.tsx) 를 사용하세요. Tailwind `text-{color}` 가 막대 색으로 흘러들어갑니다.

```tsx
// 정적 GIF — 가장 단순
<img src="/brand/animations/echo-wave.gif" alt="" aria-hidden="true" className="h-12" />

// 인라인 SVG — 색/사이즈/루프를 코드로 제어
import { EchoWaveBars } from "@/components/motion/EchoWaveBars";
<div className="text-brand"><EchoWaveBars size={32} loop /></div>
```

> 별도 사이즈가 필요하면(정사각·와이드 배너·레티나 등) 동일 패턴으로 재생성 가능합니다.

## 4. 사용 규칙

### Clear space (여백)

로고 주변에는 **막대 1개 굵기의 2배 이상** 여백을 확보합니다. 가로형 로고 기준 약 12px (로고 폭 220px일 때).

### 최소 사이즈

| 로고 | 인쇄 | 디지털 |
|---|---|---|
| 가로형 | 25mm 폭 | 80px 폭 |
| 세로형 | 18mm 폭 | 60px 폭 |
| 심볼 | 8mm | 24px |
| 파비콘 | — | 16px |

### Don'ts (금지)

- 로고 비율을 임의로 변경하지 않기
- 막대와 워드마크 사이 간격을 임의로 조정하지 않기
- 컬러를 브랜드 외 색으로 바꾸지 않기
- 로고에 그림자, 테두리, 그라데이션, 광원 효과 추가하지 않기
- 로고를 회전하거나 기울이지 않기
- 막대 개수나 패턴을 변경하지 않기 (파비콘 단순화 버전은 예외)
- 복잡한 사진 배경 위에 별도 처리 없이 올리지 않기

### Do's (권장)

- 흰 배경 또는 Mist 배경 위에서 컬러 버전(horizontal/vertical/symbol) 사용
- 다크 또는 컬러 배경에서 White 버전 사용
- 인쇄 시 CMYK 변환 후 컬러 매칭 확인
- 작은 사이즈(16px)에서는 단순화된 `favicon.svg` 사용
- 외부 인쇄/타사 디자인 툴로 전달 시 워드마크를 outline(path)으로 변환 후 전달

## 5. 워드마크 폰트

워드마크는 **Inter Medium (weight 500)** 을 기본으로 합니다. SVG 파일에는 시스템 폰트 fallback 체인이 포함되어 있어 대부분의 환경에서 자동 렌더링되지만, **인쇄·디자인 툴에 전달할 때는 텍스트를 outline 으로 변환** 해 폰트 의존성을 제거하시기 바랍니다.

대체 가능 폰트: `Pretendard`, `system-ui`, `-apple-system`, `Segoe UI`, `sans-serif`.

## 6. 코드에서 사용하기

### React (Vite — 본 프로젝트)

```tsx
// public/ 아래 파일은 빌드 후에도 동일 경로로 서빙됩니다
<img src="/brand/logos/logo-horizontal.svg" alt="BLAH" className="h-7 w-auto" />
```

### HTML head — favicon / apple-touch-icon

```html
<link rel="icon" type="image/svg+xml" href="/brand/icons/favicon.svg" />
<link rel="apple-touch-icon" href="/brand/icons/app-icon.svg" />
```

### 인라인 SVG 가 필요할 때

심볼만 인라인으로 가져와 색을 동적으로 바꿔야 한다면, [`logo-symbol.svg`](../../public/brand/logos/logo-symbol.svg) 를 컴포넌트로 임포트해 사용하세요. 본 프로젝트는 1차에서 `<img>` 태그로 충분합니다.

## 7. 자산 변경·교체 시

1. 새 SVG 파일을 `public/brand/{logos,icons}/` 에 같은 이름으로 덮어씁니다.
2. 본 문서의 viewBox / 사용 가이드에서 변경된 부분을 갱신합니다.
3. 색이 바뀐 경우 [color-palette-02.md](color-palette-02.md) 의 토큰값과 일치시키고, 필요 시 [src/styles/globals.css](../../src/styles/globals.css) 도 갱신합니다.
