"use client";

import FadeContent from "./reactbits/FadeContent";

const sectors = [
  "Oil and gas, onshore and offshore",
  "Construction and infrastructure",
  "Mining and quarrying",
  "Government and public authorities",
  "Aviation and airports",
  "Coastal and marine development",
];

export default function Sectors() {
  return (
    <section id="sectors" className="mx-auto max-w-content px-6 py-28">
      <FadeContent>
        <p className="mb-4 text-sm uppercase tracking-[0.28em] text-accent">
          Sectors
        </p>
      </FadeContent>
      <FadeContent delay={80}>
        <h2 className="max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl">
          Trusted by the industries that depend on accurate ground truth.
        </h2>
      </FadeContent>
      <FadeContent delay={140}>
        <p className="mt-5 max-w-2xl text-base text-slatey-300">
          We work alongside contractors, consulting engineers, and authorities at
          every stage, from early exploration to as built handover.
        </p>
      </FadeContent>

      <div className="mt-12 flex flex-wrap gap-3">
        {sectors.map((s, i) => (
          <FadeContent key={s} delay={i * 70}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-5 py-2.5 text-sm text-slatey-200 transition-colors hover:border-accent/40 hover:text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {s}
            </span>
          </FadeContent>
        ))}
      </div>
    </section>
  );
}
