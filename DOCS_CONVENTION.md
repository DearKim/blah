# DOCS_CONVENTION.md

> 이 문서는 `~/Desktop/blah/` 아래 모든 프로젝트(`blah`, `blah-TEUM`, `apago`, `Skill-Design-System`, …)가 공통으로 따르는 **문서(docs) 정리 규칙**입니다.
> 새 프로젝트 / 외주 / 다른 LLM에게 이 파일 한 장만 던져주면 같은 방식으로 docs 를 정리할 수 있도록 만들었습니다.

---

## 0. 전제 — 왜 이렇게 정리하나

LLM이 작업할 때 **"필요한 문서만 골라 열어 토큰을 최소로 쓰는 것"** 이 목표입니다.

- `docs/` 한 군데에 모든 의사결정·콘텐츠·작업 계획이 모입니다 (Single Source of Truth).
- 카테고리 폴더 단위로 분해되어 있어, 작업할 영역의 폴더만 열면 됩니다.
- 폴더마다 `index.md` 가 있어 그 폴더에 무엇이 있는지 한눈에 보고 필요한 파일만 엽니다.

규칙을 지키지 못하겠으면 그 이유를 `docs/index.md` 끝에 적어두십시오. 규칙은 항상 갱신될 수 있습니다.

### 영향 받은 기존 컨벤션

본 컨벤션은 다음 표준의 영향을 받았으나, **그대로 차용하지 않고 LLM-친화적 워크플로우에 맞춰 변형**했습니다.

| 영향 받은 표준 | 우리가 차용한 부분 | 변형한 부분 |
|---|---|---|
| **ADR (Architecture Decision Records)** — Michael Nygard, 2011 | 추가 순서 번호 매김, 번호 재사용 금지, "결정의 *이유* 를 박제" 철학 | 의사결정뿐 아니라 **모든 문서**에 번호 적용. 단 `architecture/` 의 의사결정은 §3-3 의 ADR 포맷을 권고. |
| **Diátaxis** — Daniele Procida, 2017 | "필요한 것만 골라 본다" 는 분해 발상 | 분류 축을 **문서 유형**(tutorial/how-to/reference/explanation) 이 아니라 **주제**(overview/architecture/design/...) 로 잡음 — 내부 작업 문서에 더 적합. |
| **Docs-as-Code** — Anne Gentle, 2017 | git 으로 docs 를 코드처럼 관리, 마크다운 기반 | (그대로) |
| **MkDocs / Docusaurus** 식 directory-as-section | 폴더별 `index.md` 라우팅 패턴 | (그대로) |

---

## 1. 디렉터리 레이아웃

```
<프로젝트 루트>/
├── README.md              ← 프로젝트 소개, 셋업, 배포 (외부용 진입점)
├── CLAUDE.md              ← (선택) Claude/LLM 전용 가이드
└── docs/                  ← 본 컨벤션의 적용 대상
    ├── index.md                     ← 전체 인덱스 (필수)
    │
    ├── overview/                    ← 회사·제품·서비스 개요
    │   ├── index.md
    │   ├── company-01.md
    │   └── products-02.md
    │
    ├── architecture/                ← 기술 결정과 코드 구조
    │   ├── index.md
    │   ├── tech-stack-01.md
    │   └── directory-layout-02.md
    │
    ├── design/                      ← 디자인 시스템 (브랜드, 컬러, 레이아웃)
    │   └── ...
    │
    ├── features/  또는  pages/      ← 기능/페이지 단위 명세 (제품 성격에 따라)
    │   └── ...
    │
    ├── deployment/                  ← 배포·운영·보안
    │   └── ...
    │
    └── roadmap/                     ← 일정과 미정 사항
        ├── index.md
        ├── milestones-01.md
        └── open-questions-02.md
```

### 표준 카테고리 (없는 폴더는 만들지 말 것)

