import { createFileRoute } from '@tanstack/react-router';
import { PageHero, SectionHeading } from '@/components/site/Blocks';
import { judgments } from '@/lib/judgments';
import { JudgmentCard } from '@/components/site/JudgmentCard';

export const Route = createFileRoute('/insights/recent-judgments')({
  component: RecentJudgments,
});

function RecentJudgments() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Recent Judgments"
        intro="An archive of select case summaries and legal analyses from our team, offering insights into notable judgments from the Supreme Court of India and various High Courts."
        image="/hero-justice.jpg"
      />
      <section className="py-24 sm:py-32">
        <div className="container-x">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {judgments.map((judgment) => (
              <JudgmentCard key={judgment.slug} judgment={judgment} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}