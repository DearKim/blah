import {
  ArrowRight,
  Bot,
  Boxes,
  Braces,
  CheckCircle2,
  Clapperboard,
  Clock3,
  Film,
  FileSearch,
  Handshake,
  Image,
  Layers3,
  Mail,
  Megaphone,
  MessageSquareText,
  MonitorSmartphone,
  Palette,
  PenTool,
  Rocket,
  Share2,
  Sparkles,
  TrendingUp,
  Wrench,
  Youtube,
} from "lucide-react";
import { buttonVariants } from "@skill-ds/components/Button";
import { Badge } from "@skill-ds/components/Badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@skill-ds/components/Card";
import { company } from "@/content/company";
import { buildTitle, useSeo } from "@/lib/seo";

const services = [
  {
    title: "웹/앱 서비스 구축",
    description: "신규 서비스의 MVP부터 운영 가능한 정식 버전까지 설계하고 구현합니다.",
    icon: MonitorSmartphone,
  },
  {
    title: "디자인/UI 제작",
    description: "서비스 화면, 랜딩 페이지, 상세 페이지, 캠페인 비주얼을 목적에 맞게 설계합니다.",
    icon: Palette,
  },
  {
    title: "광고 배너/소재",
    description: "검색·디스플레이·SNS 광고에 들어갈 정적/모션 소재를 빠르게 제작합니다.",
    icon: Image,
  },
  {
    title: "브랜드 마케팅",
    description: "브랜드 메시지, 톤앤매너, 콘텐츠 방향성을 정리해 일관된 인상을 만듭니다.",
    icon: Megaphone,
  },
  {
    title: "제품 마케팅",
    description: "제품의 핵심 가치, 사용 장면, 전환 포인트를 카피와 화면으로 풀어냅니다.",
    icon: TrendingUp,
  },
  {
    title: "SNS 관리",
    description: "인스타그램·블로그·커뮤니티 등 채널별 운영 소재와 게시 흐름을 관리합니다.",
    icon: Share2,
  },
  {
    title: "영상 편집",
    description: "브랜드 영상, 숏폼, 인터뷰, 제품 소개 영상을 목적과 채널에 맞게 편집합니다.",
    icon: Film,
  },
  {
    title: "유튜브 편집",
    description: "롱폼 컷 편집, 자막, 썸네일, 챕터 구성까지 유튜브 운영에 맞춰 제작합니다.",
    icon: Youtube,
  },
  {
    title: "관리자/백오피스",
    description: "운영자가 매일 쓰는 목록, 승인, 통계, 권한 화면을 탄탄하게 만듭니다.",
    icon: Layers3,
  },
  {
    title: "랜딩/기업 사이트",
    description: "제품 설명, 문의 전환, SEO를 고려한 정적 사이트와 캠페인 페이지를 제작합니다.",
    icon: Sparkles,
  },
  {
    title: "AI 업무 자동화",
    description: "반복 업무, 문서 처리, 상담/검색 흐름을 LLM 기반 도구로 정리합니다.",
    icon: Bot,
  },
  {
    title: "API/외부 연동",
    description: "결제, 지도, 인증, CRM, 공공 데이터 등 필요한 시스템을 서비스에 연결합니다.",
    icon: Braces,
  },
  {
    title: "운영 개선/리팩터링",
    description: "느려진 화면, 복잡한 코드, 불안한 배포 과정을 단계적으로 개선합니다.",
    icon: Wrench,
  },
] as const;

const process = [
  {
    step: "01",
    title: "목표와 채널 정리",
    body: "목표, 타깃, 예산, 일정, 운영 채널을 먼저 정리해 제작 범위와 우선순위를 나눕니다.",
  },
  {
    step: "02",
    title: "콘셉트와 설계",
    body: "브랜드 톤, 화면 구조, 소재 방향, 콘텐츠 흐름을 문서·시안·프로토타입으로 맞춥니다.",
  },
  {
    step: "03",
    title: "제작과 공유",
    body: "디자인, 영상, 카피, 개발 산출물을 짧은 주기로 공유하고 수정 사항을 반영합니다.",
  },
  {
    step: "04",
    title: "배포와 운영",
    body: "사이트 배포, 광고/SNS 소재 전달, 운영 문서, 다음 캠페인 개선 포인트까지 정리합니다.",
  },
] as const;