| 폴더 | 다루는 내용 |
|---|---|
| `overview/` | 회사·서비스가 무엇이고 누구를 위한 것인지 |
| `architecture/` | 기술 스택, 디렉터리 구조, 의존성, 콘텐츠 관리 방식 |
| `design/` | 브랜드, 컬러, 레이아웃, 모션, 자산 사용 가이드 |
| `features/` 또는 `pages/` | 기능/페이지 단위 명세 (앱은 `features/`, 사이트는 `pages/`) |
| `content/` | 사이트/앱에 실제로 노출될 카피 시안 (해당될 경우) |
| `data-sources/` | 외부 API·크롤링·UGC 등 데이터 출처 (해당될 경우) |
| `prd/` | 제품 요구 정의서, 비전·요구사항 통합 (해당될 경우) |
| `user-stories/` | 페르소나별 사용자 스토리와 인수 기준 (해당될 경우) |
| `deployment/` | 빌드·배포·SEO·도메인·보안 |
| `roadmap/` | 마일스톤, 미정 사항, 일정 |

> 새 카테고리가 필요하면 폴더를 만들고 그 안에 `index.md` + `<폴더>01-...md` 부터 시작합니다. 그리고 `docs/index.md` 의 디렉터리 맵에 한 줄 추가합니다.

---

## 2. 파일 네이밍

### 2-1. 표준 형식: `<주제>-<NN>.md` (권장)

폴더 내부의 모든 md 파일은 다음 형식을 따릅니다.

```
<주제>-<NN>.md
```

- `<주제>` : 케밥-케이스 한~세 단어 (예: `tech-stack`, `medical-compliance`, `brand-assets`)
- `<NN>` : 두 자리 숫자, 폴더 안에서 **추가된 순서**대로 부여 (`01`, `02`, …)
- 번호는 폴더 단위로 유일하면 충분합니다. 전체 docs 에서 유일할 필요는 없습니다.

**예시**
```
docs/architecture/tech-stack-01.md
docs/architecture/directory-layout-02.md
docs/architecture/content-strategy-03.md
docs/design/brand-01.md
docs/design/color-palette-02.md
```

### 2-2. 대안 형식: `<폴더><NN>-<주제>.md`

여러 폴더의 파일을 한 인덱스에서 섞어 참조하거나, IDE 검색에서 폴더 단위 식별이 더 자주 필요한 경우 다음 형식도 허용합니다.

```
<폴더이름><NN>-<주제>.md
```

**예시**
```
docs/architecture/architecture01-tech-stack.md
docs/skill/skill02-llm-rules.md
docs/prd/prd04-button.md
```

> **하나의 프로젝트 내에서는 한 가지 형식만** 사용합니다. 둘을 섞지 마십시오. 이미 도입된 형식이 있으면 그 형식을 따릅니다.

### 2-3. 평탄(flat) 변형

문서 수가 적고 카테고리화가 과하다고 느껴지면 폴더 없이 평탄하게 가도 됩니다.

```
docs/
├── 01-project-overview.md
├── 02-architecture.md
├── 03-api-reference.md
└── ...
```

이 경우 형식은 `<NN>-<주제>.md` 입니다 (`apago/docs/` 가 이 방식). 단, **20개를 넘기면 카테고리 폴더로 분해**합니다.

### 2-4. 금기

- 같은 파일을 두 번 수정하지 않을 것 — 의미가 크게 바뀌는 경우엔 **새 번호로 새 파일**을 만들고, 기존 파일은 "이 내용은 NN번으로 이동" 한 줄만 남깁니다.
- 번호 재할당 금지 — 한 번 부여된 번호는 그 파일이 삭제되더라도 재사용하지 않습니다.
- 공백·대문자·언더스코어 금지. 케밥-케이스만.

---

## 3. `index.md` 작성 규칙

### 3-1. 폴더별 `index.md` (모든 카테고리 폴더에 필수)

폴더 안의 모든 md 가 무엇을 담고 있는지 **한눈에 보이는 표** 와 **새 문서 추가 절차** 를 포함합니다.

