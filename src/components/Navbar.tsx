"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ChevronRight,
  ArrowUpRight,
  Menu,
  X,
  Compass,
  Waves,
  Layers,
  Radio,
  Route,
  Plane,
  Building2,
  MapPin,
  ShieldCheck,
  BarChart3,
  type LucideIcon,
} from "lucide-react";

type Card = {
  title: string;
  desc: string;
  href: string;
  icon: LucideIcon;
};

const menu: Record<string, { heading: string; cards: Card[] }> = {
  Services: {
    heading: "Integrated surveying services",
    cards: [
      {
        title: "Land survey",
        desc: "GPS and GNSS, geodetic control, topographic, cadastral, and precise levelling.",
        href: "#services",
        icon: Compass,
      },
      {
        title: "Marine and coastal",
        desc: "Hydrographic and bathymetric survey, oceanographic and coastal process studies.",
        href: "#services",
        icon: Waves,
      },
      {
        title: "Mapping and GIS",
        desc: "Photogrammetry, satellite imagery, terrain models, and GIS data collection.",
        href: "#services",
        icon: Layers,
      },
      {
        title: "Seismic and oil field",
        desc: "2D and 3D seismic support, well positioning, pipeline routing, and rig scanning.",
        href: "#services",
        icon: Radio,
      },
      {
        title: "Infrastructure survey",
        desc: "Control for roads, rail, bridges, and tunnels, plus deformation monitoring.",
        href: "#services",
        icon: Route,
      },
      {
        title: "Special applications",
        desc: "Airport AIS, archaeological documentation, and structural movement studies.",
        href: "#services",
        icon: Plane,
      },
    ],
  },
  Company: {
    heading: "Inside LAND Survey",
    cards: [
      {
        title: "About",
        desc: "A respected geospatial name, relaunched under a UK registered entity.",
        href: "#about",
        icon: Building2,
      },
      {
        title: "Sectors",
        desc: "Oil and gas, infrastructure, mining, government, aviation, and marine.",
        href: "#sectors",
        icon: MapPin,
      },
      {
        title: "Standards",
        desc: "ISO 19000 series, ISO 14001, OHSAS 18001, and the relevant ICAO annexes.",
        href: "#standards",
        icon: ShieldCheck,
      },
      {
        title: "Track record",
        desc: "Delivered across borders and sectors, from desert to seabed.",
        href: "#track-record",
        icon: BarChart3,
      },
    ],
  },
};

const links = ["Services", "Company"] as const;
type Link = (typeof links)[number];

export default function Navbar() {
  const [active, setActive] = useState<Link | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const current = active ? menu[active] : null;

  const close = () => {
    setActive(null);
    setMobileOpen(false);
  };

  return (
    <div className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div
        className="mx-auto flex w-full max-w-[1400px] flex-col gap-3"
        onMouseLeave={() => setActive(null)}
      >
        <motion.nav
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative flex items-center justify-between gap-2 rounded-full border border-white/10 bg-[#16150F]/95 py-1.5 pl-4 pr-1.5 backdrop-blur-md md:pl-7"
        >
          {/* Left: desktop links */}
          <div className="hidden items-center gap-7 md:flex">
            {links.map((l) => (
              <button
                key={l}
                type="button"
                onMouseEnter={() => setActive(l)}
                onFocus={() => setActive(l)}
                onClick={() => setActive((a) => (a === l ? null : l))}
                className={`tech-mono cursor-pointer py-2 text-[11px] uppercase tracking-[0.16em] transition-colors ${
                  active === l ? "text-[#EBA10C]" : "text-[#C9C5B6] hover:text-white"
                }`}
              >
                {l}
              </button>
            ))}
            <a
              href="#track-record"
              onClick={close}
              className="tech-mono cursor-pointer py-2 text-[11px] uppercase tracking-[0.16em] text-[#C9C5B6] transition-colors hover:text-white"
            >
              Track record
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => {
              setMobileOpen((o) => !o);
              setActive(null);
            }}
            aria-label="Toggle menu"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 md:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          {/* Center: wordmark */}
          <a
            href="#top"
            onClick={close}
            className="font-viga text-lg tracking-wide text-[#F2F0E9] md:absolute md:left-1/2 md:-translate-x-1/2 sm:text-xl"
          >
            LAND<span className="text-[#EBA10C]"> SURVEY</span>
          </a>

          {/* Right: CTA */}
          <a
            href="#contact"
            onClick={close}
            className="tech-mono inline-flex items-center gap-1.5 rounded-full bg-[#EBA10C] px-4 py-2.5 text-[11px] font-medium uppercase tracking-[0.12em] text-[#1B1A16] transition-colors hover:bg-[#f2ad2a] sm:px-5"
          >
            Consult
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </motion.nav>

        {/* Mobile stacked menu */}
        <AnimatePresence initial={false}>
          {mobileOpen && (
            <motion.div
              key="mobile"
              initial={{ opacity: 0, y: -8, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -8, height: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="overflow-hidden rounded-3xl border border-black/10 bg-[#FBFAF6] md:hidden"
            >
              <div className="flex flex-col p-2">
                {[
                  { label: "Services", href: "#services" },
                  { label: "Sectors", href: "#sectors" },
                  { label: "Standards", href: "#standards" },
                  { label: "Track record", href: "#track-record" },
                  { label: "About", href: "#about" },
                  { label: "Contact", href: "#contact" },
                ].map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={close}
                    className="tech-mono rounded-2xl px-4 py-3 text-[12px] uppercase tracking-[0.14em] text-[#3A382F] transition-colors hover:bg-black/5"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Desktop mega panel */}
        <AnimatePresence initial={false}>
          {current && (
            <motion.div
              key="panel"
              initial={{ opacity: 0, y: -8, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -8, height: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="hidden overflow-hidden rounded-3xl border border-black/10 bg-[#FBFAF6] md:block"
            >
              <div className="p-7">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    <p className="tech-mono flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-[#6F6B5E]">
                      <span className="h-px w-8 bg-[#EBA10C]" />
                      {current.heading}
                    </p>
                    <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {current.cards.map((c) => {
                        const Icon = c.icon;
                        return (
                          <a
                            key={c.title}
                            href={c.href}
                            onClick={close}
                            className="group rounded-2xl border border-black/10 bg-[#F2F0E9] p-5 transition-colors hover:border-[#EBA10C]"
                          >
                            <div className="flex items-start justify-between">
                              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#EBA10C]/40 bg-[#EBA10C]/10 text-[#B6841C]">
                                <Icon className="h-4 w-4" />
                              </span>
                              <ChevronRight className="h-4 w-4 text-[#9A9686] transition-transform group-hover:translate-x-0.5" />
                            </div>
                            <p className="mt-4 text-sm font-medium text-[#1B1A16]">
                              {c.title}
                            </p>
                            <p className="mt-1.5 text-xs leading-relaxed text-[#6F6B5E]">
                              {c.desc}
                            </p>
                          </a>
                        );
                      })}
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div className="tech-mono mt-7 flex flex-col items-start justify-between gap-3 border-t border-black/10 pt-5 text-[10px] uppercase tracking-[0.14em] text-[#6F6B5E] sm:flex-row sm:items-center">
                  <span>UK registered &middot; Delivering across Africa and the Middle East</span>
                  <a
                    href="#contact"
                    onClick={close}
                    className="inline-flex items-center gap-1 text-[#B6841C] hover:text-[#1B1A16]"
                  >
                    Request a consultation
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
