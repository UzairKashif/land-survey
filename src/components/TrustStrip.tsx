"use client";

import FadeContent from "./reactbits/FadeContent";

const points = [
  "Decades of field experience across two continents",
  "Trimble grade instrumentation and certified workflows",
  "ISO aligned quality, safety, and environmental practice",
  "Delivered for oil and gas, government, and infrastructure clients",
];

export default function TrustStrip() {
  return (
    <section className="border-y border-white/10 bg-ink-900/60">
      <div className="mx-auto grid max-w-content grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-4">
        {points.map((p, i) => (
          <FadeContent
            key={i}
            delay={i * 100}
            className="px-6 py-8 sm:border-l sm:border-white/10 sm:first:border-l-0 lg:[&:nth-child(odd)]:border-l-0 lg:[&]:border-l"
          >
            <p className="text-sm leading-relaxed text-slatey-200">{p}</p>
          </FadeContent>
        ))}
      </div>
    </section>
  );
}
