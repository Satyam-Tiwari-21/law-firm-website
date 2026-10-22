import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/site";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/disclaimer")({
  head: () => seo("Disclaimer — Justice Law Bridge Legal Services LLP", "Information on this website is general in nature and does not create an advocate-client relationship."),
  component: () => (
    <LegalPage title="Disclaimer">
      <p>The information on this website is provided for general informational purposes only. It is not legal, financial or professional advice and should not be relied upon as a substitute for advice on your specific circumstances.</p>
      <p>Viewing this website, contacting the firm, or submitting an enquiry does not by itself create an advocate-client relationship. Such a relationship arises only on formal engagement on agreed terms.</p>
      <p>The availability and scope of any professional service depend on the facts of the matter, the terms of engagement, and applicable law. No outcome, registration, grant, funding decision or resolution is guaranteed.</p>
      <p>This website is intended to provide information about the firm at the visitor's own initiative and is not intended as advertising or solicitation.</p>
    </LegalPage>
  ),
});
