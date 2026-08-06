// Single source of truth for identity + contact details.
// Consumed by both the v1 site (/v1) and the current site.

export const profile = {
  name: "Aurelius Nguyen",
  nickname: "Leo",
  role: "ML Engineer & AI Researcher",
  location: "Minneapolis, MN",
  email: "nguy5272@umn.edu",
  site: "https://www.madarame.dev",

  // One sentence a recruiter should be able to read in three seconds.
  positioning:
    "Integrated BS/MS Computer Science student at the University of Minnesota building machine learning systems that come with proofs, not just accuracy numbers.",

  // Longer form, used on /about.
  summary: [
    "I am an honors Master's student in Computer Science at the University of Minnesota, specializing in Machine Learning and Artificial Intelligence.",
    "My research sits where machine learning meets verification and security: federated learning testbeds, zero-knowledge proofs over model updates, and formal verification of AI agent actions.",
    "Outside research I ship full-stack AI products, and I spend most weekends on CTF competitions - mostly reverse engineering and cryptography.",
  ],

  availability:
    "Open to Summer 2027 internships in ML engineering, AI research, and security. Also up for collaborations and interesting problems.",

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

// Path to the resume PDF in /public. Rendered as a CTA on the home page.
export const RESUME_PATH = "/resume.pdf";
