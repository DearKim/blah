# content — 사이트에 실제 노출될 콘텐츠 시안

사이트에 들어가는 **실제 카피와 본문**의 시안을 보관하는 폴더입니다.
여기 작성된 내용은 코드의 [src/content/products.ts](../../src/content/products.ts) 등에 그대로 옮겨져 페이지에 노출됩니다.

## 무엇이 들어가나

- **제품별 상세 페이지**(`/products/:slug`) 에 들어갈 카피
- 제품 메타(슬러그, 상태, 타깃 등) 와 함께 하나의 마크다운으로 정리

페이지 구조·와이어프레임은 [../pages/](../pages/), 톤·금칙어 가이드는 [../design/brand-01.md](../design/brand-01.md) 에 있습니다.

## 문서 목록

| # | 문서 | 제품 |
|---|---|---|
| 01 | [apago-01.md](apago-01.md) | A.PAGO (아파고) — 의료 AI 정보 플랫폼 |
| 02 | [teum-02.md](teum-02.md) | TEUM (틈) — 초단기 긱워크 매칭 |

## 새 문서를 추가할 때 (= 새 제품 추가 시)

1. 이 폴더에 `<slug>-<NN>.md` 파일을 만듭니다 (예: `next-03.md`).
2. 기존 `apago-01.md` / `teum-02.md` 형식을 따라 메타·본문·기능·약속 등을 작성합니다.
3. 위 표에 한 줄을 추가합니다.
4. 코드 측에서는 [../architecture/content-strategy-03.md](../architecture/content-strategy-03.md) 절차에 따라 [src/content/products.ts](../../src/content/products.ts) 의 배열에 객체를 추가합니다.
5. [../overview/products-02.md](../overview/products-02.md) 의 표에도 한 줄을 추가합니다.

## 톤 / 금칙어

콘텐츠 작성 시 [../design/brand-01.md](../design/brand-01.md) 의 톤 가이드와 금칙어를 따릅니다. 핵심:

- **추천성·우월성 표현 금지** — "최고", "1위", "유일한", "완벽한", "추천"
- **이모지 사용 금지**
- **사실 기반** — 모르는 건 모른다고, 추정은 추정이라고 적습니다.
