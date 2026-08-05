import { ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/content";

const links = [
  { label: "LinkedIn", href: profile.linkedin },
  { label: "GitHub", href: profile.github },
  { label: "Google Scholar", href: profile.scholar },
  { label: "YouTube", href: profile.youtube },
  { label: "Download CV", href: profile.cv },
] as const;

export function Contact() {
  return (
    <>
      <section
        id="contact"
        className="scroll-mt-24 border-b border-rule bg-ink px-6 py-20 text-paper sm:px-10 lg:px-16 lg:py-28"
      >
        <p className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-paper/50">
          07 — Let’s connect
        </p>
        <h2 className="mt-5 max-w-4xl text-balance font-display text-3xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
          Let’s build AI that is useful, measurable, and <span className="text-signal">dependable</span>.
        </h2>
        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-paper/70">
          I’m interested in collaborations around generative AI, multimodal retrieval and
          recommendation, agentic systems, trustworthy AI, and scalable ML infrastructure.
        </p>

        <div className="mt-12 grid gap-px border border-paper/15 bg-paper/15 sm:grid-cols-2">
          <a
            href={`mailto:${profile.email}?subject=Collaboration%20with%20Farshad%20Sangari`}
            className="group bg-ink px-6 py-7 transition-colors hover:bg-signal"
          >
            <span className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-paper/50 group-hover:text-paper/70">
              Email
            </span>
            <span className="mt-3 flex items-center gap-2 font-display text-lg font-medium sm:text-xl">
              {profile.email}
              <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden />
            </span>
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="group bg-ink px-6 py-7 transition-colors hover:bg-signal"
          >
            <span className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-paper/50 group-hover:text-paper/70">
              LinkedIn
            </span>
            <span className="mt-3 flex items-center gap-2 font-display text-lg font-medium sm:text-xl">
              /in/farshad-sangari
              <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden />
            </span>
          </a>

        </div>

        <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                target="_blank"
                rel="noreferrer noopener"
                className="link-underline text-sm text-paper/70 transition-colors hover:text-paper"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <footer className="grid gap-4 px-6 py-8 sm:grid-cols-[minmax(0,1fr)_auto] sm:px-10 lg:px-16">
        <p className="label-mono">
          © {new Date().getFullYear()} {profile.name} — {profile.location}
        </p>
        <p className="label-mono sm:text-right">Designed & built with care</p>
      </footer>
    </>
  );
}
