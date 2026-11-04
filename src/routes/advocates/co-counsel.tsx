import { createFileRoute, Link } from "@tanstack/react-router";
import { seo, advocates } from "@/lib/site";
import { PageHero, AdvocateCard } from "@/components/site/Blocks";
import { GoldButton } from "@/components/site/Blocks";
import { Reveal } from "@/components/site/Reveal";

// Find the Co-Counsel profiles from the central data source
const coCounsels = advocates.filter((a) => a.role === "Co-Counsel / Advocate");
// Find other advocates to feature in the "More Profiles" section
const otherAdvocates = advocates.filter((a) => a.role !== "Co-Counsel / Advocate").slice(0, 3);

export const Route = createFileRoute("/advocates/co-counsel")({
  head: () => {
    return seo("Co-Counsel — Justice Law Bridge", "Our network of collaborating advocates.");
  },
  component: CoCounselProfiles,
});

function CoCounselProfiles() {
  if (!coCounsels.length) {
    return <div>Co-Counsel profiles not found.</div>;
  }

  return (
    <>
      {/* Section 1: Profile Hero */}
      <PageHero
        eyebrow="Our Co-Counsel"
        title="A Network of Collaborating Advocates"
        intro="Our firm collaborates with a dedicated network of advocates and legal professionals to provide comprehensive and effective legal solutions. Meet the team that supports our mission."
      />

      {/* Section 2: Co-Counsel Profiles */}
      <section className="py-24 sm:py-32">
        <div className="container-x">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {coCounsels.map((advocate) => (
              <AdvocateCard key={advocate.slug} advocate={advocate} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: More Profiles */}
      <section className="bg-ivory py-24 sm:py-32">
        <div className="container-x">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow">Our Advocates</p>
              <h2 className="mt-3 font-serif text-5xl text-navy">More Profiles</h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Our firm collaborates with a dedicated network of advocates and legal professionals to provide comprehensive and effective legal solutions.
              </p>
            </div>
          </Reveal>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {otherAdvocates.map((advocate) => (
              <AdvocateCard key={advocate.slug} advocate={advocate} />
            ))}
          </div>
          <div className="mt-16 text-center">
            <GoldButton to="/advocates">View All Profiles →</GoldButton>
          </div>
        </div>
      </section>

    </>
  );
}