"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

type Motif = "cadastral" | "seismic" | "coastal" | "pipeline" | "hydrographic";

type Project = {
  id: number;
  title: string;
  method: string;
  year: string;
  location: string;
  scale: string;
  client: string;
  motif: Motif;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Benghazi Redevelopment",
    method: "Cadastral and geodetic control survey",
    year: "2010",
    location: "Benghazi, Libya",
    scale: "2,100 ha / 150+ control points",
    client: "Asfi Libya Construction (SV LIDCO)",
    motif: "cadastral",
  },
  {
    id: 2,
    title: "El Diyur Concession",
    method: "3D seismic survey support",
    year: "2011",
    location: "El Wahat, Egypt",
    scale: "6,800 km seismic lines",
    client: "Apache / Geofizika",
    motif: "seismic",
  },
  {
    id: 3,
    title: "Araar Coastal Project",
    method: "Oceanographic and shoreline study",
    year: "2010",
    location: "Misratah, Libya",
    scale: "850 ha coastal zone",
    client: "Alkaleej Tourism and Investment",
    motif: "coastal",
  },
  {
    id: 4,
    title: "Western Desert Pipeline",
    method: "Pipeline route and as built survey",
    year: "2009",
    location: "Matrouh, Egypt",
    scale: "162 km pipeline",
    client: "Khalda for Oil / Petrojet",
    motif: "pipeline",
  },
  {
    id: 5,
    title: "River Nile Corridor",
    method: "Hydrographic survey",
    year: "2008",
    location: "Kanater to Almenia, Egypt",
    scale: "500 km waterway",
    client: "Nile Transportation Authority",
    motif: "hydrographic",
  },
];

