import { createFileRoute } from "@tanstack/react-router";
import library from "@/assets/library.jpg";
import { seo, segments } from "@/lib/site";
import { Reveal } from "@/components/site/Reveal";
import { CTASection, PageHero } from "@/components/site/Blocks";

export const Route = createFileRoute("/industries")({
  head: () => seo("Industries & Clients — Justice Law Bridge Legal Services LLP", "Professional support for individuals, startups, MSMEs, companies, institutions and educational communities."),
  component: Industries,
});

function Industries() {
  return (
    <>
      <PageHero image={library} eyebrow="Industries & Clients" title="Breadth of Support, Tailored to Each Client." intro="The client segments we are structured to serve, and the services most relevant to each." />
      <section className="py-20 md:py-28">
        <div className="container-x divide-y divide-border border-y border-border">
          {segments.map((s, i) => (
            <Reveal key={s.title} className="grid gap-8 py-12 md:grid-cols-[80px_1fr_1fr] md:items-start">
              <p className="font-serif text-5xl text-gold/60">0{i + 1}</p>
              <div>
                <s.icon className="h-7 w-7 text-gold" strokeWidth={1.25} />
                <h2 className="mt-4 text-3xl text-navy md:text-4xl">{s.title}</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
              <div className="bg-ivory p-7">
                <p className="eyebrow">Relevant services</p>
                <ul className="mt-4 grid gap-2 text-sm text-navy sm:grid-cols-2">
                  {s.needs.map((n) => <li key={n} className="border-l border-gold pl-3">{n}</li>)}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
