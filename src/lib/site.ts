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
  situations: string;
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
    beneficiaries: "Individuals, families, businesses and organizations seeking assistance with legal disputes, court-related matters, claims or alternative dispute resolution.",
    situations: "Civil or criminal proceedings, family and property disputes, banking and consumer matters, corporate disputes, fraud-related concerns and compensation claims.",
    scope: "Legal notices, petitions, appeals, documentation and dispute-resolution assistance, including mediation, conciliation and arbitration, with court representation through duly authorized advocates where applicable.",
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
    beneficiaries: "Individuals and communities seeking access to legal information, legal-aid guidance, rights awareness or support in navigating public and administrative processes.",
    situations: "Concerns involving legal rights, police or administrative complaints, RTI applications, labour matters, social-security schemes and cyber-safety awareness.",
    scope: "Guidance on available legal-aid mechanisms, rights and government processes, together with legal-awareness initiatives and assistance in connecting people with suitable advocates or legal-aid organizations.",
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
    beneficiaries: "Companies, LLPs, firms, institutions, government departments, trusts, societies and other organizations requiring structured documentation or administrative support.",
    situations: "Contract and compliance requirements, government applications, tenders, HR documentation, banking processes, record management and preparation for professional audits or reviews.",
    scope: "Assistance with contracts, MoUs, compliance records, applications, tenders, HR systems, internal controls and banking documentation, with reserved professional services coordinated through appropriately qualified professionals.",
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
    beneficiaries: "Entrepreneurs, startups, MSMEs, companies, NGOs, trusts, societies and organizations looking to establish, formalize, strengthen or digitally expand their operations.",
    situations: "Business formation, registrations, government schemes, financing documentation, branding, website requirements, digital transformation or operational improvement.",
    scope: "Business and entity formation assistance, planning, registrations, government-scheme guidance, financing documentation, digital presence, branding, intellectual-property coordination and business-management support.",
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
    beneficiaries: "Individuals, businesses and organizations seeking convenient access to legal consultation, digital assistance, government portals or online professional services.",
    situations: "Remote consultations, online documentation, e-filing assistance, cyber-fraud reporting, government digital services, legal research or case-information requirements.",
    scope: "Online consultations, drafting assistance, e-filing guidance, digital document management, legal research, e-governance assistance, online awareness programs and selected consultancy services through an integrated digital platform.",
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
    image: "/vikash-brar.jpg",
    bio: "Vikash Brar is a practicing advocate and the Director of Justice Law Bridge Legal Services LLP. With a strong academic background—including BCA, MCA, LL.B., and LL.M. degrees, and currently pursuing a Ph.D. in Law—he brings a deep, multifaceted understanding to the legal field. His practice experience spans the Rajasthan High Court, Jaipur Bench, and the Sessions Court in Sawai Madhopur, where he focuses on effective dispute resolution and robust client representation.",
  },
  {
    name: "Bhagwat Ram Barar",
    role: "Director",
    initials: "BB",
    image: "/bhagwat.png",
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
    slug: "preeti-meena",
    name: "Preeti Meena",
    role: "Co-Counsel / Advocate",
    initials: "PM",
    image: "/preeti-meena.jpg",
    shortBio: "Practicing advocate with professional experience in family disputes, matrimonial matters and legal counselling.",
    biography: "Preeti Meena is a practicing advocate with professional experience in the District and Sessions Court, Sawai Madhopur. Her practice includes family disputes, matrimonial matters and legal counselling, with an emphasis on understanding clients' concerns and providing empathetic and professional guidance. With an academic background in Law, Human Rights and International Law, she brings legal knowledge, client understanding and a strong sense of professional responsibility to her practice.",
    qualifications: [
      "LL.M. — University of Rajasthan, 2010",
      "LL.B. — University of Rajasthan, 2008",
      "Graduation — University of Rajasthan, 2005",
      "Master's Degree in Human Rights & International Law",
      "Diploma in Travel & Tourism Management — RTDC",
      "RS-CIT Computer Diploma — Vardhman Mahaveer Open University"
    ],
    practiceAreas: [
      "Family Disputes",
      "Matrimonial Matters",
      "Legal Counselling",
      "Human Rights & International Law",
      "Client Advisory & Legal Guidance"
    ],
    experience: "Practicing in the District and Sessions Court, Sawai Madhopur, with experience in handling family disputes and matrimonial matters. Provides legal counselling and client guidance in sensitive legal matters. Known for maintaining composure under pressure, a strong sense of responsibility and ethics, and an empathetic approach toward clients. Associated with the International Human Rights Security Foundation."
  },
  {
    slug: "vikash-brar",
    name: "Vikash Brar",
    role: "Director & Advocate",
    initials: "VB",
    image: "/vikash-brar.jpg",
    shortBio: "A practicing advocate with a focus on dispute resolution and client representation, holding BCA, MCA, LL.B., and LL.M. degrees, and currently pursuing a Ph.D. in Law.",
    biography: "As a Director of the firm and a practicing advocate, Vikash Brar brings a wealth of academic knowledge and practical experience. He is actively involved in legal practice at the Rajasthan High Court, Jaipur Bench, and the Sessions Court in Sawai Madhopur. His work is centered on effective dispute resolution, dedicated client representation, and promoting legal awareness. With qualifications including BCA, MCA, LL.B., and LL.M., and a Ph.D. in Law in progress, he is committed to both the practice and the advancement of legal scholarship.",
    qualifications: ["Ph.D. in Law (Pursuing)", "LL.M.", "LL.B.", "MCA", "BCA"],
    practiceAreas: ["Dispute Resolution", "Client Representation", "Legal Awareness"],
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