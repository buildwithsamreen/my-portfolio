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
    <section id="contact" className="border-t border-border px-6 py-24">
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="section-label justify-center">Contact</p>
        <h2 className="text-gradient-shift mt-3 bg-gradient-to-r from-accent via-accent2 to-accent bg-clip-text font-display text-3xl font-semibold text-transparent sm:text-4xl">
          Let&apos;s build something fast, accessible, and a little bit AI-powered.
        </h2>
        <p className="mt-4 text-muted">
          Open to Lead / Senior Frontend roles and consulting engagements.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <MagneticButton
            href={`mailto:${profile.email}`}
            className="inline-block rounded-full bg-accent px-6 py-3 text-sm font-medium text-ink shadow-[0_0_0_0_rgba(94,234,212,0.5)] transition-shadow hover:shadow-[0_0_30px_2px_rgba(94,234,212,0.35)]"
          >
            {profile.email}
          </MagneticButton>

          <div className="relative">
            <button
              type="button"
              onClick={copyEmail}
              aria-label="Copy email address"
              className="card-border flex h-11 w-11 items-center justify-center rounded-full text-muted transition-colors hover:border-accent hover:text-accent"
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
                  className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-full bg-accent px-3 py-1 font-mono text-xs text-ink"
                >
                  Copied!
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-6 font-mono text-sm text-muted">
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent">
            LinkedIn
          </a>
          <span className="text-border">/</span>
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-accent">
            GitHub
          </a>
          <span className="text-border">/</span>
          <span>{profile.location}</span>
        </div>
      </Reveal>
    </section>
  );
}
