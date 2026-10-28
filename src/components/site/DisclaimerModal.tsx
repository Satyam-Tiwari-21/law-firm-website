import { useState, useEffect } from "react";
import { GoldButton } from "@/components/site/Blocks";

export function DisclaimerModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const isAcknowledged = sessionStorage.getItem("disclaimerAcknowledged");
    if (!isAcknowledged) {
      setIsOpen(true);
    }
  }, []);

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