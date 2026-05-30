"use client";

import FadeContent from "./reactbits/FadeContent";

const standards = ["ISO 19000 series", "ISO 14001", "OHSAS 18001", "ICAO annexes"];

export default function Standards() {
  return (
    <section id="standards" className="border-t border-white/10 bg-ink-900/40">
      <div className="mx-auto max-w-content px-6 py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <FadeContent>
              <p className="mb-4 text-sm uppercase tracking-[0.28em] text-accent">
                Standards
              </p>
            </FadeContent>
            <FadeContent delay={80}>
              <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
                Work aligned to recognised international standards.
              </h2>
            </FadeContent>
            <FadeContent delay={160}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-slatey-300">
                Our survey and map production follow the ISO 19000 series for
                geographic information. We apply OHSAS 18001 for health and safety
                and ISO 14001 for environmental management. Aviation work is
                delivered to the relevant ICAO annexes. This framework keeps our
                deliverables consistent, auditable, and accepted by the
                authorities and clients we serve.
              </p>
            </FadeContent>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {standards.map((s, i) => (
              <FadeContent key={s} delay={i * 100}>
                <div className="flex h-24 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-4 text-center text-sm font-medium text-slatey-100">
                  {s}
                </div>
              </FadeContent>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
