import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Section, SectionHead } from "./primitives";
import { experience, research, profile } from "@/lib/content";

export function Experience() {
  return (
    <Section id="experience" className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
      <SectionHead
        index="03"
        eyebrow="Career"
        title="Experience"
        lede="Leading applied AI from model to production."
        action={
          <a
            href={profile.cv}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 border border-rule px-5 py-3 font-display text-sm font-medium transition-colors hover:border-ink"
          >
            Full CV
            <ArrowDown className="h-4 w-4" aria-hidden />
          </a>
        }
      />

      <ol className="mt-14 border-t border-rule">
        {experience.map((role) => (
          <li
            key={role.title + role.from}
            className="grid gap-6 border-b border-rule py-9 lg:grid-cols-[10rem_minmax(0,1fr)] lg:gap-12"
          >
            <div className="min-w-0">
              <p className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-ink">
                {role.from}
              </p>
              <p className="mt-1 font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-ink-faint">
                — {role.to}
              </p>
            </div>

            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-3">
                <span
                  className={`border px-2 py-1 font-mono text-[0.625rem] uppercase tracking-[0.16em] ${
                    role.kind === "Software engineering"
                      ? "border-signal bg-signal text-paper"
                      : "border-rule text-ink-faint"
                  }`}
                >
                  {role.kind}
                </span>
                <p className="label-mono">
                  {role.org} · {role.orgNote}
                </p>
              </div>
              <h3 className="mt-3 text-balance font-display text-xl font-semibold leading-snug sm:text-2xl">
                {role.title}
              </h3>
              <p className="mt-1.5 text-sm text-ink-faint">{role.place}</p>
              <p className="mt-4 max-w-2xl leading-relaxed text-ink-soft">{role.summary}</p>
              {role.bullets.length > 0 && (
                <ul className="mt-5 max-w-2xl space-y-3">
                  {role.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
                      <span
                        aria-hidden
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal"
                      />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
              {role.stack.length > 0 && (
                <ul className="mt-6 flex flex-wrap gap-2">
                  {role.stack.map((s) => (
                    <li
                      key={s}
                      className="border border-rule bg-paper-deep px-2.5 py-1 font-mono text-[0.625rem] uppercase tracking-[0.14em] text-ink-soft"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              )}
            </div>

          </li>
        ))}
      </ol>
    </Section>
  );
}

export function Research() {
  return (
    <Section id="research" className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
      <SectionHead
        index="04"
        eyebrow="Academic work"
        title="Research & Publications"
        lede={research.lede}
      />

      <div className="mt-14 grid gap-px border border-rule bg-rule lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
        <article className="bg-paper px-6 py-8 sm:px-9 sm:py-10">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="bg-signal-soft px-2.5 py-1 font-mono text-[0.625rem] uppercase tracking-[0.16em] text-signal">
              {research.paper.badge}
            </span>
            <span className="label-mono">{research.paper.venue}</span>
          </div>
          <h3 className="mt-6 text-balance font-display text-2xl font-medium leading-snug sm:text-[1.75rem]">
            {research.paper.title}
          </h3>
          <p className="mt-3 text-sm text-ink-faint">{research.paper.authors}</p>
          <p className="mt-6 max-w-2xl leading-relaxed text-ink-soft">{research.paper.abstract}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={research.paper.url}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 border border-ink bg-ink px-5 py-3 font-display text-sm font-medium text-paper transition-colors hover:border-signal hover:bg-signal"
            >
              Read paper
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </a>
            <a
              href={profile.scholar}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 border border-rule px-5 py-3 font-display text-sm font-medium transition-colors hover:border-ink"
            >
              Scholar profile
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </article>

        <div className="flex flex-col gap-px bg-rule">
          <div className="flex-1 bg-paper px-6 py-8 sm:px-8">
            <span className="label-mono">{research.thesis.badge}</span>
            <h3 className="mt-5 text-balance font-display text-lg font-medium leading-snug">
              {research.thesis.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">{research.thesis.detail}</p>
          </div>
          <div className="bg-paper px-6 py-8 sm:px-8">
            <span className="label-mono">Research themes</span>
            <ul className="mt-5 flex flex-wrap gap-1.5">
              {research.themes.map((t) => (
                <li
                  key={t}
                  className="border border-rule px-2.5 py-1 font-mono text-[0.625rem] tracking-wide text-ink-soft"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
