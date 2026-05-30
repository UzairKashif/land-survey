"use client";

/**
 * ShinyText.
 * A sweeping highlight across text. Stand in for the React Bits Pro
 * "ShinyText" component.
 */
export default function ShinyText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  return (
    <span
      className={`animate-shine bg-[linear-gradient(110deg,#9fb0cc,45%,#ffffff,55%,#9fb0cc)] bg-[length:200%_100%] bg-clip-text text-transparent ${className}`}
    >
      {text}
    </span>
  );
}
