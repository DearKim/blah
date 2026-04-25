export type Company = {
  name: string;
  nameKo: string;
  legalName?: string;
  tagline: string;
  domain: string;
  email?: string;
  privacyEmail?: string;
  address?: string;
  registration?: string;
  founder?: string;
  foundedAt?: string;
};

export const company: Company = {
  name: "BLAH",
  nameKo: "블라",
  tagline: "고객의 편의를 위한 정보 서비스",
  domain: "blah.co.kr",
  founder: "김성현",
  registration: "367-03-03973",
  address: "서울특별시 구로구 디지털로35길 7",
  email: "blah.official0417@gmail.com",
  privacyEmail: "blah.official0417@gmail.com",
};