export default function Projects() {
  const [activeId, setActiveId] = useState(1);
  const active = projects.find((p) => p.id === activeId)!;

  return (
    <section
      id="projects"
      className="w-full bg-[#F2F0E9] py-20 text-[#1B1A16] sm:py-28"
    >
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="tech-mono mb-5 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-[#6F6B5E]"
        >
          <span className="h-px w-8 bg-[#EBA10C]" />
          Completed projects
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-10 max-w-3xl text-3xl font-medium leading-[1.12] tracking-[-0.02em] sm:text-4xl md:text-5xl"
        >
          Delivered across borders, sectors, and conditions.
        </motion.h2>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_560px] lg:gap-16">
          {/* List */}
          <div className="order-last flex flex-col lg:order-none">
            {projects.map((p, index) => (
              <motion.button
                key={p.id}
                onClick={() => setActiveId(p.id)}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="relative w-full py-5 text-left sm:py-6"
              >
                {activeId === p.id && (
                  <motion.div
                    layoutId="project-active"
                    className="absolute inset-0 rounded-xl bg-[#16150F]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <div className="relative flex items-center justify-between gap-4 px-4 sm:px-6">
                  <div className="min-w-0">
                    <div className="flex items-baseline gap-3">
                      <span
                        className={`tech-mono text-[11px] ${
                          activeId === p.id ? "text-[#EBA10C]" : "text-[#9A9686]"
                        }`}
                      >
                        P-{String(p.id).padStart(2, "0")}
                      </span>
                      <h3
                        className={`truncate text-xl font-medium tracking-[-0.01em] sm:text-2xl md:text-3xl ${
                          activeId === p.id ? "text-[#F2F0E9]" : "text-[#1B1A16]"
                        }`}
                      >
                        {p.title}
                      </h3>
                    </div>
                    <p
                      className={`mt-1.5 text-sm ${
                        activeId === p.id ? "text-[#9A9686]" : "text-[#6F6B5E]"
                      }`}
                    >
                      {p.method} &middot; {p.year}
                    </p>
                  </div>
                  {activeId === p.id && (
                    <motion.span
                      layoutId="project-dot"
                      className="h-3 w-3 shrink-0 rounded-full bg-[#EBA10C]"
                      transition={{ type: "spring", stiffness: 200, damping: 25 }}
                    />
                  )}
                </div>
              </motion.button>
            ))}
          </div>

          {/* Plate */}
          <div className="relative h-[360px] overflow-hidden rounded-2xl bg-[#16150F] sm:h-[460px] lg:h-auto lg:min-h-[520px]">
            <AnimatePresence initial={false}>
              <motion.div
                key={active.id}
                initial={{ y: "55%", opacity: 0.4 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                className="absolute inset-0"
              >
                <Plate project={active} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function Plate({ project }: { project: Project }) {
  return (
    <div className="relative flex h-full flex-col p-6 sm:p-8">
      {/* grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(rgba(235,161,12,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(235,161,12,0.06) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      {/* registration crosshairs */}
      <Crosses />

      {/* top row */}
      <div className="relative flex items-start justify-between">
        <span className="tech-mono text-[11px] uppercase tracking-[0.16em] text-[#EBA10C]">
          Plate P-{String(project.id).padStart(2, "0")}
        </span>
        <span className="tech-mono text-[11px] uppercase tracking-[0.16em] text-[#6F6B5E]">
          {project.year}
        </span>
      </div>

      {/* motif */}
      <div className="relative flex flex-1 items-center justify-center py-6">
        <svg viewBox="0 0 400 280" className="h-full w-full" fill="none">
          <Diagram motif={project.motif} />
        </svg>
      </div>

      {/* metadata */}
      <div className="relative border-t border-white/10 pt-5">
        <p className="text-xl font-medium text-[#F2F0E9] sm:text-2xl">
          {project.location}
        </p>
        <div className="tech-mono mt-3 grid grid-cols-1 gap-1.5 text-[11px] uppercase tracking-[0.1em] text-[#9A9686] sm:grid-cols-2">
          <span>Scale &middot; {project.scale}</span>
          <span>Method &middot; {project.method}</span>
          <span className="sm:col-span-2">Client &middot; {project.client}</span>
        </div>
      </div>
    </div>
  );
}

function Crosses() {
  const C = ({ s }: { s: string }) => (
    <div className={`absolute h-3 w-3 ${s}`}>
      <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/20" />
      <span className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-white/20" />
    </div>
  );
  return (
    <div className="pointer-events-none absolute inset-0">
      <C s="left-3 top-3" />
      <C s="right-3 top-3" />
      <C s="left-3 bottom-3" />
      <C s="right-3 bottom-3" />
    </div>
  );
}

function Diagram({ motif }: { motif: Motif }) {
  const ink = "#C9C5B6";
  const amber = "#EBA10C";

  if (motif === "cadastral") {
    const cells: { x: number; y: number; w: number; h: number }[] = [];
    let y = 30;
    const rows = [
      [40, 70, 60, 90],
      [55, 85, 50, 70],
      [70, 60, 80, 50],
    ];
    for (let r = 0; r < rows.length; r++) {
      let x = 40;
      const h = 70;
      for (const w of rows[r]) {
        cells.push({ x, y, w, h });
        x += w;
      }
      y += h;
    }
    return (
      <g>
        {cells.map((c, i) => (
          <rect
            key={i}
            x={c.x}
            y={c.y}
            width={c.w}
            height={c.h}
            stroke={ink}
            strokeOpacity={0.4}
            strokeWidth={1}
          />
        ))}
        {[
          [120, 100],
          [250, 170],
          [180, 60],
        ].map(([cx, cy], i) => (
          <g key={i}>
            <line x1={cx - 7} y1={cy} x2={cx + 7} y2={cy} stroke={amber} strokeWidth={1.4} />
            <line x1={cx} y1={cy - 7} x2={cx} y2={cy + 7} stroke={amber} strokeWidth={1.4} />
          </g>
        ))}
      </g>
    );
  }

  if (motif === "seismic") {
    const lines = Array.from({ length: 22 }, (_, i) => 30 + i * 16);
    return (
      <g>
        {lines.map((x, i) => (
          <line
            key={i}
            x1={x}
            y1={24}
            x2={x + 14}
            y2={256}
            stroke={ink}
            strokeOpacity={i % 4 === 0 ? 0.35 : 0.15}
            strokeWidth={1}
          />
        ))}
        <line x1={20} y1={150} x2={380} y2={150} stroke={amber} strokeWidth={1.4} />
        {Array.from({ length: 12 }, (_, i) => 40 + i * 28).map((x, i) => (
          <circle key={i} cx={x} cy={150} r={2.4} fill={amber} />
        ))}
      </g>
    );
  }

  if (motif === "coastal" || motif === "hydrographic") {
    const lines = Array.from({ length: 8 }, (_, i) => i);
    const path = (amp: number, yOff: number) => {
      let d = `M0 ${yOff}`;
      for (let x = 0; x <= 400; x += 20) {
        const yy = yOff + Math.sin((x / 400) * Math.PI * 3 + amp) * (6 + amp * 4);
        d += ` L${x} ${yy.toFixed(1)}`;
      }
      return d;
    };
    return (
      <g>
        {lines.map((i) => (
          <path
            key={i}
            d={path(i * 0.4, 60 + i * 24)}
            stroke={ink}
            strokeOpacity={i === 0 ? 0 : 0.18 + i * 0.02}
            strokeWidth={1}
          />
        ))}
        <path d={path(0, 60)} stroke={amber} strokeWidth={1.6} />
        {[100, 200, 300].map((x, i) => (
          <text
            key={i}
            x={x}
            y={250}
            fill={ink}
            fillOpacity={0.5}
            fontSize="11"
            textAnchor="middle"
            style={{ fontFamily: "'SF Mono', monospace" }}
          >
            {motif === "coastal" ? `${(i + 1) * 4}m` : `KM ${(i + 1) * 100}`}
          </text>
        ))}
      </g>
    );
  }

  // pipeline
  const pts = [
    [20, 200],
    [90, 150],
    [150, 165],
    [220, 90],
    [300, 110],
    [380, 60],
  ];
  const d = pts.map((p, i) => `${i === 0 ? "M" : "L"}${p[0]} ${p[1]}`).join(" ");
  return (
    <g>
      <path d={d} stroke={amber} strokeWidth={1.8} />
      {pts.map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r={3} fill="#16150F" stroke={amber} strokeWidth={1.4} />
          <text
            x={x}
            y={y - 10}
            fill={ink}
            fillOpacity={0.6}
            fontSize="10"
            textAnchor="middle"
            style={{ fontFamily: "'SF Mono', monospace" }}
          >
            KP{i * 32}
          </text>
        </g>
      ))}
    </g>
  );
}
