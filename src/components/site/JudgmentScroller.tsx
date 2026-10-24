import { legalJudgments, LegalJudgment } from "@/lib/legalJudgments";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export function JudgmentScroller() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="scroller-container">
      <div className="scroller">
        {[...legalJudgments, ...legalJudgments].map((judgment, index) => (
          <div key={`${judgment.id}-${index}`} className="scroller-item">
            <JudgmentCard judgment={judgment} />
          </div>
        ))}
      </div>
    </div>
  );
}

function JudgmentCard({ judgment }: { judgment: LegalJudgment }) {
  return (
    <div className="p-6 border rounded-lg h-full flex flex-col">
      <p className="text-sm text-gray-500">{judgment.court}</p>
      <p className="text-xs text-gray-400">{judgment.date}</p>
      <h3 className="mt-2 text-lg font-semibold text-navy">{judgment.title}</h3>
      <p className="mt-2 text-sm text-gray-600 flex-1">{judgment.summary}</p>
      <a href={judgment.officialSourceUrl} target="_blank" rel="noopener noreferrer" className="mt-4 text-sm font-semibold text-gold">
        READ JUDGMENT →
      </a>
    </div>
  );
}