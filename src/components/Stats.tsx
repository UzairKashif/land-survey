"use client";

import { useEffect, useRef } from "react";
import { animate, motion, useInView } from "motion/react";

type Variant = "paper" | "ink" | "amber";

const cards: {
  value: number;
  decimals?: number;
  suffix?: string;
  label: string;
  variant: Variant;
}[] = [
  {
    value: 6800,
    suffix: " km",
    label: "of 3D seismic lines surveyed across the El Diyur concession",
    variant: "paper",
  },
  {
    value: 2100,
    suffix: " ha",
    label: "of cadastral survey delivered in the Benghazi redevelopment",
    variant: "ink",
  },
  {
    value: 162,
    suffix: " km",
    label: "of oil pipeline mapped and recorded as built in the Western Desert",
    variant: "paper",
  },
  {
    value: 150,
    suffix: "+",
    label: "geodetic control points established on a single project",
    variant: "amber",
  },
];

const styles: Record<Variant, { bg: string; fg: string; num: string }> = {
  paper: { bg: "#ECE8DE", fg: "#1B1A16", num: "#1B1A16" },
  ink: { bg: "#16150F", fg: "#C9C5B6", num: "#EBA10C" },
  amber: { bg: "#EBA10C", fg: "#1B1A16", num: "#1B1A16" },
};

function CountUp({
  value,
  decimals = 0,
  suffix = "",
}: {
  value: number;
  decimals?: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!inView) return;
    const node = ref.current;
    if (!node) return;
    const controls = animate(0, value, {
      duration: 2,
      ease: [0.33, 1, 0.68, 1],
      onUpdate: (v) => {
        node.textContent =
          v.toLocaleString("en-US", {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals,
          }) + suffix;
      },
    });
    return () => controls.stop();
  }, [inView, value, decimals, suffix]);

  return (
    <span ref={ref}>
      {(0).toFixed(decimals)}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section id="stats" className="w-full bg-[#F2F0E9] py-20 text-[#1B1A16] sm:py-28">
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="tech-mono mb-5 flex items-center justify-center gap-3 text-[11px] uppercase tracking-[0.22em] text-[#6F6B5E]"
        >
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-medium leading-[1.12] tracking-[-0.02em] sm:text-4xl md:text-5xl"
        >
          Proof, <em className="font-serif italic font-normal">measured</em> in the field.
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 sm:gap-5">
          {cards.map((c, i) => {
            const s = styles[c.variant];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                whileHover={{ y: -4 }}
                className="flex min-h-[260px] flex-col justify-between rounded-2xl p-6 sm:min-h-[320px] sm:p-8"
                style={{ backgroundColor: s.bg, color: s.fg }}
              >
                <span
                  className="text-4xl font-medium tabular-nums tracking-tight sm:text-5xl md:text-6xl"
                  style={{ color: s.num }}
                >
                  <CountUp value={c.value} decimals={c.decimals} suffix={c.suffix} />
                </span>
                <span className="max-w-[230px] text-sm leading-snug sm:text-base">
                  {c.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
