"use client";

import type { ReactNode } from "react";

/**
 * GradientText.
 * Stand in for the React Bits Pro "GradientText" component.
 */
export default function GradientText({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`bg-gradient-to-r from-accent-glow via-accent to-accent-600 bg-clip-text text-transparent ${className}`}
    >
      {children}
    </span>
  );
}
