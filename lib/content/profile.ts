// Single source of truth for identity + contact details.
// Consumed by both the v1 site (/v1) and the current site.

export const profile = {
  name: "Leo Nguyen",
  // Kept for search: recruiters and academic records use the full name.
  legalName: "Aurelius (Leo) Nguyen",
  role: "AI/ML Engineer",
  location: "Minneapolis, MN",
  email: "nguy5272@umn.edu",
  site: "https://www.madarame.dev",

  // One sentence a recruiter should be able to read in three seconds.
  positioning:
    "AI/ML engineer building agentic systems that are verifiable, secure, and governable, from production RAG agents to research on formal verification and privacy-preserving machine learning.",

  // Longer form, used on /about.
  summary: [
    "I build agentic systems. At Canaan Group I own the delivery of an AI sales platform where agents extract structured data from conversations, propose follow-ups, and flag anomalies against a semantic knowledge base.",
    "The other half of my work is governance: making those systems verifiable, secure, and auditable rather than trusted on faith. That means privacy-preserving federated learning, zero-knowledge proofs over model updates, and formal verification of agent actions before they run.",
    "Shipping agents is the easy part. Proving one did not leak, drift, or act outside policy is the part that decides whether it belongs anywhere serious.",
    "I am an Integrated BS/MS Computer Science student at the University of Minnesota, and I spend most weekends on CTF competitions, mostly reverse engineering and cryptography.",
  ],

  availability:
    "Open to AI/ML engineering roles and research collaborations. The fastest way to reach me is email.",

  lastUpdated: "August 2026",
} as const;

export type SocialLink = {
  name: string;
  href: string;
  handle: string;
};

export const socials: SocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/AureliusNguyen",
    handle: "AureliusNguyen",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/aurelius-nguyen",
    handle: "aurelius-nguyen",
  },
  {
    name: "Email",
    href: "mailto:nguy5272@umn.edu",
    handle: "nguy5272@umn.edu",
  },
];

// Path to the resume PDF in /public. The CTA only renders when the file is
// actually there, so this stays inert until one is added.
export const RESUME_PATH = "/resume.pdf";
