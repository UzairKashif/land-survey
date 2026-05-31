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

type Kit = { name: string; img: string };

const equipment: Kit[] = [
  { name: "Trimble R7 GNSS", img: "/equipment/Trimble-R7-GNSS.jpg" },
  { name: "Trimble R8 RTK", img: "/equipment/Trimble-R8-RTK-GPS.jpg" },
  { name: "Robotic Total Station S3", img: "/equipment/TrimbleS3studiofaceleft175_300.webp" },
  { name: "Total Station M3", img: "/equipment/Trimble-Total-Station-M3-Series-Types-of-Total-Station.avif" },
  { name: "DiNi Digital Level", img: "/equipment/dini.webp" },
  { name: "Echo Sounder ES9000", img: "/equipment/Echo-Sounder-ES9000-10-.avif" },
  { name: "Juno SC Handheld", img: "/equipment/juno-sc-handheld.jpg" },
];

const software: Kit[] = [
  { name: "Trimble Business Center", img: "/software/trimble.png" },
  { name: "AutoCAD", img: "/software/autocad.png" },
  { name: "ArcGIS", img: "/software/ArcGIS-Pro.png" },
  { name: "Erdas Imagine", img: "/software/erdas.webp" },
  { name: "Geomedia Pro", img: "/software/geomedia-software-500x500.webp" },
  { name: "Hypack Max", img: "/software/hypack-logo.webp" },
  { name: "Surfer", img: "/software/sufer.jpg" },
];

function Tile({ name, img, tag }: { name: string; img: string; tag: string }) {
  return (
    <div className="flex aspect-square w-full flex-col overflow-hidden rounded-xl border border-[#1B1A16]/10 bg-white">
      <div className="flex flex-1 items-center justify-center p-4">
        <img
          src={img}
          alt={name}
          loading="lazy"
          className="max-h-full max-w-full object-contain"
        />
      </div>
      <div className="border-t border-[#1B1A16]/10 bg-[#ECE8DE] px-3 py-2">
        <span className="tech-mono block text-[8px] uppercase tracking-[0.16em] text-[#9A9686]">
          {tag}
        </span>
        <span className="block truncate text-[11px] font-medium leading-tight text-[#2A281F]">
          {name}
        </span>
      </div>
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
                by industry standard processing software.
              </motion.p>
            </div>

            {/* <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
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
            </div> */}
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
                  {[...equipment, ...equipment].map((item, i) => (
                    <Tile key={`e-${i}`} name={item.name} img={item.img} tag="" />
                  ))}
                </div>
              </div>

              <div className="relative overflow-hidden">
                <div ref={m2} className="flex flex-col gap-4">
                  {[...software, ...software].map((item, i) => (
                    <Tile key={`s-${i}`} name={item.name} img={item.img} tag="" />
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
