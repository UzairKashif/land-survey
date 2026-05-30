"use client";

import FadeContent from "./reactbits/FadeContent";
import SpotlightCard from "./reactbits/SpotlightCard";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-content px-6 py-28">
      <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div>
          <FadeContent>
            <p className="mb-4 text-sm uppercase tracking-[0.28em] text-accent">
              About LAND Survey
            </p>
          </FadeContent>
          <FadeContent delay={80}>
            <h2 className="max-w-2xl text-3xl font-semibold leading-tight text-white sm:text-4xl">
              A respected name in geospatial engineering, relaunched for the next
              generation of projects.
            </h2>
          </FadeContent>
          <FadeContent delay={160}>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-slatey-300">
              <p>
                LAND Survey is a multidisciplinary geospatial engineering firm. We
                specialise in land surveys, marine and coastal engineering
                services, mapping and GIS, and environmental studies that support
                oil and gas development and civil engineering projects.
              </p>
              <p>
                The business carries a long track record across Africa and the
                Middle East, built on technical depth and disciplined delivery. We
                have relaunched under a UK registered entity to give international
                clients and partners a stable, accountable base, while keeping our
                operational strength close to the projects we serve.
              </p>
              <p>
                Our model is simple. We bring the right people, the right
                instruments, and proven processes to every site, whether the work
                calls for construction support, industrial measurement, precise
                positioning, hydrographic survey, or route survey.
              </p>
            </div>
          </FadeContent>
        </div>

        <FadeContent delay={200}>
          <SpotlightCard className="p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-slatey-400">
              At a glance
            </p>
            <dl className="mt-6 space-y-6">
              {[
                ["Registered base", "United Kingdom"],
                ["Delivery region", "Africa and the Middle East"],
                ["Disciplines", "Land, marine, mapping, environmental"],
                ["Standards", "ISO 19000 series, ISO 14001, OHSAS 18001, ICAO"],
              ].map(([k, v]) => (
                <div key={k} className="border-b border-white/10 pb-5 last:border-0 last:pb-0">
                  <dt className="text-xs uppercase tracking-[0.2em] text-slatey-400">
                    {k}
                  </dt>
                  <dd className="mt-1.5 text-base text-white">{v}</dd>
                </div>
              ))}
            </dl>
          </SpotlightCard>
        </FadeContent>
      </div>
    </section>
  );
}
