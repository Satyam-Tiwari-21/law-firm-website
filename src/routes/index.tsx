import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Gavel, Landmark, LineChart, Check } from "lucide-react";

import library from "@/assets/library.jpg";
import { seo, services, segments } from "@/lib/site";
import { Reveal } from "@/components/site/Reveal";
import { CTASection, GoldButton, LeadershipCards, SectionHeading, VisionMission, FeaturedAdvocate } from "@/components/site/Blocks";

export const Route = createFileRoute("/")({
  head: () => seo(
    "Justice Law Bridge Legal Services LLP — Legal, Financial & Business Support",
    "Legal assistance, dispute resolution, financial consultancy, compliance and startup advisory under one roof in Sawai Madhopur, Rajasthan.",
  ),
  component: Home,
});

const pillars = [
  { icon: Gavel, title: "Legal Expertise & Dispute Resolution", text: "Documentation, research, advocacy through authorised professionals, and structured routes to resolution through mediation and arbitration." },
  { icon: LineChart, title: "Financial & Compliance Support", text: "Accounting, GST, income tax, audit support and payroll — keeping records accurate and obligations on schedule." },
  { icon: Landmark, title: "Business, Startup & Institutional Advisory", text: "Registration, funding applications, digital presence and advisory for founders, MSMEs and institutions." },
];

const why = [
  "Integrated service categories",
  "Legal and business support in one place",
  "Practical documentation and compliance assistance",
  "A focus on accessible professional guidance",
  "Dispute resolution and awareness initiatives",
  "Support for startups, MSMEs and institutions",
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[88vh] overflow-hidden">
        <img src="/tingey-injury-law-firm-yCdPU73kGSc-unsplash.png" alt="Statue of Lady Justice" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-hero" />
        <div className="container-x relative flex min-h-[88vh] flex-col justify-center py-24">
          <p className="eyebrow animate-rise">Bridging People and Justice</p>
          <h1 className="animate-rise mt-6 max-w-4xl text-5xl leading-[0.98] text-navy-foreground sm:text-6xl md:text-8xl" style={{ animationDelay: "120ms" }}>
            Where Legal Authority Meets <em className="text-champagne">Business Vision.</em>
          </h1>
          <span className="gold-rule animate-line mt-10 w-28" style={{ animationDelay: "300ms" }} />
          <p className="animate-rise mt-8 max-w-2xl text-lg leading-relaxed text-navy-muted" style={{ animationDelay: "260ms" }}>
            From legal assistance and dispute resolution to financial consultancy, compliance, and startup advisory, Justice Law Bridge brings essential professional services together under one roof.
          </p>
          <div className="animate-rise mt-10 flex flex-wrap gap-4" style={{ animationDelay: "380ms" }}>
            <GoldButton to="/services">Explore Our Services</GoldButton>
            <GoldButton to="/contact" hash="consultation" variant="outline">Speak With Our Team</GoldButton>
          </div>
          <p className="animate-rise mt-14 text-[0.7rem] uppercase tracking-[0.28em] text-navy-muted" style={{ animationDelay: "500ms" }}>
            Legal Support <span className="text-gold">|</span> Financial Advisory <span className="text-gold">|</span> Corporate &amp; Startup Services
          </p>
        </div>
      </section>



      

      {/* Services */}
      <section className="bg-background py-24 md:py-32">
        <div className="container-x">
          <SectionHeading eyebrow="Our Services" title="Comprehensive Services. One Trusted Partner." intro="Five practice areas, each delivered according to the firm's capabilities and the professional qualifications the work requires." />
          <div className="mt-16 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 100} className="group relative flex flex-col bg-card p-9 transition-colors duration-500 hover:bg-navy">
                <div className="flex items-start justify-between">
                  <s.icon className="h-8 w-8 text-gold" strokeWidth={1.25} />
                  <span className="font-serif text-4xl text-border transition-colors group-hover:text-gold/40">{s.num}</span>
                </div>
                <h3 className="mt-8 text-2xl text-navy transition-colors group-hover:text-navy-foreground">{s.title}</h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-navy-muted">{s.summary}</p>
                <Link to="/services" hash={s.slug} className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-navy transition-colors group-hover:text-gold">
                  Discover This Service <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Reveal>
            ))}
            <Reveal className="flex flex-col justify-between bg-navy p-9">
              <p className="font-serif text-3xl leading-snug text-navy-foreground">Not sure where your matter fits?</p>
              <GoldButton to="/contact" hash="consultation">Ask Our Team</GoldButton>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section className="bg-navy py-24 md:py-32">
        <div className="container-x">
          <SectionHeading tone="dark" eyebrow="Who We Serve" title="Built Around the Needs of People and Businesses." />
          <div className="mt-16 grid gap-px bg-gold/20 sm:grid-cols-2 lg:grid-cols-3">
            {segments.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 100} className={i % 2 === 0 ? "bg-navy p-9" : "bg-navy-2 p-9"}>
                <s.icon className="h-7 w-7 text-gold" strokeWidth={1.25} />
                <h3 className="mt-6 text-2xl text-navy-foreground">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-muted">{s.text}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-12"><GoldButton to="/industries" variant="outline">View Client Segments</GoldButton></div>
        </div>
      </section>

      {/* Why */}
      <section className="bg-ivory">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[420px]">
            <img src={library} alt="Law library and boardroom in warm lamp light" loading="lazy" width={1600} height={1008} className="absolute inset-0 h-full w-full object-cover" />
          </div>
          <div className="px-6 py-20 md:px-16 md:py-28">
            <SectionHeading eyebrow="Why Justice Law Bridge" title="A More Connected Approach to Professional Services." intro="Our service approach and the strengths we work to deliver for every client." />
            <ul className="mt-10 space-y-5">
              {why.map((w, i) => (
                <Reveal key={w} delay={i * 60}>
                  <li className="flex items-start gap-4 border-b border-gold/20 pb-5">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-gold" />
                    <span className="font-serif text-xl text-navy">{w}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-background py-24 md:py-32">
        <div className="container-x">
          <SectionHeading eyebrow="Leadership" title="Leadership Grounded in Professional Responsibility." />
          <div className="mt-14"><LeadershipCards /></div>
        </div>
      </section>

      <VisionMission />
      <CTASection />
    </>
  );
}