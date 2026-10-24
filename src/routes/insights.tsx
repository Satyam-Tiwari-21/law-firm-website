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

      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-base font-semibold leading-7 text-gold">
              JUDICIAL UPDATES
            </p>
            <h2 className="mt-2 text-4xl font-bold tracking-tight text-navy sm:text-6xl">
              Recent Legal Judgments
            </h2>
            <p className="mt-6 text-lg leading-8 text-navy-foreground">
              Stay informed about recent judicial decisions from the Rajasthan
              High Court and Supreme Court of India. This section provides
              concise summaries of key judgments, offering insights into the
              latest legal precedents and their potential impact.
            </p>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              FOR KNOWLEDGE & INFORMATION PURPOSES ONLY
            </p>
          </div>
          <div className="mt-16">
            {/* TODO: Implement scrolling judgment list */}
          </div>
          <div className="mt-16 text-center">
            <a
              href="/insights/recent-judgments"
              className="text-sm font-semibold leading-6 text-gold"
            >
              VIEW ALL JUDGMENTS <span aria-hidden="true">→</span>
            </a>
          </div>
          <div className="mt-16 border-t border-gray-200 pt-8">
            <p className="text-sm leading-6 text-gray-500">
              <span className="font-semibold">Disclaimer:</span> The
              information presented here is intended solely for general
              knowledge and informational purposes. It does not constitute
              legal advice or create an attorney-client relationship. For
              specific legal guidance, please consult with a qualified
              attorney.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-base font-semibold leading-7 text-gold">
              JUDICIAL UPDATES
            </p>
            <h2 className="mt-2 text-4xl font-bold tracking-tight text-navy sm:text-6xl">
              Recent Legal Judgments
            </h2>
            <p className="mt-6 text-lg leading-8 text-navy-foreground">
              Stay informed about recent judicial decisions from the Rajasthan
              High Court and Supreme Court of India. This section provides
              concise summaries of key judgments, offering insights into the
              latest legal precedents and their potential impact.
            </p>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              FOR KNOWLEDGE & INFORMATION PURPOSES ONLY
            </p>
          </div>
          <div className="mt-16">
            {/* TODO: Implement scrolling judgment list */}
          </div>
          <div className="mt-16 text-center">
            <a
              href="/insights/recent-judgments"
              className="text-sm font-semibold leading-6 text-gold"
            >
              VIEW ALL JUDGMENTS <span aria-hidden="true">→</span>
            </a>
          </div>
          <div className="mt-16 border-t border-gray-200 pt-8">
            <p className="text-sm leading-6 text-gray-500">
              <span className="font-semibold">Disclaimer:</span> The
              information presented here is intended solely for general
              knowledge and informational purposes. It does not constitute
              legal advice or create an attorney-client relationship. For
              specific legal guidance, please consult with a qualified
              attorney.
            </p>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}