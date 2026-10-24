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

function Insights() {
  return (
    <div className="flex-1">
      <InsightsHero />

      <section className="bg-ivory">
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                From the blog
              </h2>
              <p className="mt-2 text-lg leading-8 text-gray-600">
                Learn how to grow your business with our expert advice.
              </p>
            </div>
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {/* This is where the blog posts would be mapped */}
            </div>
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
    </div>
  );
}