**필수 섹션**
1. 폴더 한 줄 설명 (이 폴더가 다루는 영역, 다루지 않는 영역)
2. 다른 폴더로 가야 할 항목이 무엇인지 명시 (예: "배포는 `../deployment/`")
3. 파일 목록 표 — `#`, `파일`, `요약` 컬럼
4. "새 문서를 추가할 때" 가이드 — 어떤 종류의 변경이 새 문서가 되는지

**템플릿**

```markdown
# <폴더이름> — <한 줄 설명>

이 폴더는 ____ 을 다룹니다. ____ 는 [../<다른폴더>/](../<다른폴더>/) 로 갑니다.

## 무엇이 들어가나

- ...
- ...

## 문서 목록

| # | 문서 | 요약 |
|---|---|---|
| 01 | [topic-01.md](topic-01.md) | ... |
| 02 | [topic-02.md](topic-02.md) | ... |

## 새 문서를 추가할 때

다음과 같은 변경이 발생하면 이 폴더에 새 문서를 만듭니다.
- ...
- ...

번호는 다음 미사용 번호를 씁니다. 위 표에도 한 줄 추가합니다.
```

### 3-2. 최상위 `docs/index.md` (필수)

전체 docs 를 처음 열어보는 사람의 진입점입니다.

**필수 섹션**
1. **디렉터리 구조** — ASCII 트리로 모든 폴더와 그 안 파일을 한눈에 보여주기 (각 줄 끝에 한 줄 설명)
2. **어디서부터 읽으면 되나요** — 역할별 추천 진입 경로
   - "처음 합류한 사람"
   - "코드를 막 시작할 사람"
   - "콘텐츠 작업자" / "디자이너" / "배포 운영자" 등 — 프로젝트에 해당되는 역할
3. **작성 규칙** — 본 컨벤션을 짧게 요약 + 본 파일(`DOCS_CONVENTION.md`) 링크
4. **새 문서를 추가하려면** — 4~5단계의 짧은 절차

대형 표/장황한 본문은 두지 마십시오. **얕게, 링크로 분기**하는 것이 목적입니다.

### 3-3. `architecture/` 안의 의사결정 문서는 ADR 포맷을 권고

`architecture/` 폴더 안의 문서 중 **"왜 A 가 아니라 B 를 골랐는지"** 를 설명하는 의사결정 문서는 ADR 의 3절 구조를 따릅니다. 이유: 결정의 *맥락과 결과* 가 시간이 지나면 사라지는 걸 막기 위해서입니다.

```markdown
# tech-stack-01.md — React 19 + Vite 채택

## Status
accepted (2026-04-26)
대안 검토 시 [tech-stack-07.md](tech-stack-07.md) 로 supersede 가능.

## Context

- 어떤 상황·제약 때문에 결정이 필요했는가
- 후보군 (A안 / B안 / C안) 과 각각의 트레이드오프
- 비기능 요구사항 (성능·번들 크기·팀 친숙도 등)

## Decision

- 무엇을 선택했는가 (한 문장)
- 왜 — Context 의 어떤 항목을 가장 중요하게 봤는가

## Consequences

**얻은 것**
- ...

**감수해야 할 것**
- ...

**나중에 다시 봐야 할 신호** (이 결정을 뒤집을 트리거)
- ...
```

ADR 포맷이 어울리는 문서:
- 스택 / 라이브러리 선택 (예: `tech-stack-NN.md`)
- 디렉터리 구조 / 모노레포 채택 (예: `monorepo-structure-NN.md`)
- 데이터 모델 / 인증 전략 / 캐시 전략 / 배포 전략

ADR 포맷이 **불필요한 문서** (사실 기술이 목적인 경우):
- "프로젝트 폴더 구조가 어떻게 생겼는지" 설명문 → 일반 산문으로
- "API 가 무엇을 받고 무엇을 반환하는지" 레퍼런스 → 표·코드 블록으로

---

## 4. 문서 작성 스타일

