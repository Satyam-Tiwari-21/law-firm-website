import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/site";
import { PageHero } from "@/components/site/Blocks";

export const Route = createFileRoute("/advocates")({
  head: () => seo("Advocates — Justice Law Bridge Legal Services LLP", "Meet the advocates at Justice Law Bridge Legal Services LLP."),
  component: Advocates,
});

function Advocates() {
  return (
    <>
      <PageHero eyebrow="Advocates" title="Our Advocates" intro="The advocates at Justice Law Bridge Legal Services LLP." />
      <section className="py-24 md:py-32"><div className="container-x"></div></section>
    </>
  );
}