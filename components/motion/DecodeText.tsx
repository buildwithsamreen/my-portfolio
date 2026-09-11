"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ01!<>-_/[]{}=+*^#";

export function DecodeText({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();
  // Deterministic on first render (server + client hydration) — the scramble
  // only kicks in client-side once the element scrolls into view.
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    if (reduce || !inView) return;

    let revealed = 0;
    let interval: ReturnType<typeof setInterval>;
    const start = setTimeout(() => {
      interval = setInterval(() => {
        revealed += 1;
        setDisplay(
          text
            .split("")
            .map((char, i) => {
              if (char === " ") return " ";
              if (i < revealed) return text[i];
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join("")
        );
        if (revealed >= text.length) {
          clearInterval(interval);
          setDisplay(text);
        }
      }, 28);
    }, delay);

    return () => {
      clearTimeout(start);
      clearInterval(interval);
    };
  }, [inView, reduce, text, delay]);

  return (
    <span ref={ref} className={className}>
      {display || " "}
    </span>
  );
}
