import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/site";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/terms")({
  head: () => seo("Terms of Use — Justice Law Bridge Legal Services LLP", "Terms governing use of the Justice Law Bridge Legal Services LLP website."),
  component: () => (
    <LegalPage title="Terms of Use">
      <p>By using this website you agree to these terms. Content is provided for general information and may be updated without notice.</p>
      <h2>No professional advice</h2>
      <p>Nothing on this website constitutes legal, financial or professional advice. Please consult the firm directly about your specific situation.</p>
      <h2>Intellectual property</h2>
      <p>The content, design and branding on this website belong to Justice Law Bridge Legal Services LLP and may not be reproduced without permission.</p>
      <h2>Limitation</h2>
      <p>The firm is not liable for any action taken solely on the basis of website content.</p>
    </LegalPage>
  ),
});
