import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { firm, navLinks } from "@/lib/site";
import type { LinkProps } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <>
      <div className="bg-navy-2 text-navy-muted">
        <div className="container-x flex h-9 items-center justify-between text-[0.7rem] tracking-[0.18em] uppercase">
          <span>Integrated Legal, Financial &amp; Business Support</span>
          <a href={firm.phoneHref} className="hidden items-center gap-2 text-champagne hover:text-gold sm:flex">
            <Phone className="h-3 w-3" /> {firm.phone}
          </a>
        </div>
      </div>
      <header className={cn("sticky top-0 z-50 border-b transition-all duration-300", scrolled ? "border-gold/30 bg-navy/95 backdrop-blur" : "border-transparent bg-navy")}>
        <div className={cn("container-x flex items-center justify-between transition-all", scrolled ? "h-16" : "h-20")}>
          <Logo />
          <nav className="hidden items-center gap-7 xl:flex" aria-label="Primary">
            {navLinks.map((l) => (
              <Link key={l.to} to={l.to} activeOptions={{ exact: l.to === "/" }}
                className="text-[0.82rem] text-navy-foreground/80 transition-colors hover:text-champagne"
                activeProps={{ className: "!text-gold" }}>
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Link to="/contact" hash="consultation" className="hidden bg-gold px-5 py-2.5 text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-navy transition-colors hover:bg-champagne sm:inline-block">
              Book a Consultation
            </Link>
            <button className="p-2 text-navy-foreground xl:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {open && (
          <nav className="border-t border-gold/20 bg-navy xl:hidden" aria-label="Mobile">
            <div className="container-x flex flex-col py-4">
              {navLinks.map((l) => (
                <Link key={l.to} to={l.to} onClick={() => setOpen(false)} activeOptions={{ exact: l.to === "/" }}
                  className="border-b border-navy-foreground/10 py-3.5 font-serif text-xl text-navy-foreground"
                  activeProps={{ className: "!text-gold" }}>
                  {l.label}
                </Link>
              ))}
              <Link to="/contact" hash="consultation" onClick={() => setOpen(false)} className="mt-5 bg-gold py-3.5 text-center text-sm font-semibold uppercase tracking-[0.14em] text-navy">
                Book a Consultation
              </Link>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
