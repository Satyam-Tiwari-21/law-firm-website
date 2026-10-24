import { createFileRoute, notFound } from '@tanstack/react-router';
import { judgments } from '@/lib/judgments';
import { SectionHeading } from '@/components/site/Blocks';

export const Route = createFileRoute('/insights/recent-judgments/$slug')({
  component: JudgmentDetails,
  loader: ({ params }) => {
    const judgment = judgments.find((j) => j.slug === params.slug);
    if (!judgment) {
      throw notFound();
    }
    return { judgment };
  },
});

function JudgmentDetails() {
  const { judgment } = Route.useLoaderData();

  return (
    <section className="py-24 sm:py-32">
      <div className="container-x">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrow={judgment.court}
            title={judgment.title}
            center
          />
          <div className="prose prose-lg mx-auto mt-12">
            <p><strong>Case Number:</strong> {judgment.caseNumber}</p>
            <p><strong>Date of Judgment:</strong> {judgment.date}</p>
            <p><strong>Category:</strong> {judgment.category}</p>
            
            <h2>Background</h2>
            <p>{judgment.background}</p>
            
            <h2>Legal Issue</h2>
            <p>{judgment.legalIssue}</p>
            
            <h2>Decision</h2>
            <p>{judgment.decision}</p>
            
            <h2>Key Takeaway</h2>
            <p>{judgment.keyTakeaway}</p>

            <p><a href={judgment.sourceUrl} target="_blank" rel="noopener noreferrer">Read Full Judgment</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}