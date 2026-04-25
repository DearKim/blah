# 미정 항목

의사결정이 필요한 항목을 한곳에 모아 추적합니다. 결정되면 해당 문서를 갱신하고 이 표에서 항목을 ✅ 처리하거나 제거합니다.

## 회사 정보

| 항목 | 상태 | 비고 |
|---|---|---|
| 한글 표기 | ✅ | "블라" 로 확정 |
| 사업자명 | ✅ | 김성현 |
| 사업자등록번호 | ✅ | 367-03-03973 |
| 본사 주소 | ✅ | 서울특별시 구로구 디지털로35길 7 |
| 대표 / 개인정보 관리 이메일 | ✅ | blah.official0417@gmail.com |
| 도메인 | ✅ | blah.co.kr |
| 법인 정식 명칭 (한글/영문) | ❓ | 법인 설립 시점에 확정 |
| 설립일 | ❓ | About 페이지 노출용 |
| 통신판매업 신고 등 추가 표기 | ❓ | 필요 시에만 |
| 소셜 채널(블로그, GitHub 등) | ❓ | 푸터 링크 |

## 브랜드 / 디자인

| 항목 | 상태 | 비고 |
|---|---|---|
| 회사 메인 색상 | ✅ | Echo Wave teal `#1D9E75` (`--color-brand`). [../design/color-palette-02.md](../design/color-palette-02.md) |
| 보조 / 깊이 색상 | ✅ | `#0F6E56` (`--color-brand-deep`), `#E1F5EE` (`--color-brand-mist`), `#04342C` (`--color-brand-charcoal`) |
| 회사 로고 (워드마크 / 심볼 / 컬러 / 모노 / 화이트) | ✅ | [../design/brand-assets-04.md](../design/brand-assets-04.md) — 5종 `public/brand/logos/` 배치 완료 |
| 파비콘 / 앱 아이콘 | ✅ | `public/brand/icons/{favicon,app-icon}.svg` |
| 본문 폰트 | ✅ | Pretendard (시스템 fallback) |
| 워드마크 폰트 | ✅ | Inter Medium (로고 SVG 내부) |
| OG 이미지 디자인 | ❓ | 1장 (1200×630). 로고 + 슬로건. |
| 다크 모드 지원 | ❓ | 1차 미지원. 도입 시 [../design/color-palette-02.md](../design/color-palette-02.md) 의 매핑을 따른다 |

## 콘텐츠

| 항목 | 상태 | 비고 |
|---|---|---|
| A.PAGO 운영 사이트 URL | ❓ | 제품 상세의 외부 CTA |
| TEUM 운영 사이트 URL | ❓ | 제품 상세의 외부 CTA |
| A.PAGO 액센트 색 | ❓ | 카드/뱃지 액센트 |
| TEUM 액센트 색 | ✅ | `#82C926` (연두) |
| A.PAGO 로고 자산 | ❓ | `src/assets/products/apago/` |
| TEUM 로고 자산 | ❓ | `src/assets/products/teum/` |

## 기술 / 운영

| 항목 | 상태 | 비고 |
|---|---|---|
| 호스팅 (Vercel / Cloudflare Pages 등) | ❓ | [../deployment/build-and-deploy-01.md](../deployment/build-and-deploy-01.md) |
| 분석 도구 도입 여부 | ❓ | Plausible / GA4 / 미도입 |
| 다국어 분리 (ko/en) | ❓ | 1차는 한국어만 |
| 폼 도구 (장기) | ❓ | 필요 시 Tally/Google Forms 임베드 |

## 의사결정 메모

> 결정된 항목의 배경·근거를 짧게 적어두면, 나중에 같은 논의가 반복되는 것을 막을 수 있습니다.

- **TEUM 액센트 색을 `#82C926` 으로 확정** — TEUM 디자인팀의 기존 브랜드 정의에 맞춤. (2026-04-25)
- **회사 컬러는 Echo Wave teal 로 확정** — 정보를 다루는 회사의 톤(차분한 활력, 신뢰)에 맞춰 청록 계열 채택. 5단 막대 사운드 웨이브 심볼과 통일. (2026-04-25)
- **회사 한글 표기는 "블라"** — apago / TEUM 두 제품 푸터에서 이미 "블라" 표기를 쓰고 있어 일관성 유지. (2026-04-25)
