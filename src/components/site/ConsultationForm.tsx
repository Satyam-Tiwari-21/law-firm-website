import { useState } from "react";
import { z } from "zod";
import { CheckCircle2, Info } from "lucide-react";
import { services } from "@/lib/site";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name.").max(100),
  phone: z.string().trim().regex(/^[+\d][\d\s-]{8,15}$/, "Please enter a valid phone number."),
  email: z.string().trim().email("Please enter a valid email address.").max(255),
  type: z.enum(["Individual", "Business"], { errorMap: () => ({ message: "Please choose an enquiry type." }) }),
  category: z.string().min(1, "Please select a service category."),
  message: z.string().trim().min(10, "Please describe your requirement (at least 10 characters).").max(1500),
  contact: z.enum(["Phone", "Email", "WhatsApp"], { errorMap: () => ({ message: "Choose a contact method." }) }),
  consent: z.literal(true, { errorMap: () => ({ message: "Please consent to being contacted." }) }),
});

const field = "w-full border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none";
const label = "mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-navy";

export function ConsultationForm({ compact = false }: { compact?: boolean }) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const entries: Record<string, string> = {}; fd.forEach((v, k) => { entries[k] = String(v); });
    const data = { ...entries, consent: fd.get("consent") === "on" };
    const r = schema.safeParse(data);
    if (!r.success) {
      const errs: Record<string, string> = {};
      r.error.issues.forEach((i) => { errs[String(i.path[0])] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    setDone(true);
  }

  if (done) {
    return (
      <div className="border border-gold/50 bg-ivory p-10 text-center" role="status">
        <CheckCircle2 className="mx-auto h-10 w-10 text-gold" />
        <h3 className="mt-4 text-3xl text-navy">Thank you — your details were validated.</h3>
        <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
          This is a demonstration form, so your enquiry has <strong>not</strong> been sent. Please call or email the office directly to reach the team.
        </p>
        <button onClick={() => setDone(false)} className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-navy underline underline-offset-4">Submit another</button>
      </div>
    );
  }

  const Err = ({ k }: { k: string }) => errors[k] ? <p className="mt-1.5 text-xs text-destructive">{errors[k]}</p> : null;

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <p className="flex items-start gap-2 border-l-2 border-gold bg-ivory px-4 py-3 text-xs text-muted-foreground">
        <Info className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> Demo form — enquiries are not yet delivered to the office.
      </p>
      <div className="grid gap-5 sm:grid-cols-2">
        <div><label className={label} htmlFor="name">Full name</label><input id="name" name="name" className={cn(field, errors['name'] && "border-destructive")} /><Err k="name" /></div>
        <div><label className={label} htmlFor="phone">Phone number</label><input id="phone" name="phone" type="tel" className={cn(field, errors['phone'] && "border-destructive")} /><Err k="phone" /></div>
        <div className="sm:col-span-2"><label className={label} htmlFor="email">Email address</label><input id="email" name="email" type="email" className={cn(field, errors['email'] && "border-destructive")} /><Err k="email" /></div>
        {!compact && (
          <fieldset>
            <legend className={label}>Enquiry type</legend>
            <div className="flex gap-5 text-sm">
              {["Individual", "Business"].map((t) => <label key={t} className="flex items-center gap-2"><input type="radio" name="type" value={t} className="accent-[var(--gold)]" defaultChecked={t === "Individual"} />{t}</label>)}
            </div>
            <Err k="type" />
          </fieldset>
        )}
        {compact && <input type="hidden" name="type" value="Individual" />}
        <div className={compact ? "sm:col-span-2" : ""}>
          <label className={label} htmlFor="category">Service category</label>
          <select id="category" name="category" defaultValue="" className={cn(field, errors['category'] && "border-destructive")}>
            <option value="" disabled>Select a category</option>
            {services.map((s) => <option key={s.slug} value={s.title}>{s.title}</option>)}
            <option value="Other">Other / Not sure</option>
          </select>
          <Err k="category" />
        </div>
        <div className="sm:col-span-2"><label className={label} htmlFor="message">Brief description of requirement</label><textarea id="message" name="message" rows={4} className={cn(field, errors['message'] && "border-destructive")} /><Err k="message" /></div>
        <fieldset className="sm:col-span-2">
          <legend className={label}>Preferred contact method</legend>
          <div className="flex flex-wrap gap-5 text-sm">
            {["Phone", "Email", "WhatsApp"].map((t) => <label key={t} className="flex items-center gap-2"><input type="radio" name="contact" value={t} defaultChecked={t === "Phone"} className="accent-[var(--gold)]" />{t}</label>)}
          </div>
          <Err k="contact" />
        </fieldset>
      </div>
      <div>
        <label className="flex items-start gap-3 text-sm text-muted-foreground">
          <input type="checkbox" name="consent" className="mt-1 accent-[var(--gold)]" />
          I consent to being contacted by Justice Law Bridge regarding this enquiry. I understand that submitting this form does not create an advocate-client relationship.
        </label>
        <Err k="consent" />
      </div>
      <button type="submit" className="w-full bg-navy px-8 py-4 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-navy-foreground transition-colors hover:bg-navy-2 sm:w-auto">
        Submit Enquiry
      </button>
    </form>
  );
}
