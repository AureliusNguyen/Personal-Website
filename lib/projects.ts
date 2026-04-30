export type Project = {
  id: string;
  title: string;
  period: string;
  tag: string;
  blurb: string;
  highlights: string[];
  tech: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    id: "d7-agent-safety",
    title: "D7 Agent Safety Verification Platform",
    period: "April 2026 – Present",
    tag: "Verification",
    blurb:
      "Formal verification microservice for AI agent actions — turns structured policies into solver-backed proofs.",
    highlights: [
      "30+ REST endpoints for rulesets, claims, action schemas, and verification workflows",
      "Z3 + deterministic SMT-LIB2 encoder; sub-50ms eval, proofs/counterexamples for high-risk requests",
      "Async prover workers + PostgreSQL job queues; 68+ tests across API, encoding, solver, worker layers",
    ],
    tech: ["Python", "FastAPI", "Z3", "PostgreSQL", "Docker", "Pydantic"],
  },
  {
    id: "zk-fl-medical",
    title: "Zero-Knowledge Federated Learning for Medical Imaging",
    period: "December 2025 – Present",
    tag: "Research",
    blurb:
      "Dual-proving FL pipeline that detects server tampering and produces verifiable inference for medical models.",
    highlights: [
      "30KB aggregation proofs with 0.3ms verification — catches weighted-update tampering",
      "Head-only proving on EfficientNet-B0: 5h → 59s proof generation (97% reduction); 200KB proofs, 4.6s verify",
      "Reproducible Flower + Docker + Kubernetes + GCP stack; cut 112s setup overhead via artifact caching",
    ],
    tech: ["PyTorch", "Flower", "Rust", "EZKL", "Nova Folding", "GCP"],
  },
  {
    id: "l33t-kv",
    title: "l33t Protocol KV Store",
    period: "2025 – 2026",
    tag: "Systems",
    blurb:
      "Custom 19-byte binary wire protocol + epoll C server, benchmarked at parity with Redis on a sharded 3-node LAN.",
    highlights: [
      "Designed l33t — a 19-byte binary opcode wire format (1B opcode + two 2B length-prefixed fields) — and built the server in ~400 LOC of C: edge-triggered epoll, FNV-1a open-addressed hashing, TCP_NODELAY persistent connections; 36K ops/sec at 80μs avg on a 3-way sharded 2-host LAN.",
      "Throughput parity within 2% vs Redis 6.0 across 8B–4KB values on matched 3-node sharded benchmarks (native redis-benchmark); written analysis attributing parity to LAN RTT dominating once protocol overhead is eliminated.",
      "Iterated through 4 server implementations (Python asyncio, uvloop, C epoll, C io_uring); a matched multi-threaded C benchmark client raised the loopback ceiling 25K → 185K ops/sec and exposed the LAN-bound 36K production ceiling.",
    ],
    tech: ["C", "epoll", "io_uring", "Redis", "Python", "uvloop"],
  },
  {
    id: "brain-tumor",
    title: "Brain Tumor Classification",
    period: "Oct 2024 – Nov 2024",
    tag: "ML",
    blurb:
      "End-to-end MRI classifier that pairs a 99% test-accuracy model with Gemini-Flash explanations — built so a clinician can drop in a scan and immediately see both the prediction and the rationale.",
    highlights: [
      "Transfer-learned Xception, ResNet, and EfficientNet to 99% test accuracy on a multi-class brain-tumor MRI benchmark — beating from-scratch baselines while keeping inference single-GPU and sub-second.",
      "Wired Google Gemini-Flash into the inference path to flag low-confidence predictions and generate plain-English rationales, cutting downstream review time by ~200% in internal walkthroughs.",
      "Plotly saliency overlays + Streamlit deployment make the full pipeline browser-only — no local setup, real-time inference, model attention visible per-pixel.",
    ],
    tech: ["TensorFlow", "Streamlit", "Gemini", "Plotly"],
    link: "https://github.com/AureliusNguyen/E2E-Brain-tumor-classification",
  },
  {
    id: "violet",
    title: "Violet — Discord Clone",
    period: "Nov 2024 – Dec 2024",
    tag: "Full-Stack",
    blurb:
      "Full-stack Discord clone with live voice / video, real-time messaging, MFA auth, and llama-guard moderation — built to pressure-test high-concurrency UX patterns end-to-end.",
    highlights: [
      "Next.js SSR + Shadcn UI for a responsive, accessible client; WebSocket transport tuned for high concurrent loads with seamless message + voice/video sync across sessions.",
      "Clerk-backed multi-factor auth and Convex for real-time data + chat synchronization, eliminating manual cache invalidation and reducing race conditions in shared rooms.",
      "Llama-guard via Groq runs inline chat moderation, flagging policy-violating messages before they reach other users — a privacy-first content layer at the edge.",
    ],
    tech: ["Next.js", "WebSocket", "Clerk", "Convex", "Shadcn", "Groq"],
    link: "https://github.com/AureliusNguyen/Violet",
  },
  {
    id: "nanao-chan",
    title: "Nanao-chan AI Chatbot",
    period: "Dec 2024 – Jan 2025",
    tag: "RAG",
    blurb:
      "Web-aware AI chatbot that answers questions about any URL — combines Puppeteer scraping, RAG summarization, and Redis caching to keep end-to-end responses under 3 seconds.",
    highlights: [
      "Puppeteer-driven dynamic scraping + Cheerio HTML parsing for any external site; Groq API powers content analysis with Axios handling clean inter-service communication.",
      "Upstash Redis caches scrape results and a RAG pipeline summarizes long pages — ~50% engagement lift and ~3s end-to-end response time on the average page.",
      "Next.js + Vercel SSR deployment for fast cold starts, scalable rollouts, and zero-config previews on every PR.",
    ],
    tech: ["Next.js", "Redis", "Upstash", "Groq API", "Puppeteer", "Cheerio"],
    link: "https://nanao-chan.vercel.app/",
  },
  {
    id: "churn",
    title: "Customer Churn Prediction",
    period: "Sep 2024 – Oct 2024",
    tag: "ML",
    blurb:
      "Production-grade churn predictor that lifts model accuracy 15% and recall 20% over a single-model baseline, paired with a Groq-powered retention email generator that turns scores into outreach.",
    highlights: [
      "Stacked ensemble (XGBoost + Random Forest + Voting + Stacking) on SMOTE-balanced data — +15% accuracy and +20% recall vs single-model baselines on a banking churn dataset.",
      "Llama-3.2 via Groq generates personalized retention emails per customer, converting raw prediction scores into actionable outreach instead of yet another dashboard.",
      "Streamlit + Plotly + Matplotlib UI for live what-if exploration; deployed on Render with hot-reload, real-time inference, and minimal downtime.",
    ],
    tech: ["Scikit-learn", "XGBoost", "Streamlit", "Groq", "Render"],
    link: "https://github.com/AureliusNguyen/Churn-ML",
  },
  {
    id: "flashcards",
    title: "Flashcard Generator",
    period: "May 2024 – Jun 2024",
    tag: "AI",
    blurb:
      "AI flashcard generator that turns any text into interactive study cards in under 3 seconds via Groq Llama-3.2, with Supabase-persisted user state and Clerk sign-in.",
    highlights: [
      "Groq Llama-3.2 generates question/answer pairs from arbitrary text in <3s — handles textbook excerpts, lecture notes, and free-form prompts without prompt brittleness.",
      "Supabase auth + persistence for per-user decks, study history, and cross-device sync — no custom backend needed, RLS enforces per-user data isolation.",
      "Next.js + Vercel deployment with continuous delivery and Clerk-managed sign-in flows; minimal downtime through preview deployments per PR.",
    ],
    tech: ["Next.js", "Groq", "Supabase", "Clerk", "Langchain", "OpenAI"],
    link: "https://ai-flashcard-one.vercel.app/",
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
