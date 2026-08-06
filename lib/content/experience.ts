// Education, expertise, and work/research history.
// Source of record: docs/Leo_Nguyen_Resume.pdf (latest revision).

export const expertise = [
  "Agentic Systems",
  "Retrieval-Augmented Generation",
  "Machine Learning",
  "AI Engineering",
  "MLOps on AWS",
  "Federated & Distributed Learning",
  "Automated Reasoning",
  "Computer Vision",
  "Cryptography",
];

export const coursework = [
  "Artificial Intelligence",
  "Agentic Systems",
  "Cryptography",
  "Deep Learning",
  "MLOps on AWS",
  "Parallel Computing",
  "Algorithms & Data Structures",
  "Data Science",
  "Event-Driven Architecture",
  "Cyber Security",
  "Cloud Computing",
];

export const education = {
  degree: "Integrated BS / MS in Computer Science",
  school: "University of Minnesota, Twin Cities",
  location: "Minneapolis, MN",
  gpa: "3.8 / 4.0",
  period: "May 2023 - May 2028",
};

export type Experience = {
  id: string;
  period: string;
  title: string;
  org: string;
  location: string;
  points: string[];
  link?: string;
};

// Newest first - order drives the v1 rail timeline and the /about list.
export const experiences: Experience[] = [
  {
    id: "canaan",
    period: "June 2026 - Present",
    title: "Agentic Systems Architect",
    org: "Canaan Group",
    location: "Richmond, Canada",
    points: [
      "Own end-to-end delivery of a conversation-extraction AI sales app (React Native, Cloudflare R2, LangGraph), cutting rep data entry from 3 hours per week to sub-30-second reviews, capturing 5x more missing customer fields in the CRM, and replacing the Salesforce workflow for $40K/year in license savings.",
      "Led the company's agentic transformation by building a semantic knowledge base RAG pipeline on AWS Bedrock that integrates with the CRM, letting AI agents propose follow-ups, surface revenue opportunities, and flag shipment and customs anomalies at 90%+ extraction accuracy while cutting missed follow-ups by 40%.",
      "Operate forward-deployed across sales, engineering, marketing, and the executive team to scope, pilot, and productize the platform as a freemium App Store SaaS projecting $75K first-year ARR.",
    ],
  },
  {
    id: "ai-researcher",
    period: "Jan 2026 - Present",
    title: "AI Researcher",
    org: "UMN Distributed Systems Lab",
    location: "Minneapolis, MN · NSF-funded ($1.1M)",
    points: [
      "Contribute to a $1.1M NSF-funded project on privacy-preserving federated learning, helping build tools that evaluate whether AI systems can protect sensitive data while staying robust under attack.",
      "Developed modular attack and defense plugins that let researchers test new privacy and security scenarios without rewriting the training system, reducing experiment setup from 3 days to 1 hour.",
    ],
  },
  {
    id: "headstarter",
    period: "June 2025 - October 2025",
    title: "AI Engineer Intern",
    org: "HeadstarterAI",
    location: "New York, NY",
    points: [
      "Built an internal AI automation platform: Python microservices and a Next.js admin console that ingest documents, run Langchain RAG over internal knowledge bases, and extract structured entities using OCR and Document AI.",
      "Implemented a verification pipeline integrated with CRM REST APIs to sync validated records, targeting 95-98% automation while maintaining 100% verified entries through human-in-the-loop review, cutting 4 hours of manual work per week.",
    ],
  },
  {
    id: "ml-rsa",
    period: "Sep 2025 - Nov 2025",
    title: "ML-RSA UROP Research",
    org: "UMN Distributed Machine Learning Systems Lab",
    location: "Minneapolis, MN · $2K UROP grant",
    link: "https://hdl.handle.net/11299/276927",
    points: [
      "Earned a $2K Undergraduate Research Award to study approaches for RSA semiprime factorization under Dr. Ali Anwar, building 4 model architectures (LSTM, Transformer, CNN-RNN, GAN) across 4 dataset scales.",
      "Engineered mathematical features using ECPP and GNFS-inspired methods, achieving 63% exact-match accuracy and a 548x improvement over random chance.",
      "Reached 91.6% accuracy within 4-bit tolerance on 210K semiprimes, the first documented application of Transformer attention to RSA factorization.",
    ],
  },
];
