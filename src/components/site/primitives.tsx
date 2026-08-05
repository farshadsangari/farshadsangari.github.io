import type { ReactNode } from "react";

export function Section({
  id,
  children,
  className = "",
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-24 border-b border-rule ${className}`}>
      {children}
    </section>
  );
}

export function SectionHead({
  index,
  eyebrow,
  title,
  lede,
  action,
}: {
  index: string;
  eyebrow: string;
  title: string;
  lede?: string;
  action?: ReactNode;
}) {
  return (
    <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
      <div className="min-w-0 max-w-2xl">
        <p className="label-mono">
          {index} — {eyebrow}
        </p>
        <h2 className="mt-4 text-balance text-3xl font-semibold leading-[1.05] sm:text-4xl md:text-5xl">
          {title}
        </h2>
        {lede && <p className="mt-5 text-lg leading-relaxed text-ink-soft">{lede}</p>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="border border-rule px-2.5 py-1 font-mono text-[0.6875rem] tracking-wide text-ink-soft">
      {children}
    </span>
  );
}
