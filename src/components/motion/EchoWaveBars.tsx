import { motion } from "framer-motion";
import { motionTokens } from "@/lib/motion";

type EchoWaveBarsProps = {
  className?: string;
  /** 막대 높이의 기준 px. 가운데 막대가 이 값. */
  size?: number;
  /** 즉시 재생 여부. false 면 한 번만 재생, true(기본)이면 무한 호흡 루프. */
  loop?: boolean;
};

/**
 * 5개 막대 사운드 파장 — Echo Wave 의 인라인 SVG 버전.
 * 가운데부터 좌우로 위상차를 두고 호흡합니다.
 *
 * GIF 가 가지지 못한 두 가지를 줍니다:
 *   1) Tailwind 컬러 토큰(currentColor)으로 즉시 색 매칭
 *   2) `loop=false` 로 등장 모션만 1회 재생 가능
 */
export function EchoWaveBars({ className, size = 28, loop = true }: EchoWaveBarsProps) {
  // 5개 막대의 상대 높이 비율 (low → mid → peak → mid → low)
  const heights = [0.35, 0.7, 1, 0.7, 0.35];
  const barWidth = size * 0.18;
  const gap = size * 0.12;
  const totalW = heights.length * barWidth + (heights.length - 1) * gap;
  const totalH = size;

  return (
    <svg
      className={className}
      width={totalW}
      height={totalH}
      viewBox={`0 0 ${totalW} ${totalH}`}
      aria-hidden="true"
      role="img"
    >
      {heights.map((h, i) => {
        const x = i * (barWidth + gap);
        const baseHeight = h * size * 0.7;
        const breatheRange = h * size * 0.3;
        const peakHeight = baseHeight + breatheRange;
        // 가운데(2)에서 멀수록 위상이 늦어집니다.
        const phaseDelay = Math.abs(i - 2) * 0.12;

        return (
          <motion.rect
            key={i}
            x={x}
            width={barWidth}
            rx={barWidth / 2}
            fill="currentColor"
            initial={{ height: baseHeight, y: (totalH - baseHeight) / 2 }}
            animate={
              loop
                ? {
                    height: [baseHeight, peakHeight, baseHeight],
                    y: [
                      (totalH - baseHeight) / 2,
                      (totalH - peakHeight) / 2,
                      (totalH - baseHeight) / 2,
                    ],
                  }
                : { height: peakHeight, y: (totalH - peakHeight) / 2 }
            }
            transition={
              loop
                ? {
                    duration: 1.8,
                    ease: "easeInOut",
                    repeat: Infinity,
                    delay: phaseDelay,
                  }
                : {
                    duration: motionTokens.duration.slow,
                    ease: motionTokens.ease,
                    delay: phaseDelay,
                  }
            }
          />
        );
      })}
    </svg>
  );
}
