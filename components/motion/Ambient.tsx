"use client";

import { useEffect } from "react";

export function AuroraBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute left-[10%] top-[-10%] h-[38rem] w-[38rem] rounded-full bg-accent/20 blur-[120px] motion-safe:animate-[aurora-drift-1_18s_ease-in-out_infinite]"
        style={{ opacity: 0.35 }}
      />
      <div
        className="absolute right-[5%] top-[10%] h-[32rem] w-[32rem] rounded-full bg-accent2/20 blur-[120px] motion-safe:animate-[aurora-drift-2_22s_ease-in-out_infinite]"
        style={{ opacity: 0.3 }}
      />
      <div
        className="absolute bottom-[-10%] left-[30%] h-[30rem] w-[30rem] rounded-full bg-accent/10 blur-[120px] motion-safe:animate-[aurora-drift-3_26s_ease-in-out_infinite]"
        style={{ opacity: 0.25 }}
      />
    </div>
  );
}

export function CursorGlow() {
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    function handleMove(e: MouseEvent) {
      document.documentElement.style.setProperty("--cx", `${e.clientX}px`);
      document.documentElement.style.setProperty("--cy", `${e.clientY}px`);
    }

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return <div className="cursor-glow" aria-hidden="true" />;
}

export function GrainOverlay() {
  return <div className="grain-overlay" aria-hidden="true" />;
}
