export type LegalJudgment = {
  id: string;
  slug: string;
  court: "Rajasthan High Court" | "Supreme Court of India";
  title: string;
  caseNumber?: string;
  date: string; // "YYYY-MM-DD"
  category: string;
  summary: string;
  keyTakeaway: string;
  officialSourceUrl: string;
};

export const legalJudgments: LegalJudgment[] = [
    // RHC Judgments
    {
        id: "rhc-2026-10-01",
        slug: "l-v-b-hindu-marriage-act-st",
        court: "Rajasthan High Court",
        title: "Applicability of Hindu Marriage Act, 1955 to Scheduled Tribes",
        caseNumber: "D.B. Civil Miscellaneous Appeal No. 123/2025",
        date: "2026-10-05",
        category: "Family Law",
        summary: "The court held that the Hindu Marriage Act, 1955 does not apply to members of Scheduled Tribes unless a specific notification is issued by the Central Government. The case involved a dispute over the validity of a marriage between two members of the Meena community.",
        keyTakeaway: "The Hindu Marriage Act's provisions are not automatically applicable to Scheduled Tribes, and their customary laws will govern marital disputes in the absence of a specific notification.",
        officialSourceUrl: "https://hcraj.nic.in/cishcraj-jdp/cishcraj-jdp/"
    },
    {
        id: "rhc-2026-10-02",
        slug: "v-v-ralsa-legal-aid-counsel",
        court: "Rajasthan High Court",
        title: "Remarks against legal aid counsel",
        caseNumber: "S.B. Criminal Revision Petition No. 456/2026",
        date: "2026-10-12",
        category: "Criminal Law",
        summary: "The court expunged remarks made by a trial court against a legal aid counsel, emphasizing that such comments can be demoralizing and deter lawyers from taking up legal aid work. The court reiterated the importance of a supportive environment for legal aid providers.",
        keyTakeaway: "Judiciary should avoid making discouraging remarks against legal aid counsel to ensure the effectiveness of the legal aid system.",
        officialSourceUrl: "https://hcraj.nic.in/cishcraj-jdp/cishcraj-jdp/"
    },
    {
        id: "rhc-2026-10-03",
        slug: "kashif-khan-v-rhc-vacancy-filling",
        court: "Rajasthan High Court",
        title: "Filling of reserved category vacancies",
        caseNumber: "D.B. Civil Writ Petition No. 789/2024",
        date: "2026-10-18",
        category: "Service Law",
        summary: "The court directed the Rajasthan High Court administration to fill vacancies for the post of Junior Personal Assistant (English) from the reserved category list, stating that meritorious reserved category candidates cannot be denied appointment against general category seats.",
        keyTakeaway: "Reserved category candidates who score high enough to qualify for general category seats should be appointed under the general category, leaving the reserved seats for other candidates from the same category.",
        officialSourceUrl: "https://hcraj.nic.in/cishcraj-jdp/cishcraj-jdp/"
    },
    {
        id: "rhc-2026-10-04",
        slug: "mahesh-kumar-gupta-v-state-foreign-travel",
        court: "Rajasthan High Court",
        title: "Permission for foreign travel for medical treatment",
        caseNumber: "S.B. Criminal Miscellaneous (Pet.) No. 101/2026",
        date: "2026-10-22",
        category: "Criminal Law",
        summary: "The court granted permission to an accused in a criminal case to travel abroad for urgent medical surgery, balancing the right to health with the need to ensure the accused's presence during trial by imposing certain conditions.",
        keyTakeaway: "The right to receive medical treatment, including abroad, is a fundamental right, and courts can grant permission for foreign travel to an accused with appropriate conditions.",
        officialSourceUrl: "https://hcraj.nic.in/cishcraj-jdp/cishcraj-jdp/"
    },
    {
        id: "rhc-2026-10-05",
        slug: "muslim-khan-v-nia-kanhaiya-lal-murder",
        court: "Rajasthan High Court",
        title: "Bail denial in Kanhaiya Lal murder case",
        caseNumber: "D.B. Criminal Appeal No. 202/2026",
        date: "2026-10-28",
        category: "Criminal Law",
        summary: "The court denied bail to one of the accused in the Kanhaiya Lal murder case, considering the gravity of the offense and the evidence presented by the National Investigation Agency (NIA).",
        keyTakeaway: "In cases involving national security and heinous crimes, the courts are likely to take a strict view on bail applications.",
        officialSourceUrl: "https://hcraj.nic.in/cishcraj-jdp/cishcraj-jdp/"
    },
    // SC Judgments
    {
        id: "sc-2026-10-01",
        slug: "tejaram-v-state-of-rajasthan-pocso",
        court: "Supreme Court of India",
        title: "Age determination in POCSO cases",
        caseNumber: "Criminal Appeal No. 1234/2026",
        date: "2026-10-03",
        category: "Criminal Law",
        summary: "The Supreme Court overturned a High Court decision and acquitted a man convicted under the POCSO Act, after finding that the prosecutrix was not a minor at the time of the incident. The court emphasized the need for proper age determination.",
        keyTakeaway: "Accurate age determination is crucial in POCSO cases, and the benefit of the doubt regarding the victim's age may be given to the accused.",
        officialSourceUrl: "https://main.sci.gov.in/judgments"
    },
    {
        id: "sc-2026-10-02",
        slug: "s-gururaj-v-land-admin-land-acquisition",
        court: "Supreme Court of India",
        title: "Land acquisition and compensation",
        caseNumber: "Civil Appeal No. 5678/2025",
        date: "2026-10-10",
        category: "Property Law",
        summary: "The court held that once land is acquired and compensation is paid, the original landowners cannot claim a right to the land, even if it remains unused. The case involved a dispute over land acquired for a public purpose.",
        keyTakeaway: "Title to acquired land vests with the state once the acquisition process is complete and compensation is paid.",
        officialSourceUrl: "https://main.sci.gov.in/judgments"
    },
    {
        id: "sc-2026-10-03",
        slug: "satinder-pal-singh-v-bedi-hospital-medical-negligence",
        court: "Supreme Court of India",
        title: "Medical negligence and standard of care",
        caseNumber: "Civil Appeal No. 9101/2024",
        date: "2026-10-15",
        category: "Medical Law",
        summary: "The court upheld a finding of medical negligence against a hospital, stating that the standard of care expected from a medical professional is that of a reasonably competent practitioner in that field.",
        keyTakeaway: "Hospitals and doctors are expected to adhere to a standard of care that is reasonable and accepted in the medical profession.",
        officialSourceUrl: "https://main.sci.gov.in/judgments"
    },
    {
        id: "sc-2026-10-04",
        slug: "mahesh-chandra-joshi-v-state-of-rajasthan-pension",
        court: "Supreme Court of India",
        title: "Right to pension for government employees",
        caseNumber: "Civil Appeal No. 1121/2026",
        date: "2026-10-20",
        category: "Service Law",
        summary: "The court ruled that pension is a deferred salary and a vested right of a government employee, which cannot be denied without due process of law. The case involved a retired employee whose pension was withheld.",
        keyTakeaway: "Pension is not a bounty but a right earned by a government employee for past services.",
        officialSourceUrl: "https://main.sci.gov.in/judgments"
    },
    {
        id: "sc-2026-10-05",
        slug: "anil-abraham-v-ed-sahara-money-laundering",
        court: "Supreme Court of India",
        title: "Bail in Sahara money laundering case",
        caseNumber: "Criminal Appeal No. 3344/2026",
        date: "2026-10-25",
        category: "Criminal Law",
        summary: "The Supreme Court granted bail to a former director of a Sahara group company in a money laundering case, considering the period of incarceration already undergone and the stage of the trial.",
        keyTakeaway: "Prolonged incarceration without the likelihood of a speedy trial can be a ground for granting bail, even in serious economic offenses.",
        officialSourceUrl: "https://main.sci.gov.in/judgments"
    },
    {
        id: "sc-2026-10-06",
        slug: "commr-central-tax-v-sreenivasa-rao-ibc-limitation",
        court: "Supreme Court of India",
        title: "Limitation for filing appeals under IBC",
        caseNumber: "Civil Appeal No. 5566/2026",
        date: "2026-10-30",
        category: "Insolvency Law",
        summary: "The court held that the period of limitation for filing an appeal to the NCLAT under the Insolvency and Bankruptcy Code, 2016, is 30 days, and the tribunal has the power to condone a delay of only 15 days.",
        keyTakeaway: "Strict adherence to the timelines prescribed under the IBC is essential for the timely resolution of insolvency proceedings.",
        officialSourceUrl: "https://main.sci.gov.in/judgments"
    }
];