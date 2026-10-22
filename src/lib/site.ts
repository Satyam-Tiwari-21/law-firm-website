import {
  Scale, Handshake, Calculator, Rocket, Building2, Users, Briefcase, Store,
  Factory, Landmark, GraduationCap, type LucideIcon,
} from "lucide-react";

export const firm = {
  name: "Justice Law Bridge Legal Services LLP",
  short: "Justice Law Bridge",
  tagline: "Bridging People and Justice.",
  phone: "+91 82332 24091",
  phoneHref: "tel:+918233224091",
  whatsapp: "https://wa.me/918233224091",
  email: "Justicelawllp@gmail.com",
  location: "Sawai Madhopur, Rajasthan, India",
};

export type Service = {
  slug: string;
  num: string;
  title: string;
  icon: LucideIcon;
  summary: string;
  items: string[];
  beneficiaries: string;
  situations: string[];
  scope: string;
};

export const services: Service[] = [
  {
    slug: "legal-services", num: "01", title: "Legal Services & Advocacy", icon: Scale,
    summary: "Structured legal assistance, documentation and research, with advocacy through appropriately authorised professionals.",
    items: [
      "Legal assistance and process management",
      "Documentation and contract drafting assistance",
      "Legal research and compliance support",
      "Advocacy and court-related services, subject to the qualifications and engagement of authorised legal professionals",
    ],
    beneficiaries: "Individuals, families, businesses and institutions that need clear legal guidance and well-prepared documentation.",
    situations: ["Reviewing or drafting an agreement", "Understanding a legal notice or process", "Preparing documents for a legal matter", "Seeking representation in a court-related matter"],
    scope: "Assistance is provided according to the facts of each matter and the engagement terms agreed. Court representation is undertaken only by qualified advocates.",
  },
  {
    slug: "dispute-resolution", num: "02", title: "Dispute Resolution", icon: Handshake,
    summary: "Mediation, arbitration and conciliation support that helps parties pursue resolution with less friction.",
    items: [
      "Mediation support",
      "Arbitration and conciliation assistance",
      "Alternative dispute resolution coordination",
      "Online dispute resolution initiatives, where available",
    ],
    beneficiaries: "Parties in commercial, contractual, family or community disagreements who prefer a structured, less adversarial route.",
    situations: ["A contract disagreement between business partners", "Payment or supply disputes", "Exploring mediation before litigation", "Coordinating an arbitration process"],
    scope: "We help coordinate and support ADR processes. Outcomes depend on the parties and the process; no resolution is guaranteed.",
  },
  {
    slug: "financial-support", num: "03", title: "Financial & Office Support", icon: Calculator,
    summary: "Accounting, tax and filing support that keeps records accurate and obligations on schedule.",
    items: [
      "Accounting and bookkeeping",
      "Audit support",
      "GST and income tax consultancy",
      "Payroll assistance",
      "Professional documentation and filing support",
    ],
    beneficiaries: "Salaried individuals, professionals, shops, MSMEs and growing companies.",
    situations: ["Setting up or cleaning up books of account", "GST registration or return questions", "Preparing for an audit", "Managing monthly payroll"],
    scope: "Support is delivered through qualified professionals where the law requires, and within the scope of the agreed engagement.",
  },
  {
    slug: "startup-services", num: "04", title: "Startup & IT Business Services", icon: Rocket,
    summary: "Registration, compliance and digital presence support for founders turning ideas into operating businesses.",
    items: [
      "Startup and business registration assistance",
      "Compliance coordination",
      "Grant and funding application assistance",
      "Website and digital presence services",
      "Business documentation and operational support",
    ],
    beneficiaries: "First-time founders, entrepreneurs, startups and small enterprises building their foundations.",
    situations: ["Choosing and registering a business structure", "Preparing a grant or scheme application", "Building a professional website", "Organising founder and operational documents"],
    scope: "We assist with preparation and coordination. Registrations, grants and funding remain subject to the decisions of the relevant authorities and funders.",
  },
  {
    slug: "corporate-consulting", num: "05", title: "Corporate Consulting & Awareness", icon: Building2,
    summary: "Management advisory, institutional consulting and legal-awareness programmes for organisations and communities.",
    items: [
      "Management and corporate advisory",
      "Institutional and business consultancy",
      "Legal awareness sessions",
      "Workshops, seminars and educational initiatives",
      "Professional support for eligible individuals, businesses and institutions",
    ],
    beneficiaries: "Companies, institutions, government offices, schools, colleges and community groups.",
    situations: ["Reviewing internal processes and policies", "Hosting a legal awareness session", "Organising a workshop for staff or students", "Seeking structured advisory support"],
    scope: "Advisory and educational engagements are tailored to each organisation's needs and agreed in advance.",
  },
];