### 4-1. 언어
- **기본 언어는 한국어** 입니다. 코드/명령/속성명/외래어 고유명사는 영어 그대로 둡니다.
- README 같이 외부 노출용인 경우만 예외적으로 영문 병기 가능.

### 4-2. 길이
- 한 파일이 **400줄을 넘기면 분해 신호** 입니다. 다음 번호로 분리하세요.
- 한 줄에 한 결정/한 사실. 장문은 피합니다.

### 4-3. 미정 사항 표기
- 결정이 끝나지 않은 항목은 본문에 `(미정)` 또는 `TBD` 로 표시합니다.
- 동시에 `roadmap/open-questions-NN.md` (또는 `prd/open-questions-NN.md`)에 등록합니다.
- 결정이 끝나면 해당 문서를 갱신하고 open-questions 항목을 ✅ 처리하거나 옮깁니다.

### 4-4. 링크
- 다른 문서 참조는 **상대 경로** 마크다운 링크. 절대 경로 / 깃 URL 금지.
- 예: `[content-strategy-03.md](../architecture/content-strategy-03.md)`

### 4-5. 코드 블록 / 표
- 의사결정 비교는 표 (`| 항목 | A안 | B안 |`).
- 명령·구조·예시는 코드 블록.
- 다이어그램은 ASCII 트리 또는 Mermaid (둘 다 안 되면 글로 충분히 표현될 분량인지 먼저 검토).

---

## 5. 추가 / 수정 / 삭제 절차

### 5-1. 새 문서를 추가할 때

1. 어떤 카테고리에 속하는지 결정. 없으면 새 폴더 + `index.md` 부터.
2. 그 폴더의 마지막 번호 +1 로 파일명 작성 — `<주제>-<NN>.md` (또는 프로젝트가 사용하는 형식).
3. 폴더의 `index.md` 표에 한 줄 추가.
4. 다른 문서에서 참조해야 하면 상대 경로 마크다운 링크로 연결.
5. 최상위 `docs/index.md` 의 디렉터리 맵에 새 카테고리/대표 파일이 있다면 한 줄 갱신.

### 5-2. 기존 문서를 수정할 때

- 내용이 진화한 것이라면 **그 파일을 그대로 편집**합니다. 번호와 파일명은 유지.
- 내용의 의미가 통째로 바뀌었다면 **새 번호로 새 파일** 을 만들고, 기존 파일에는 "이 내용은 `topic-NN.md` 로 이동" 한 줄만 남깁니다.

### 5-3. 문서를 삭제할 때

- 문서 자체를 지우지 말고 **본문을 한 줄로 비웁니다**. 예: `> deprecated 2026-05-02 — 더 이상 유효하지 않음. 대체: [tech-stack-07.md](tech-stack-07.md)`
- 폴더의 `index.md` 표에는 deprecated 표시 유지.
- 번호는 절대 재사용하지 않습니다.

---

## 6. 직군별 활용 가이드

각 직군이 **어떤 폴더를 주로 읽고, 어떤 폴더에 주로 쓰며, 작업 시작 시 어떤 순서로 진입하는지** 정리합니다. 동일한 docs 구조를 직군마다 다른 경로로 소비하도록 설계되어 있습니다.

### 6-0. 한눈에 보는 직군 × 폴더 매트릭스

| 폴더 | FE | BE | DevOps | Designer | PM/PO | QA | Content |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| `overview/` | 읽 | 읽 | 읽 | 읽 | **쓰** | 읽 | 읽 |
| `architecture/` | 읽·**쓰**(FE 부분) | 읽·**쓰**(BE 부분) | 읽·**쓰**(인프라) | 읽 | 읽 | 읽 | – |
| `design/` | 읽 | – | – | **쓰** | 읽 | 읽 | 읽 |
| `features/` 또는 `pages/` | **쓰** | **쓰** | – | 읽·쓰 | 읽·쓰 | **쓰**(테스트 케이스) | 읽 |
| `content/` | 읽 | – | – | 읽 | 읽 | 읽 | **쓰** |
| `data-sources/` | 읽 | **쓰** | 읽 | – | 읽 | 읽 | – |
| `prd/` | 읽 | 읽 | 읽 | 읽 | **쓰** | 읽 | 읽 |
| `user-stories/` | 읽 | 읽 | – | 읽 | **쓰** | **쓰** | – |
| `deployment/` | 읽 | 읽 | **쓰** | – | – | 읽 | – |
| `roadmap/` | 읽 | 읽 | 읽 | 읽 | **쓰** | 읽 | 읽 |

