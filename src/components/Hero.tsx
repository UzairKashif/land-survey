"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

/**
 * Hero for LAND Survey.
 * Built on the React Bits Pro "Hero-16" layout (logo top, large headline,
 * subtitle left and CTA right), then art directed around the survey concept:
 * a paper sheet, ink type, a single signal-amber accent, drifting topographic
 * contours, corner registration marks, spot heights, a scale bar, and a live
 * coordinate readout taken from control point L21, Misratah.
 */
export function Hero16() {
  const [isCtaHovered, setIsCtaHovered] = useState(false);

  return (
    <section className="relative w-full min-h-screen flex flex-col overflow-hidden bg-[#F2F0E9] text-[#1B1A16] py-10 px-5 sm:px-8 lg:px-12">
      {/* Background field: contours, grid, registration marks */}
      <TopoField />
      <CornerMarks />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px] flex flex-col flex-1">
        {/* Middle: eyebrow + headline */}
        <div className="flex-1 flex flex-col justify-center pt-24 sm:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="tech-mono mb-7 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-[#6F6B5E]"
          >
            <span className="h-px w-8 bg-[#EBA10C]" />
            Geospatial engineering
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium leading-[0.98] tracking-[-0.03em] max-w-5xl"
          >
            Ground truth for
            <br />
            land, coast,
            <br />
            and{" "}
            <span className="relative whitespace-nowrap">
              seabed.
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.7, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -bottom-1 left-0 h-[3px] w-full origin-left bg-[#EBA10C]"
              />
            </span>
          </motion.h1>

          {/* Scale bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="tech-mono mt-12 flex items-center gap-3 text-[10px] uppercase tracking-[0.14em] text-[#6F6B5E]"
          >
            <div className="flex h-2 w-40 overflow-hidden border border-[#1B1A16]/40">
              <span className="h-full w-1/4 bg-[#1B1A16]" />
              <span className="h-full w-1/4" />
              <span className="h-full w-1/4 bg-[#1B1A16]" />
              <span className="h-full w-1/4" />
            </div>
            <span>0</span>
            <span className="ml-auto sm:ml-8">500 m</span>
          </motion.div>
        </div>

        {/* Bottom: subtitle left + CTA right */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 sm:gap-10 pt-8">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="text-base md:text-lg text-[#3A382F] leading-relaxed flex-1 min-w-0 max-w-md"
          >
            A UK registered firm delivering precise land, marine, and mapping
            surveys across Africa and the Middle East. Measured, verified, and
            built to international standard.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="flex items-center gap-2.5 w-full sm:w-auto shrink-0"
            onMouseEnter={() => setIsCtaHovered(true)}
            onMouseLeave={() => setIsCtaHovered(false)}
          >
            <motion.a
              href="#services"
              whileTap={{ scale: 0.97 }}
              className="tech-mono inline-flex items-center justify-center flex-1 sm:flex-none px-8 py-4 rounded-xl bg-[#1B1A16] text-[#F2F0E9] text-[11px] sm:text-xs font-medium tracking-[0.14em] uppercase cursor-pointer hover:bg-[#000] transition-colors duration-200"
            >
              Discover our capabilities
            </motion.a>
            <motion.a
              href="#contact"
              whileTap={{ scale: 0.95 }}
              className="shrink-0 inline-flex items-center justify-center w-12 h-12 sm:w-[3.25rem] sm:h-[3.25rem] rounded-xl bg-[#EBA10C] text-[#1B1A16] cursor-pointer hover:bg-[#f2ad2a] transition-colors duration-200"
            >
              <motion.span
                animate={{ x: isCtaHovered ? 3 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.span>
            </motion.a>
          </motion.div>
        </div>

        {/* Title block: live coordinate readout */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="tech-mono mt-10 flex flex-col gap-2 border-t border-[#1B1A16]/15 pt-4 text-[10px] uppercase tracking-[0.16em] text-[#6F6B5E] sm:flex-row sm:items-center sm:justify-between"
        >
          <span>LAND SURVEY &middot; Geospatial engineering</span>
          <span className="flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#EBA10C] opacity-75 animate-ping" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#EBA10C]" />
            </span>
            Station L21 / Misratah &middot; 32&deg;21&apos;37.6&quot;N 15&deg;04&apos;21.8&quot;E &middot; LGD2006 LTM Zone 8
          </span>
        </motion.div>
      </div>
    </section>
  );
}

/** Drifting topographic contour lines with spot heights. */
function TopoField() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
      {/* faint engineering grid */}
      <div
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(27,26,22,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(27,26,22,0.045) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
      {/* contours, anchored to the right */}
      <motion.svg
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.4 }}
        viewBox="0 0 800 800"
        className="absolute -right-32 top-1/2 -translate-y-1/2 h-[150%] w-auto animate-drift"
        fill="none"
      >
        {Array.from({ length: 9 }).map((_, i) => {
          const s = 1 - i * 0.1;
          return (
            <path
              key={i}
              d="M400 150 C545 150 675 245 700 390 C722 520 640 645 480 678 C345 706 185 628 158 478 C133 338 235 150 400 150 Z"
              stroke="#1B1A16"
              strokeOpacity={i === 3 ? 0.28 : 0.12}
              strokeWidth={i === 3 ? 1.4 : 1}
              transform={`translate(400 414) scale(${s}) translate(-400 -414)`}
            />
          );
        })}
        {/* spot heights, like a real topo sheet */}
        <SpotHeight x={400} y={414} label="4.6" />
        <SpotHeight x={560} y={300} label="3.9" />
        <SpotHeight x={300} y={560} label="5.3" />
      </motion.svg>
    </div>
  );
}

function SpotHeight({ x, y, label }: { x: number; y: number; label: string }) {
  return (
    <g>
      <circle cx={x} cy={y} r={3} fill="#EBA10C" />
      <text
        x={x + 10}
        y={y + 4}
        fill="#6F6B5E"
        fontSize="15"
        style={{ fontFamily: "'SF Mono', monospace" }}
      >
        {label}
      </text>
    </g>
  );
}

/** Corner registration crosshairs, like the margins of a survey drawing. */
function CornerMarks() {
  const Mark = ({ className }: { className: string }) => (
    <div className={`absolute h-4 w-4 ${className}`}>
      <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[#1B1A16]/30" />
      <span className="absolute top-1/2 left-0 w-full h-px -translate-y-1/2 bg-[#1B1A16]/30" />
    </div>
  );
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
      <Mark className="left-5 top-5 sm:left-8 sm:top-8" />
      <Mark className="right-5 top-5 sm:right-8 sm:top-8" />
      <Mark className="left-5 bottom-5 sm:left-8 sm:bottom-8" />
      <Mark className="right-5 bottom-5 sm:right-8 sm:bottom-8" />
    </div>
  );
}

export default Hero16;
