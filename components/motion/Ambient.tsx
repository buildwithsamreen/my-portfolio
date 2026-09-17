export function AuroraBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-blueprint-grid">
      <div
        className="absolute -left-[10%] -top-[15%] h-[26rem] w-[26rem] rounded-full bg-accent/10 blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-[15%] -right-[10%] h-[24rem] w-[24rem] rounded-full bg-accent2/10 blur-[140px]"
        aria-hidden="true"
      />
    </div>
  );
}

export function GrainOverlay() {
  return <div className="grain-overlay" aria-hidden="true" />;
}