export type Segment = { title: string; icon: LucideIcon; text: string; needs: string[] };

export const segments: Segment[] = [
  { title: "Individuals & Families", icon: Users, text: "Guidance on documentation, disputes, tax and everyday legal questions.", needs: ["Agreements and documentation", "Mediation of personal disputes", "Income tax filing", "Legal awareness"] },
  { title: "Startups & Entrepreneurs", icon: Rocket, text: "Foundational registration, compliance and digital presence for new ventures.", needs: ["Business registration", "Grant and funding applications", "Website services", "Founder documentation"] },
  { title: "MSMEs & Small Businesses", icon: Store, text: "Bookkeeping, GST, payroll and contracts that keep operations steady.", needs: ["Accounting and GST", "Payroll assistance", "Vendor and client contracts", "Payment dispute resolution"] },
  { title: "Firms & Companies", icon: Factory, text: "Corporate advisory, compliance coordination and audit support.", needs: ["Management advisory", "Audit support", "Contract review", "Arbitration assistance"] },
  { title: "Institutions & Government Offices", icon: Landmark, text: "Institutional consultancy and structured awareness programmes.", needs: ["Institutional consultancy", "Documentation support", "Staff legal-awareness sessions", "Process advisory"] },
  { title: "Students & Education", icon: GraduationCap, text: "Seminars, workshops and legal literacy for learning communities.", needs: ["Legal awareness seminars", "Career and civic workshops", "Educational initiatives", "Institution partnerships"] },
];

export const leaders = [
  {
    name: "Vikash Barar",
    role: "Director",
    initials: "VB",
    bio: "Practising Advocate with LL.B., LL.M., and PhD degrees in Law. Leads the firm's legal practice, dispute resolution, and legal awareness work from Sawai Madhopur, Rajasthan.",
  },
  {
    name: "Bhagwat Ram Barar",
    role: "Director",
    initials: "BB",
    bio: "Director of Justice Law Bridge Legal Services LLP.",
  },
  {
    name: "Co-Counsel",
    role: "Co-Counsel / Advocate",
    initials: "CC",
    bio: "Experienced advocate providing support across a range of legal matters. [Placeholder for short professional biography].",
    qualifications: ["LL.B.", "[Additional Qualification]"],
    practiceAreas: ["General Civil & Criminal", "[Practice Area 2]"],
    enrolment: "[Bar Council Enrolment Number (Placeholder)]",
    experience: "[Years of Experience/Key Experience (Placeholder)]",
    education: "[University/Institution (Placeholder)]",
  },
];

export type AdvocateProfile = {
  slug: string;
  name: string;
  role: string;
  initials: string;
  image?: string;
  shortBio: string;
  qualifications?: string[];
  practiceAreas?: string[];
  experience?: string;
};

export const advocates: AdvocateProfile[] = [
  {
    slug: "associate-advocate-1",
    name: "Associate Advocate 1",
    role: "Associate Advocate",
    initials: "A1",
    shortBio: "Dedicated associate advocate with a focus on [specialty area].",
    qualifications: ["LL.B."],
    practiceAreas: ["[Practice Area 1]", "[Practice Area 2]"],
  },
  {
    slug: "associate-advocate-2",
    name: "Associate Advocate 2",
    role: "Associate Advocate",
    initials: "A2",
    shortBio: "A skilled professional contributing to various legal cases and client matters.",
    qualifications: ["LL.B.", "B.A."],
    practiceAreas: ["[Practice Area 3]"],
  },
];

export const vision = "To become a trusted one-stop legal and business support firm that makes justice and professional services accessible and affordable for all.";
export const mission = "To provide qualified, ethical legal assistance; promote legal aid and awareness for underserved communities; explore technology-enabled dispute resolution; and deliver integrated support for startups, MSMEs, and institutions.";

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Our Services" },
  { to: "/industries", label: "Industries & Clients" },
  { to: "/leadership", label: "Leadership" },
  { to: "/insights", label: "Insights" },
  { to: "/contact", label: "Contact" },
] as const;

export { Briefcase };

export function seo(title: string, description: string) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}