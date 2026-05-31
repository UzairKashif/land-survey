"use client";

import { motion } from "motion/react";
import { Satellite, ScanLine, Layers, GaugeCircle, type LucideIcon } from "lucide-react";
import { useEffect, useRef } from "react";

const features: { icon: LucideIcon; description: string }[] = [
  { icon: Satellite, description: "Trimble GNSS and RTK receivers for precise positioning" },
  { icon: ScanLine, description: "Robotic total stations and 3D laser scanning" },
  { icon: Layers, description: "Industry standard processing and design software" },
  { icon: GaugeCircle, description: "Calibrated before every job and on a monthly cycle" },
];

const equipment = [
  "Trimble R7 GNSS",
  "Trimble R8 RTK",
  "Trimble GX Scanner",
  "Spatial Station VX",
  "Robotic Total Station S3",
  "Total Station M3",
  "DiNi Digital Level",
  "Pathfinder ProXRS",
  "Echo Sounder DTM9000",
  "Juno SC Handheld",
];

const software = [
  "Trimble Business Center",
  "Trimble Geomatics Office",
  "AutoCAD",
  "ArcGIS",
  "Erdas Imagine",
  "Geomedia Pro",
  "HydroPro",
  "Hypack Max",
  "Pathfinder Office",
  "Surfer",
];

function Tile({ name, tag }: { name: string; tag: string }) {
  return (
    <div className="flex aspect-square w-full flex-col justify-between rounded-xl border border-[#1B1A16]/10 bg-[#ECE8DE] p-4">
      <span className="tech-mono text-[9px] uppercase tracking-[0.16em] text-[#9A9686]">
        {tag}
      </span>
      <span className="text-sm font-medium leading-snug tracking-[-0.01em] text-[#2A281F]">
        {name}
      </span>
    </div>
  );
}

export default function Technology() {
  const m1 = useRef<HTMLDivElement>(null);
  const m2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const a = m1.current;
    const b = m2.current;
    if (!a || !b) return;
    let raf: number;
    let p1 = 0;
    let p2 = 50;
    const tick = () => {
      p1 += 0.02;
      if (p1 >= 50) p1 = 0;
      a.style.transform = `translateY(-${p1}%)`;
      p2 -= 0.02;
      if (p2 <= 0) p2 = 50;
      b.style.transform = `translateY(-${p2}%)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section
      id="technology"
      className="w-full bg-[#F2F0E9] py-20 text-[#1B1A16] sm:py-28"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-3 lg:gap-12">
          {/* Left */}
          <div className="lg:col-span-2">
            <div className="mb-10">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="tech-mono mb-5 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-[#6F6B5E]"
              >
                <span className="h-px w-8 bg-[#EBA10C]" />
                Technology
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="mb-5 max-w-xl text-3xl font-medium leading-[1.12] tracking-[-0.02em] sm:text-4xl md:text-5xl"
              >
                Modern instrumentation, certified workflows.
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="max-w-2xl text-base text-[#6F6B5E] sm:text-lg"
              >
                We operate a fleet of Trimble GNSS and RTK systems, robotic total
                stations, 3D scanners, digital levels, and echo sounders, supported
                by industry standard processing software. Every instrument is
                calibrated before deployment, so accuracy is never assumed, it is
                verified.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#EBA10C]/40 bg-[#EBA10C]/10 text-[#B6841C]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="max-w-[24ch] text-sm leading-relaxed text-[#3A382F] sm:text-base">
                      {f.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right: dual marquee of instruments and software */}
          <div className="relative h-[260px] lg:col-span-1 lg:h-[640px]">
            <div className="relative grid h-full grid-cols-2 gap-4 overflow-hidden rounded-2xl">
              <div className="pointer-events-none absolute inset-0 z-10">
                <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#F2F0E9] to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#F2F0E9] to-transparent" />
              </div>

              <div className="relative overflow-hidden">
                <div ref={m1} className="flex flex-col gap-4">
                  {[...equipment, ...equipment].map((name, i) => (
                    <Tile key={`e-${i}`} name={name} tag="Instrument" />
                  ))}
                </div>
              </div>

              <div className="relative overflow-hidden">
                <div ref={m2} className="flex flex-col gap-4">
                  {[...software, ...software].map((name, i) => (
                    <Tile key={`s-${i}`} name={name} tag="Software" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
