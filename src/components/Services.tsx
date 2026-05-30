"use client";

import FadeContent from "./reactbits/FadeContent";
import SpotlightCard from "./reactbits/SpotlightCard";

const services = [
  {
    title: "Land survey",
    body: "GPS and GNSS survey, geodetic control networks, topographic survey, precise levelling, cadastral survey, site setting out, pipeline survey, and well positioning.",
  },
  {
    title: "Marine and coastal engineering",
    body: "Hydrographic and bathymetric survey, oceanographic studies, coastal process analysis, marine geology, and geophysical survey across the full lifecycle of a coastal structure.",
  },
  {
    title: "Mapping and GIS",
    body: "Aerial photogrammetry, map production, satellite imagery and remote sensing, digital terrain and elevation models, GIS data collection, processing, and asset tracking.",
  },
  {
    title: "Seismic and oil field survey",
    body: "2D and 3D seismic survey support, well positioning and site survey, pipeline routing and as built survey, and 3D laser scanning of rigs and plant for clash detection.",
  },
  {
    title: "Infrastructure and engineering survey",
    body: "Topographic and geodetic control for roads, railways, bridges, and tunnels, route surveys, highway and railway construction surveys, and structural deformation monitoring.",
  },
  {
    title: "Special applications",
    body: "Aeronautical Information Service for airports, archaeological registration and 3D documentation, LAAS positioning for airports and harbours, and crustal and structural movement studies.",
  },
];

export default function Services() {
  return (
    <section id="services" className="border-t border-white/10 bg-ink-900/40">
      <div className="mx-auto max-w-content px-6 py-28">
        <FadeContent>
          <p className="mb-4 text-sm uppercase tracking-[0.28em] text-accent">
            What we do
          </p>
        </FadeContent>
        <FadeContent delay={80}>
          <h2 className="max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Integrated surveying services, delivered end to end.
          </h2>
        </FadeContent>
        <FadeContent delay={140}>
          <p className="mt-5 max-w-2xl text-base text-slatey-300">
            From a single control point to a full multidisciplinary programme, we
            cover the complete surveying lifecycle.
          </p>
        </FadeContent>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <FadeContent key={s.title} delay={(i % 3) * 100}>
              <SpotlightCard className="h-full p-7">
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg border border-accent/30 bg-accent/10 text-accent">
                  <span className="font-viga text-sm">{i + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-white">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slatey-300">
                  {s.body}
                </p>
              </SpotlightCard>
            </FadeContent>
          ))}
        </div>
      </div>
    </section>
  );
}
