import { Link } from "@tanstack/react-router";
import { advocates } from "@/lib/site";
import { Reveal } from "@/components/site/Reveal";

export function AdvocateCard({ advocate }: { advocate: (typeof advocates)[0] }) {
  return (
    <Reveal>
      <div className="group relative">
        <div className="relative aspect-[4/5] overflow-hidden bg-navy">
          {advocate.image ? (
            <img
              src={advocate.image}
              alt={`${advocate.name}, ${advocate.role}`}
              className="h-full w-full object-cover object-top"
            />
          ) : (
            <div className="grid h-full w-full place-items-center">
              <span className="font-serif text-5xl text-gold sm:text-6xl">{advocate.initials}</span>
            </div>
          )}
        </div>
        <div className="mt-3 sm:mt-4">
          <h3 className="font-serif text-lg leading-tight text-navy sm:text-2xl">{advocate.name}</h3>
          <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{advocate.role}</p>
          <Link to="/advocates/$slug" params={{ slug: advocate.slug }} className="mt-3 inline-block text-sm font-semibold text-navy sm:mt-4 sm:text-base">
            View Profile →
          </Link>
        </div>
      </div>
    </Reveal>
  );
}