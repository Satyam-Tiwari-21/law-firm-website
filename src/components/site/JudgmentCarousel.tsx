import { legalJudgments, LegalJudgment } from "@/lib/legalJudgments";
import { cn } from "@/lib/utils";
import { useEffect, useState, useRef } from "react";
import { Play, Pause, ChevronLeft, ChevronRight } from "lucide-react";

export function JudgmentCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const startTimer = () => {
    stopTimer();
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % legalJudgments.length);
      }, 3000);
    }
  };

  useEffect(() => {
    startTimer();
    return stopTimer;
  }, [isPaused, activeIndex]);

  const handleNavigation = (newIndex: number) => {
    setActiveIndex(newIndex);
  };

  const handlePrevious = () => {
    const newIndex = (activeIndex - 1 + legalJudgments.length) % legalJudgments.length;
    handleNavigation(newIndex);
  };

  const handleNext = () => {
    const newIndex = (activeIndex + 1) % legalJudgments.length;
    handleNavigation(newIndex);
  };

  const handleIndicatorClick = (index: number) => {
    handleNavigation(index);
  };

  // Swipe left/right on touch devices.
  const touchStartX = useRef<number | null>(null);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const start = touchStartX.current;
    const end = e.changedTouches[0]?.clientX;
    touchStartX.current = null;
    if (start == null || end == null) return;
    const dx = end - start;
    if (Math.abs(dx) < 40) return;
    if (dx < 0) handleNext();
    else handlePrevious();
  };

  const togglePause = () => {
    setIsPaused(prev => !prev);
  };

  return (
    <section className="bg-ivory py-16 md:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-base font-semibold leading-7 text-gold">JUDICIAL UPDATES</p>
          <h2 className="mt-2 text-[2.25rem] font-bold leading-tight tracking-tight text-navy sm:text-5xl md:text-6xl">Recent Legal Judgments</h2>
          <p className="mt-6 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">Stay informed about recent judicial decisions from the Rajasthan High Court and Supreme Court of India, presented for general knowledge and legal awareness.</p>
          <p className="mt-2 text-sm leading-6 text-gray-500">FOR KNOWLEDGE & INFORMATION PURPOSES ONLY</p>
        </div>

        <div className="mt-10 md:mt-16">
          <div className="relative touch-pan-y overflow-hidden" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
            <div
              className="flex transition-transform duration-500 ease-in-out motion-reduce:duration-0"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {legalJudgments.map((judgment) => (
                <div key={judgment.id} className="w-full flex-shrink-0 p-1">
                  <JudgmentCard judgment={judgment} />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-1 md:mt-8">
            {legalJudgments.map((_, index) => (
              <button
                key={index}
                onClick={() => handleIndicatorClick(index)}
                className={cn(
                  // Larger invisible tap target around the 8px dot.
                  "relative h-2 w-2 rounded-full transition-colors before:absolute before:-inset-2 before:content-['']",
                  activeIndex === index ? "bg-gold" : "bg-gray-300 hover:bg-gray-400"
                )}
                aria-label={`Go to judgment ${index + 1}`}
                aria-current={activeIndex === index}
              />
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center space-x-4 md:space-x-8">
            <button
              onClick={handlePrevious}
              className="flex items-center space-x-2 text-sm font-semibold text-navy hover:text-gold transition-colors"
              aria-label="Previous judgment"
            >
              <ChevronLeft size={16} />
              <span>Previous</span>
            </button>

            <button
              onClick={togglePause}
              className="flex items-center space-x-2 text-sm font-semibold text-navy hover:text-gold transition-colors"
              aria-label={isPaused ? "Play automatic rotation" : "Pause automatic rotation"}
            >
              {isPaused ? <Play size={20} /> : <Pause size={20} />}
            </button>

            <button
              onClick={handleNext}
              className="flex items-center space-x-2 text-sm font-semibold text-navy hover:text-gold transition-colors"
              aria-label="Next judgment"
            >
              <span>Next</span>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-200 pt-8 text-center md:mt-16">
          <p className="text-sm leading-6 text-gray-500">
            The information presented here is intended solely for general knowledge, legal awareness and informational purposes. It does not constitute legal advice. Readers should refer to the original judgment or order for the authoritative legal position.
          </p>
        </div>
      </div>
    </section>
  );
}

function JudgmentCard({ judgment }: { judgment: LegalJudgment }) {
  return (
    <div className="flex h-full flex-col rounded-lg border bg-white p-5 sm:p-6">
      <p className="text-sm text-gray-500 uppercase tracking-wider">{judgment.court}</p>
      <p className="text-xs text-gray-400 mt-1">{judgment.date}</p>
      <h3 className="mt-4 text-xl font-semibold text-navy">{judgment.title}</h3>
      <p className="text-sm text-gray-500 mt-1">{judgment.caseNumber}</p>
      <p className="mt-4 text-sm text-gray-600 flex-1">{judgment.summary}</p>
      <p className="mt-4 text-sm font-semibold text-navy">Key Takeaway:</p>
      <p className="text-sm text-gray-600">{judgment.keyTakeaway}</p>
      <a href={judgment.officialSourceUrl} target="_blank" rel="noopener noreferrer" className="mt-6 text-sm font-semibold text-gold self-start">
        READ JUDGMENT →
      </a>
    </div>
  );
}