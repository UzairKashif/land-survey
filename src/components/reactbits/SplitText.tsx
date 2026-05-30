"use client";

import { useEffect, useRef, useState } from "react";

/**
 * SplitText.
 * Animates each word up into place on first view. Stand in for the React Bits
 * Pro "SplitText" component. Swap by replacing the body, keeping the export.
 */
export default function SplitText({
  text,
  className = "",
  delay = 60,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShown(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const words = text.split(" ");

  return (
    <span ref={ref} className={className} aria-label={text}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <span
            className="inline-block transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              transform: shown ? "translateY(0)" : "translateY(110%)",
              opacity: shown ? 1 : 0,
              transitionDelay: `${i * delay}ms`,
            }}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </span>
        </span>
      ))}
    </span>
  );
}
