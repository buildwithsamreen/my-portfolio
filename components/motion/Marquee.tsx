export function Marquee({ items }: { items: string[] }) {
  const loop = [...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-border py-4 [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
      <div className="flex w-max animate-marquee gap-8 whitespace-nowrap">
        {loop.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-8 font-mono text-sm text-muted"
          >
            {item} <span className="text-accent">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
