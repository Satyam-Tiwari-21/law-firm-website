import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";
import { firm, navLinks, services } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-navy text-navy-muted">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-5 text-sm leading-relaxed">
            An integrated professional services firm bringing legal assistance, dispute resolution, financial consultancy and business advisory under one roof.
          </p>
          <p className="mt-4 font-serif text-lg italic text-champagne">{firm.tagline}</p>
        </div>
        <div>
          <h3 className="eyebrow mb-5">Navigate</h3>
          <ul className="space-y-2.5 text-sm">
            {navLinks.map((l) => <li key={l.to}><Link to={l.to} className="hover:text-champagne">{l.label}</Link></li>)}
          </ul>
        </div>
        <div>
          <h3 className="eyebrow mb-5">Services</h3>
          <ul className="space-y-2.5 text-sm">
            {services.map((s) => <li key={s.slug}><Link to="/services" hash={s.slug} className="hover:text-champagne">{s.title}</Link></li>)}
          </ul>
        </div>
        <div>
          <h3 className="eyebrow mb-5">Contact</h3>
          <ul className="space-y-3.5 text-sm">
            <li className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />{firm.location}</li>
            <li><a href={firm.phoneHref} className="flex gap-3 hover:text-champagne"><Phone className="h-4 w-4 text-gold" />{firm.phone}</a></li>
            <li><a href={`mailto:${firm.email}`} className="flex gap-3 break-all hover:text-champagne"><Mail className="h-4 w-4 shrink-0 text-gold" />{firm.email}</a></li>
            <li><a href={firm.whatsapp} target="_blank" rel="noreferrer" className="flex gap-3 hover:text-champagne"><MessageCircle className="h-4 w-4 text-gold" />WhatsApp</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-navy-foreground/10">
        <div className="container-x flex flex-col gap-4 py-6 text-xs md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {firm.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-champagne">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-champagne">Terms of Use</Link>
            <Link to="/disclaimer" className="hover:text-champagne">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
