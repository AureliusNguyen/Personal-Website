import {
  SiOpenai,
  SiNvidia,
  SiHuggingface,
  SiKubernetes,
  SiGrafana,
  SiPrometheus,
  SiQiskit,
  SiWireshark,
  SiBurpsuite,
} from "react-icons/si";
import {
  FaLink,
  FaDatabase,
  FaBolt,
  FaBug,
  FaNetworkWired,
  FaSquareRootAlt,
  FaShieldAlt,
  FaCloud,
} from "react-icons/fa";
import { GiDragonHead, GiAnt } from "react-icons/gi";
import { Flower2 } from "lucide-react";

// Skills carry their own icon, so this module is .tsx rather than .ts.
// Every icon here is a plain SVG component - safe to render from a Server
// Component, which is how the current site's /skills page uses it.

type ReactIcon = React.ComponentType<{ className?: string }>;

export type Skill =
  | { name: string; icon: string; isReactIcon?: false }
  | { name: string; icon: ReactIcon; isReactIcon: true };

// Lucide icons render at a fixed 24px regardless of font-size, which makes
// Flower2 visually heavier than the other react-icons (which scale via 1em).
// Wrap it with a smaller explicit size + thinner stroke so it sits at the
// same optical weight as its neighbors.
const FlowerAiIcon: ReactIcon = ({ className }) => (
  <Flower2 className={className} size={18} strokeWidth={1.6} />
);

export const mlAi: Skill[] = [
  { name: "PyTorch", icon: "devicon-pytorch-original colored" },
  { name: "TensorFlow", icon: "devicon-tensorflow-original colored" },
  { name: "Scikit-learn", icon: "devicon-scikitlearn-plain colored" },
  { name: "HuggingFace", icon: SiHuggingface, isReactIcon: true },
  { name: "Langchain", icon: FaLink, isReactIcon: true },
  { name: "OpenAI", icon: SiOpenai, isReactIcon: true },
  { name: "Pinecone", icon: FaDatabase, isReactIcon: true },
  { name: "LiteLLM", icon: FaBolt, isReactIcon: true },
  { name: "Flower.ai", icon: FlowerAiIcon, isReactIcon: true },
  { name: "CUDA", icon: SiNvidia, isReactIcon: true },
  { name: "Jupyter", icon: "devicon-jupyter-plain colored" },
  { name: "Qiskit", icon: SiQiskit, isReactIcon: true },
];

export const infraDevops: Skill[] = [
  { name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark colored" },
  { name: "Docker", icon: "devicon-docker-plain colored" },
  { name: "Kubernetes", icon: SiKubernetes, isReactIcon: true },
  { name: "Terraform", icon: "devicon-terraform-plain colored" },
  { name: "Civo", icon: FaCloud, isReactIcon: true },
  { name: "Nginx", icon: "devicon-nginx-original colored" },
  { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
  { name: "Apache Kafka", icon: "devicon-apachekafka-original" },
  { name: "PySpark", icon: "devicon-apachespark-original colored" },
  { name: "Grafana", icon: SiGrafana, isReactIcon: true },
  { name: "Prometheus", icon: SiPrometheus, isReactIcon: true },
  { name: "Locust", icon: GiAnt, isReactIcon: true },
  { name: "Git", icon: "devicon-git-plain colored" },
  { name: "Linux", icon: "devicon-linux-plain" },
  { name: "Next.js", icon: "devicon-nextjs-plain" },
];

export const cybersec: Skill[] = [
  { name: "Kali Linux", icon: "devicon-kalilinux-original colored" },
  { name: "IDA Pro", icon: FaBug, isReactIcon: true },
  { name: "Ghidra", icon: GiDragonHead, isReactIcon: true },
  { name: "Burp Suite", icon: SiBurpsuite, isReactIcon: true },
  { name: "Wireshark", icon: SiWireshark, isReactIcon: true },
  { name: "Nmap", icon: FaNetworkWired, isReactIcon: true },
];

export const languages: Skill[] = [
  { name: "Python", icon: "devicon-python-plain colored" },
  { name: "TypeScript", icon: "devicon-typescript-plain colored" },
  { name: "JavaScript", icon: "devicon-javascript-plain colored" },
  { name: "Rust", icon: "devicon-rust-plain" },
  { name: "Go", icon: "devicon-go-plain colored" },
  { name: "C", icon: "devicon-c-plain colored" },
  { name: "C++", icon: "devicon-cplusplus-plain colored" },
  { name: "Java", icon: "devicon-java-plain colored" },
  { name: "OCaml", icon: "devicon-ocaml-plain colored" },
  { name: "SQL", icon: "devicon-azuresqldatabase-plain colored" },
  { name: "R", icon: "devicon-r-plain colored" },
  { name: "Sage", icon: FaSquareRootAlt, isReactIcon: true },
  { name: "Dafny", icon: FaShieldAlt, isReactIcon: true },
  { name: "LaTeX", icon: "devicon-latex-original" },
];

export type Category = {
  title: string;
  // Suit is a v1 (poker table) affordance; the current site ignores it.
  suit: "♥" | "♦" | "♠" | "♣";
  blurb: string;
  skills: Skill[];
};

export const categories: Category[] = [
  {
    title: "ML & AI",
    suit: "♥",
    blurb: "Models, agents, retrieval, and the GPU stack underneath.",
    skills: mlAi,
  },
  {
    title: "Infra & DevOps",
    suit: "♦",
    blurb: "Pipelines, containers, observability, and shipping pipelines.",
    skills: infraDevops,
  },
  {
    title: "Cybersecurity",
    suit: "♠",
    blurb: "Reverse engineering, offensive tooling, and CTF muscle memory.",
    skills: cybersec,
  },
  {
    title: "Languages",
    suit: "♣",
    blurb: "Daily-driven, weekend-driven, and everything in between.",
    skills: languages,
  },
];

export const allSkills: Skill[] = categories.flatMap((c) => c.skills);
