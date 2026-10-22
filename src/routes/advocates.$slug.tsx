import { createFileRoute, notFound } from "@tanstack/react-router";
import { seo, advocates } from "@/lib/site";
import { PageHero } from "@/components/site/Blocks";

export const Route = createFileRoute("/advocates/$slug")({
  loader: ({ params: { slug } }) => {
    const advocate = advocates.find((adv) => adv.slug === slug);
    if (!advocate) throw notFound();
    return { advocate };
  },
  head: ({ data: { advocate } }) => seo(`${advocate.name} — Advocate Profile`, advocate.shortBio),
  component: AdvocateProfilePage,
});

function AdvocateProfilePage() {
  const { advocate } = Route.useLoaderData();

  return (
    <>
      <PageHero
        eyebrow={advocate.role}
        title={advocate.name}
        intro={advocate.shortBio}
      />
      <section className="py-12 md:py-24">
        <div className="container-x">
          <div className="prose mx-auto max-w-4xl">
            {advocate.qualifications && (
              <>
                <h3>Qualifications</h3>
                <ul>
                  {advocate.qualifications.map((q) => (
                    <li key={q}>{q}</li>
                  ))}
                </ul>
              </>
            )}
            {advocate.practiceAreas && (
              <>
                <h3>Practice Areas</h3>
                <ul>
                  {advocate.practiceAreas.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </>
            )}
            {advocate.experience && (
              <>
                <h3>Experience</h3>
                <p>{advocate.experience}</p>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}