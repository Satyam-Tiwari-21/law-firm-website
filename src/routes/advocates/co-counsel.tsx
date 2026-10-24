import { createFileRoute, Link } from "@tanstack/react-router";
import { seo, advocates } from "@/lib/site";
import { PageHero, AdvocateCard } from "@/components/site/Blocks";
import { GoldButton } from "@/components/site/Blocks";
import { Reveal } from "@/components/site/Reveal";

// Find the Co-Counsel profile from the central data source
const coCounsel = advocates.find((a) => a.slug === "preeti-meena");
// Find other advocates to feature in the "More Profiles" section
const otherAdvocates = advocates.filter((a) => a.slug !== "preeti-meena").slice(0, 2);

export const Route = createFileRoute("/advocates/co-counsel")({
  head: () => {
    if (!coCounsel) return seo("Advocate Profile", "Profile for our co-counsel.");
    return seo(`${coCounsel.name} - ${coCounsel.role}`, coCounsel.shortBio);
  },
  component: CoCounselProfile,
});

function CoCounselProfile() {
  if (!coCounsel) {
    return <div>Co-Counsel profile not found.</div>;
  }

  return (
    <>
      {/* Section 1: Profile Hero */}
      <section className="bg-ivory py-24 sm:py-32">
        <Reveal>
          <div className="container-x">
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div className="relative aspect-[4/5] bg-navy">
                {coCounsel.image ? (
                  <img
                    src={coCounsel.image}
                    alt={`${coCounsel.name}, ${coCounsel.role}`}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="grid h-full w-full place-items-center">
                    <span className="font-serif text-6xl text-gold">{coCounsel.initials}</span>
                  </div>
                )}
              </div>
              <div>
                <p className="eyebrow">{coCounsel.role}</p>
                <h1 className="mt-3 font-serif text-5xl text-navy md:text-6xl">{coCounsel.name}</h1>
                <span className="gold-rule mt-8 w-20" />
                <p className="mt-8 text-lg leading-relaxed text-muted-foreground">{coCounsel.shortBio}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Section 2: Professional Profile */}
      <section className="py-24 sm:py-32">
        <div className="container-x prose max-w-4xl">
          <Reveal>
            <h2>About the Advocate</h2>
            <p>{coCounsel.biography}</p>

            <h2>Qualifications</h2>
            <ul>
              {coCounsel.qualifications?.map((q) => <li key={q}>{q}</li>)}
              {coCounsel.education && <li>{coCounsel.education}</li>}
              {coCounsel.enrolment && <li>{coCounsel.enrolment}</li>}
            </ul>

            <h2>Areas of Practice</h2>
            <div className="flex flex-wrap gap-4">
              {coCounsel.practiceAreas?.map((area) => (
                <span key={area} className="rounded-full bg-ivory px-4 py-2 text-sm text-navy">
                  {area}
                </span>
              ))}
            </div>

            {coCounsel.experience && (
              <>
                <h2>Professional Experience</h2>
                <p>{coCounsel.experience}</p>
              </>
            )}
          </Reveal>
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