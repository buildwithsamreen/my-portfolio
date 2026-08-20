"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

export function AnimatedStat({ value }: { value: string }) {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : null;
  const suffix = match ? match[2] : "";

  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(target !== null && !reduce ? 0 : target ?? value);

  useEffect(() => {
    if (target === null || reduce || !inView) return;

    const duration = 900;
    const start = performance.now();

    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * target!));
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, [inView, target, reduce]);

  if (target === null) {
    return <span ref={ref}>{value}</span>;
  }

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}
