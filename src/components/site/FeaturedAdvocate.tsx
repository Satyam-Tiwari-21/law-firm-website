import { Link } from "@tanstack/react-router";
import { advocates } from "@/lib/site";
import { Reveal } from "@/components/site/Reveal";
import { GoldButton } from "@/components/site/Blocks";

const featuredAdvocate = advocates.find((a) => a.slug === "preeti-meena");

export function FeaturedAdvocate() {
  if (!featuredAdvocate) return null;

  return (
    <section className="bg-ivory py-24 sm:py-32">
      <div className="container-x">
        <Reveal>
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="relative aspect-[4/5] bg-navy">
              {featuredAdvocate.image ? (
                <img
                  src={featuredAdvocate.image}
                  alt={`${featuredAdvocate.name}, ${featuredAdvocate.role}`}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="grid h-full w-full place-items-center">
                  <span className="font-serif text-6xl text-gold">{featuredAdvocate.initials}</span>
                </div>
              )}
            </div>
            <div>
              <p className="eyebrow">Co-Counsel / Advocate</p>
              <h2 className="mt-3 font-serif text-5xl text-navy md:text-6xl">{featuredAdvocate.name}</h2>
              <span className="gold-rule mt-8 w-20" />
              <p className="mt-8 text-lg leading-relaxed text-muted-foreground">{featuredAdvocate.shortBio}</p>
              <div className="mt-10">
                <GoldButton to={`/advocates/${featuredAdvocate.slug}`}>View Profile →</GoldButton>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}