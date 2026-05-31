"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

/**
 * Hero for LAND Survey.
 * Split layout: the vintage topographic map sits clean and untouched in its own
 * column, with no overlay or shading. The headline lives on a solid paper panel
 * beside it, carrying the amber accent and the live coordinate strip.
 */
export function Hero16() {
  const [hover, setHover] = useState(false);

  return (
    <section className="relative w-full bg-[#F2F0E9] text-[#1B1A16] lg:grid lg:min-h-screen lg:grid-cols-[1.25fr_1.75fr]">
      {/* Left: text panel */}
      <div className="relative flex flex-col px-5 pb-12 pt-28 sm:px-8 lg:px-12 lg:py-12">
        <div className="flex flex-1 flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="tech-mono mb-7 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-[#6F6B5E]"
          >
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl text-5xl font-medium leading-[0.98] tracking-[-0.03em] sm:text-6xl md:text-7xl"
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
                transition={{ duration: 0.7, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -bottom-1 left-0 h-[3px] w-full origin-left bg-[#EBA10C]"
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 max-w-md text-base leading-relaxed text-[#3A382F] sm:text-lg"
          >
            A UK registered firm delivering precise land, marine, and mapping
            surveys across Africa and the Middle East. Measured, verified, and
            built to international standard.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.62 }}
            className="mt-10 flex items-center gap-2.5"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <a
              href="#services"
              className="tech-mono inline-flex items-center justify-center rounded-xl bg-[#1B1A16] px-8 py-4 text-[11px] font-medium uppercase tracking-[0.14em] text-[#F2F0E9] transition-colors hover:bg-black sm:text-xs"
            >
              Discover our capabilities
            </a>
            <a
              href="#contact"
              className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EBA10C] text-[#1B1A16] transition-colors hover:bg-[#f2ad2a] sm:h-[3.25rem] sm:w-[3.25rem]"
            >
              <motion.span animate={{ x: hover ? 3 : 0 }} transition={{ duration: 0.2 }}>
                <ArrowRight className="h-5 w-5" />
              </motion.span>
            </a>
          </motion.div>
        </div>

        {/* title block: live coordinate readout */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="tech-mono mt-12 flex flex-col gap-2 border-t border-[#1B1A16]/15 pt-4 text-[10px] uppercase tracking-[0.16em] text-[#6F6B5E] sm:flex-row sm:items-center sm:justify-between lg:mt-0"
        >
          <span>LAND SURVEY &middot; Geospatial engineering</span>
          <span className="flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#EBA10C] opacity-75 animate-ping" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#EBA10C]" />
            </span>
            Station L21 / Misratah &middot; 32&deg;21&apos;37.6&quot;N 15&deg;04&apos;21.8&quot;E
          </span>
        </motion.div>
      </div>

      {/* Right: clean map, no overlay */}
      <div className="relative min-h-[44vh] border-t border-[#1B1A16]/10 lg:min-h-screen lg:border-l lg:border-t-0">
        <img
          src="/hero-map.jpg"
          alt="Vintage topographic survey map"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </section>
  );
}

export default Hero16;
