import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { advocates, listedAdvocates, seo } from "@/lib/site";
import { Reveal } from "@/components/site/Reveal";
import { AdvocateCard } from "@/components/site/AdvocateCard";

export const Route = createFileRoute("/advocates/$slug")({
  loader: ({ params }) => {
    const advocate = advocates.find((a) => a.slug === params.slug);
    if (!advocate) {
      throw notFound();
    }
    return advocate;
  },
  head: ({ loaderData: advocate }) => {
    if (!advocate) return seo("Advocate Profile", "Profile for one of our advocates.");
    return seo(`${advocate.name} - ${advocate.role}`, advocate.shortBio);
  },
  component: AdvocateProfilePage,
});

function AdvocateProfilePage() {
  const advocate = Route.useLoaderData();
  const otherAdvocates = listedAdvocates.filter((a) => a.slug !== advocate.slug).slice(0, 2);

  return (
    <>
      <section className="bg-navy py-16 md:py-24 lg:py-32">
        <div className="container-x">
          <Reveal>
            <div className="grid items-center gap-8 sm:grid-cols-[2fr_3fr] md:gap-12 lg:grid-cols-2">
              <div className="relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden bg-navy-2 sm:max-w-none">
                {advocate.image ? (
                  <img
                    src={advocate.image}
                    alt={`${advocate.name}, ${advocate.role}`}
                    className="h-full w-full object-cover object-top"
                  />
                ) : (
                  <div className="grid h-full w-full place-items-center">
                    <span className="font-serif text-6xl text-gold">{advocate.initials}</span>
                  </div>
                )}
              </div>
              <div>
                <p className="eyebrow text-gold">{advocate.role}</p>
                <h1 className="mt-3 font-serif text-4xl leading-tight text-navy-foreground sm:text-5xl lg:text-6xl">{advocate.name}</h1>
                <span className="gold-rule mt-6 w-20 md:mt-8" />
                <p className="mt-6 text-base leading-relaxed text-navy-muted sm:text-lg md:mt-8">{advocate.shortBio}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24 lg:py-32">
        <div className="container-x">
          <div className="prose prose-lg mx-auto">
            <h2>Professional Profile</h2>
            <p>{advocate.biography}</p>

            {advocate.qualifications && (
              <>
                <h2>Education & Qualifications</h2>
                <ul>
                  {advocate.qualifications.map((q) => (
                    <li key={q}>{q}</li>
                  ))}
                </ul>
              </>
            )}

            {advocate.practiceAreas && (
              <>
                <h2>Areas of Practice</h2>
                <ul>
                  {advocate.practiceAreas.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </>
            )}

            {advocate.experience && (
              <>
                <h2>Professional Experience</h2>
                <p>{advocate.experience}</p>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="bg-ivory py-16 md:py-24 lg:py-32">
        <div className="container-x">
          <h2 className="text-center font-serif text-3xl text-navy md:text-4xl">More Profiles</h2>
          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-4 sm:gap-8 md:mt-12">
            {otherAdvocates.map((advocate) => (
              <AdvocateCard key={advocate.slug} advocate={advocate} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/advocates" className="font-semibold text-navy">View All Profiles →</Link>
          </div>
        </div>
      </section>
    </>
  );
}