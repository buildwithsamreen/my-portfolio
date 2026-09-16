"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { profile, stats } from "@/lib/data";

type Line = {
  content: ReactNode;
  indent?: number;
};

const kw = "text-accent2";
const str = "text-accent";
const prop = "text-sky-300";
const num = "text-amber-300";
const comment = "text-muted/70 italic";
const punct = "text-slate-500";

const lines: Line[] = [
  { content: <><span className={comment}>// currently building at GMG</span></> },
  {
    content: (
      <>
        <span className={kw}>export const</span> <span className={prop}>developer</span>{" "}
        <span className={punct}>=</span> <span className={punct}>{"{"}</span>
      </>
    ),
  },
  {
    indent: 1,
    content: (
      <>
        <span className={prop}>name</span>
        <span className={punct}>:</span> <span className={str}>&quot;{profile.name}&quot;</span>
        <span className={punct}>,</span>
      </>
    ),
  },
  {
    indent: 1,
    content: (
      <>
        <span className={prop}>role</span>
        <span className={punct}>:</span> <span className={str}>&quot;{profile.title}&quot;</span>
        <span className={punct}>,</span>
      </>
    ),
  },
  {
    indent: 1,
    content: (
      <>
        <span className={prop}>experience</span>
        <span className={punct}>:</span> <span className={num}>{stats[0].value.replace("+", "")}</span>
        <span className={punct}>,</span> <span className={comment}>// years</span>
      </>
    ),
  },
  {
    indent: 1,
    content: (
      <>
        <span className={prop}>stack</span>
        <span className={punct}>:</span> <span className={punct}>[</span>
        <span className={str}>&quot;React&quot;</span>
        <span className={punct}>,</span> <span className={str}>&quot;TypeScript&quot;</span>
        <span className={punct}>,</span> <span className={str}>&quot;Node.js&quot;</span>
        <span className={punct}>],</span>
      </>
    ),
  },
  {
    indent: 1,
    content: (
      <>
        <span className={prop}>focus</span>
        <span className={punct}>:</span> <span className={punct}>[</span>
        <span className={str}>&quot;Performance&quot;</span>
        <span className={punct}>,</span> <span className={str}>&quot;A11y&quot;</span>
        <span className={punct}>,</span> <span className={str}>&quot;AI UI&quot;</span>
        <span className={punct}>],</span>
      </>
    ),
  },
  {
    indent: 1,
    content: (
      <>
        <span className={prop}>openToWork</span>
        <span className={punct}>:</span> <span className={kw}>true</span>
        <span className={punct}>,</span>
      </>
    ),
  },
  { content: <span className={punct}>{"}"}</span> },
];

export function CodeWindow() {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? undefined : { opacity: 0, y: 24, rotate: 1 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
      className="card-border w-full max-w-md overflow-hidden rounded-xl border-2 border-accent2/40 shadow-[8px_8px_0_0_rgba(255,77,46,0.25)]"
    >
      <div className="flex items-center gap-2 border-b border-border bg-panel/80 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-xs text-muted">profile.ts</span>
      </div>

      <div className="bg-panel/40 px-4 py-4 font-mono text-[13px] leading-relaxed">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={reduce ? undefined : { opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, delay: 0.4 + i * 0.09, ease: "easeOut" }}
            className="flex gap-3"
          >
            <span className="w-4 shrink-0 select-none text-right text-slate-600">{i + 1}</span>
            <span style={{ paddingLeft: `${(line.indent ?? 0) * 1.1}rem` }} className="whitespace-pre">
              {line.content}
            </span>
          </motion.div>
        ))}
        <motion.span
          aria-hidden="true"
          className="ml-7 mt-1 inline-block h-4 w-[7px] bg-accent"
          animate={reduce ? { opacity: 1 } : { opacity: [1, 1, 0, 0] }}
          transition={{ duration: 1, repeat: Infinity, times: [0, 0.5, 0.5, 1] }}
        />
      </div>
    </motion.div>
  );
}
