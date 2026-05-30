"use client";

/**
 * Aurora background.
 * Stand in for the React Bits Pro "Aurora" component, built with layered
 * animated gradients so it has no external dependency. To swap in the official
 * Pro version, install it with the React Bits CLI and replace this file's body,
 * keeping the same export name.
 */
export default function Aurora({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <div className="absolute -inset-[20%] opacity-70 animate-auroraShift blur-3xl">
        <div className="absolute left-[10%] top-[10%] h-[42rem] w-[42rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.45),transparent_60%)]" />
        <div className="absolute right-[5%] top-[20%] h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.35),transparent_60%)]" />
        <div className="absolute left-[30%] bottom-[0%] h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(125,211,252,0.25),transparent_60%)]" />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(7,11,22,0.6)_60%,#070b16)]" />
    </div>
  );
}
