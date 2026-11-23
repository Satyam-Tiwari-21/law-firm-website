import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Logo({ tone = "light", className }: { tone?: "light" | "dark"; className?: string }) {
  return (
    <Link to="/" className={cn("flex items-center gap-3", className)} aria-label="Justice Law Bridge — Home">
      <img src="/Justice for All Law Emblem.png" alt="Justice Law Bridge Logo" className="h-11 w-11 shrink-0 sm:h-14 sm:w-14" />
      <span className="min-w-0 leading-tight">
        <span className={cn("block font-serif text-base tracking-wide sm:text-lg", tone === "light" ? "text-navy-foreground" : "text-navy")}>Justice Law Bridge™</span>
        <span className="block text-[0.6rem] uppercase tracking-[0.25em] text-gold">Legal Services LLP</span>
      </span>
    </Link>
  );
}