> 범례: **쓰**=주 작성자, 읽=주 독자, 읽·쓰=둘 다, –=관여 적음

### 6-1. Frontend (FE)

**주로 읽는 폴더 (작업 전 컨텍스트 확보)**
1. `design/` — 컬러·레이아웃·타이포·자산. 한 번 정독.
2. `features/<해당기능>-NN.md` 또는 `pages/<해당페이지>-NN.md` — 지금 만들 화면의 명세.
3. `architecture/tech-stack-NN.md`, `architecture/directory-layout-NN.md` — 어디에 무엇을 두는지.
4. `content/` (있으면) — 화면에 들어갈 카피.
5. `architecture/content-strategy-NN.md` (있으면) — 정적 콘텐츠 모듈 패턴.

**주로 쓰는 폴더**
- `architecture/` — 새 라이브러리 도입, 새 패턴(상태관리·라우팅·i18n·MDX) 결정. **§3-3 ADR 포맷 권고**.
- `features/` 또는 `pages/` — 기능/페이지 시안 작성·갱신.

**FE 첫 진입 5분 경로**
1. `docs/index.md` 의 디렉터리 맵 훑기
2. `architecture/tech-stack-NN.md` (스택 한눈에)
3. `architecture/directory-layout-NN.md` (어느 폴더에 짤지)
4. `design/index.md` (디자인 전체 톤)
5. 작업 대상 `features/<X>-NN.md` 또는 `pages/<X>-NN.md`

**FE 작업 시 체크포인트**
- [ ] 새 의존성 추가했나 → `architecture/` 에 ADR 한 장
- [ ] 새 컴포넌트 패턴 도입했나 → `architecture/` 또는 `design/`
- [ ] 화면이 명세와 다르게 나왔나 → `features/` / `pages/` 의 해당 md 갱신 (코드만 고치고 문서는 안 고치는 것 금지)
- [ ] 카피가 임시값이라면 `(미정)` 표기 + `roadmap/open-questions-NN.md` 등록

### 6-2. Backend (BE)

**주로 읽는 폴더**
1. `architecture/tech-stack-NN.md`, `architecture/directory-layout-NN.md`
2. `data-sources/` — 외부 API·크롤링·UGC 등 입력 출처. 명세·인증·rate limit·실패 정책.
3. `features/<X>-NN.md` 또는 `prd/requirements-NN.md` — 무엇을 구현해야 하는지.
4. `architecture/database-NN.md` / `architecture/api-design-NN.md` (있으면)
5. `deployment/` — 환경변수·시크릿 관리·배포 절차.

**주로 쓰는 폴더**
- `architecture/` — DB 스키마, API 디자인, 캐시·큐·인증 전략. **§3-3 ADR 포맷 권고**.
- `data-sources/` — 새 외부 API 연동 시 명세·인증·실패 정책 문서화.
- `architecture/api-reference-NN.md` (또는 별도 `api/` 폴더) — 엔드포인트 명세.

**BE 첫 진입 5분 경로**
1. `architecture/tech-stack-NN.md`
2. `architecture/directory-layout-NN.md` (서버 코드 위치)
3. `architecture/database-NN.md` (스키마)
4. `data-sources/index.md` (외부 의존성)
5. 작업 대상 `features/<X>-NN.md`

