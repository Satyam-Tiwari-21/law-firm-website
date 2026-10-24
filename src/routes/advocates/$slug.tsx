import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { advocates, seo } from "@/lib/site";
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
  head: (data) => {
    const advocate = data.data;
    if (!advocate) return seo("Advocate Profile", "Profile for one of our advocates.");
    return seo(`${advocate.name} - ${advocate.role}`, advocate.shortBio);
  },
  component: AdvocateProfilePage,
});

function AdvocateProfilePage() {
  const advocate = Route.useLoaderData();
  const otherAdvocates = advocates.filter((a) => a.slug !== advocate.slug).slice(0, 2);

  return (
    <>
      <section className="bg-navy py-24 sm:py-32">
        <div className="container-x">
          <Reveal>
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div className="relative aspect-[4/5] bg-navy-2">
                {advocate.image ? (
                  <img
                    src={advocate.image}
                    alt={`${advocate.name}, ${advocate.role}`}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="grid h-full w-full place-items-center">
                    <span className="font-serif text-6xl text-gold">{advocate.initials}</span>
                  </div>
                )}
              </div>
              <div>
                <p className="eyebrow text-gold">{advocate.role}</p>
                <h1 className="mt-3 font-serif text-5xl text-navy-foreground md:text-6xl">{advocate.name}</h1>
                <span className="gold-rule mt-8 w-20" />
                <p className="mt-8 text-lg leading-relaxed text-navy-muted">{advocate.shortBio}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 sm:py-32">
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

      <section className="bg-ivory py-24 sm:py-32">
        <div className="container-x">
          <h2 className="text-center font-serif text-4xl text-navy">More Profiles</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
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