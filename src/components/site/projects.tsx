import { ArrowUpRight } from "lucide-react";
import { Section, SectionHead } from "./primitives";
import { projects, education, honors, teaching, profile } from "@/lib/content";

export function Projects() {
  return (
    <Section id="projects" className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
      <SectionHead
        index="05"
        eyebrow="Portfolio"
        title="Selected Projects"
        lede="Practical work across trustworthy AI, generative modeling, and computer vision."
        action={
          <a
            href={`${profile.github}?tab=repositories`}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 border border-rule px-5 py-3 font-display text-sm font-medium transition-colors hover:border-ink"
          >
            All repositories
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </a>
        }
      />

      <div className="mt-14 grid gap-px border border-rule bg-rule md:grid-cols-2 xl:grid-cols-3">
        {projects.map((p) => (
          <a
            key={p.index}
            href={p.url}
            target="_blank"
            rel="noreferrer noopener"
            className="group flex flex-col gap-4 bg-paper px-6 py-7 transition-colors hover:bg-card"
          >
            <div className="flex items-baseline justify-between gap-4">
              <span className="label-mono">
                {p.index} — {p.field}
              </span>
              <ArrowUpRight
                className="h-4 w-4 shrink-0 text-ink-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal"
                aria-hidden
              />
            </div>
            <h3 className="text-balance font-display text-xl font-medium leading-tight">
              {p.title}
            </h3>
            <p className="text-sm leading-relaxed text-ink-soft">{p.body}</p>
            <ul className="mt-auto flex flex-wrap gap-1.5 pt-2">
              {p.tags.map((t) => (
                <li
                  key={t}
                  className="border border-rule px-2 py-0.5 font-mono text-[0.625rem] tracking-wide text-ink-soft"
                >
                  {t}
                </li>
              ))}
            </ul>
          </a>
        ))}
      </div>
    </Section>
  );
}

export function Background() {
  return (
    <Section id="background" className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
      <SectionHead
        index="06"
        eyebrow="Background"
        title="Education, Honors & Teaching"
        lede="Academic depth, national distinctions, and knowledge sharing."
      />

      <div className="mt-14 grid gap-12 lg:grid-cols-3">
        <div>
          <h3 className="label-mono">Education</h3>
          <ul className="mt-6 border-t border-rule">
            {education.map((e) => (
              <li key={e.title} className="border-b border-rule py-5">
                <span className="font-mono text-[0.6875rem] tracking-[0.16em] text-signal">
                  {e.period}
                </span>
                <h4 className="mt-2 text-balance font-display text-base font-medium leading-snug">
                  {e.title}
                </h4>
                <p className="mt-1.5 text-sm text-ink-soft">{e.detail}</p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="label-mono">Honors</h3>
          <ul className="mt-6 border-t border-rule">
            {honors.map((h) => (
              <li key={h.title} className="border-b border-rule py-5">
                <span className="inline-block bg-signal-soft px-2 py-0.5 font-mono text-[0.625rem] tracking-[0.14em] text-signal">
                  {h.badge}
                </span>
                <h4 className="mt-2.5 text-balance font-display text-base font-medium leading-snug">
                  {h.title}
                </h4>
                <p className="mt-1.5 text-sm text-ink-soft">{h.detail}</p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="label-mono">Teaching</h3>
          <ul className="mt-6 border-t border-rule">
            {teaching.map((t, i) => (
              <li key={`${t.title}-${i}`} className="border-b border-rule py-4">
                <span className="label-mono">{t.role}</span>
                <h4 className="mt-1.5 text-balance text-sm font-medium leading-snug">{t.title}</h4>
                <p className="mt-1 text-xs text-ink-faint">{t.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
