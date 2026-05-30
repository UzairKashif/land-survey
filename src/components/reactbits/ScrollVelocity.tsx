"use client";

/**
 * ScrollVelocity.
 * A continuously scrolling text band. Stand in for the React Bits Pro
 * "ScrollVelocity" component. Uses a duplicated track for a seamless loop.
 */
export default function ScrollVelocity({
  items,
  className = "",
}: {
  items: string[];
  className?: string;
}) {
  const track = [...items, ...items];
  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
        {track.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-12 text-sm uppercase tracking-[0.2em] text-slatey-400"
          >
            {item}
            <span className="text-accent">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
