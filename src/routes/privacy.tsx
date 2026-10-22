import { createFileRoute } from "@tanstack/react-router";
import { firm, seo } from "@/lib/site";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/privacy")({
  head: () => seo("Privacy Policy — Justice Law Bridge Legal Services LLP", "How Justice Law Bridge handles personal information shared through this website."),
  component: () => (
    <LegalPage title="Privacy Policy">
      <p>We respect your privacy. Information you share with us — such as your name, phone number, email and a description of your requirement — is used only to respond to your enquiry.</p>
      <h2>What we collect</h2>
      <p>Only the details you choose to provide through our forms, phone, email or WhatsApp.</p>
      <h2>How we use it</h2>
      <p>To contact you about your enquiry and, if you engage the firm, to deliver the agreed services. We do not sell your information.</p>
      <h2>Contact</h2>
      <p>For any privacy question, email {firm.email}.</p>
    </LegalPage>
  ),
});
