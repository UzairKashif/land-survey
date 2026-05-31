"use client";

import { motion } from "motion/react";

const standards = [
  { code: "ISO 19000s", title: "Geographic information", logo: "/standards/iso.png" },
  { code: "ISO 14001", title: "Environmental management", logo: "/standards/iso.png" },
  { code: "OHSAS 18001", title: "Health and safety", logo: "/standards/ohsas.png" },
  { code: "ICAO Annexes", title: "Aeronautical survey", logo: "/standards/icao.png" },
];

export default function Standards() {
  return (
    <section
      id="standards"
      className="w-full bg-[#F2F0E9] py-20 text-[#1B1A16] sm:py-28"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="tech-mono mb-5 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-[#6F6B5E]"
            >
              <span className="h-px w-8 bg-[#EBA10C]" />
              Standards
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="max-w-xl text-3xl font-medium leading-[1.12] tracking-[-0.02em] sm:text-4xl md:text-5xl"
            >
              Work aligned to recognised international standards.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="max-w-xl text-base leading-relaxed text-[#6F6B5E]"
          >
            A consistent framework keeps our deliverables auditable and accepted by
            the authorities and clients we serve, from geospatial data production
            to health, safety, and environmental management.
          </motion.p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-5">
          {standards.map((s, i) => (
            <motion.div
              key={`${s.code}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex min-h-[230px] flex-col rounded-2xl border border-[#1B1A16]/10 bg-[#ECE8DE] p-6 transition-colors hover:border-[#EBA10C]/50"
            >
              <div className="flex h-24 items-center justify-center rounded-xl bg-white p-5">
                <img
                  src={s.logo}
                  alt={`${s.code} logo`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="mt-5">
                <p className="tech-mono text-[11px] uppercase tracking-[0.14em] text-[#9A9686]">
                  {s.code}
                </p>
                <p className="mt-1.5 text-lg font-medium text-[#1B1A16]">{s.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
