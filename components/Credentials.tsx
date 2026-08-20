import { awards, certifications, education } from "@/lib/data";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { SpotlightCard } from "@/components/motion/SpotlightCard";

export default function Credentials() {
  return (
    <section id="credentials" className="border-t border-border px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="section-label">Credentials</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-50">
            Education, certifications &amp; recognition
          </h2>
        </Reveal>

        <RevealGroup className="mt-10 grid gap-6 lg:grid-cols-3" stagger={0.08}>
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

          <RevealItem className="lg:col-span-1">
            <SpotlightCard className="card-border h-full rounded-2xl p-6 transition-colors hover:border-accent/40">
              <h3 className="font-mono text-sm uppercase tracking-wide text-accent2">
                Certifications
              </h3>
              <ul className="mt-4 space-y-3">
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
