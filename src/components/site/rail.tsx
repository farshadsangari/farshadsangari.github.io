import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight, ArrowDown } from "lucide-react";
import { profile, sections } from "@/lib/content";
import { useActiveSection } from "@/hooks/use-active-section";

const externals = [
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
  { label: "Scholar", href: profile.scholar },
  { label: "YouTube", href: profile.youtube },
] as const;

function Monogram() {
  return (
    <span className="grid h-11 w-11 shrink-0 place-items-center border border-ink bg-ink font-display text-sm font-bold tracking-tight text-paper">
      {profile.initials}
    </span>
  );
}

function NavList({ active, onNavigate }: { active: string; onNavigate?: (() => void) | undefined }) {
  return (
    <nav aria-label="Sections">
      <ul className="space-y-px">
        {sections.map((s) => {
          const isActive = active === s.id;
          return (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                onClick={onNavigate}
                aria-current={isActive ? "true" : undefined}
                className={`group grid grid-cols-[2.25rem_minmax(0,1fr)_auto] items-baseline gap-2 py-2 transition-colors ${
                  isActive ? "text-ink" : "text-ink-soft hover:text-ink"
                }`}
              >
                <span
                  className={`font-mono text-[0.625rem] tracking-[0.18em] ${
                    isActive ? "text-signal" : "text-ink-faint"
                  }`}
                >
                  {s.index}
                </span>
                <span className="truncate font-display text-[0.9375rem] font-medium">
                  {s.label}
                </span>
                <span
                  aria-hidden
                  className={`h-px w-6 self-center bg-signal transition-transform duration-500 ${
                    isActive ? "scale-x-100" : "origin-left scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function RailBody({ active, onNavigate }: { active: string; onNavigate?: (() => void) | undefined }) {
  return (
    <div className="flex h-full flex-col justify-between gap-8 px-7 py-8">
      <div className="space-y-9">
        <a href="#index" onClick={onNavigate} className="flex min-w-0 items-center gap-3">
          <Monogram />
          <span className="min-w-0">
            <span className="block truncate font-display text-base font-semibold tracking-tight">
              {profile.shortName}
            </span>
            <span className="label-mono block truncate">AI Systems · Research</span>
          </span>
        </a>

        <div className="h-px bg-rule" />

        <NavList active={active} onNavigate={onNavigate} />
      </div>

      <div className="space-y-5">
        <div className="h-px bg-rule" />
        <ul className="space-y-1.5">
          {externals.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1 text-sm text-ink-soft transition-colors hover:text-signal"
              >
                {l.label}
                <ArrowUpRight className="h-3 w-3" aria-hidden />
              </a>
            </li>
          ))}
        </ul>
        <a
          href={profile.cv}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex w-full items-center justify-between gap-2 border border-ink bg-ink px-4 py-3 font-display text-sm font-medium text-paper transition-colors hover:bg-signal hover:border-signal"
        >
          Download CV
          <ArrowDown className="h-4 w-4" aria-hidden />
        </a>
        <p className="label-mono leading-relaxed">
          {profile.location}
          <br />
          {profile.availability}
        </p>
      </div>
    </div>
  );
}

export function Rail() {
  const active = useActiveSection();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Desktop rail */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-[19rem] border-r border-rule bg-paper lg:block">
        <RailBody active={active} />
      </aside>

      {/* Mobile bar */}
      <header className="sticky top-0 z-50 border-b border-rule bg-paper/90 backdrop-blur-md lg:hidden">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-5 py-3">
          <a href="#index" className="flex min-w-0 items-center gap-2.5">
            <Monogram />
            <span className="min-w-0">
              <span className="block truncate font-display text-sm font-semibold">
                {profile.shortName}
              </span>
              <span className="label-mono block truncate">AI Systems · Research</span>
            </span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-11 w-11 shrink-0 place-items-center border border-rule text-ink transition-colors hover:border-ink"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-x-0 bottom-0 top-[4.75rem] z-40 overflow-y-auto bg-paper lg:hidden">
          <RailBody active={active} onNavigate={() => setOpen(false)} />
        </div>
      )}
    </>
  );
}
