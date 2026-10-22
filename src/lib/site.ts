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
  mobile: "8233224091",
  hours: "9AM to 7PM"
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
    slug: "litigation-advocacy-dispute-resolution",
    num: "01",
    title: "Litigation, Advocacy & Dispute Resolution",
    icon: Scale,
    summary: "Court representation, legal proceedings and dispute-resolution support across civil, criminal, family, property, commercial and other matters through appropriately authorized professionals.",
    items: [
      "Civil and criminal litigation",
      "Bail and anticipatory bail",
      "Family disputes, divorce, maintenance and custody",
      "Revenue, land, property and tenancy disputes",
      "Banking and debt recovery",
      "Cheque-bounce / NI Act matters",
      "Consumer disputes",
      "GST and income-tax dispute assistance",
      "Company disputes and NCLT matters",
      "Corporate disputes",
      "Insurance claims",
      "Motor accident claims",
      "Cybercrime and online fraud",
      "Financial fraud matters",
      "Legal notices, replies, petitions and appeals",
      "Mediation, conciliation and arbitration",
    ],
    beneficiaries: "",
    situations: [],
    scope: "Court representation is undertaken by a duly enrolled and authorized advocate in the relevant matter.",
  },
  {
    slug: "legal-aid-social-justice-legal-awareness",
    num: "02",
    title: "Legal Aid, Social Justice & Legal Awareness",
    icon: Handshake,
    summary: "Legal information, assistance and awareness initiatives focused on access to justice, rights, public awareness and support for individuals and vulnerable communities.",
    items: [
      "Guidance for eligible persons seeking free legal aid",
      "DLSA and SLSA information and assistance",
      "Women's rights awareness",
      "Children's rights awareness",
      "Senior citizen rights",
      "Workers' rights",
      "Legal awareness camps",
      "Constitutional and fundamental-rights awareness",
      "Police complaints",
      "Administrative complaints",
      "RTI application guidance",
      "Public-interest representations",
      "Government complaint portal guidance",
      "Labour and employment rights",
      "Social-security scheme information",
      "NGO and community legal-awareness programs",
      "Cyber-safety awareness",
      "Digital-fraud awareness",
      "Consumer-rights awareness",
      "Connecting people with suitable advocates and legal-aid organizations",
    ],
    beneficiaries: "",
    situations: [],
    scope: "",
  },
  {
    slug: "corporate-government-professional-support",
    num: "03",
    title: "Corporate, Government & Professional Support",
    icon: Building2,
    summary: "Documentation, compliance, administrative and professional support for companies, institutions, government departments and other organizations.",
    items: [
      "Legal documents and contracts",
      "MoUs and office drafts",
      "Contract management",
      "Document verification coordination",
      "Record management",
      "Compliance assistance",
      "Company / LLP / firm compliance",
      "Trust and society compliance",
      "Government application support",
      "Private-office application support",
      "Tender and e-tender documentation",
      "Government procurement support",
      "Bookkeeping and accounting-record assistance",
      "GST, income tax, TDS and payroll assistance",
      "Tax-return process assistance",
      "Internal controls",
      "Compliance records",
      "Audit preparation",
      "HR documentation",
      "Appointment letters",
      "Service-condition documentation",
      "Policies and SOPs",
      "Grievance-redressal processes",
      "Banking documentation",
      "Loan-application support",
    ],
    beneficiaries: "",
    situations: [],
    scope: "Statutory audits, certified accounting or other reserved professional work is carried out through qualified and authorized CAs, CSs or other professionals.",
  },
  {
    slug: "business-startup-ngo-digital-solutions",
    num: "04",
    title: "Business, Startup, NGO & Digital Solutions",
    icon: Rocket,
    summary: "Business formation, startup support, NGO assistance and digital solutions designed to help organizations establish, operate and grow.",
    items: [
      "Company formation",
      "LLP formation",
      "Partnership-firm formation",
      "NGO registration",
      "Trust registration",
      "Society registration",
      "MSME / Udyam registration",
      "Business-licence assistance",
      "Startup business plans",
      "Project reports",
      "Business models",
      "Government schemes",
      "Grants and subsidies guidance",
      "Eligibility guidance",
      "Bank-loan documentation",
      "Business-loan applications",
      "Government certificates and permissions",
      "Website development",
      "Logo and branding",
      "Digital marketing",
      "Online presence",
      "IT support",
      "Online forms",
      "Digital records",
      "Business-portal solutions",
      "Business contracts",
      "Business agreements",
      "Franchise documentation",
      "Partnership documents",
      "Trademark registration coordination",
      "Copyright registration coordination",
      "Intellectual-property-rights registration coordination",
      "Business management",
      "Market research",
      "Project management",
      "Operational improvement",
      "Institutional/project support for education, healthcare and social-sector ventures",
    ],
    beneficiaries: "",
    situations: [],
    scope: "",
  },
  {
    slug: "online-legal-services-e-governance-consultancy",
    num: "05",
    title: "Online Legal Services, E-Governance & Consultancy",
    icon: Calculator,
    summary: "Accessible online legal assistance, consultation, digital documentation and e-governance support through an integrated digital service platform.",
    items: [
      "Online service requests",
      "Online appointments",
      "Online legal consultation",
      "Video consultation with advocates",
      "E-filing assistance where permitted",
      "Online complaint guidance",
      "Police complaint guidance",
      "Cyber-fraud reporting guidance",
      "E-FIR / online FIR guidance subject to applicable local rules",
      "Online legal drafting",
      "Legal notices and applications",
      "Contract drafting support",
      "Online mediation",
      "Online conciliation",
      "Case-status assistance",
      "Hearing-date assistance",
      "Digital document management",
      "Legal research",
      "Case-law search",
      "Legal-information services",
      "Higher-education consultancy",
      "Legal education guidance",
      "PhD admission guidance",
      "Academic documentation",
      "Online legal-awareness programs",
      "Webinars",
      "Training",
      "E-governance portal assistance",
      "Government digital-service assistance",
      "Digital record management",
    ],
    beneficiaries: "",
    situations: [],
    scope: "",
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
];

