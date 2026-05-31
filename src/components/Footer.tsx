"use client";

import { Linkedin, Mail, MapPin } from "lucide-react";

const columns = [
  {
    heading: "Services",
    links: [
      { label: "Land survey", href: "#services" },
      { label: "Marine and coastal", href: "#services" },
      { label: "Mapping and GIS", href: "#services" },
      { label: "Seismic and oil field", href: "#services" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Sectors", href: "#sectors" },
      { label: "Projects", href: "#projects" },
      { label: "Clients", href: "#clients" },
    ],
  },
  {
    heading: "Capabilities",
    links: [
      { label: "Technology", href: "#technology" },
      { label: "Standards", href: "#standards" },
      { label: "Track record", href: "#stats" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="flex w-full flex-col bg-[#F2F0E9] text-[#1B1A16]">
      <section className="w-full px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {columns.map((col) => (
            <div key={col.heading} className="flex flex-col space-y-6">
              <h3 className="tech-mono text-[11px] uppercase tracking-[0.18em] text-[#9A9686]">
                {col.heading}
              </h3>
              <ul className="flex flex-col space-y-4">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-xl font-medium tracking-[-0.01em] text-[#1B1A16] transition-colors hover:text-[#B6841C] sm:text-2xl"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="flex flex-col space-y-6">
            <h3 className="tech-mono text-[11px] uppercase tracking-[0.18em] text-[#9A9686]">
              Connect
            </h3>
            <a
              href="mailto:info@landsurvey-intl.com"
              className="break-words text-xl font-medium tracking-[-0.01em] text-[#1B1A16] transition-colors hover:text-[#B6841C] sm:text-2xl"
            >
              info@landsurvey-intl.com
            </a>
            <a
              href="#contact"
              className="tech-mono text-[11px] uppercase tracking-[0.14em] text-[#B6841C] hover:text-[#1B1A16]"
            >
              Request a consultation
            </a>
          </div>
        </div>
      </section>

      <div className="w-full bg-[#16150F] px-5 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center justify-between gap-6 md:flex-row">
          <a href="#top" className="font-viga text-lg tracking-wide text-[#F2F0E9]">
            LAND<span className="text-[#EBA10C]"> SURVEY</span>
          </a>

          <div className="flex flex-col items-center gap-6 md:flex-row md:gap-12">
            <span className="tech-mono text-[11px] uppercase tracking-[0.12em] text-[#9A9686]">
              Copyright {new Date().getFullYear()} LAND Survey. All rights reserved.
            </span>
            <div className="flex items-center gap-6 text-[#C9C5B6]">
              <a href="#" aria-label="LinkedIn" className="transition-colors hover:text-[#EBA10C]">
                <Linkedin className="h-5 w-5" strokeWidth={2} />
              </a>
              <a href="mailto:info@landsurvey-intl.com" aria-label="Email" className="transition-colors hover:text-[#EBA10C]">
                <Mail className="h-5 w-5" strokeWidth={2} />
              </a>
              <a href="#contact" aria-label="Location" className="transition-colors hover:text-[#EBA10C]">
                <MapPin className="h-5 w-5" strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
