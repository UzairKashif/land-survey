"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  Compass,
  Waves,
  Layers,
  Radio,
  Route,
  Plane,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

type Service = {
  title: string;
  desc: string;
  icon: LucideIcon;
  image: string;
};

const services: Service[] = [
  {
    title: "Land survey",
    desc: "GPS and GNSS survey, geodetic control networks, topographic survey, precise levelling, cadastral survey, site setting out, pipeline survey, and well positioning.",
    icon: Compass,
    image: "/services/svc-01.png",
  },
  {
    title: "Marine and coastal",
    desc: "Hydrographic and bathymetric survey, oceanographic studies, coastal process analysis, marine geology, and geophysical survey across the lifecycle of a coastal structure.",
    icon: Waves,
    image: "/services/svc-02.png",
  },
  {
    title: "Mapping and GIS",
    desc: "Aerial photogrammetry, map production, satellite imagery and remote sensing, digital terrain and elevation models, and GIS data collection and processing.",
    icon: Layers,
    image: "/services/svc-03.png",
  },
  {
    title: "Seismic and oil field",
    desc: "2D and 3D seismic survey support, well positioning and site survey, pipeline routing and as built survey, and 3D laser scanning of rigs and plant for clash detection.",
    icon: Radio,
    image: "/services/svc-04.png",
  },
  {
    title: "Infrastructure and engineering",
    desc: "Topographic and geodetic control for roads, railways, bridges, and tunnels, route surveys, construction surveys, and structural deformation monitoring.",
    icon: Route,
    image: "/services/svc-05.png",
  },
  {
    title: "Special applications",
    desc: "Aeronautical Information Service for airports, archaeological registration and 3D documentation, LAAS positioning for airports and harbours, and crustal movement studies.",
    icon: Plane,
    image: "/services/svc-06.png",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="w-full bg-[#F2F0E9] py-20 text-[#1B1A16] sm:py-28"
    >
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="tech-mono mb-5 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-[#6F6B5E]"
        >
          Services
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl text-3xl font-medium leading-[1.12] tracking-[-0.02em] sm:text-4xl md:text-5xl"
        >
          Integrated surveying services,
          <br className="hidden sm:block" /> delivered end to end.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-5 max-w-xl text-base text-[#6F6B5E]"
        >
        </motion.p>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Card key={s.title} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ service, index }: { service: Service; index: number }) {
  const [hovered, setHovered] = useState(false);
  const Icon = service.icon;
  const words = service.desc.split(" ");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: 0.05 * index }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative flex min-h-[340px] flex-col overflow-hidden rounded-2xl border border-[#1B1A16]/10 p-6 transition-colors hover:border-[#EBA10C]/50"
    >
      {/* background image */}
      <img
        src={service.image}
        alt={service.title}
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* permanent subtle scrim for title legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
      {/* darken on hover */}
      <motion.div
        initial={false}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-black/55"
      />

      {/* amber glow on hover */}
      <motion.div
        initial={false}
        animate={{ opacity: hovered ? 0.7 : 0, scale: hovered ? 1 : 0.75 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="pointer-events-none absolute -bottom-24 right-0 h-64 w-64 rounded-full blur-md"
        style={{
          background:
            "radial-gradient(circle, rgba(235,161,12,0.6) 0%, rgba(235,161,12,0) 70%)",
        }}
      />

      <div className="relative flex items-start justify-between">
        <motion.span
          animate={{ color: hovered ? "#EBA10C" : "#F2F0E9" }}
          transition={{ duration: 0.3 }}
          className="inline-flex"
        >
          <Icon className="h-5 w-5" />
        </motion.span>
        <span className="tech-mono text-[11px] tracking-[0.12em] text-white/70">
          {String(index + 1).padStart(2, "0")} / 06
        </span>
      </div>

      <p className="relative mt-4 max-w-[230px] text-xs leading-relaxed text-white/90 sm:text-sm">
        {words.map((w, wi) => (
          <motion.span
            key={wi}
            initial={false}
            animate={{
              opacity: hovered ? 1 : 0,
              y: hovered ? 0 : 4,
              filter: hovered ? "blur(0px)" : "blur(3px)",
            }}
            transition={{
              duration: 0.3,
              delay: hovered ? wi * 0.02 : 0,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mr-[0.25em] inline-block"
          >
            {w}
          </motion.span>
        ))}
      </p>

      <div className="relative mt-auto flex items-center justify-between pt-8">
        <span className="text-lg font-medium tracking-[-0.01em] text-[#F2F0E9] [text-shadow:0_1px_8px_rgba(0,0,0,0.5)]">
          {service.title}
        </span>
        <motion.span
          initial={false}
          animate={{
            backgroundColor: hovered ? "#EBA10C" : "rgba(255,255,255,0.15)",
            color: hovered ? "#1B1A16" : "#F2F0E9",
          }}
          transition={{ duration: 0.3 }}
          className="flex h-10 w-10 items-center justify-center rounded-full backdrop-blur-sm"
        >
          <motion.span
            animate={{ x: hovered ? 2 : 0 }}
            transition={{ duration: 0.3 }}
            className="inline-flex"
          >
            <ArrowRight className="h-4 w-4" />
          </motion.span>
        </motion.span>
      </div>
    </motion.div>
  );
}
