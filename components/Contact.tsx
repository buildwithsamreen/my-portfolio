"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { profile } from "@/lib/data";
import { Reveal } from "@/components/motion/Reveal";
import { MagneticButton } from "@/components/motion/MagneticButton";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // clipboard unavailable — no-op
    }
  }

  return (
    <section id="contact" className="gradient-block px-6 py-24">
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="section-label justify-center text-ink/70">Contact</p>
        <h2 className="mt-3 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
          Let&apos;s build something fast, accessible, and a little bit AI-powered.
        </h2>
        <p className="mt-4 font-medium text-ink/70">
          Open to Lead / Senior Frontend roles and consulting engagements.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <MagneticButton
            href={`mailto:${profile.email}`}
            className="btn-hard inline-block rounded-lg border-2 border-ink bg-ink px-6 py-3 text-sm font-bold text-accent [--btn-hard-shadow:#ffffff]"
          >
            {profile.email}
          </MagneticButton>

          <div className="relative">
            <button
              type="button"
              onClick={copyEmail}
              aria-label="Copy email address"
              className="btn-hard flex h-11 w-11 items-center justify-center rounded-lg border-2 border-ink bg-ink text-accent [--btn-hard-shadow:#ffffff]"
            >
              <span aria-hidden="true">⧉</span>
            </button>
            <AnimatePresence>
              {copied && (
                <motion.span
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-full border-2 border-ink bg-ink px-3 py-1 font-mono text-xs text-accent"
                >
                  Copied!
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-6 font-mono text-sm font-semibold text-ink/70">
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-ink">
            LinkedIn
          </a>
          <span className="text-ink/30">/</span>
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-ink">
            GitHub
          </a>
          <span className="text-ink/30">/</span>
          <span>{profile.location}</span>
        </div>
      </Reveal>
    </section>
  );
}
