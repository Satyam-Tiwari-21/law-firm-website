import { useState, useEffect, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Self-contained GoldButton to avoid external dependencies causing SSR issues
function GoldButton({ onClick, children }: { onClick: () => void; children: ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "group inline-flex items-center gap-3 bg-gold px-7 py-4 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-navy transition-colors hover:bg-champagne",
      )}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </button>
  );
}

export function DisclaimerModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This effect runs only on the client, safely setting the isClient flag
    setIsClient(true);
  }, []);

  useEffect(() => {
    // This effect depends on isClient, ensuring sessionStorage is only accessed on the client
    if (isClient) {
      const isAcknowledged = sessionStorage.getItem("disclaimerAcknowledged");
      if (!isAcknowledged) {
        setIsOpen(true);
      }
    }
  }, [isClient]);

  const handleAcknowledge = () => {
    sessionStorage.setItem("disclaimerAcknowledged", "true");
    setIsOpen(false);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-lg border border-gold/20 bg-navy p-8 shadow-2xl m-4">
        <h2 className="font-serif text-3xl text-ivory">Disclaimer</h2>
        <div className="mt-4 h-px w-20 bg-gold/50" />
        <p className="mt-6 text-ivory/80 leading-relaxed">
          In accordance with the rules of the Bar Council of India, we are not
          permitted to advertise. The information provided on this website is
          intended solely for informational purposes and does not constitute legal
          advertising of any kind.
        </p>
        <div className="mt-8">
          <GoldButton onClick={handleAcknowledge}>I Understand and Continue</GoldButton>
        </div>
      </div>
    </div>
  );
}