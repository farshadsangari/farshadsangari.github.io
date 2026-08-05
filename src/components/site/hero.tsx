import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { profile, marquee } from "@/lib/content";

export function Hero() {
  return (
    <section id="index" className="scroll-mt-24 border-b border-rule">
      <div className="rise min-w-0 px-6 pb-14 pt-16 sm:px-10 lg:px-16 lg:pb-20 lg:pt-24">
        <div className="flex items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden />
          <p className="label-mono">{profile.location} · {profile.availability}</p>
        </div>

        <h1 className="mt-7 max-w-4xl text-balance font-display text-[2.75rem] font-semibold leading-[0.95] tracking-[-0.035em] sm:text-6xl lg:text-[4.5rem]">
          {profile.name}
        </h1>

        <p className="mt-5 font-display text-lg font-medium tracking-tight sm:text-xl">
          {profile.tagline.map((part, i) => (
            <span key={i} className={part.accent ? "text-signal" : undefined}>
              {part.text}
            </span>
          ))}
        </p>

        <p className="mt-6 max-w-2xl leading-relaxed text-ink-soft">{profile.intro}</p>

        <ul className="mt-8 flex flex-wrap gap-2">
          {profile.focus.map((f) => (
            <li
              key={f}
              className="border border-rule px-3 py-1.5 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-ink-soft"
            >
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${profile.email}?subject=Opportunity`}
            className="inline-flex items-center gap-2 border border-ink bg-ink px-6 py-3.5 font-display text-sm font-medium text-paper transition-colors hover:border-signal hover:bg-signal"
          >
            Get in touch
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </a>
          <a
            href={profile.cv}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-rule px-6 py-3.5 font-display text-sm font-medium text-ink transition-colors hover:border-ink"
          >
            Curriculum vitae
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-2 py-3.5 font-display text-sm font-medium text-ink-soft transition-colors hover:text-signal"
          >
            Selected work
            <ArrowDownRight className="h-4 w-4" aria-hidden />
          </a>
        </div>

        <dl className="mt-14 max-w-2xl divide-y divide-rule border-t border-rule">
          {profile.snapshot.map((s) => (
            <div key={s.label} className="grid gap-1 py-3.5 sm:grid-cols-[7rem_minmax(0,1fr)]">
              <dt className="label-mono pt-0.5">{s.label}</dt>
              <dd className="text-sm leading-relaxed text-ink-soft">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="overflow-hidden border-t border-rule bg-paper-deep py-3">
        <div className="marquee-track">
          {[0, 1].map((dup) => (
            <ul key={dup} className="flex shrink-0 items-center" aria-hidden={dup === 1}>
              {marquee.map((m) => (
                <li
                  key={m}
                  className="flex items-center gap-6 whitespace-nowrap px-6 font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-ink-soft"
                >
                  {m}
                  <span className="h-1 w-1 rounded-full bg-signal" />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
