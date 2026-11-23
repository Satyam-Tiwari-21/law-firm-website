import { createFileRoute } from "@tanstack/react-router";
import { seo, listedAdvocates } from "@/lib/site";
import { PageHero, AdvocateCard, OfficeStaffCards } from "@/components/site/Blocks";

export const Route = createFileRoute("/advocates/")({
  head: () => seo("Our Advocates — Justice Law Bridge Legal Services LLP", "Meet the experienced professionals supporting every matter at Justice Law Bridge."),
  component: Advocates,
});

function Advocates() {
  return (
    <>
      <PageHero
        eyebrow="Our Advocates"
        title="Experienced Professionals Supporting Every Matter."
        intro="Our firm collaborates with a dedicated network of advocates and legal professionals to provide comprehensive and effective legal solutions. Meet the team that supports our mission."
      />
      <section className="py-16 md:py-24 lg:py-32">
        <div className="container-x">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
            {listedAdvocates.map((advocate) => (
              <AdvocateCard key={advocate.slug} advocate={advocate} />
            ))}
          </div>
          <OfficeStaffCards />
        </div>
      </section>
    </>
  );
}