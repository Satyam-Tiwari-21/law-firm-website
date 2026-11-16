import { createFileRoute } from "@tanstack/react-router";
import { seo, advocates } from "@/lib/site";
import { AdvocateCard } from "@/components/site/Blocks";

// Find the Co-Counsel profiles from the central data source
const coCounsels = advocates.filter((a) => a.role === "Co-Counsel / Advocate");

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
      <section className="py-24 md:py-32">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">CO-COUNSEL / ADVOCATES</p>
            <h2 className="mt-4 text-4xl leading-[1.05] md:text-5xl text-navy">Our Co-Counsel Advocates</h2>
            <span className="gold-rule mt-6 mx-auto" />
            <p className="mt-6 text-base leading-relaxed md:text-lg text-muted-foreground">A team of experienced legal professionals bringing diverse expertise and a results-driven approach.</p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {coCounsels.map((advocate) => (
              <AdvocateCard key={advocate.slug} advocate={advocate} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}