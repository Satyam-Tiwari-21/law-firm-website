import { Link } from "@tanstack/react-router";
import { advocates } from "@/lib/site";
import { Reveal } from "@/components/site/Reveal";

export function AdvocateCard({ advocate }: { advocate: (typeof advocates)[0] }) {
  return (
    <Reveal>
      <div className="group relative">
        <div className="relative aspect-[4/5] bg-navy">
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
        <div className="mt-4">
          <h3 className="font-serif text-2xl text-navy">{advocate.name}</h3>
          <p className="text-sm text-muted-foreground">{advocate.role}</p>
          <Link to={`/advocates/${advocate.slug}`} className="mt-4 inline-block font-semibold text-navy">
            View Profile →
          </Link>
        </div>
      </div>
    </Reveal>
  );
}