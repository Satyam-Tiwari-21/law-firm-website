import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import hero from "@/assets/hero-columns.jpg";
import { seo, services } from "@/lib/site";
import { Reveal } from "@/components/site/Reveal";
import { GoldButton, PageHero, SectionHeading } from "@/components/site/Blocks";
import { ConsultationForm } from "@/components/site/ConsultationForm";

export const Route = createFileRoute("/services")({
  head: () => seo("Our Services — Justice Law Bridge Legal Services LLP", "Legal services and advocacy, dispute resolution, financial and office support, startup services, and corporate consulting."),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHero image={hero} eyebrow="Our Services" title="Comprehensive Services. One Trusted Partner." intro="Five integrated practice areas. Each is delivered within the scope of the agreed engagement and the qualifications the work requires." />
      <nav className="sticky top-16 z-40 border-b border-border bg-background/95 backdrop-blur" aria-label="Service sections">
        <div className="container-x flex gap-6 overflow-x-auto py-4 text-xs font-semibold uppercase tracking-[0.14em]">
          {services.map((s) => <a key={s.slug} href={`#${s.slug}`} className="shrink-0 text-muted-foreground hover:text-gold">{s.num} {s.title}</a>)}
        </div>
      </nav>
      {services.map((s, i) => (
        <section key={s.slug} id={s.slug} className={`scroll-mt-32 py-20 md:py-28 ${i % 2 ? "bg-ivory" : "bg-background"}`}>
          <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.2fr]">
            <Reveal>
              <p className="font-serif text-7xl text-gold/50">{s.num}</p>
              <s.icon className="mt-4 h-9 w-9 text-gold" strokeWidth={1.25} />
              <h2 className="mt-6 text-4xl text-navy md:text-5xl">{s.title}</h2>
              <span className="gold-rule mt-6" />
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{s.summary}</p>
              <div className="mt-8"><GoldButton to="/services" hash="enquiry" variant="dark">Enquire About This Service</GoldButton></div>
            </Reveal>
            <Reveal delay={120} className="grid gap-8 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <h3 className="eyebrow">What it covers</h3>
                <ul className="mt-4 space-y-3">{s.items.map((it) => <li key={it} className="flex gap-3 text-navy"><Check className="mt-1 h-4 w-4 shrink-0 text-gold" />{it}</li>)}</ul>
              </div>
              <div>
                <h3 className="eyebrow">Who may benefit</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.beneficiaries}</p>
              </div>
              <div>
                <h3 className="eyebrow">Common situations</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">{s.situations.map((x) => <li key={x}>— {x}</li>)}</ul>
              </div>
              <div className="border-l-2 border-gold pl-5 sm:col-span-2">
                <h3 className="eyebrow">Scope of support</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.scope}</p>
              </div>
            </Reveal>
          </div>
        </section>
      ))}
      <section id="enquiry" className="scroll-mt-32 bg-navy py-24 md:py-32">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <SectionHeading tone="dark" eyebrow="Service Enquiry" title="Tell us what you need." intro="Select a category and briefly describe your requirement. We do not promise legal outcomes, registrations, grants, funding or dispute resolution — we promise a careful, honest conversation." />
          <div className="bg-background p-6 md:p-10"><ConsultationForm compact /></div>
        </div>
      </section>
    </>
  );
}
