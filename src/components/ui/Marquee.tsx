"use client";

interface MarqueeProps { items: string[]; reverse?: boolean; }

export default function Marquee({ items, reverse = false }: MarqueeProps) {
  const doubled = [...items, ...items, ...items, ...items];
  return (
    <div className="overflow-hidden py-4" style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      <div
        className="flex whitespace-nowrap"
        style={{ width: "max-content", animation: `marquee 30s linear infinite ${reverse ? "reverse" : ""}`, willChange: "transform" }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 px-6 font-bold uppercase"
            style={{ fontSize: 10, letterSpacing: "0.3em", color: i % 5 === 0 ? "var(--accent)" : "var(--dim)" }}
          >
            <span style={{ color: "var(--accent)", opacity: i % 5 === 0 ? 1 : 0.4 }}>★</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
