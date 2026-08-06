// Education, expertise, and work/research history.
// Extracted from components/about-section.tsx so both sites render the same
// facts. Cross-checked against docs/resume.txt (April 2026 revision).

export const expertise = [
  "Machine Learning",
  "MLOps on AWS",
  "Federated & Distributed Learning",
  "Automated Reasoning",
  "Natural Language Processing",
  "Computer Vision",
  "AI Engineering",
  "Agentic Systems",
  "Cryptography",
];

export const coursework = [
  "Cryptography",
  "Federated Learning",
  "Deep Learning",
  "MLOps on AWS",
  "Algorithms & Data Structures",
  "Data Science",
  "Cyber Security",
  "Cloud Computing",
  "Event-Driven & Real-Time Architecture",
  "Parallel Computing",
  "Quantum Computing",
];

export const education = {
  degree: "Integrated BS / MS in Computer Science",
  school: "University of Minnesota, Twin Cities",
  location: "Minneapolis, MN",
  gpa: "3.8 / 4.0",
  period: "May 2023 - Expected May 2027",
};

export type Experience = {
  id: string;
  period: string;
  title: string;
  org: string;
  location: string;
  points: string[];
};

// Newest first - order drives the v1 rail timeline and the v2 /about list.
export const experiences: Experience[] = [
  {
    id: "fl-security",
    period: "Oct 2025 - Present",
    title: "Research Assistant - Federated Learning Security",
    org: "UMN Distributed Machine Learning Systems Lab",
    location: "Minneapolis, MN · NSF-funded ($1.1M, 3yr)",
    points: [
      "Joined a 3-year, $1.1M NSF-funded effort (PI: Dr. Ali Anwar) on privacy-preserving federated learning systems - extending a hook-based FL testbed with pre/post-training interception via `FL_HOOK` interfaces so attacks, defenses, and config plug-ins ship without forking the core training loop.",
      "Implemented privacy attacks and robustness defenses as drop-in plugins. Collapsed experiment turnaround from days to hours. Lets the team explore adversarial-ML configurations that were previously infeasible.",
      "Collaborate with PhD researchers across institutions on Dockerized, configuration-driven workflows, lowering environment setup cost and making cross-institution evaluation of attack and defense behavior reproducible.",
    ],
  },
  {
    id: "headway",
    period: "June 2025 - October 2025",
    title: "AI Engineer Intern",
    org: "Headway JSC",
    location: "Ho Chi Minh City, Vietnam",
    points: [
      "Built an internal AI automation platform - Python microservices plus a Next.js admin console that ingests documents, runs Langchain RAG over internal knowledge bases, and extracts structured entities with OCR / Document AI.",
      "Shipped an end-to-end human-in-the-loop verification pipeline wired into CRM REST APIs to sync validated records, targeting 95-98% automation while holding 100% verified entries and cutting roughly 4 hours of manual work per week.",
    ],
  },
  {
    id: "ml-rsa",
    period: "Sep 2025 - Nov 2025",
    title: "Undergraduate Research Award - ML for RSA Factorization",
    org: "UMN Distributed Machine Learning Systems Lab",
    location: "Minneapolis, MN · $2K UROP grant",
    points: [
      "Awarded a $2K UROP grant under Dr. Ali Anwar to study neural approaches to RSA semiprime factorization - designed and trained 4 architectures (Dual-Output LSTM, Enhanced Transformer, Hybrid CNN-RNN, Factorization GAN) across 4 dataset scales (10-20 bit semiprimes) on AWS SageMaker.",
      "Engineered 107-117-dimensional number-theoretic feature vectors using ECPP and GNFS signals - 50-63% exact-match accuracy and a 548x lift over random chance, evidence that neural networks can recover genuine number-theoretic structure rather than overfit noise.",
      "First documented Transformer application to RSA factorization with multi-head attention - 52.7% exact match and 91.6% accuracy within 4-bit tolerance on a 210K-semiprime dataset.",
      "Designed a parameter-efficient Factorization GAN (~700K params, 4.6x smaller than the Transformer at 3.26M) that trained in 2.5 hours for 500 epochs and matched 53.7% exact-match - evidence adversarial training is competitive on mathematical-constraint satisfaction tasks.",
    ],
  },
  {
    id: "headstarter",
    period: "June 2024 - October 2024",
    title: "AI Engineer Intern",
    org: "Headstarter AI",
    location: "New York, NY · Remote",
    points: [
      "Shipped 14+ end-to-end ML, AI-engineering, and full-stack applications under cohort-tight deadlines - production-grade prototypes spanning RAG, multi-agent NLP, LLM tooling, and real-time UX.",
      "Engineered a multi-agent NLP pipeline with few-shot prompting and RAG that lifted response quality by ~200% on internal eval. Placed Top 20 / 1,500 at the company hackathon.",
      "Mentored by engineers from Amazon, Google, Two Sigma, Figma, Capital One, and Stanford - translated their feedback into a personal review playbook that I now apply across research and engineering work.",
    ],
  },
];
