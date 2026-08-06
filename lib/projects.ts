export type Project = {
  id: string;
  title: string;
  period: string;
  tag: string;
  blurb: string;
  highlights: string[];
  /** Deployed, reachable app. Verified live before being listed here. */
  demo?: string;
  /** Public source. */
  repo?: string;
  tech: string[];
  image?: string;
  imageAlt?: string;
};

export const projects: Project[] = [
  // Hidden for now, not deleted. Uncomment to bring it back and it will
  // reappear on /projects automatically; to feature it on the home page
  // again, add "d7-agent-safety" back to FEATURED in app/(v2)/page.tsx.
  // {
  //   id: "d7-agent-safety",
  //   title: "D7 Agent Safety Verification Platform",
  //   period: "April 2026 - Present",
  //   tag: "Verification",
  //   blurb:
  //     "A safety gate for teams deploying AI agents: turns fuzzy policy docs into machine-checkable rules so unsafe actions get blocked, with proof, before the agent ever runs them.",
  //   highlights: [
  //     "30+ REST endpoints for rulesets, claims, action schemas, and verification workflows",
  //     "Z3 + deterministic SMT-LIB2 encoder; sub-50ms eval, proofs/counterexamples for high-risk requests",
  //     "Async prover workers + PostgreSQL job queues; 68+ tests across API, encoding, solver, worker layers",
  //   ],
  //   tech: ["Python", "FastAPI", "Z3", "PostgreSQL", "Docker", "Pydantic"],
  //   image:
  //     "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=900&q=80&auto=format&fit=crop",
  //   imageAlt: "Code on dark monitors with crimson backlight",
  // },
  {
    id: "zk-fl-medical",
    title: "Zero-Knowledge Federated Learning for Medical Imaging",
    period: "December 2025 – Present",
    tag: "Research",
    blurb:
      "Lets hospitals collaboratively train medical-imaging models without trusting the aggregating server: every server-side update arrives with a proof any participating site can verify in milliseconds.",
    highlights: [
      "30KB aggregation proofs with 0.3ms verification — catches weighted-update tampering",
      "Head-only proving on EfficientNet-B0: 5h → 59s proof generation (97% reduction); 200KB proofs, 4.6s verify",
      "Reproducible Flower + Docker + Kubernetes + GCP stack; cut 112s setup overhead via artifact caching",
    ],
    tech: ["PyTorch", "Flower", "Rust", "EZKL", "Nova Folding", "GCP"],
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&q=80&auto=format&fit=crop",
    imageAlt: "Stethoscope resting on a laptop",
  },
  {
    id: "l33t-kv",
    title: "L33t KV Store",
    period: "2025 - 2026",
    tag: "Systems",
    blurb:
      "A from-scratch study answering how fast a key-value store can actually go on commodity hardware once protocol and framework overhead are stripped away, browseable end-to-end so the answer is reproducible, not just claimed.",
    highlights: [
      "Engineered a custom binary-protocol KV store in 400 lines of C that sustains 36,000 ops/sec at 80 microsec latency on a 3-node LAN, beating Redis 6.0 throughput by 2%.",
      "Drove server throughput locally from 25,000 to 185,000 ops/sec across 4 implementations spanning Python asyncio, uvloop, C with edge-triggered epoll, and C with io_uring.",
      "Deployed the project on Vercel as a Next.js app that runs the C protocol parser in-browser via WebAssembly.",
    ],
    demo: "https://l33t-kv.vercel.app",
    repo: "https://github.com/AureliusNguyen/L33t-KV",
    tech: ["C", "WebAssembly", "Next.js"],
    image: "/images/l33t-kv.png",
    imageAlt: "L33t KV Store project screenshot",
  },
  {
    id: "brain-tumor",
    title: "NeuroScan",
    period: "Oct 2024 - Nov 2024",
    tag: "ML",
    blurb:
      "A clinical decision-support tool for radiologists doing brain-MRI triage: shows the predicted diagnosis alongside saliency maps and an LLM rationale, so a 99%-accurate model can't sneak past audit on hidden bias.",
    highlights: [
      "Engineered a production deep-learning brain tumor classifier in TensorFlow that hit >99% test accuracy across many CNN architectures (Xception, ResNet50V2) on 7,023 MRI scans spanning 4 diagnostic classes.",
      "Shipped a live app with Next.js and Vercel against a Dockerized FastAPI inference service on HuggingFace Spaces, delivering <3 seconds end-to-end predictions to users across 3 switchable models per request.",
      "Built an explainability layer pairing TensorFlow GradientTape saliency maps with Gemini 2.5 multimodal LLM analysis to catch bias in 99%-accurate models that would have failed clinical audit despite high accuracy.",
    ],
    demo: "https://neuroscan-atlas.vercel.app/",
    repo: "https://github.com/AureliusNguyen/Neuroscan",
    tech: ["TensorFlow", "Gemini", "Next.js"],
    image: "/images/neuroscan.png",
    imageAlt: "NeuroScan project screenshot",
  },
  {
    id: "violet",
    title: "Violet — Discord Clone",
    period: "Nov 2024 – Dec 2024",
    tag: "Full-Stack",
    blurb:
      "A community platform for groups who want Discord-style real-time voice and chat with AI content moderation on by default, not bolted on after the first incident.",
    highlights: [
      "Next.js SSR + Shadcn UI for a responsive, accessible client; WebSocket transport tuned for high concurrent loads with seamless message + voice/video sync across sessions.",
      "Clerk-backed multi-factor auth and Convex for real-time data + chat synchronization, eliminating manual cache invalidation and reducing race conditions in shared rooms.",
      "Llama-guard via Groq runs inline chat moderation, flagging policy-violating messages before they reach other users — a privacy-first content layer at the edge.",
    ],
    repo: "https://github.com/AureliusNguyen/Violet",
    tech: ["Next.js", "WebSocket", "Clerk", "Convex", "Shadcn", "Groq"],
    image: "/images/discord-cover.svg",
    imageAlt: "Discord logo on a blurple gradient",
  },
  {
    id: "nanao-chan",
    title: "Nanao-chan AI Chatbot",
    period: "Dec 2024 – Jan 2025",
    tag: "RAG",
    blurb:
      "For anyone who needs an answer from a webpage without reading it: drop in any URL, ask in plain English, get a cached RAG-backed reply in under 3 seconds.",
    highlights: [
      "Puppeteer-driven dynamic scraping + Cheerio HTML parsing for any external site; Groq API powers content analysis with Axios handling clean inter-service communication.",
      "Upstash Redis caches scrape results and a RAG pipeline summarizes long pages — ~50% engagement lift and ~3s end-to-end response time on the average page.",
      "Next.js + Vercel SSR deployment for fast cold starts, scalable rollouts, and zero-config previews on every PR.",
    ],
    demo: "https://nanao-chan.vercel.app/",
    tech: ["Next.js", "Redis", "Upstash", "Groq API", "Puppeteer", "Cheerio"],
    image:
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=900&q=80&auto=format&fit=crop",
    imageAlt: "Stylized AI chatbot interface",
  },
  {
    id: "churn",
    title: "The Churn Report",
    period: "Sep 2024 - Oct 2024",
    tag: "ML",
    blurb:
      "Gives bank relationship managers a churn forecast they can act on: per-customer risk scores translated into plain-English explanations and ready-to-send retention emails, no ML knowledge required.",
    highlights: [
      "Engineered a Python churn-prediction engine ensembling 8 XGBoost/sklearn classifiers across classical and SMOTE-rebalanced stacks on a 10K-customer retail-banking dataset.",
      "Shipped a Next.js app on Vercel against a Dockerized FastAPI service on Hugging Face Spaces, delivering sub-second predictions and a live what-if explorer that re-runs the ensemble and SHAP on every slider change.",
      "Paired SHAP TreeExplainer with Groq Llama 4 Scout to translate probabilities into 3-sentence risk explanations and retention emails for relationship managers with no ML expertise.",
    ],
    demo: "https://the-churn-report.vercel.app",
    repo: "https://github.com/AureliusNguyen/The-Churn-Report",
    tech: ["XGBoost", "Scikit-learn", "Llama", "Next.js"],
    image: "/images/the-churn-report.png",
    imageAlt: "The Churn Report project screenshot",
  },
  {
    id: "flashcards",
    title: "Flashcard Generator",
    period: "May 2024 – Jun 2024",
    tag: "AI",
    blurb:
      "Lets students skip the busywork of building flashcards: paste any text (a chapter, lecture notes, an article) and get a study deck back in seconds, synced across devices so today's prep is on tomorrow's phone.",
    highlights: [
      "Groq Llama-3.2 generates question/answer pairs from arbitrary text in <3s — handles textbook excerpts, lecture notes, and free-form prompts without prompt brittleness.",
      "Supabase auth + persistence for per-user decks, study history, and cross-device sync — no custom backend needed, RLS enforces per-user data isolation.",
      "Next.js + Vercel deployment with continuous delivery and Clerk-managed sign-in flows; minimal downtime through preview deployments per PR.",
    ],
    repo: "https://github.com/AureliusNguyen/Flashcard",
    tech: ["Next.js", "Groq", "Supabase", "Clerk", "Langchain", "OpenAI"],
    image: "/images/flashcards-cover.svg",
    imageAlt: "Stack of paper flashcards with Q and A",
  },
];

// Cycling rank+suit pair per project card. Red suits will use --primary; black suits use foreground/85.
export const cardGlyphs: { rank: string; suit: "♠" | "♥" | "♦" | "♣" }[] = [
  { rank: "A", suit: "♠" },
  { rank: "K", suit: "♥" },
  { rank: "Q", suit: "♦" },
  { rank: "J", suit: "♣" },
  { rank: "10", suit: "♠" },
  { rank: "9", suit: "♥" },
  { rank: "8", suit: "♦" },
  { rank: "7", suit: "♣" },
  { rank: "6", suit: "♠" },
];