**BE 작업 시 체크포인트**
- [ ] 새 엔드포인트 / 스키마 변경 → `architecture/api-reference-NN.md` (또는 신규) 갱신
- [ ] 새 외부 API 연동 → `data-sources/<provider>-NN.md` 추가 (인증 / rate limit / 실패 정책)
- [ ] 시크릿 / 환경변수 추가 → `deployment/` 에 한 줄, 실제 값은 `.env` 만 (절대 docs 에 쓰지 말 것)
- [ ] 비기능 결정(캐시·트랜잭션·일관성) → `architecture/` 에 ADR

### 6-3. DevOps / Infra

**주로 읽는 폴더**
1. `deployment/` — 모든 배포·운영 결정.
2. `architecture/tech-stack-NN.md` — 런타임·DB·캐시 종류.
3. `architecture/directory-layout-NN.md` — Dockerfile·CI 가 보는 구조.
4. `data-sources/` — 외부 의존성·rate limit (모니터링 대상).

**주로 쓰는 폴더**
- `deployment/` — 빌드, CI/CD, 도메인, SSL, SRI/CSP, 폰트 호스팅, 백업, 모니터링, 시크릿 회전 정책.
- `architecture/infrastructure-NN.md` (있으면) — 클라우드 / 컨테이너 / 네트워크 토폴로지. **§3-3 ADR 포맷 권고**.

**DevOps 첫 진입 5분 경로**
1. `deployment/index.md`
2. `deployment/build-and-deploy-NN.md`
3. `deployment/security-NN.md`
4. `architecture/tech-stack-NN.md` (런타임 버전)
5. `roadmap/open-questions-NN.md` 의 운영 관련 미정 사항

**DevOps 작업 시 체크포인트**
- [ ] 새 호스팅 / 배포 방식 도입 → `deployment/` 에 ADR
- [ ] 보안 정책 변경(CSP·SRI·CORS·시크릿 회전) → `deployment/security-NN.md` 갱신
- [ ] 환경변수 추가/삭제 → `deployment/` 한 줄 + `.env.example` 동기화
- [ ] 인시던트 후속 조치 → `roadmap/` 또는 `deployment/` 에 후속 작업 등록

### 6-4. Designer

**주로 읽는 폴더**
1. `design/index.md` — 디자인 시스템 전체.
2. `design/brand-NN.md`, `design/color-palette-NN.md`, `design/layout-NN.md`
3. `content/` — 카피의 톤과 길이 (컴포넌트 사이징 영향).
4. `pages/` 또는 `features/` — 화면 단위 명세.
5. (Skill-Design-System 사용 시) `theme/<프로젝트명>-NN.md`

**주로 쓰는 폴더**
- `design/` — 모든 시각 결정. 컬러 추가, 새 컴포넌트 variant, 모션 정책.
- `pages/` 또는 `features/` — 와이어프레임·플로우. 디자이너가 1차 작성하고 FE 가 보강하는 경우 많음.

**Designer 첫 진입 5분 경로**
1. `docs/index.md`
2. `design/index.md`
3. `design/brand-NN.md` (톤)
4. `design/color-palette-NN.md`, `design/layout-NN.md`
5. 작업 대상 `pages/` 또는 `features/`

**Designer 작업 시 체크포인트**
- [ ] 새 컬러 / 토큰 추가 → `design/color-palette-NN.md` 갱신 (코드 토큰과 동기화)
- [ ] 새 컴포넌트 variant → `design/` 에 한 장 + Skill-Design-System 사용 시 PRD 작성
- [ ] 자산(로고·아이콘) 변경 → `design/brand-assets-NN.md`
- [ ] 의료 컴플라이언스 영향 있는 화면(A.PAGO 등) → `content/medical-compliance-NN.md` 교차 확인

### 6-5. PM / PO

**주로 읽는 폴더**
1. `overview/` — 회사·제품 정체성.
2. `prd/` — 요구사항·로드맵·미정 사항.
3. `user-stories/` — 페르소나·인수 기준.
4. `roadmap/milestones-NN.md`, `roadmap/open-questions-NN.md`

