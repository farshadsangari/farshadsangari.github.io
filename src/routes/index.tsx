import { createFileRoute } from "@tanstack/react-router";
import { Rail } from "@/components/site/rail";
import { Hero } from "@/components/site/hero";
import { About, Capabilities } from "@/components/site/about";
import { Experience, Research } from "@/components/site/experience";
import { Projects, Background } from "@/components/site/projects";
import { Contact } from "@/components/site/contact";
import { profile } from "@/lib/content";

const title = "Farshad Sangari — AI Software Engineer & Generative AI Researcher";
const description =
  "Farshad Sangari Abiz builds generative AI and computer vision systems: LLM/VLM services, multimodal retrieval and ranking, agentic workflows, and production MLOps.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "author", content: profile.name },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: profile.name,
          alternateName: profile.shortName,
          jobTitle: "AI Software Engineer & Generative AI Researcher",
          email: `mailto:${profile.email}`,
          worksFor: { "@type": "Organization", name: "ModAI" },
          address: { "@type": "PostalAddress", addressLocality: "Tehran", addressCountry: "IR" },
          alumniOf: [
            { "@type": "CollegeOrUniversity", name: "University of Tehran" },
            { "@type": "CollegeOrUniversity", name: "K.N. Toosi University of Technology" },
          ],
          knowsAbout: [
            "Generative AI",
            "Computer Vision",
            "Multimodal Retrieval",
            "Agentic AI Systems",
            "MLOps",
            "Representation Learning",
          ],
          sameAs: [profile.github, profile.linkedin, profile.scholar, profile.youtube],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-paper">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:border focus:border-ink focus:bg-paper focus:px-4 focus:py-2"
      >
        Skip to content
      </a>
      <Rail />
      <main id="main" className="lg:pl-[19rem]">
        <Hero />
        <About />
        <Capabilities />
        <Experience />
        <Research />
        <Projects />
        <Background />
        <Contact />
      </main>
    </div>
  );
}
