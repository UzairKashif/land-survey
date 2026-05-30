"use client";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Sectors", href: "#sectors" },
  { label: "Track Record", href: "#track-record" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-950">
      <div className="mx-auto max-w-content px-6 py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-viga text-xl text-white">
              LAND<span className="text-accent"> Survey</span>
            </p>
            <p className="mt-2 text-sm text-slatey-400">
              Geospatial and surveying engineering.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-slatey-300 transition-colors hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="text-sm text-slatey-400 md:text-right">
            <a
              href="mailto:info@landsurvey-intl.com"
              className="text-slatey-200 transition-colors hover:text-accent"
            >
              info@landsurvey-intl.com
            </a>
            <p className="mt-2">Company registered in England and Wales.</p>
            <p>Company number to be added once registration completes.</p>
          </div>
        </div>

        <div className="mt-12 hairline" />
        <p className="mt-6 text-xs text-slatey-400">
          Copyright {new Date().getFullYear()} LAND Survey. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