export type AdvocateProfile = {
  slug: string;
  name: string;
  role: string;
  initials: string;
  image?: string;
  shortBio: string;
  biography: string;
  qualifications?: string[];
  practiceAreas?: string[];
  experience?: string;
  enrolment?: string;
  education?: string;
};

export const advocates: AdvocateProfile[] = [
  {
    slug: "co-counsel",
    name: "Co-Counsel",
    role: "Co-Counsel / Advocate",
    initials: "CC",
    shortBio: "Experienced advocate providing support across a range of legal matters.",
    biography: "[Full, detailed professional biography for the Co-Counsel to be provided here. This section can describe their professional journey, key expertise, and approach to legal practice.]",
    qualifications: ["LL.B.", "[Additional Qualification]"],
    practiceAreas: ["General Civil & Criminal", "[Practice Area 2]"],
    enrolment: "[Bar Council Enrolment Number (Placeholder)]",
    experience: "[Years of Experience/Key Experience (Placeholder)]",
    education: "[University/Institution (Placeholder)]",
  },
  {
    slug: "associate-advocate-1",
    name: "Associate Advocate 1",
    role: "Associate Advocate",
    initials: "A1",
    shortBio: "Dedicated associate advocate with a focus on [specialty area].",
    biography: "[Full, detailed professional biography for Associate Advocate 1 to be provided here.]",
    qualifications: ["LL.B."],
    practiceAreas: ["[Practice Area 1]", "[Practice Area 2]"],
  },
  {
    slug: "associate-advocate-2",
    name: "Associate Advocate 2",
    role: "Associate Advocate",
    initials: "A2",
    shortBio: "A skilled professional contributing to various legal cases and client matters.",
    biography: "[Full, detailed professional biography for Associate Advocate 2 to be provided here.]",
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