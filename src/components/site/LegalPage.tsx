import type { ReactNode } from "react";

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <section className="bg-navy py-20">
        <div className="container-x">
          <p className="eyebrow">Legal</p>
          <h1 className="mt-4 text-5xl text-navy-foreground md:text-6xl">{title}</h1>
          <span className="gold-rule mt-6" />
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="container-x max-w-3xl space-y-5 leading-relaxed text-muted-foreground [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:text-navy">{children}</div>
      </section>
    </>
  );
}
