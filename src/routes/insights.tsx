import { createFileRoute } from "@tanstack/react-router";
import { BookOpen } from "lucide-react";
import library from "@/assets/library.jpg";
import { seo } from "@/lib/site";
import { Reveal } from "@/components/site/Reveal";
import { CTASection, PageHero } from "@/components/site/Blocks";

export const Route = createFileRoute("/insights")({
  head: () => seo("Insights & Awareness — Justice Law Bridge Legal Services LLP", "Guides and awareness resources on legal documentation, compliance, mediation, startup registration and GST basics."),
  component: Insights,
});

const topics = [
  { cat: "Legal Basics", t: "Understanding Legal Documentation", d: "What common documents do, why precise drafting matters, and what to keep on record." },
  { cat: "Small Business", t: "Contract and Compliance Basics for Small Businesses", d: "A practical starting point for agreements, records and routine obligations." },
  { cat: "Dispute Resolution", t: "An Introduction to Mediation and ADR", d: "How mediation, conciliation and arbitration differ, and when each may be considered." },
  { cat: "Startups", t: "Startup Registration Considerations", d: "Questions founders should think through before choosing a business structure." },
  { cat: "Finance", t: "GST and Accounting Documentation Basics", d: "The records and habits that make filing and audits more manageable." },
];

function Insights() {
  return (
    <>
      <PageHero image={library} eyebrow="Insights & Awareness" title="Knowledge That Builds Confidence." intro="A growing library of guides, explainers and awareness resources. Articles below are placeholders pending review and approval." />
      <section className="py-20 md:py-28">
        <div className="container-x grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
          {topics.map((a, i) => (
            <Reveal key={a.t} delay={(i % 3) * 100} className="flex flex-col bg-card p-9">
              <div className="flex items-center justify-between">
                <p className="eyebrow">{a.cat}</p>
                <span className="border border-gold/50 px-2 py-0.5 text-[0.6rem] uppercase tracking-[0.18em] text-muted-foreground">Demo content</span>
              </div>
              <BookOpen className="mt-8 h-7 w-7 text-gold" strokeWidth={1.25} />
              <h2 className="mt-5 text-2xl leading-snug text-navy">{a.t}</h2>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{a.d}</p>
              <p className="mt-8 text-xs uppercase tracking-[0.16em] text-muted-foreground">Coming soon</p>
            </Reveal>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
