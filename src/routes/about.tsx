import { createFileRoute } from "@tanstack/react-router";
import library from "@/assets/library.jpg";
import { seo } from "@/lib/site";
import { Reveal } from "@/components/site/Reveal";
import { CTASection, LeadershipCards, PageHero, SectionHeading, VisionMission } from "@/components/site/Blocks";

export const Route = createFileRoute("/about")({
  head: () => seo("About the Firm — Justice Law Bridge Legal Services LLP", "An integrated legal, financial and business support firm in Sawai Madhopur, Rajasthan, committed to ethical and accessible professional guidance."),
  component: About,
});

const philosophy = [
  { t: "Clarity first", d: "We explain the process, the options and the limits plainly before any engagement begins." },
  { t: "Integrated thinking", d: "Legal, financial and business questions are considered together, not in isolation." },
  { t: "Qualified delivery", d: "Each service is handled by people with the qualifications that work requires." },
  { t: "Accessible guidance", d: "Professional support should be reachable for individuals and small enterprises, not only large organisations." },
];

function About() {
  return (
    <>
      <PageHero image={library} eyebrow="About the Firm" title="A Bridge Between People, Business and Justice." intro="Justice Law Bridge Legal Services LLP brings legal assistance, dispute resolution, financial consultancy, business advisory, compliance and startup support together under one roof." />
      <section className="py-24 md:py-32">
        <div className="container-x grid gap-16 lg:grid-cols-2">
          <SectionHeading eyebrow="Our Approach" title="Built as an integrated professional practice." />
          <Reveal className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>Based in Sawai Madhopur, Rajasthan, the firm was formed to give individuals, entrepreneurs, MSMEs and institutions a single, dependable point of contact for matters that often span law, finance and business.</p>
            <p>Rather than sending clients between separate advisers, we coordinate documentation, compliance, financial records and legal process within one relationship — while ensuring each task is handled by appropriately qualified professionals.</p>
          </Reveal>
        </div>
      </section>
      <section className="bg-ivory py-24 md:py-32">
        <div className="container-x">
          <SectionHeading eyebrow="Service Philosophy" title="How we work with every client." />
          <div className="mt-14 grid gap-px bg-gold/30 md:grid-cols-2 lg:grid-cols-4">
            {philosophy.map((p, i) => (
              <Reveal key={p.t} delay={i * 100} className="bg-ivory p-8">
                <p className="font-serif text-4xl text-gold">0{i + 1}</p>
                <h3 className="mt-4 text-2xl text-navy">{p.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <VisionMission />
      <section className="py-24 md:py-32">
        <div className="container-x">
          <SectionHeading eyebrow="Leadership" title="The people behind the firm." />
          <div className="mt-14"><LeadershipCards /></div>
        </div>
      </section>
      <section className="border-y border-gold/30 bg-background py-20">
        <div className="container-x max-w-4xl text-center">
          <p className="eyebrow">Our Commitment</p>
          <p className="mt-6 font-serif text-3xl leading-snug text-navy md:text-4xl">We are committed to ethical conduct, honest guidance, and making professional support accessible to those who need it — including underserved communities.</p>
        </div>
      </section>
      <CTASection />
    </>
  );
}