**주로 쓰는 폴더**
- `overview/` — 비전·타겟·가치 정의.
- `prd/` — 제품 요구 정의서. 비전·요구사항·로드맵·미정 사항 통합.
- `user-stories/` — 페르소나별 사용자 스토리.
- `roadmap/` — 마일스톤, open questions.
- `features/` 또는 `pages/` — 기능 우선순위·스코프 결정 (FE/디자이너와 공동).

**PM 첫 진입 5분 경로**
1. `overview/index.md`
2. `prd/product-overview-NN.md` 또는 `overview/products-NN.md`
3. `prd/requirements-NN.md` (현재까지 무엇이 됐는지)
4. `prd/roadmap-NN.md` 또는 `roadmap/milestones-NN.md`
5. `roadmap/open-questions-NN.md`

**PM 작업 시 체크포인트**
- [ ] 의사결정이 끝났나 → `roadmap/open-questions` 에서 ✅ 처리하고 해당 문서 갱신
- [ ] 우선순위 변경 → `roadmap/milestones-NN.md` + 영향 받는 `features/` md 의 상태 표기
- [ ] 새 페르소나·사용자 스토리 → `user-stories/<persona>-stories-NN.md`
- [ ] 외부 컴플라이언스(법령·약관) 영향 → `content/medical-compliance-NN.md` 등에 반영 + 영향 문서에 링크

### 6-6. QA

**주로 읽는 폴더**
1. `features/` 또는 `pages/` — 무엇을 검증해야 하는지.
2. `user-stories/` — 인수 기준(Acceptance Criteria) 의 단일 출처.
3. `prd/requirements-NN.md` — 명세 차이 확인.
4. `data-sources/` (BE 테스트용) — 외부 API 의 실패 모드.
5. `deployment/` — 환경별 차이.

**주로 쓰는 폴더**
- `features/` 또는 `pages/` 의 해당 md 안에 **테스트 케이스 섹션**을 직접 추가 (별도 폴더 분리 불필요).
- 누적되어 한 파일이 길어지면 `features/<X>-test-cases-NN.md` 로 분할 가능.
- `roadmap/open-questions-NN.md` — 명세 모호함 발견 시 등록.

**QA 작업 시 체크포인트**
- [ ] 인수 기준이 명확한가 → 모호하면 PM 에게 `open-questions` 등록 요청
- [ ] 회귀 시나리오 → 해당 `features/`/`pages/` md 의 "테스트 케이스" 섹션에 누적
- [ ] 버그 재현 절차 → 해당 기능 md 에 짧게 + 깊이 들어가면 `features/<X>-known-issues-NN.md`

### 6-7. Content / Copywriter

**주로 읽는 폴더**
1. `design/brand-NN.md` — 톤·금칙어.
2. `content/` — 기존 카피 시안.
3. `pages/` 또는 `features/` — 카피가 들어갈 컨텍스트(레이아웃, 길이 제약).
4. (의료/법률 영향) `content/medical-compliance-NN.md` 등 컴플라이언스 가이드.

**주로 쓰는 폴더**
- `content/<제품명>-NN.md` — 제품/페이지별 카피 시안.
- `content/<영역>-compliance-NN.md` — 컴플라이언스 가이드.

**Content 작업 시 체크포인트**
- [ ] 톤·금칙어 위반 없는가 → `design/brand-NN.md` 점검
- [ ] 의료/법률 영향 카피 → 해당 컴플라이언스 md 의 체크리스트 통과
- [ ] 카피 길이가 디자인 컴포넌트와 충돌 → 디자이너에 핑 + `pages/`/`features/` 에 노트
- [ ] 미확정 카피는 `(미정)` + `open-questions` 등록

### 6-8. 직군 간 협업 규칙

