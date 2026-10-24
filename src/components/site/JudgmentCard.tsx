import { Link } from '@tanstack/react-router';
import type { Judgment } from '@/lib/judgments';
import { Reveal } from './Reveal';

export function JudgmentCard({ judgment }: { judgment: Judgment }) {
  return (
    <Reveal>
      <Link
        to={`/insights/recent-judgments/${judgment.slug}`}
        className="group flex h-full flex-col rounded-sm border border-border bg-card p-6 shadow-elegant transition-colors hover:bg-ivory"
      >
        <div className="flex-1">
          <p className="eyebrow text-sm">{judgment.court}</p>
          <h3 className="mt-3 text-xl font-semibold leading-snug text-navy">{judgment.title}</h3>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{judgment.summary}</p>
        </div>
        <div className="mt-6">
          <span className="text-sm font-semibold text-gold transition-colors group-hover:text-navy">
            READ SUMMARY &rarr;
          </span>
        </div>
      </Link>
    </Reveal>
  );
}