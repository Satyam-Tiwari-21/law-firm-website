export type Judgment = {
  slug: string;
  court: "Rajasthan High Court" | "Supreme Court of India";
  title: string;
  caseNumber?: string;
  date: string;
  judges?: string[];
  category: string;
  summary: string;
  keyTakeaway: string;
  sourceUrl: string;
  background: string;
  legalIssue: string;
  decision: string;
};

export const judgments: Judgment[] = [
  {
    slug: "shri-gour-gupta-vs-state-of-rajasthan",
    court: "Rajasthan High Court",
    title: "Shri Gour Gupta vs. State of Rajasthan",
    caseNumber: "S.B. Civil Writ Petition No. 12345/2023",
    date: "2023-10-26",
    category: "Service Law",
    summary: "The petitioner, a government employee, challenged a disciplinary inquiry initiated against him, arguing it was based on frivolous grounds and aimed to harass him. The court examined the procedural fairness of the inquiry and the evidence presented.",
    keyTakeaway: "The High Court reinforced the principle that disciplinary proceedings must be conducted fairly and with substantive evidence, not as a tool for harassment. It quashed the inquiry, providing relief to the employee.",
    sourceUrl: "https://rhc.nic.in/rhc_judgement.zip",
    background: "The petitioner, a senior clerk, was facing a departmental inquiry over allegations of minor procedural lapses. He contended that these allegations were magnified and used to initiate a formal inquiry due to personal animosity with a superior.",
    legalIssue: "Whether a disciplinary inquiry can be quashed at the initial stage on grounds of procedural unfairness and lack of prima facie evidence.",
    decision: "The Court held that while judicial review of departmental inquiries is limited, it can intervene if the proceedings are vitiated by mala fides, procedural illegalities, or a complete lack of evidence. In this case, the Court found the inquiry to be an abuse of process and quashed it."
  },
  {
    slug: "pqr-company-vs-union-of-india",
    court: "Supreme Court of India",
    title: "PQR Company vs. Union of India",
    caseNumber: "Civil Appeal No. 5678/2023",
    date: "2023-11-02",
    category: "Taxation Law",
    summary: "A dispute over the classification of a new product under the GST regime. The company contended it fell under a lower tax slab, while the revenue department argued for a higher one. The case involved interpreting complex tax schedules and product specifications.",
    keyTakeaway: "The Supreme Court clarified the rules of interpretation for GST tariff schedules, emphasizing a harmonious construction of related entries. The decision provides significant guidance for businesses on product classification and tax liability.",
    sourceUrl: "https://main.sci.gov.in/judgments",
    background: "PQR Company developed a novel food product. The core of the dispute was whether it should be classified as a 'processed food item' (18% GST) or a 'health supplement' (5% GST). The company had obtained expert opinions to support its classification.",
    legalIssue: "The primary legal issue was the correct interpretation of HSN codes and the principles for classifying a product that could potentially fall under multiple categories in the GST tariff.",
    decision: "The Supreme Court, after analyzing the product's composition and marketing, ruled in favor of the company, classifying it as a health supplement. The judgment stressed the importance of the 'common parlance' test and the primary function of the product in such classification disputes."
  }
];