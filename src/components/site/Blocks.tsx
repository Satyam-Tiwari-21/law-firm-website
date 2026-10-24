import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";
import { leaders, mission, vision, advocates, type AdvocateProfile } from "@/lib/site";

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

export function PageHero({ eyebrow, title, intro, image }: { eyebrow: string; title: string; intro: string; image: string }) {
  return (
    <section className="relative overflow-hidden bg-navy">
      <img src={image} alt="" width={1600} height={1000} className="absolute inset-0 h-full w-full object-cover opacity-60" />
      <div className="absolute inset-0 bg-hero" />
      <div className="container-x relative py-24 md:py-32">
        <p className="eyebrow animate-rise">{eyebrow}</p>
        <h1 className="animate-rise mt-5 max-w-3xl text-5xl leading-[1.02] text-navy-foreground md:text-7xl" style={{ animationDelay: "120ms" }}>{title}</h1>
        <span className="gold-rule animate-line mt-8 w-24" />
        <p className="animate-rise mt-8 max-w-2xl text-lg leading-relaxed text-navy-muted" style={{ animationDelay: "240ms" }}>{intro}</p>
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
    <Link {...linkProps} className={cn("group inline-flex items-center gap-3 px-7 py-4 text-[0.78rem] font-semibold uppercase tracking-[0.16em] transition-colors", cls)}>
      {children}<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </Link>
  );
}

export function CTASection() {
  return (
    <section className="bg-ivory py-20 md:py-28">
      <div className="container-x">
        <Reveal className="relative border border-gold/60 bg-navy px-6 py-16 text-center md:px-16 md:py-24">
          <span className="absolute inset-3 border border-gold/20 pointer-events-none" />
          <p className="eyebrow">Begin the Conversation</p>
          <h2 className="mx-auto mt-5 max-w-3xl text-4xl leading-tight text-navy-foreground md:text-6xl">Every Important Decision Deserves the Right Professional Support.</h2>
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
        <Reveal key={b.k} delay={i * 120} className={cn("px-6 py-20 md:px-16 md:py-28", i === 1 && "border-t border-gold/20 bg-navy-2 md:border-l md:border-t-0")}>
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
          <Reveal key={l.name} delay={i * 120} className="group flex flex-col border border-border bg-card shadow-elegant sm:flex-row">
            <div className="relative grid aspect-[4/5] place-items-center bg-navy sm:w-56 sm:shrink-0">
              {l.image ? (
                <img src={l.image} alt={`${l.name}, ${l.role}`} className="h-full w-full object-cover" />
              ) : (
                <>
                  <span className="font-serif text-6xl text-gold">{l.initials}</span>
                  <span className="absolute bottom-3 left-3 right-3 text-center text-[0.6rem] uppercase tracking-[0.2em] text-navy-muted">Photograph to be supplied</span>
                </>
              )}
            </div>
            <div className="p-8">
              <p className="eyebrow">{l.role}</p>
              <h3 className="mt-3 text-3xl text-navy">{l.name}</h3>
              <span className="gold-rule mt-5 w-10" />
              <p className="mt-5 leading-relaxed text-muted-foreground">{l.bio}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </>
  );
}

export function AdvocateCard({ advocate }: { advocate: AdvocateProfile }) {
  return (
    <Reveal className="h-full">
      <Link
        to={`/advocates/${advocate.slug}`}
        className="group flex h-full flex-col border border-border bg-card shadow-elegant"
      >
        <div className="relative grid aspect-[4/5] place-items-center bg-navy sm:shrink-0">
          {advocate.image ? (
            <img
              src={advocate.image}
              alt={`${advocate.name}, ${advocate.role}`}
              className="h-full w-full object-cover"
            />
          ) : (
            <span className="font-serif text-6xl text-gold">{advocate.initials}</span>
          )}
        </div>
        <div className="flex flex-1 flex-col p-8">
          <p className="eyebrow">{advocate.role}</p>
          <h3 className="mt-3 text-3xl text-navy">{advocate.name}</h3>
          <span className="gold-rule mt-5 w-10" />
          <p className="mt-5 leading-relaxed text-muted-foreground">{advocate.shortBio}</p>
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