- **하나의 결정이 여러 직군에 영향을 주면** 해당 결정 문서(주로 `architecture/` 또는 `prd/`)에서 영향 받는 다른 폴더 문서를 **상대 경로로 양방향 링크**.
- 직군별 폴더를 따로 만들지 마십시오 (`docs/frontend/`, `docs/backend/` 같은 분할 금지). **주제로 분류** 가 본 컨벤션의 핵심입니다. 직군은 *읽는 경로* 로만 분리됩니다.
- 직군별 추천 진입 경로는 **최상위 `docs/index.md` 의 "어디서부터 읽으면 되나요"** 섹션에 프로젝트 실정에 맞춰 등록하십시오. (본 §6 은 일반론, 각 프로젝트 index 는 구체)

---

## 7. 새 프로젝트에 적용하는 방법 (이 문서를 받아든 LLM 용)

이 문서를 받아든 LLM/사람은 다음 순서로 `docs/` 를 구축합니다.

1. 프로젝트 루트에 `docs/` 폴더를 만든다.
2. **2-1. 표준 형식** (`<주제>-<NN>.md`) 으로 시작한다. 추후 변경 가능.
3. 처음에는 다음 4개 폴더만 만든다 — 필요해지면 추가:
   - `overview/`
   - `architecture/`
   - `design/` (UI 가 있을 경우)
   - `roadmap/`
4. 각 폴더에 `index.md` 를 먼저 작성한다 (본 문서 §3-1 템플릿 사용).
5. 최상위 `docs/index.md` 를 작성한다 (본 문서 §3-2 필수 섹션 모두 포함).
6. 이미 흩어져 있는 문서가 있으면 (`README.md`, `*.md` 들) 카테고리에 맞춰 옮기고 `<주제>-NN.md` 로 번호를 매긴다.
7. `architecture/` 의 의사결정 문서는 **§3-3 ADR 포맷** 으로 작성한다.
8. **§6 직군별 활용 가이드** 를 참고해 프로젝트 실정에 맞는 진입 경로를 `docs/index.md` 의 "어디서부터 읽으면 되나요" 섹션에 등록한다 (FE / BE / DevOps / Designer / PM / QA / Content 중 해당되는 것만).
9. 작성이 끝나면 `docs/index.md` 의 "작성 규칙" 섹션에서 **본 파일(`DOCS_CONVENTION.md`)을 링크** 한다 — 이후 누가 와도 같은 규칙으로 갱신할 수 있도록.

---

## 8. 체크리스트 (PR / 작업 종료 전 확인)

- [ ] 새 파일은 폴더 안에서 **다음 미사용 번호** 를 사용했는가
- [ ] 해당 폴더의 `index.md` 표에 한 줄을 추가했는가
- [ ] 카테고리/대표 파일이 새로 생겼다면 최상위 `docs/index.md` 의 디렉터리 맵을 갱신했는가
- [ ] 미정 사항은 `(미정)` / `TBD` 로 표시하고 `open-questions` 에도 등록했는가
- [ ] 다른 문서에 대한 참조는 상대 경로 마크다운 링크인가
- [ ] 한 파일이 400줄을 넘지 않는가 (넘으면 분해 검토)
- [ ] 한국어로 작성했는가 (외래 고유명사 / 코드 제외)
- [ ] `architecture/` 의 의사결정 문서라면 §3-3 ADR 3절 구조(Status / Context / Decision / Consequences) 를 갖췄는가
- [ ] 본인 직군의 §6 체크포인트(FE/BE/DevOps/Designer/PM/QA/Content)를 통과했는가

---

## 9. 본 컨벤션을 따르는 프로젝트 (참고)

- `~/Desktop/blah/blah/docs/` — 카테고리 폴더 + `<주제>-NN.md`
- `~/Desktop/blah/blah-TEUM/docs/` — 카테고리 폴더 + `<주제>-NN.md`
- `~/Desktop/blah/Skill-Design-System/docs/` — 카테고리 폴더 + `<폴더><NN>-<주제>.md` (대안 형식)
- `~/Desktop/blah/apago/docs/` — 평탄한 `NN-<주제>.md` (단일 카테고리)

새 프로젝트는 **첫 형식(`<주제>-NN.md`)을 기본** 으로 하길 권장합니다.
