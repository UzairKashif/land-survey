"use client";

import FadeContent from "./reactbits/FadeContent";

const pillars = [
  {
    title: "Technical excellence",
    body: "New mathematical models and modern instrumentation applied to real geodetic and geomatic problems, not off the shelf approximations.",
  },
  {
    title: "Practical experience",
    body: "Crews and project managers who have delivered in desert, coastal, and offshore conditions, with the ability to produce reports and maps on site.",
  },
  {
    title: "Client responsiveness",
    body: "A proactive approach to specification, planning, and execution, with clear communication from first brief to final deliverable.",
  },
  {
    title: "Reliability",
    body: "Calibrated instruments, controlled processes, and quality assurance built into every project so results are repeatable and defensible.",
  },
];

export default function Capabilities() {
  return (
    <section className="border-t border-white/10 bg-ink-900/40">
      <div className="mx-auto max-w-content px-6 py-28">
        <FadeContent>
          <p className="mb-4 text-sm uppercase tracking-[0.28em] text-accent">
            Why LAND Survey
          </p>
        </FadeContent>
        <FadeContent delay={80}>
          <h2 className="max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Engineering discipline at every stage of the work.
          </h2>
        </FadeContent>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <FadeContent
              key={p.title}
              delay={i * 100}
              className="bg-ink-900/60 p-8"
            >
              <div className="mb-5 font-viga text-2xl text-accent">
                0{i + 1}
              </div>
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slatey-300">
                {p.body}
              </p>
            </FadeContent>
          ))}
        </div>
      </div>
    </section>
  );
}
