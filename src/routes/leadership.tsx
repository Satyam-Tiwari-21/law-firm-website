import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero-columns.jpg";
import { seo } from "@/lib/site";
import { CTASection, LeadershipCards, PageHero } from "@/components/site/Blocks";

export const Route = createFileRoute("/leadership")({
  head: () => seo("Leadership — Justice Law Bridge Legal Services LLP", "Meet the directors of Justice Law Bridge Legal Services LLP, Sawai Madhopur, Rajasthan."),
  component: Leadership,
});

function Leadership() {
  return (
    <>
      <PageHero image="https://picsum.photos/seed/leadership/1600/400" eyebrow="Leadership" title="Leadership Grounded in Professional Responsibility." intro="The directors guiding the firm's legal, advisory and awareness work." />
      <section className="py-24 md:py-32"><div className="container-x"><LeadershipCards /></div></section>
      <CTASection />
    </>
  );
}