const trustSignals = [
  {
    value: "7명",
    label: "전담 구성",
    body: "프론트엔드, 백엔드, 기획/마케팅, UX/UI, 영상/UI 인력이 함께 움직입니다.",
  },
  {
    value: "기획-제작",
    label: "한 흐름 진행",
    body: "아이디어 정리부터 화면, 개발, 운영 콘텐츠까지 끊기지 않게 연결합니다.",
  },
  {
    value: "MVP-운영",
    label: "단계별 확장",
    body: "작은 랜딩 페이지나 MVP로 시작해 반응에 맞춰 기능과 소재를 확장합니다.",
  },
] as const;

const concerns = [
  {
    title: "기획서가 없어도 시작할 수 있을까?",
    body: "목표, 사용자, 핵심 기능, 예산과 일정을 먼저 정리해 제작 가능한 범위로 바꿉니다.",
    icon: FileSearch,
  },
  {
    title: "디자인과 개발 소통이 꼬이지 않을까?",
    body: "기획, UX/UI, 프론트엔드, 백엔드가 같은 맥락을 보고 화면과 기능을 함께 맞춥니다.",
    icon: MessageSquareText,
  },
  {
    title: "처음부터 크게 맡겨야 할까?",
    body: "랜딩 페이지, MVP, 광고 소재처럼 작은 단위로 시작하고 필요한 만큼 확장할 수 있습니다.",
    icon: Rocket,
  },
  {
    title: "납품 후 운영은 어떻게 하지?",
    body: "배포, 수정 포인트, 운영 문서, 다음 개선 과제까지 정리해 이후 운영이 이어지게 합니다.",
    icon: CheckCircle2,
  },
] as const;

const capabilities = [
  "UI/UX",
  "브랜드 디자인",
  "광고 소재",
  "SNS 운영",
  "영상 편집",
  "유튜브 편집",
  "React",
  "OpenAI API",
];

const team = [
  {
    role: "프론트엔드",
    count: "2명",
    body: "React와 TypeScript 기반으로 반응형 웹, 관리자 페이지, API 연동 화면을 구현합니다.",
    icon: MonitorSmartphone,
  },
  {
    role: "백엔드",
    count: "2명",
    body: "Python 기반 API, 데이터 처리, 외부 서비스 연동, 업무 자동화 로직을 설계합니다.",
    icon: Braces,
  },
  {
    role: "기획/마케팅",
    count: "1명",
    body: "요구사항, 사용자 흐름, 핵심 메시지, 랜딩 카피와 전환 구조를 정리합니다.",
    icon: Megaphone,
  },
  {
    role: "UX/UI 디자인",
    count: "1명",
    body: "와이어프레임, 디자인 시스템, 화면 구조, 사용성 중심의 인터페이스를 설계합니다.",
    icon: Palette,
  },
  {
    role: "영상/UI 디자인",
    count: "1명",
    body: "광고 소재, SNS 콘텐츠, 영상 편집, 썸네일과 서비스 비주얼 자산을 제작합니다.",
    icon: Film,
  },
] as const;

const faqs = [
  {
    question: "기획서가 아직 없는데 상담이 가능한가요?",
    answer:
      "가능합니다. 현재 생각 중인 아이디어, 참고 사이트, 필요한 기능, 예산 범위만 있어도 목표와 우선순위부터 함께 정리합니다.",
  },
  {
    question: "작은 규모의 작업도 의뢰할 수 있나요?",
    answer:
      "가능합니다. 단일 랜딩 페이지, 광고 배너, 숏폼 편집, MVP 일부 기능, 기존 서비스 개선처럼 작은 단위로 시작할 수 있습니다.",
  },
  {
    question: "디자인과 개발을 같이 맡길 수 있나요?",
    answer:
      "가능합니다. UX/UI 설계, 프론트엔드, 백엔드, 콘텐츠 제작 인력이 한 팀 안에 있어 화면과 기능, 운영 소재를 함께 맞출 수 있습니다.",
  },
  {
    question: "기존 프로젝트를 이어받을 수도 있나요?",
    answer:
      "가능합니다. 기존 코드와 운영 상황을 먼저 확인한 뒤 유지보수, 리팩터링, 기능 추가, 새로 구축 중 적합한 방향을 안내합니다.",
  },
] as const;

