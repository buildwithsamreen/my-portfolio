"use client";

import { motion, useReducedMotion } from "framer-motion";
import { profile, stats } from "@/lib/data";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { AnimatedStat } from "@/components/motion/AnimatedStat";

export default function Hero() {
  const reduce = useReducedMotion();
  const nameChars = profile.name.split("");

  return (
    <section id="top" className="relative overflow-hidden px-6 pb-16 pt-20">
      <div className="mx-auto max-w-5xl">
        <p className="section-label animate-fade-up">Portfolio</p>

        <h1 className="mt-4 flex flex-wrap text-4xl font-semibold leading-tight text-slate-50 sm:text-5xl md:text-6xl">
          {nameChars.map((char, i) => (
            <motion.span
              key={i}
              initial={reduce ? undefined : { opacity: 0, y: 24, rotate: -6 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.5, delay: 0.03 * i, ease: "easeOut" }}
              className="inline-block"
            >
              {char === " " ? " " : char}
            </motion.span>
          ))}
        </h1>

        <p
          className="text-gradient-shift mt-4 animate-fade-up bg-gradient-to-r from-accent via-accent2 to-accent bg-clip-text text-lg text-transparent sm:text-xl"
          style={{ animationDelay: "0.1s" }}
        >
          {profile.title} — {profile.tagline}
        </p>

        <p
          className="mt-6 max-w-2xl animate-fade-up text-base leading-relaxed text-muted"
          style={{ animationDelay: "0.15s" }}
        >
          {profile.summary}
        </p>

        <div
          className="mt-8 flex flex-wrap items-center gap-4 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          <MagneticButton
            href="#experience"
            className="inline-block rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-ink shadow-[0_0_0_0_rgba(94,234,212,0.5)] transition-shadow hover:shadow-[0_0_30px_2px_rgba(94,234,212,0.35)]"
          >
            View experience
          </MagneticButton>
          <MagneticButton
            href={`mailto:${profile.email}`}
            className="inline-block rounded-full border border-border px-5 py-2.5 text-sm font-medium text-slate-100 transition-colors hover:border-accent hover:text-accent"
          >
            Contact me
          </MagneticButton>
          <span className="font-mono text-sm text-muted">{profile.location}</span>
        </div>

        <dl
          className="mt-14 grid grid-cols-2 gap-6 border-t border-border pt-8 animate-fade-up sm:grid-cols-4"
          style={{ animationDelay: "0.25s" }}
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="font-mono text-2xl font-semibold text-slate-50 sm:text-3xl">
                <AnimatedStat value={stat.value} />
              </dt>
              <dd className="mt-1 text-xs uppercase tracking-wide text-muted">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>

        <motion.a
          href="#about"
          aria-label="Scroll to About"
          className="mx-auto mt-16 hidden w-fit items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-accent sm:flex"
          animate={reduce ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          Scroll
          <span aria-hidden="true">↓</span>
        </motion.a>
      </div>
    </section>
  );
}
