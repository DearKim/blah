export type ProductStatus = "live" | "beta" | "preparing";

export type ProductFeature = {
  title: string;
  body: string;
};

export type ProductPillar = {
  /** 짧은 영역 라벨 (예: "병의원·동물병원 지도") */
  label: string;
  /** 한두 문장의 설명 — 굿닥식 서비스 소개 톤 */
  body: string;
};

export type Product = {
  slug: string;
  name: string;
  nameKo: string;
  tagline: string;
  domain: string;
  status: ProductStatus;
  audiences: string[];
  summary: string;
  description: string;
  features: ProductFeature[];
  /** 홈 섹션의 단락 블록용. 정의되어 있으면 features 대신 이걸로 렌더. */
  pillars?: ProductPillar[];
  promises?: string[];
  externalUrl?: string;
  accentColor?: string;
  /** 홈 섹션 비주얼 블록의 배경 영상. 미설정 시 accentColor 솔리드 블록만 노출. */
  videoSrc?: string;
  /** 카드/상세 영역에 표시할 컬러 로고 (밝은 배경용). */
  logoSrc?: string;
  /** 홈 섹션의 비주얼 블록(accent 배경) 위에 얹힐 흰색 로고. */
  logoWhiteSrc?: string;
};

export const products: Product[] = [
  {
    slug: "apago",
    name: "A.PAGO",
    nameKo: "아파고",
    tagline: "광고가 아닌 정보, 추천이 아닌 사실",
    domain: "헬스케어 · 의료 AI",
    status: "live",
    audiences: [
      "의료 AI 도입을 검토하는 의료기관·임상 의사",
      "의료 AI 정보가 궁금한 시민",
      "반려동물 의료 정보가 필요한 보호자",
      "의료 AI 산업을 모니터링하는 연구자·기자",
    ],
    summary:
      "흩어져 있던 병의원·동물병원 정보와 식약처 허가 의료 AI 솔루션을, 한곳에서 객관적으로 탐색·비교할 수 있도록 정리한 정보 플랫폼입니다.",
    description:
      "전국 병의원·동물병원 정보와 식약처 허가를 받은 의료 AI 솔루션을 한곳에서 객관적으로 탐색·비교할 수 있는 정보 플랫폼입니다. 사람 의료뿐 아니라 반려동물 의료까지 듀얼 도메인으로 다루며, 의료법·의료기기법·수의사법·개인정보보호법을 지키는 톤으로 운영됩니다. 어느 병원에 어떤 AI 가 있는지의 매핑 정보는 의료법 제27조 회피 설계상 노출하지 않습니다.",
    pillars: [
      {
        label: "병의원·동물병원 지도",
        body: "전국 병의원과 동물병원을 위치·진료과목 기준으로 한 화면에서 탐색합니다. 흩어져 있던 정보를 지도 위에 모아, 광고나 추천 없이 사실 그대로 정리해 보여줍니다.",
      },
      {
        label: "의료 AI 카탈로그",
        body: "식약처 허가를 받은 의료 AI 솔루션을 분야(영상진단·진단보조·수술보조·생체신호 등)별로 정리합니다. 어떤 AI가 존재하고 어떤 영역을 다루는지, 우열 평가 없이 객관적으로 비교할 수 있습니다.",
      },
    ],
    features: [
      {
        title: "허가 의료 AI 카탈로그",
        body: "분야(영상진단·진단보조·수술보조·생체신호 등)별로 식약처 허가 의료 AI를 정리합니다.",
      },
      {
        title: "병의원·동물병원 지도",
        body: "카테고리·위치 기준으로 전국 병의원·동물병원 정보를 탐색합니다. 모든 기관을 동일하게 표시하며, 특정 병원을 추천하지 않습니다.",
      },
      {
        title: "분야별 의료 AI 뉴스",
        body: "회사·신체 부위·AI 분야별로 필터링되는 외부 언론 뉴스를 제공합니다(본 플랫폼이 내용을 보증하지 않습니다).",
      },
      {
        title: "룰 기반 정보 안내",
        body: "증상·상황을 입력하면 관련 의료 분야 카테고리와 해당 분야의 허가 AI 목록을 안내합니다. 직접 제품 매칭·진단·추천이 아닙니다.",
      },
      {
        title: "사람·반려동물 듀얼 도메인",
        body: "사람·반려동물 카테고리를 한 사이트에서 함께 다룹니다. 펫 영역에는 수의사법이 추가 적용됩니다.",
      },
    ],
    promises: [
      '"추천", "최고", "1위", "유일", "정확도", "완벽" 등 추천성·우월성·효능 단정 표현을 사용하지 않습니다.',
      '"AI 도입 병의원 찾기" / "최적 병원 찾기" 등 환자 유인·알선으로 해석될 표현을 사용하지 않습니다.',
      "모든 데이터에는 출처와 갱신일자를 함께 표시합니다(식약처·심평원·HIRA·Kakao Places·Naver 뉴스 등).",
      "AI 상담·증상 검색 등 민감 정보(건강정보) 수집 전에는 명시적 동의를 받습니다.",
      "위치 정보는 지도 중심 이동에만 사용하고 서버에 저장하지 않습니다.",
      "펫 AI 등 실 데이터 미연동 항목은 [데모] 표기로 노출합니다.",
    ],
    accentColor: "#1878CE",
    videoSrc: "https://cdn.coverr.co/videos/coverr-pinpointing-locations-on-a-map-452/720p.mp4",
    logoSrc: "/brand/products/apago-icon.svg",
    logoWhiteSrc: "/brand/products/apago-icon-white.svg",
  },
  {
    slug: "teum",
    name: "TEUM",
    nameKo: "틈새",
    tagline: "짧은 틈새를 일로, 일을 수입으로",
    domain: "노동 · 시간",
    status: "beta",
    audiences: [
      "점심시간을 활용하려는 직장인",
      "공강 시간을 활용하려는 학생",
      "오후 시간이 비는 주부",
      "단발성·짧은 도움이 필요한 구인자",
      "공공 고용·노동 정보가 필요한 구직자·사업체",
    ],
    summary:
      "짧지만 비어 있던 시간을 일과 수입으로 연결하고, 국가가 구직자·구인 사업체에 제공하는 공공 고용 정보까지 한곳에서 안내하는 정보 플랫폼입니다.",
    description:
      "10분, 30분, 4시간 이하의 초단기 일을 빠르게 매칭해, 점심시간·공강·오후 두세 시간 같은 짧은 시간을 양쪽이 만나는 단위로 만듭니다. 동시에 국가가 구직자와 구인 사업체에 제공하는 공공 고용·노동 정보를 한곳에 모아 안내해, 자투리 시간을 수입으로 바꾸는 데 필요한 정보를 함께 정리합니다.",
    pillars: [
      {
        label: "시간 단위 긱워크 매칭",
        body: "10분 · 30분 · 4시간 단위로 일거리를 분류해, 점심시간·공강·오후 두세 시간 같은 짧은 틈새를 양쪽이 만나는 단위로 만듭니다. 면접 없이 즉시 시작 가능한 형태에 집중합니다.",
      },
      {
        label: "AI 기반 틈새 매칭",
        body: "가용 시간과 위치를 입력하면 적합한 일 카테고리를 안내하고, 대화형 온보딩으로 프로필을 자동 정리합니다. 자투리 시간이 수입이 되기까지의 마찰을 줄입니다.",
      },
      {
        label: "공공 고용·노동 정보",
        body: "국가가 구직자와 구인 사업체에 제공하는 지원·교육·세제 등 공공 고용 정보를 한곳에 모아 안내합니다. 흩어진 정보를 광고나 추천 없이 사실 그대로 전합니다.",
      },
    ],
    features: [
      {
        title: "시간 단위 일자리 분류",
        body: "10분 / 30분 / 4시간 이하로 일을 분류해 한눈에 비교합니다.",
      },
      {
        title: "AI 틈새 상담",
        body: "가용 시간·위치를 입력하면 적합한 일 카테고리를 안내합니다.",
      },
      {
        title: "대화형 온보딩",
        body: "챗 형식으로 프로필을 받아 자동으로 이력을 정리합니다.",
      },
      {
        title: "즉시 매칭 지향",
        body: "면접 없이 바로 시작 가능한 형태의 일에 집중합니다.",
      },
      {
        title: "공공 고용·노동 정보 안내",
        body: "국가가 구직자·구인 사업체에 제공하는 지원·교육·세제 정보를 함께 안내합니다.",
      },
    ],
    promises: [
      "게시되는 모든 일은 법정 최저임금 이상입니다.",
      "노동법·세무 관련 표기는 게시물에 명확히 드러냅니다.",
      "매칭 알고리즘과 정렬 기준은 사이트에 공개합니다.",
      "안내하는 공공 고용 정보는 출처와 갱신일자를 함께 표시합니다.",
    ],
    accentColor: "#82C926",
    videoSrc: "https://cdn.coverr.co/videos/coverr-a-young-man-using-a-smartphone-at-work-5494/720p.mp4",
    logoSrc: "/brand/products/teum-mark.svg",
    logoWhiteSrc: "/brand/products/teum-mark-white.svg",
  },
];

export const getProductBySlug = (slug: string | undefined): Product | undefined =>
  products.find((p) => p.slug === slug);

export const getOtherProducts = (slug: string): Product[] =>
  products.filter((p) => p.slug !== slug);
