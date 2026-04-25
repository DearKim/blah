export type ProductStatus = "live" | "beta" | "preparing";

export type ProductFeature = {
  title: string;
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
  promises?: string[];
  externalUrl?: string;
  accentColor?: string;
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
      "의료 AI 도입을 검토하는 의료기관",
      "AI 도입 병의원을 찾는 시민",
      "반려동물 의료 정보가 필요한 보호자",
      "의료 AI 산업을 모니터링하는 연구자·기자",
    ],
    summary:
      "식약처·FDA 인증 의료 AI와 도입 병의원·동물병원을 객관적으로 탐색하는 정보 플랫폼.",
    description:
      "식약처·FDA 인증을 받은 의료 AI 솔루션과 이를 도입한 병의원·동물병원을 한곳에서 객관적으로 비교·탐색할 수 있는 정보 플랫폼입니다. 사람 의료뿐 아니라 반려동물 의료까지 듀얼 도메인으로 다루며, 의료광고법·의료기기법·수의사법을 지키는 톤으로 운영됩니다.",
    features: [
      {
        title: "AI 의료기기 카탈로그",
        body: "분야(영상진단·진단보조·수술보조·생체신호 등)별로 인증 의료 AI를 비교합니다.",
      },
      {
        title: "도입 병의원 지도",
        body: "카테고리·위치 기반으로 가까운 곳의 AI 도입 병의원·동물병원을 탐색합니다.",
      },
      {
        title: "분야별 의료 AI 뉴스",
        body: "회사·신체 부위·AI 분야별로 필터링되는 실시간 뉴스를 제공합니다.",
      },
      {
        title: "룰 기반 정보 안내",
        body: "증상·상황을 입력하면 관련 AI 분야와 정보를 안내합니다(의료 행위 아님).",
      },
      {
        title: "사람·반려동물 듀얼 도메인",
        body: "사람·반려동물 카테고리를 한 사이트에서 함께 다룹니다.",
      },
    ],
    promises: [
      '"추천", "최고", "정확도", "완벽" 등 추천성·우월성 표현을 사용하지 않습니다.',
      "모든 데이터에는 출처와 갱신일자를 함께 표시합니다.",
      "민감 정보 수집 전에는 명시적 동의를 받습니다.",
    ],
  },
  {
    slug: "teum",
    name: "TEUM",
    nameKo: "틈",
    tagline: "짧은 틈을 일로, 일을 수입으로",
    domain: "노동 · 시간",
    status: "beta",
    audiences: [
      "점심시간을 활용하려는 직장인",
      "공강 시간을 활용하려는 학생",
      "오후 시간이 비는 주부",
      "단발성·짧은 도움이 필요한 구인자",
    ],
    summary:
      "10분·30분·4시간 단위로 일거리를 분류해 주는, 시간의 틈을 수입으로 바꾸는 긱워크 플랫폼.",
    description:
      "10분, 30분, 4시간 이하의 초단기 일을 빠르게 매칭해 주는 긱워크 플랫폼입니다. 짧지만 비어 있는 시간—점심시간, 공강, 오후 두세 시간—을 양쪽이 만나는 단위로 만들어, 자투리 시간을 수입으로 바꿉니다.",
    features: [
      {
        title: "시간 단위 일자리 분류",
        body: "10분 / 30분 / 4시간 이하로 일을 분류해 한눈에 비교합니다.",
      },
      {
        title: "AI 틈새 상담",
        body: "가용 시간·위치를 입력하면 적합한 일 카테고리를 추천합니다.",
      },
      {
        title: "대화형 온보딩",
        body: "챗 형식으로 프로필을 받아 자동으로 이력을 정리합니다.",
      },
      {
        title: "즉시 매칭 지향",
        body: "면접 없이 바로 시작 가능한 형태의 일에 집중합니다.",
      },
    ],
    promises: [
      "게시되는 모든 일은 법정 최저임금 이상입니다.",
      "노동법·세무 관련 표기는 게시물에 명확히 드러냅니다.",
      "매칭 알고리즘과 정렬 기준은 사이트에 공개합니다.",
    ],
    accentColor: "#82C926",
  },
];

export const getProductBySlug = (slug: string | undefined): Product | undefined =>
  products.find((p) => p.slug === slug);

export const getOtherProducts = (slug: string): Product[] =>
  products.filter((p) => p.slug !== slug);
