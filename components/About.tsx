import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { SpotlightCard } from "@/components/motion/SpotlightCard";

const principles = [
  {
    title: "Performance-first",
    detail: "Shipped 25-40% page-speed gains on high-traffic eCommerce platforms through targeted, measurable optimization.",
  },
  {
    title: "Accessible by default",
    detail: "Builds WCAG-compliant interfaces as a baseline, not an afterthought — across Tapestry, Nestlé, and enterprise platforms.",
  },
  {
    title: "AI-augmented UX",
    detail: "Designs and ships AI-powered UI features, including a visual-search chatbot that cut manual product search by ~40%.",
  },
  {
    title: "Leads through delivery",
    detail: "Directs Agile teams of 5+ engineers from design through production release, mentoring along the way.",
  },
];

export default function About() {
  return (
    <section id="about" className="border-t border-border px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="section-label">About</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-50">How I work</h2>
        </Reveal>

        <RevealGroup className="mt-10 grid gap-6 sm:grid-cols-2" stagger={0.08}>
          {principles.map((p) => (
            <RevealItem key={p.title}>
              <SpotlightCard className="card-border h-full rounded-2xl p-6 transition-colors hover:border-accent/40">
                <h3 className="text-base font-semibold text-slate-50">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.detail}</p>
              </SpotlightCard>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