const email = company.email ?? "blah.official0417@gmail.com";

const contactPoints = [
  { icon: FileSearch, text: "기획서가 없어도 요구사항 정리부터 시작" },
  { icon: MessageSquareText, text: "카카오톡/이메일/문서 기반 비동기 소통 가능" },
  { icon: Clock3, text: "단기 MVP와 단계적 고도화 모두 대응" },
  { icon: CheckCircle2, text: "배포와 운영 문서까지 마무리" },
  { icon: Handshake, text: "외주, 협업, 파트너십 형태 모두 논의 가능" },
] as const;

export default function Cooperation() {
  useSeo({
    title: buildTitle("BLAH.Co 외주 제작"),
    description:
      "BLAH.Co는 웹/앱 개발, 디자인, 광고 배너, 영상 편집, 브랜드/제품 마케팅, SNS 운영까지 함께하는 외주 제작 파트너입니다.",
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <CooperationHeader />
      <main>
        <Hero />
        <ProofStrip />
        <Services />
        <ConcernSolver />
        <Process />
        <Engagement />
        <Team />
        <Faq />
        <Contact />
      </main>
    </div>
  );
}

function CooperationHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 md:px-8">
        <a href="/cooperation" aria-label="BLAH.Co cooperation home" className="shrink-0">
          <img src="/brand/logos/logo-blah-co.svg" alt="BLAH.Co" className="h-8 w-auto" />
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          <a className="hover:text-slate-950" href="#services">
            서비스
          </a>
          <a className="hover:text-slate-950" href="#process">
            진행 방식
          </a>
          <a className="hover:text-slate-950" href="#contact">
            문의
          </a>
        </nav>
        <a
          href={`mailto:${email}`}
          className={buttonVariants({ size: "sm", className: "shrink-0" })}
        >
          프로젝트 문의
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 opacity-[0.08]" aria-hidden="true">
        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:56px_56px]" />
      </div>
      <div className="relative mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-12 px-5 py-16 md:grid-cols-[1fr_0.9fr] md:px-8 md:py-20">
        <div className="max-w-3xl">
          <Badge className="border-white/15 bg-white/10 text-white">
            Design · Marketing · Content · Product Build
          </Badge>
          <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight md:text-6xl">
            기획에서 제작,
            <br />
            운영까지 함께합니다.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
            BLAH.Co는 웹/앱 개발뿐 아니라 디자인, 광고 배너, 영상 편집, 브랜드·제품 마케팅, SNS
            관리, 유튜브 편집까지 한 흐름으로 제작합니다.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${email}`}
              className={buttonVariants({ size: "lg", variant: "inverse" })}
            >
              제작 상담하기
              <Mail size={18} />
            </a>
            <a
              href="#services"
              className={buttonVariants({
                size: "lg",
                variant: "outline",
                className:
                  "border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white",
              })}
            >
              가능한 작업 보기
              <ArrowRight size={18} />
            </a>
          </div>
          <dl className="mt-12 grid max-w-xl grid-cols-3 gap-5 border-t border-white/10 pt-6">
            <div>
              <dt className="text-xs font-medium text-slate-400">Focus</dt>
              <dd className="mt-1 text-sm font-semibold text-white">Build + Growth</dd>
            </div>
            <div>
              <dt className="text-xs font-medium text-slate-400">Coverage</dt>
              <dd className="mt-1 text-sm font-semibold text-white">Design to SNS</dd>
            </div>
            <div>
              <dt className="text-xs font-medium text-slate-400">Output</dt>
              <dd className="mt-1 text-sm font-semibold text-white">Assets + Code</dd>
            </div>
          </dl>
        </div>

        <div className="relative hidden md:block" aria-label="프로젝트 진행 보드 미리보기">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-sm font-semibold text-white">Delivery Board</p>
                <p className="text-xs text-slate-400">Scope, build, launch</p>
              </div>
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-sky-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
              </div>
            </div>
            <div className="grid gap-3 pt-4">
              {[
                ["Strategy", "목표, 타깃, 채널, 메시지 정리", "3 checks"],
                ["Creative", "디자인, 카피, 영상 콘셉트 제작", "6 assets"],
                ["Build", "웹/앱, 랜딩, 자동화, 연동 구현", "12 tasks"],
                ["Growth", "광고/SNS/유튜브 운영 산출물 정리", "4 loops"],
              ].map(([title, body, meta]) => (
                <div key={title} className="rounded-xl border border-white/10 bg-slate-900/80 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-semibold text-white">{title}</p>
                    <span className="rounded-full bg-white/10 px-2 py-1 text-[11px] text-slate-300">
                      {meta}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-slate-400">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProofStrip() {
  return (
    <section className="border-b border-slate-200 bg-white py-8">
      <div className="mx-auto grid max-w-7xl gap-4 px-5 md:grid-cols-3 md:px-8">
        {trustSignals.map(({ value, label, body }) => (
          <div key={label} className="border-l border-slate-200 pl-5">
            <p className="text-2xl font-bold tracking-tight text-slate-950">{value}</p>
            <p className="mt-1 text-sm font-semibold text-primary">{label}</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="scroll-mt-20 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Services"
          title="외주로 맡길 수 있는 일"
          description="초기 기획이 완성되어 있지 않아도 괜찮습니다. 디자인, 광고 소재, 영상, SNS, 웹/앱 개발까지 필요한 단위로 묶어 제작합니다."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, description, icon: Icon }) => (
            <Card
              key={title}
              className="rounded-lg shadow-none transition-colors hover:border-primary/40"
            >
              <CardHeader>
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Icon size={20} />
                </div>
                <CardTitle>{title}</CardTitle>
                <CardDescription className="leading-6">{description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function ConcernSolver() {
  return (
    <section className="bg-slate-950 py-20 text-white md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Before Start"
          title="외주 의뢰 전의 불안을 먼저 줄입니다"
          description="처음부터 모든 것이 정리되어 있지 않아도 괜찮습니다. 막연한 요구를 실제 제작 범위와 일정으로 바꾸는 것부터 함께합니다."
          inverse
        />
        <div className="grid gap-4 md:grid-cols-2">
          {concerns.map(({ title, body, icon: Icon }) => (
            <div key={title} className="rounded-lg border border-white/10 bg-white/[0.04] p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-white/10 text-emerald-300">
                <Icon size={20} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="scroll-mt-20 bg-slate-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Process"
          title="처음부터 운영과 전환을 염두에 둡니다"
          description="예쁜 결과물에서 끝나지 않도록, 어디에 쓰이고 어떤 행동을 만들지까지 함께 봅니다. 캠페인, 채널, 제품 흐름을 한 묶음으로 정리합니다."
        />
        <div className="grid gap-4 lg:grid-cols-4">
          {process.map(({ step, title, body }) => (
            <Card key={step} className="rounded-lg shadow-none">
              <CardHeader>
                <p className="text-sm font-semibold text-primary">{step}</p>
                <CardTitle>{title}</CardTitle>
                <CardDescription className="leading-6">{body}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Engagement() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionHeading
            eyebrow="Engagement"
            title="필요한 작업만 작게 시작하고, 반응에 맞춰 확장합니다"
            description="단일 배너, 숏폼 편집, 랜딩 페이지처럼 작은 단위부터 브랜드/제품 마케팅 운영까지 단계적으로 맡길 수 있습니다."
          />
          <div className="flex flex-wrap gap-2">
            {capabilities.map((item) => (
              <Badge key={item} variant="secondary" className="px-3 py-1">
                {item}
              </Badge>
            ))}
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              title: "MVP Sprint",
              body: "핵심 사용자 흐름과 랜딩 페이지를 먼저 만들고 반응을 확인하는 단기 구축.",
              icon: Rocket,
            },
            {
              title: "Creative Package",
              body: "광고 배너, 상세 페이지 비주얼, SNS 템플릿, 썸네일을 한 번에 제작.",
              icon: PenTool,
            },
            {
              title: "Content Operation",
              body: "SNS 게시물, 숏폼, 유튜브 편집물을 일정에 맞춰 반복 제작.",
              icon: Clapperboard,
            },
            {
              title: "Marketing System",
              body: "제품 메시지, 전환 페이지, 광고 소재, 성과 개선 루프를 함께 설계.",
              icon: Boxes,
            },
          ].map(({ title, body, icon: Icon }) => (
            <div key={title} className="flex gap-4 border-t border-slate-200 pt-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-slate-100 text-slate-700">
                <Icon size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-slate-950">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section className="bg-slate-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Team"
          title="기획, 디자인, 개발, 콘텐츠 제작 인력이 한 팀으로 움직입니다"
          description="역할이 분리되어 있어도 목표와 맥락은 하나로 맞춥니다. 필요한 산출물을 빠르게 정리하고, 실제 운영 가능한 형태로 만듭니다."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {team.map(({ role, count, body, icon: Icon }) => (
            <Card key={role} className="rounded-lg shadow-none">
              <CardHeader>
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Icon size={20} />
                </div>
                <p className="text-sm font-semibold text-primary">{count}</p>
                <CardTitle>{role}</CardTitle>
                <CardDescription className="leading-6">{body}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="상담 전에 자주 묻는 질문"
          description="범위가 아직 흐릿해도 괜찮습니다. 지금 단계에서 확인해야 할 것부터 차근차근 정리합니다."
        />
        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {faqs.map(({ question, answer }) => (
            <div key={question} className="py-6">
              <h3 className="text-base font-semibold text-slate-950">{question}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 bg-slate-950 py-20 text-white md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <Badge className="border-white/15 bg-white/10 text-white">Contact</Badge>
            <h2 className="mt-5 max-w-3xl text-3xl font-bold tracking-tight md:text-5xl">
              만들고 싶은 결과물이 있다면, 지금 단계 그대로 보내주세요.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              참고 이미지, 영상 원본, 운영 중인 SNS, 제품 설명, 예산 범위, 희망 일정 중 알고 있는
              것만 공유해도 됩니다. 다음 액션이 보이도록 범위를 정리해 답변드리겠습니다.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={`mailto:${email}`}
                className={buttonVariants({ size: "lg", variant: "inverse" })}
              >
                {email}
                <Mail size={18} />
              </a>
              <a
                href="/"
                className={buttonVariants({
                  size: "lg",
                  variant: "outline",
                  className:
                    "border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white",
                })}
              >
                BLAH 홈으로
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
          <div className="grid gap-3 text-sm text-slate-300">
            {contactPoints.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-start gap-3 rounded-lg border border-white/10 p-4"
              >
                <Icon className="mt-0.5 h-5 w-5 text-emerald-300" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  inverse,
}: {
  eyebrow: string;
  title: string;
  description: string;
  inverse?: boolean;
}) {
  return (
    <div className="mb-10 max-w-3xl md:mb-14">
      <p
        className={`text-sm font-semibold uppercase tracking-wider ${inverse ? "text-emerald-300" : "text-primary"}`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-3 text-3xl font-bold tracking-tight md:text-4xl ${inverse ? "text-white" : "text-slate-950"}`}
      >
        {title}
      </h2>
      <p
        className={`mt-4 text-base leading-7 md:text-lg ${inverse ? "text-slate-300" : "text-slate-600"}`}
      >
        {description}
      </p>
    </div>
  );
}
