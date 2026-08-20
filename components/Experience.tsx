"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { experience } from "@/lib/data";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { SpotlightCard } from "@/components/motion/SpotlightCard";

export default function Experience() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.8", "end 0.6"],
  });
  const lineScale = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 40,
    mass: 0.3,
  });

  return (
    <section id="experience" className="border-t border-border px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="section-label">Experience</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-50">
            12+ years of shipping frontend at scale
          </h2>
        </Reveal>

        <div ref={timelineRef} className="relative mt-12">
          <div className="absolute left-0 top-0 h-full w-px bg-border" aria-hidden="true" />
          <motion.div
            className="absolute left-0 top-0 w-px origin-top bg-gradient-to-b from-accent to-accent2"
            style={{ scaleY: lineScale, height: "100%" }}
            aria-hidden="true"
          />

          <RevealGroup className="space-y-12" stagger={0.15}>
            {experience.map((job) => (
              <RevealItem
                key={job.company}
                className="relative grid gap-4 pl-8 sm:grid-cols-[220px_1fr] sm:gap-8"
              >
                <span className="absolute -left-[7px] top-1 h-3 w-3 rounded-full border-2 border-accent bg-ink shadow-[0_0_12px_2px_rgba(94,234,212,0.5)]" />

                <div>
                  <h3 className="text-lg font-semibold text-slate-50">{job.company}</h3>
                  <p className="mt-1 text-sm text-accent2">{job.role}</p>
                  <p className="mt-1 font-mono text-xs text-muted">{job.period}</p>
                </div>

                <div>
                  <p className="text-sm leading-relaxed text-muted">{job.summary}</p>

                  <div className="mt-5 space-y-4">
                    {job.projects.map((project) => (
                      <SpotlightCard
                        key={project.name}
                        className="card-border rounded-xl p-5 transition-colors hover:border-accent/40"
                      >
                        <h4 className="text-sm font-semibold text-slate-100">
                          {project.name}
                        </h4>
                        <p className="mt-2 text-sm leading-relaxed text-muted">
                          {project.description}
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full bg-accent/10 px-2.5 py-0.5 font-mono text-[11px] text-accent"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </SpotlightCard>
                    ))}
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
