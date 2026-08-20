import { profile } from "@/lib/data";
import { Reveal } from "@/components/motion/Reveal";
import { MagneticButton } from "@/components/motion/MagneticButton";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-border px-6 py-24">
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="section-label justify-center">Contact</p>
        <h2 className="text-gradient-shift mt-3 bg-gradient-to-r from-accent via-accent2 to-accent bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl">
          Let&apos;s build something fast, accessible, and a little bit AI-powered.
        </h2>
        <p className="mt-4 text-muted">
          Open to Lead / Senior Frontend roles and consulting engagements.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <MagneticButton
            href={`mailto:${profile.email}`}
            className="inline-block rounded-full bg-accent px-6 py-3 text-sm font-medium text-ink shadow-[0_0_0_0_rgba(94,234,212,0.5)] transition-shadow hover:shadow-[0_0_30px_2px_rgba(94,234,212,0.35)]"
          >
            {profile.email}
          </MagneticButton>
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
