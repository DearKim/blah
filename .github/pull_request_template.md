## 변경 요약

<!-- 이 PR 이 무엇을 / 왜 바꾸는지 1-2 문장 -->

## 체크리스트

- [ ] 빌드 / 린트 통과 (`pnpm build`, `pnpm lint`)
- [ ] 새 의존성 추가 시 `pnpm-lock.yaml` 동시 commit
- [ ] Cafe24 FTP 업로드는 별도 단계 — 본 PR 머지로 자동 배포되지 않음

## 컴플라이언스 SSOT 정렬 (A.PAGO 카피 변경 시 필수)

본 PR 이 다음 중 하나라도 건드리면 [DearKim/apago](https://github.com/DearKim/apago) 의 `docs/09-medical-ad-compliance.md` 또는 `docs/12-business-and-legal.md` 에도 정합 변경이 필요한지 검토하고 결과를 표시.

- [ ] `src/content/` 의 A.PAGO 관련 카피 변경
- [ ] `src/routes/products/` 의 apago 상세 페이지 변경
- [ ] 의료광고법 27조 / 의료기기법 24조 관련 표현 변경
- [ ] "AI 도입 병의원" / "도입 병원 지도" / "식약처·FDA 인증" 류 표현 변경

> **해당 변경 있음** → apago repo 에서 동시 PR 링크: ___________
> **해당 변경 없음** → 위 항목 모두 N/A 로 둠

근거: [docs/content/medical-compliance-03.md](../docs/content/medical-compliance-03.md)
