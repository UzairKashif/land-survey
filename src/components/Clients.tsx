"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

type TierId =
  | "all"
  | "flagship"
  | "national"
  | "international"
  | "consulting"
  | "emerging";

const tiers: Record<Exclude<TierId, "all">, string[]> = {
  flagship: [
    "Dar Al-Handasah",
    "Arab Contractors",
    "Petrojet",
    "Hill International",
    "IDOM",
    "ADPI",
    "Langan",
    "Kvaerner",
    "Mobinil",
    "Al-Kharafi Construction",
  ],
  national: [
    "Waha Oil",
    "IMPREGILO LIDCO",
    "Teikoku Oil Libya UK Ltd",
    "ODAC",
    "Libyan Center for Remote Sensing",
    "Civil Aviation Authority",
    "Nuclear Material Authority",
    "NRIAG",
    "Nile Company for Road and Bridges",
    "Simplex",
    "Authority of River Transportation",
    "Real Estate Authority",
  ],
  international: [
    "Magnasoft",
    "Coastal Environments",
    "Civil Engineering Surveys Ltd",
    "HWP",
    "LCE Architects",
    "Pascucci & Vannucci",
    "Idroesse Infrastructure S.p.A.",
    "SOFT International",
    "Global Technologies",
    "Norton Engineering Co. Ltd",
  ],
  consulting: [
    "AL-FAHRAS",
    "DAR-ALMAMMAR",
    "AL-MANARA",
    "Hamza Associated",
    "Al Nasser Co.",
    "Maghrabi Ltd",
    "EIG",
    "ECH",
    "Golf Co.",
    "Ali-Nour-Din Nassar",
    "Al Gareeb Co.",
    "First Business Development Co.",
    "Diaa Consult",
    "Bonyan",
    "Geem Group",
    "IBS International",
  ],
  emerging: [
    "Allabina",
    "AlMoez Holding Group",
    "EcoAllied",
    "Alkaleej Tourism",
    "Libyan Saraya",
    "Momentum",
    "Akdeniz Libya",
    "RIDA T.S. Ltd.",
    "IBS Oil Services",
    "Quality Standards",
    "Globl Tech.",
    "Sacyr",
    "SV LIDCO",
  ],
};

const allClients = [
  ...tiers.flagship,
  ...tiers.national,
  ...tiers.international,
  ...tiers.consulting,
  ...tiers.emerging,
];

const categories: { id: TierId; label: string }[] = [
  { id: "all", label: "All" },
  { id: "flagship", label: "Flagship" },
  { id: "national", label: "National" },
  { id: "international", label: "International" },
  { id: "consulting", label: "Consulting" },
  { id: "emerging", label: "Emerging" },
];

export default function Clients() {
  const [active, setActive] = useState<TierId>("all");
  const list = active === "all" ? allClients : tiers[active];

  return (
    <section
      id="clients"
      className="w-full bg-[#F2F0E9] py-20 text-[#1B1A16] sm:py-28"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="tech-mono mb-5 flex items-center justify-center gap-3 text-[11px] uppercase tracking-[0.22em] text-[#6F6B5E]"
        >
          <span className="h-px w-8 bg-[#EBA10C]" />
          Clients
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center text-3xl font-medium leading-tight tracking-[-0.02em] sm:text-4xl lg:text-5xl"
        >
          Chosen by the organizations that build the region.
        </motion.h2>

        {/* Tier selector: desktop sliding pill */}
        <div className="mb-4 mt-12 hidden justify-center sm:flex">
          <div className="inline-flex gap-1 rounded-full border border-[#1B1A16]/10 bg-[#E8E5DB] p-1">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className="relative px-5 py-2.5 lg:px-6"
              >
                {active === c.id && (
                  <motion.span
                    layoutId="tierPill"
                    className="absolute inset-0 rounded-full bg-[#1B1A16]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span
                  className={`tech-mono relative z-10 text-[11px] uppercase tracking-[0.14em] transition-colors ${
                    active === c.id ? "text-[#F2F0E9]" : "text-[#6F6B5E] hover:text-[#1B1A16]"
                  }`}
                >
                  {c.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Tier selector: mobile pills */}
        <div className="mb-4 mt-10 flex flex-wrap justify-center gap-2 sm:hidden">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`tech-mono rounded-full px-4 py-2 text-[11px] uppercase tracking-[0.12em] transition-colors ${
                active === c.id
                  ? "bg-[#1B1A16] text-[#F2F0E9]"
                  : "bg-[#E8E5DB] text-[#6F6B5E]"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Count */}
        <p className="tech-mono mb-10 text-center text-[10px] uppercase tracking-[0.18em] text-[#9A9686]">
          Showing {list.length} of {allClients.length} organizations
        </p>

        {/* Client register */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="grid grid-cols-2 border-l border-t border-[#1B1A16]/10 sm:grid-cols-3 lg:grid-cols-4"
          >
            {list.map((name, i) => (
              <motion.div
                key={`${active}-${name}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: Math.min(i * 0.025, 0.5) }}
                className="group relative flex min-h-[96px] items-center justify-center border-b border-r border-[#1B1A16]/10 px-4 text-center transition-colors hover:bg-[#ECE8DD]"
              >
                <span className="tech-mono absolute left-2.5 top-2.5 text-[9px] tracking-[0.1em] text-[#B7B2A2] opacity-0 transition-opacity group-hover:opacity-100">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-medium tracking-[-0.01em] text-[#2A281F] transition-colors group-hover:text-[#B6841C] sm:text-[15px]">
                  {name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
