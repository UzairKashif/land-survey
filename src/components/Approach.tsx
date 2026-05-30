"use client";

import FadeContent from "./reactbits/FadeContent";

const steps = [
  {
    title: "Scope and plan",
    body: "We review the contract, confirm the survey specification, and plan efficient execution against your requirements.",
  },
  {
    title: "Mobilise",
    body: "We deploy calibrated instruments and qualified crews, with safety requirements addressed before work begins.",
  },
  {
    title: "Execute and control",
    body: "We carry out the survey under continuous quality control, monitoring calibration status and conformance throughout.",
  },
  {
    title: "Deliver",
    body: "We process data, produce professional results in your defined formats, and provide reports that stand up to scrutiny.",
  },
];

export default function Approach() {
  return (
    <section id="approach" className="mx-auto max-w-content px-6 py-28">
      <FadeContent>
        <p className="mb-4 text-sm uppercase tracking-[0.28em] text-accent">
          How we work
        </p>
      </FadeContent>
      <FadeContent delay={80}>
        <h2 className="max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl">
          A controlled process from brief to handover.
        </h2>
      </FadeContent>

      <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <FadeContent key={s.title} delay={i * 100}>
            <div className="relative">
              <div className="mb-5 flex items-center gap-3">
                <span className="font-viga text-3xl text-white">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="h-px flex-1 bg-gradient-to-r from-accent/60 to-transparent" />
              </div>
              <h3 className="text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slatey-300">
                {s.body}
              </p>
            </div>
          </FadeContent>
        ))}
      </div>
    </section>
  );
}
