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

import { JudgmentCarousel } from "@/components/site/JudgmentCarousel";

function Insights() {
  return (
    <>
      <PageHero image={library} eyebrow="Insights & Awareness" title="Knowledge That Builds Confidence." intro="A growing library of guides, explainers and awareness resources. Articles below are placeholders pending review and approval." />
      <JudgmentCarousel />
      <CTASection />
    </>
  );
}