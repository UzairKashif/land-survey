"use client";

import FadeContent from "./reactbits/FadeContent";
import ScrollVelocity from "./reactbits/ScrollVelocity";

const stack = [
  "Trimble GNSS RTK",
  "Robotic Total Stations",
  "3D Laser Scanning",
  "Digital Levels",
  "Echo Sounders",
  "Trimble Business Center",
  "AutoCAD",
  "ArcGIS",
  "Erdas Imagine",
  "Pathfinder Office",
];

export default function Technology() {
  return (
    <section id="technology" className="mx-auto max-w-content px-6 py-28">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <FadeContent>
            <p className="mb-4 text-sm uppercase tracking-[0.28em] text-accent">
              Technology
            </p>
          </FadeContent>
          <FadeContent delay={80}>
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Modern instrumentation, certified workflows.
            </h2>
          </FadeContent>
          <FadeContent delay={160}>
            <p className="mt-6 text-base leading-relaxed text-slatey-300">
              We operate a fleet of Trimble GNSS and RTK systems, robotic total
              stations, 3D scanners, digital levels, and echo sounders, supported
              by industry standard processing and design software including
              Trimble Business Center, AutoCAD, ArcGIS, and Erdas Imagine. Every
              instrument is calibrated before deployment and on a monthly cycle,
              so accuracy is never assumed, it is verified.
            </p>
          </FadeContent>
        </div>

        <FadeContent delay={120}>
          <div className="space-y-6 rounded-2xl border border-white/10 bg-white/[0.03] py-8">
            <ScrollVelocity items={stack} />
            <div className="hairline" />
            <ScrollVelocity items={[...stack].reverse()} />
          </div>
        </FadeContent>
      </div>
    </section>
  );
}
