import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";
import { leaders, mission, vision, advocates, listedAdvocates, type AdvocateProfile, officeStaff, OfficeStaffProfile } from "@/lib/site";

export function SectionHeading({ eyebrow, title, intro, tone = "light", center }: { eyebrow: string; title: string; intro?: string; tone?: "light" | "dark"; center?: boolean }) {
  return (
    <Reveal className={cn("max-w-3xl", center && "mx-auto text-center")}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className={cn("mt-4 text-4xl leading-[1.05] md:text-5xl", tone === "dark" ? "text-navy-foreground" : "text-navy")}>{title}</h2>
      <span className={cn("gold-rule mt-6", center && "mx-auto")} />
      {intro && <p className={cn("mt-6 text-base leading-relaxed md:text-lg", tone === "dark" ? "text-navy-muted" : "text-muted-foreground")}>{intro}</p>}
    </Reveal>
  );
}

export function PageHero({ eyebrow, title, intro, image }: { eyebrow: string; title: string; intro: string; image?: string }) {
  return (
    <section className="relative overflow-hidden bg-navy">
      {image && <img src={image} alt="" width={1600} height={1000} className="absolute inset-0 h-full w-full object-cover opacity-60" />}
      <div className="absolute inset-0 bg-hero" />
      <div className="container-x relative py-16 sm:py-24 md:py-32">
        <p className="eyebrow animate-rise">{eyebrow}</p>
        <h1 className="animate-rise mt-5 max-w-3xl text-[2.5rem] leading-[1.05] text-navy-foreground sm:text-5xl md:text-6xl lg:text-7xl" style={{ animationDelay: "120ms" }}>{title}</h1>
        <span className="gold-rule animate-line mt-6 w-24 md:mt-8" />
        <p className="animate-rise mt-6 max-w-2xl text-base leading-relaxed text-navy-muted sm:text-lg md:mt-8" style={{ animationDelay: "240ms" }}>{intro}</p>
      </div>
    </section>
  );
}

export function GoldButton({ to, hash, children, variant = "solid" }: { to: string; hash?: string; children: ReactNode; variant?: "solid" | "outline" | "dark" }) {
  const linkProps = hash === undefined ? { to } : { to, hash };
  const cls = {
    solid: "bg-gold text-navy hover:bg-champagne",
    outline: "border border-champagne/60 text-navy-foreground hover:border-gold hover:text-gold",
    dark: "border border-navy text-navy hover:bg-navy hover:text-navy-foreground",
  }[variant];
  return (
    <Link {...linkProps} className={cn("group inline-flex w-full items-center justify-center gap-3 px-6 py-4 text-center text-[0.78rem] sm:w-auto sm:px-7 font-semibold uppercase tracking-[0.16em] transition-colors", cls)}>
      {children}<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </Link>
  );
}

