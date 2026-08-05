import { Section, SectionHead } from "./primitives";
import { about, skills } from "@/lib/content";

export function About() {
  return (
    <Section id="about" className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
      <SectionHead index="01" eyebrow="Introduction" title="About" lede={about.kicker} />

      <div className="mt-14 grid gap-14 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        <div className="min-w-0 space-y-6">
          {about.paragraphs.map((p, i) => (
            <p
              key={i}
              className={
                i === 0
                  ? "text-xl leading-relaxed text-ink"
                  : "text-base leading-relaxed text-ink-soft"
              }
            >
              {p}
            </p>
          ))}
        </div>

        <ul className="divide-y divide-rule border-t border-rule">
          {about.principles.map((p) => (
            <li key={p.title} className="group py-5">
              <div className="flex items-baseline gap-3">
                <span className="h-1 w-1 shrink-0 translate-y-[-0.35rem] rounded-full bg-signal" />
                <h3 className="font-display text-lg font-medium">{p.title}</h3>
              </div>
              <p className="mt-2 pl-4 text-sm leading-relaxed text-ink-soft">{p.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export function Capabilities() {
  return (
    <Section id="skills" className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
      <SectionHead
        index="02"
        eyebrow="Technical profile"
        title="Capabilities"
        lede="From representation learning and multimodal modeling to search, infrastructure, and observability."
      />

      <div className="mt-14 grid gap-px border border-rule bg-rule md:grid-cols-2 xl:grid-cols-3">
        {skills.map((s) => (
          <article
            key={s.index}
            className="group flex flex-col gap-4 bg-paper px-6 py-7 transition-colors hover:bg-card"
          >
            <div className="flex items-baseline justify-between gap-4">
              <span className="label-mono">{s.index}</span>
              <span
                aria-hidden
                className="h-px w-8 origin-right scale-x-0 bg-signal transition-transform duration-500 group-hover:scale-x-100"
              />
            </div>
            <h3 className="text-balance font-display text-xl font-medium leading-tight">
              {s.title}
            </h3>
            <p className="text-sm leading-relaxed text-ink-soft">{s.body}</p>
            <ul className="mt-auto flex flex-wrap gap-1.5 pt-2">
              {s.tags.map((t) => (
                <li
                  key={t}
                  className="border border-rule px-2 py-0.5 font-mono text-[0.625rem] tracking-wide text-ink-soft"
                >
                  {t}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
