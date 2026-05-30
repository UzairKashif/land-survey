"use client";

import FadeContent from "./reactbits/FadeContent";
import SpotlightCard from "./reactbits/SpotlightCard";
import CountUp from "./reactbits/CountUp";

const figures = [
  { end: 6800, suffix: " km", label: "of 3D seismic lines surveyed" },
  { end: 2100, suffix: " ha", label: "of cadastral survey in one programme" },
  { end: 162, suffix: " km", label: "oil pipeline mapped and recorded as built" },
  { end: 150, suffix: "+", label: "geodetic control points on a single project" },
];

const projects = [
  "Cadastral and control survey for Benghazi infrastructure redevelopment, Libya",
  "Topographic survey for the Ein Zara development, Tripoli, Libya",
  "3D seismic survey of the El Diyur concession, Egypt",
  "Hydrographic survey of the River Nile transportation corridor, Egypt",
  "Oceanographic and shoreline study for the Araar coastal project, Libya",
  "Pipeline as built survey, Western Desert, Egypt",
];

export default function TrackRecord() {
  return (
    <section
      id="track-record"
      className="border-t border-white/10 bg-ink-900/40"
    >
      <div className="mx-auto max-w-content px-6 py-28">
        <FadeContent>
          <p className="mb-4 text-sm uppercase tracking-[0.28em] text-accent">
            Track record
          </p>
        </FadeContent>
        <FadeContent delay={80}>
          <h2 className="max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Delivered across borders, sectors, and conditions.
          </h2>
        </FadeContent>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {figures.map((f, i) => (
            <FadeContent key={f.label} delay={i * 100}>
              <SpotlightCard className="h-full p-7">
                <div className="font-viga text-4xl text-white">
                  <CountUp end={f.end} suffix={f.suffix} />
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slatey-300">
                  {f.label}
                </p>
              </SpotlightCard>
            </FadeContent>
          ))}
        </div>

        <FadeContent delay={150}>
          <h3 className="mt-16 text-sm uppercase tracking-[0.2em] text-slatey-400">
            Selected projects
          </h3>
        </FadeContent>
        <div className="mt-6 grid gap-x-12 gap-y-4 sm:grid-cols-2">
          {projects.map((p, i) => (
            <FadeContent key={p} delay={i * 60}>
              <div className="flex items-start gap-3 border-b border-white/8 py-4">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                <span className="text-base text-slatey-200">{p}</span>
              </div>
            </FadeContent>
          ))}
        </div>
      </div>
    </section>
  );
}
