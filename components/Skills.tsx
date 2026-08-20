import { skills } from "@/lib/data";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { SpotlightCard } from "@/components/motion/SpotlightCard";
import { Marquee } from "@/components/motion/Marquee";

const allSkills = skills.flatMap((group) => group.items);

export default function Skills() {
  return (
    <section id="skills" className="border-t border-border py-20">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <p className="section-label">Skills</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-50">
            What I work with
          </h2>
        </Reveal>
      </div>

      <div className="mt-10">
        <Marquee items={allSkills} />
      </div>

      <div className="mx-auto max-w-5xl px-6">
        <RevealGroup className="mt-10 grid gap-6 sm:grid-cols-2" stagger={0.08}>
          {skills.map((group) => (
            <RevealItem key={group.category}>
              <SpotlightCard className="card-border h-full rounded-2xl p-6 transition-colors hover:border-accent/40">
                <h3 className="font-mono text-sm uppercase tracking-wide text-accent2">
                  {group.category}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border bg-ink/60 px-3 py-1 text-xs text-slate-200 transition-colors hover:border-accent hover:text-accent"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
