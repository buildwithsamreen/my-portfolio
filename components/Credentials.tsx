import { awards, certifications, education } from "@/lib/data";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { SpotlightCard } from "@/components/motion/SpotlightCard";
import { DecodeText } from "@/components/motion/DecodeText";

export default function Credentials() {
  return (
    <section id="credentials" className="relative overflow-hidden border-t border-border px-6 py-20">
      <div
        aria-hidden="true"
        className="bg-dot-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]"
      />
      <div className="relative mx-auto max-w-5xl">
        <Reveal>
          <p className="section-label">Credentials</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-slate-50">
            <DecodeText text="Education, certifications & recognition" />
          </h2>
        </Reveal>

        <RevealGroup
          className="mt-10 grid grid-flow-dense gap-4 sm:grid-cols-3"
          stagger={0.08}
        >
          <RevealItem>
            <SpotlightCard className="card-border h-full rounded-2xl p-6 transition-colors hover:border-accent/40">
              <h3 className="font-mono text-sm uppercase tracking-wide text-accent2">
                Education
              </h3>
              <p className="mt-4 text-sm font-semibold text-slate-100">
                {education.school}
              </p>
              <p className="mt-1 text-sm text-muted">{education.degree}</p>
            </SpotlightCard>
          </RevealItem>

          <RevealItem className="sm:col-span-2 sm:row-span-2">
            <SpotlightCard className="card-border h-full rounded-2xl p-6 transition-colors hover:border-accent/40">
              <h3 className="font-mono text-sm uppercase tracking-wide text-accent2">
                Certifications
              </h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {certifications.map((cert) => (
                  <li key={cert.name} className="text-sm">
                    <p className="text-slate-100">{cert.name}</p>
                    <p className="mt-0.5 font-mono text-xs text-muted">{cert.issued}</p>
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          </RevealItem>

          <RevealItem>
            <SpotlightCard className="card-border h-full rounded-2xl p-6 transition-colors hover:border-accent/40">
              <h3 className="font-mono text-sm uppercase tracking-wide text-accent2">
                Honors &amp; Awards
              </h3>
              <ul className="mt-4 space-y-2">
                {awards.map((award) => (
                  <li key={award} className="flex items-center gap-2 text-sm text-slate-100">
                    <span className="text-accent">✦</span>
                    {award}
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  );
}
