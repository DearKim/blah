# design — 디자인 시스템과 브랜드 자산

브랜드 톤, 색상, 레이아웃, 그리고 **로고·아이콘 등 시각 자산**을 다루는 폴더입니다.

## 무엇이 들어가나

- 브랜드 보이스·금칙어
- 컬러 토큰과 사용 가이드
- 글로벌 레이아웃·반응형 규칙
- 로고·파비콘·앱 아이콘 사용법

페이지별 시안은 [../pages/](../pages/), 코드 구조는 [../architecture/](../architecture/) 입니다.

## 문서 목록

| # | 문서 | 요약 |
|---|---|---|
| 01 | [brand-01.md](brand-01.md) | 회사명·보이스·금칙어·표기 규칙. Echo Wave 브랜드 컨셉 |
| 02 | [color-palette-02.md](color-palette-02.md) | Echo Wave 컬러 토큰 (`--color-brand`, `--color-brand-deep`, …) 과 사용 비율 |
| 03 | [layout-03.md](layout-03.md) | 글로벌 레이아웃, 컨테이너, 반응형 브레이크포인트 |
| 04 | [brand-assets-04.md](brand-assets-04.md) | 로고 5종·파비콘·앱 아이콘 파일별 사용처와 코드 예시 |

## 자산 파일 위치

실제 SVG 파일은 코드 측에 있습니다.

```
public/brand/
├── logos/
│   ├── logo-horizontal.svg
│   ├── logo-vertical.svg
│   ├── logo-symbol.svg
│   ├── logo-mono.svg
│   └── logo-white.svg
└── icons/
    ├── favicon.svg
    └── app-icon.svg
```

자산 사용 가이드는 [brand-assets-04.md](brand-assets-04.md) 를 참조하세요.

## 새 문서를 추가할 때

다음과 같은 디자인 결정이 발생하면 이 폴더에 추가합니다.

- 새 컴포넌트 패턴 (예: 카드·테이블·다이얼로그 가이드)
- 다크 모드 도입 시
- 타이포그래피 시스템 확장 (폰트 추가·헤딩 시스템)
- 모션·애니메이션 가이드라인

번호는 다음 미사용 번호(`05`, `06`, …) 를 씁니다.
