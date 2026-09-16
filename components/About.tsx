import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { SpotlightCard } from "@/components/motion/SpotlightCard";
import { DecodeText } from "@/components/motion/DecodeText";

const principles = [
  {
    title: "Performance-first",
    detail: "Shipped 25-40% page-speed gains on high-traffic eCommerce platforms through targeted, measurable optimization.",
    span: "sm:col-span-2",
  },
  {
    title: "Accessible by default",
    detail: "Builds WCAG-compliant interfaces as a baseline, not an afterthought — across Tapestry, Nestlé, and enterprise platforms.",
    span: "",
  },
  {
    title: "AI-augmented UX",
    detail: "Designs and ships AI-powered UI features, including a visual-search chatbot that cut manual product search by ~40%.",
    span: "",
  },
  {
    title: "Leads through delivery",
    detail: "Directs Agile teams of 5+ engineers from design through production release, mentoring along the way.",
    span: "sm:col-span-2",
  },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden border-t border-border px-6 py-20">
      <div
        aria-hidden="true"
        className="bg-dot-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]"
      />
      <div className="relative mx-auto max-w-5xl">
        <Reveal>
          <p className="section-label">About</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-slate-50">
            <DecodeText text="How I work" />
          </h2>
        </Reveal>

        <RevealGroup className="mt-10 grid gap-4 sm:grid-cols-2" stagger={0.08}>
          {principles.map((p) =>
            p.title === "AI-augmented UX" ? (
              <RevealItem key={p.title} className={p.span}>
                <div className="gradient-block h-full rounded-2xl border-2 border-ink p-6">
                  <h3 className="font-display text-base font-bold text-ink">{p.title}</h3>
                  <p className="mt-2 max-w-md text-sm font-medium leading-relaxed text-ink/70">
                    {p.detail}
                  </p>
                </div>
              </RevealItem>
            ) : (
              <RevealItem key={p.title} className={p.span}>
                <SpotlightCard className="card-border h-full rounded-2xl p-6 transition-colors hover:border-accent/40">
                  <h3 className="font-display text-base font-semibold text-slate-50">{p.title}</h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">{p.detail}</p>
                </SpotlightCard>
              </RevealItem>
            )
          )}
        </RevealGroup>
      </div>
    </section>
  );
}