export function CTASection() {
  return (
    <section className="bg-ivory py-16 md:py-28">
      <div className="container-x">
        <Reveal className="relative border border-gold/60 bg-navy px-6 py-14 text-center md:px-16 md:py-24">
          <span className="absolute inset-3 border border-gold/20 pointer-events-none" />
          <p className="eyebrow">Begin the Conversation</p>
          <h2 className="mx-auto mt-5 max-w-3xl text-[2rem] leading-tight text-navy-foreground sm:text-4xl md:text-5xl lg:text-6xl">Every Important Decision Deserves the Right Professional Support.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-navy-muted">Whether you are an individual seeking guidance, a business navigating compliance, or an entrepreneur building something new, start with a conversation with our team.</p>
          <div className="relative mt-10 flex flex-wrap justify-center gap-4">
            <GoldButton to="/contact" hash="consultation">Request a Consultation</GoldButton>
            <GoldButton to="/contact" variant="outline">Contact Our Office</GoldButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function VisionMission() {
  return (
    <section className="grid bg-navy md:grid-cols-2">
      {[{ k: "Our Vision", v: vision }, { k: "Our Mission", v: mission }].map((b, i) => (
        <Reveal key={b.k} delay={i * 120} className={cn("px-5 py-16 sm:px-10 md:px-12 md:py-24 lg:px-16 lg:py-28", i === 1 && "border-t border-gold/20 bg-navy-2 md:border-l md:border-t-0")}>
          <p className="eyebrow">{b.k}</p>
          <span className="gold-rule mt-5" />
          <p className="mt-8 font-serif text-2xl leading-snug text-navy-foreground md:text-3xl">“{b.v}”</p>
        </Reveal>
      ))}
    </section>
  );
}

export function LeadershipCards() {
  return (
    <>
      <div className="grid gap-8 md:grid-cols-2">
        {leaders.map((l, i) => (
          // Image beside text only where the card is wide enough: single-column phablets (sm)
          // and the two-column desktop grid (xl). Tablets stack the image above the text.
          <Reveal key={l.name} delay={i * 120} className="group flex flex-col border border-border bg-card shadow-elegant sm:flex-row md:flex-col xl:flex-row">
            <div className="relative grid aspect-square place-items-center overflow-hidden bg-navy sm:aspect-[4/5] sm:w-56 sm:shrink-0 md:aspect-[4/3] md:w-auto xl:aspect-[4/5] xl:w-56">
              {l.image ? (
                <img src={l.image} alt={`${l.name}, ${l.role}`} className="absolute inset-0 h-full w-full object-cover object-top" />
              ) : (
                <>
                  <span className="font-serif text-6xl text-gold">{l.initials}</span>
                  <span className="absolute bottom-3 left-3 right-3 text-center text-[0.6rem] uppercase tracking-[0.2em] text-navy-muted">Photograph to be supplied</span>
                </>
              )}
            </div>
            <div className="min-w-0 p-6 sm:p-8">
              <p className="eyebrow">{l.role}</p>
              <h3 className="mt-3 text-[1.75rem] leading-tight text-navy sm:text-3xl">{l.name}</h3>
              <span className="gold-rule mt-5 w-10" />
              <p className="mt-5 leading-relaxed text-muted-foreground">{l.bio}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </>
  );
}

export function OfficeStaffCards() {
  if (officeStaff.length === 0) return null;

  return (
    <>
      <div className="mt-16">
        <SectionHeading eyebrow="Our Team" title="Office Staff" center />
      </div>
      <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-8 lg:grid-cols-3">
        {officeStaff.map((s, i) => (
          <Reveal key={s.name} delay={i * 120} className="group flex flex-col border border-border bg-card shadow-elegant">
            <div className="relative grid aspect-[4/5] place-items-center overflow-hidden bg-navy">
              {s.image ? (
                <img src={s.image} alt={`${s.name}, ${s.role}`} className="absolute inset-0 h-full w-full object-cover object-top" />
              ) : (
                <>
                  <span className="font-serif text-5xl text-gold sm:text-6xl">{s.initials}</span>
                  <span className="absolute bottom-3 left-3 right-3 hidden text-center text-[0.6rem] uppercase tracking-[0.2em] text-navy-muted sm:block">Photograph to be supplied</span>
                </>
              )}
            </div>
            <div className="p-4 text-center sm:p-8">
              <h3 className="text-lg leading-tight text-navy sm:mt-3 sm:text-2xl">{s.name}</h3>
              <p className="eyebrow mt-2 !text-[0.6rem] !tracking-[0.18em] sm:!text-[0.72rem] sm:!tracking-[0.28em]">{s.role}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </>
  );
}


export function AdvocateGrid() {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">CO-COUNSEL / ADVOCATES</p>
          <h2 className="mt-4 text-4xl leading-[1.05] md:text-5xl text-navy">Our Co-Counsel Advocates</h2>
          <span className="gold-rule mt-6 mx-auto" />
          <p className="mt-6 text-base leading-relaxed md:text-lg text-muted-foreground">A team of experienced legal professionals bringing diverse expertise and a results-driven approach.</p>
        </div>
        {/* Flex-wrap (not grid) so an incomplete last row stays centred on tablets. */}
        <div className="mt-10 flex flex-wrap justify-center gap-4 sm:gap-6 md:mt-16">
          {listedAdvocates.map((advocate) => (
            <div key={advocate.slug} className="w-full sm:w-[calc((100%-1.5rem)/2)] md:w-[calc((100%-3rem)/3)] xl:w-[calc((100%-6rem)/5)]">
              <AdvocateCard advocate={advocate} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AdvocateCard({ advocate }: { advocate: AdvocateProfile }) {
  return (
    <Reveal className="h-full">
      <Link
        to="/advocates/$slug"
        params={{ slug: advocate.slug }}
        className="group flex h-full flex-row overflow-hidden rounded-lg border border-border bg-card shadow-elegant sm:flex-col"
      >
        {/* Phones: compact horizontal card (photo left). sm and up: portrait card. */}
        <div className="relative grid min-h-40 w-28 shrink-0 place-items-center overflow-hidden bg-navy min-[400px]:w-32 sm:aspect-[4/5] sm:min-h-0 sm:w-auto">
          {advocate.image ? (
            <img
              src={advocate.image}
              alt={`${advocate.name}, ${advocate.role}`}
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
          ) : (
            <span className="font-serif text-4xl text-gold sm:text-6xl">{advocate.initials}</span>
          )}
        </div>
        <div className="flex min-w-0 flex-1 flex-col p-4 text-left sm:p-6 sm:text-center">
          <h3 className="text-lg leading-tight text-navy sm:mt-3 sm:text-xl">{advocate.name}</h3>
          <p className="eyebrow mt-2 !text-[0.62rem] !tracking-[0.18em] sm:!text-[0.72rem] sm:!tracking-[0.28em]">{advocate.role}</p>
          <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground sm:mt-3 sm:line-clamp-none">{advocate.shortBio}</p>
          <div className="mt-3 sm:mt-4">
            <span className="inline-block border border-gold px-3 py-1.5 text-[0.65rem] font-semibold tracking-widest text-gold transition-colors group-hover:bg-gold group-hover:text-navy sm:px-4 sm:py-2 sm:text-xs">
              VIEW PROFILE →
            </span>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}

export function FeaturedAdvocate() {
  const coCounsel = advocates.find((a) => a.slug === "co-counsel");

  if (!coCounsel) return null;

  return (
    <section className="bg-ivory py-24 sm:py-32">
      <div className="container-x">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Our Advocates</p>
            <h2 className="mt-3 font-serif text-5xl text-navy">Co-Counsel / Advocate</h2>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-16 grid items-center gap-12 border border-border bg-card p-8 shadow-elegant md:grid-cols-2 md:p-16">
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
              <h3 className="font-serif text-4xl text-navy">{coCounsel.name}</h3>
              <span className="gold-rule mt-6 w-16" />
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{coCounsel.shortBio}</p>
              <div className="mt-8">
                <GoldButton to={`/advocates/co-counsel`}>View Profile →</GoldButton>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}