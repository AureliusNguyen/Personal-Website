"use client";

import { useEffect, useRef } from "react";
import "devicon/devicon.min.css";
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
} from "react-icons/fa";
import { GiDragonHead } from "react-icons/gi";
import { Flower2 } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

type ReactIcon = React.ComponentType<{ className?: string }>;
type Skill =
  | { name: string; icon: string; isReactIcon?: false }
  | { name: string; icon: ReactIcon; isReactIcon: true };

// Lucide icons render at a fixed 24px regardless of font-size, which makes
// Flower2 visually heavier than the other react-icons (which scale via 1em).
// Wrap it with a smaller explicit size + thinner stroke so it sits at the
// same optical weight as its neighbors in the marquee.
const FlowerAiIcon: ReactIcon = ({ className }) => (
  <Flower2 className={className} size={18} strokeWidth={1.6} />
);

// ─── Individual skills ──────────────────────────────────────────────────────
const mlAi: Skill[] = [
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

const infraDevops: Skill[] = [
  { name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark colored" },
  { name: "Docker", icon: "devicon-docker-plain colored" },
  { name: "Kubernetes", icon: SiKubernetes, isReactIcon: true },
  { name: "Terraform", icon: "devicon-terraform-plain colored" },
  { name: "Nginx", icon: "devicon-nginx-original colored" },
  { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
  { name: "Apache Kafka", icon: "devicon-apachekafka-original" },
  { name: "PySpark", icon: "devicon-apachespark-original colored" },
  { name: "Grafana", icon: SiGrafana, isReactIcon: true },
  { name: "Prometheus", icon: SiPrometheus, isReactIcon: true },
  { name: "Git", icon: "devicon-git-plain colored" },
  { name: "Linux", icon: "devicon-linux-plain" },
  { name: "Next.js", icon: "devicon-nextjs-plain" },
];

const cybersec: Skill[] = [
  { name: "Kali Linux", icon: "devicon-kalilinux-original colored" },
  { name: "IDA Pro", icon: FaBug, isReactIcon: true },
  { name: "Ghidra", icon: GiDragonHead, isReactIcon: true },
  { name: "Burp Suite", icon: SiBurpsuite, isReactIcon: true },
  { name: "Wireshark", icon: SiWireshark, isReactIcon: true },
  { name: "Nmap", icon: FaNetworkWired, isReactIcon: true },
];

const languages: Skill[] = [
  { name: "Python", icon: "devicon-python-plain colored" },
  { name: "TypeScript", icon: "devicon-typescript-plain colored" },
  { name: "JavaScript", icon: "devicon-javascript-plain colored" },
  { name: "Rust", icon: "devicon-rust-plain" },
  { name: "Go", icon: "devicon-go-plain colored" },
  { name: "C++", icon: "devicon-cplusplus-plain colored" },
  { name: "Java", icon: "devicon-java-plain colored" },
  { name: "OCaml", icon: "devicon-ocaml-plain colored" },
  { name: "SQL", icon: "devicon-azuresqldatabase-plain colored" },
  { name: "R", icon: "devicon-r-plain colored" },
  { name: "Sage", icon: FaSquareRootAlt, isReactIcon: true },
  { name: "LaTeX", icon: "devicon-latex-original" },
];

// ─── Suit-themed categories ─────────────────────────────────────────────────
type Category = {
  title: string;
  suit: "♥" | "♦" | "♠" | "♣";
  blurb: string;
  skills: Skill[];
};

const categories: Category[] = [
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

const allSkills: Skill[] = categories.flatMap((c) => c.skills);

export function SkillsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollRef2 = useRef<HTMLDivElement>(null);
  const headerRef = useReveal<HTMLDivElement>();
  const carouselRef = useReveal<HTMLDivElement>();
  const gridRef = useReveal<HTMLDivElement>();

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let pos = 0;
    const speed = 2.0;
    const tick = () => {
      pos += speed;
      if (pos >= el.scrollWidth / 2) pos = 0;
      el.scrollLeft = pos;
    };
    const id = setInterval(tick, 20);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const el = scrollRef2.current;
    if (!el) return;
    let pos = el.scrollWidth / 2;
    const speed = -2.0;
    const tick = () => {
      pos += speed;
      if (pos <= 0) pos = el.scrollWidth / 2;
      el.scrollLeft = pos;
    };
    const id = setInterval(tick, 20);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="skills"
      className="relative py-24 px-4 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid opacity-25 pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative">
        <div ref={headerRef} className="reveal text-center mb-16">
          <p className="font-mono text-xs tracking-[0.4em] uppercase text-primary/80">
            Toolbox
          </p>
          <h2 className="mt-3 text-5xl md:text-6xl font-semibold text-gradient">
            Skills & Technologies
          </h2>
          <div
            className="h-px w-24 mx-auto mt-6"
            style={{ background: "var(--gradient-red)" }}
          />
          <p className="text-muted-foreground mt-6">
            Languages and technologies I&apos;ve shipped with.
          </p>
        </div>

        <div ref={carouselRef} className="reveal">
          <Marquee scrollRef={scrollRef} skills={allSkills} />
          <Marquee
            scrollRef={scrollRef2}
            skills={allSkills}
            className="mt-2"
          />
        </div>

        <div
          ref={gridRef}
          className="reveal mt-16 grid md:grid-cols-2 gap-8"
        >
          {categories.map((cat) => (
            <CategoryCard key={cat.title} category={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryCard({ category }: { category: Category }) {
  const isRedSuit = category.suit === "♥" || category.suit === "♦";
  return (
    <div className="card-surface p-8">
      <div className="flex items-start justify-between gap-4 mb-4">
        <h3 className="font-display text-2xl text-foreground">
          {category.title}
        </h3>
        <span
          aria-hidden
          className={`font-display text-3xl leading-none ${
            isRedSuit ? "text-primary" : "text-foreground/85"
          }`}
        >
          {category.suit}
        </span>
      </div>
      <p className="text-xs text-muted-foreground leading-relaxed mb-6">
        {category.blurb}
      </p>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((s) => (
          <SkillChip key={s.name} skill={s} />
        ))}
      </div>
    </div>
  );
}

function SkillChip({ skill }: { skill: Skill }) {
  const Icon = skill.isReactIcon ? skill.icon : null;
  return (
    <span
      className="h-8 px-3 rounded-md text-xs font-mono uppercase tracking-wider hover:bg-primary/5 transition-colors inline-flex items-center gap-2 text-foreground/85"
      style={{ border: "1px solid var(--border-strong)" }}
    >
      {/* Fixed-size icon slot - keeps every chip the same height regardless
          of whether the icon is a Lucide (fixed 24px), a react-icon (1em),
          or a devicon font glyph. */}
      <span className="inline-flex items-center justify-center w-4 h-4 shrink-0 leading-none text-base">
        {Icon ? (
          <Icon className="w-4 h-4" />
        ) : (
          <i
            className={`${skill.icon as string}`}
            style={{ fontSize: "1rem", lineHeight: 1 }}
          />
        )}
      </span>
      {skill.name}
    </span>
  );
}

function Marquee({
  scrollRef,
  skills,
  className = "",
}: {
  scrollRef: React.RefObject<HTMLDivElement | null>;
  skills: Skill[];
  className?: string;
}) {
  return (
    <div
      className={`relative rounded-2xl ${className}`}
      style={{ background: "var(--gradient-card)" }}
    >
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-30 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-30 pointer-events-none" />

      <div
        ref={scrollRef}
        className="relative flex gap-6 overflow-x-hidden py-10 z-20"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {[...skills, ...skills].map((skill, index) => {
          const Icon = skill.isReactIcon ? skill.icon : null;
          return (
            <div
              key={`${skill.name}-${index}`}
              className="flex-shrink-0 px-6 py-4 rounded-full transition-colors duration-300 group min-w-[180px] flex items-center justify-center"
              style={{
                background: "oklch(0.04 0.005 25 / 0.6)",
                border: "1px solid var(--border-strong)",
                backdropFilter: "blur(6px)",
              }}
            >
              <div className="flex items-center justify-center gap-3 whitespace-nowrap">
                {Icon ? (
                  <Icon className="text-2xl" />
                ) : (
                  <i className={`${skill.icon as string} text-2xl`} />
                )}
                <span className="text-base font-mono uppercase tracking-wider text-foreground/85 group-hover:text-primary transition-colors">
                  {skill.name}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
