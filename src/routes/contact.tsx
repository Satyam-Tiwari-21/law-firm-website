import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import hero from "@/assets/hero-columns.jpg";
import { firm, seo } from "@/lib/site";
import { PageHero } from "@/components/site/Blocks";
import { ConsultationForm } from "@/components/site/ConsultationForm";

export const Route = createFileRoute("/contact")({
  head: () => seo("Contact & Consultation — Justice Law Bridge Legal Services LLP", "Call +91 82332 24091, email Justicelawllp@gmail.com, or request a consultation with our team in Sawai Madhopur, Rajasthan."),
  component: Contact,
});

function Contact() {
  const items = [
    { icon: Phone, k: "Phone", v: firm.phone, href: firm.phoneHref },
    { icon: Mail, k: "Email", v: firm.email, href: `mailto:${firm.email}` },
    { icon: MessageCircle, k: "WhatsApp", v: "Message us on WhatsApp", href: firm.whatsapp },
    { icon: MapPin, k: "Office", v: firm.location },
  ];
  return (
    <>
      <PageHero image={hero} eyebrow="Contact & Consultation" title="Start With a Conversation." intro="Reach the office directly or share a few details about your requirement and our team will be in touch." />
      <section id="consultation" className="scroll-mt-24 py-20 md:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="eyebrow">Our Office</p>
            <h2 className="mt-4 text-4xl text-navy">Justice Law Bridge Legal Services LLP</h2>
            <span className="gold-rule mt-6" />
            <ul className="mt-10 space-y-6">
              {items.map((it) => {
                const body = (<><it.icon className="mt-1 h-5 w-5 shrink-0 text-gold" /><span><span className="eyebrow block">{it.k}</span><span className="mt-1 block break-all text-lg text-navy">{it.v}</span></span></>);
                return <li key={it.k}>{it.href ? <a href={it.href} target={it.k === "WhatsApp" ? "_blank" : undefined} rel="noreferrer" className="flex gap-4 hover:opacity-80">{body}</a> : <div className="flex gap-4">{body}</div>}</li>;
              })}
            </ul>
            <p className="mt-10 border-l-2 border-gold bg-ivory p-5 text-sm text-muted-foreground">A map will be added once the precise office address is confirmed.</p>
          </div>
          <div className="border border-border p-6 shadow-elegant md:p-10">
            <h2 className="text-3xl text-navy">Request a Consultation</h2>
            <p className="mb-8 mt-2 text-sm text-muted-foreground">All fields are required.</p>
            <ConsultationForm />
          </div>
        </div>
      </section>
    </>
  );
}
