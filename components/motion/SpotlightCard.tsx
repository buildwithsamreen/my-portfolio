"use client";

import { ReactNode, useRef } from "react";

export function SpotlightCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--y", `${e.clientY - rect.top}px`);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={`spotlight-card ${className}`}
    >
      {children}
    </div>
  );
}
