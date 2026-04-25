import { Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Hero } from "@/components/home/Hero";
import { ProductGrid } from "@/components/home/ProductGrid";
import { ValueProps } from "@/components/home/ValueProps";
import { Section } from "@/components/ui/Section";
import { LinkButton } from "@/components/ui/Button";
import { EchoWaveBars } from "@/components/motion/EchoWaveBars";
import { fadeUp, motionTokens, viewportOnce } from "@/lib/motion";
import { useSeo, buildTitle } from "@/lib/seo";

export default function Home() {
  useSeo({
    title: buildTitle(),
    description:
      "BLAH는 흩어진 정보를 한곳에서 객관적으로 비교·탐색할 수 있는 정보 서비스를 만듭니다.",
  });

  return (
    <>
      <Hero />
      <ProductGrid />
      <ValueProps />
      <Section muted>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          transition={{ duration: motionTokens.duration.slow, ease: motionTokens.ease }}
          className="rounded-2xl border border-slate-200 bg-white p-10 text-center md:p-16"
        >
          {/* Echo Wave 인라인 SVG — 한 번만 호흡하며 등장 (loop=true 로 계속 부드럽게 호흡) */}
          <div className="mb-6 flex justify-center text-brand">
            <EchoWaveBars size={32} loop />
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
            함께 만들어 갈 동료, <br className="md:hidden" />
            그리고 협업할 파트너를 찾고 있습니다.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-slate-600">
            BLAH가 다루는 영역에 대한 제안이나 협업 문의를 기다립니다.
          </p>
          <div className="mt-8 flex justify-center">
            <LinkButton to="/contact" size="lg">
              <Mail size={18} />
              문의하기
            </LinkButton>
          </div>
        </motion.div>
      </Section>
    </>
  );
}
