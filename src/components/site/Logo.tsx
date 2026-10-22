import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Logo({ tone = "light", className }: { tone?: "light" | "dark"; className?: string }) {
  return (
    <Link to="/" className={cn("flex items-center gap-3", className)} aria-label="Justice Law Bridge — Home">
      <img src="/logo.png" alt="Justice Law Bridge Logo" className="h-14 w-14 shrink-0" />
      <span className="leading-tight">
        <span className={cn("block font-serif text-lg tracking-wide", tone === "light" ? "text-navy-foreground" : "text-navy")}>Justice Law Bridge™</span>
        <span className="block text-[0.6rem] uppercase tracking-[0.25em] text-gold">Legal Services LLP</span>
      </span>
    </Link>
  );
}