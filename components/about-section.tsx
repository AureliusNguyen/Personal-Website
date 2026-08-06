"use client";

import { useState } from "react";
import { Plus, ChevronUp } from "lucide-react";
import { Badge } from "./ui/badge";
import { useReveal } from "@/hooks/use-reveal";
import {
  coursework,
  education,
  experiences,
  expertise,
  type Experience,
} from "@/lib/content/experience";

const SUITS = ["♥","♦", "♣", "♠"] as const;
const REVEAL_BATCH = 2;

export function AboutSection() {
  const headerRef = useReveal<HTMLDivElement>();
  const expertiseRef = useReveal<HTMLDivElement>();
  const eduRef = useReveal<HTMLDivElement>();
  const expHeaderRef = useReveal<HTMLDivElement>();

  const [revealed, setRevealed] = useState(REVEAL_BATCH);
  const remaining = experiences.length - revealed;

  function dealMore() {
    setRevealed((r) => Math.min(r + REVEAL_BATCH, experiences.length));
  }

  function fold() {
    setRevealed(REVEAL_BATCH);
  }

  const canDealMore = remaining > 0;
  const canFold = revealed > REVEAL_BATCH;

  return (
    <section id="about" className="relative py-24 px-4">
      <div className="absolute inset-0 bg-grid opacity-25 pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative">
        <div ref={headerRef} className="reveal text-center mb-16">
          <p className="font-mono text-xs tracking-[0.4em] uppercase text-primary/80">
            Profile
          </p>
          <h2 className="mt-3 text-5xl md:text-6xl font-semibold text-gradient">
            About Me
          </h2>
          <div
            className="h-px w-24 mx-auto mt-6"
            style={{ background: "var(--gradient-red)" }}
          />
        </div>

        {/* Expertise - moved to the top */}
        <div ref={expertiseRef} className="reveal card-surface p-8">
          <h3 className="font-display text-2xl mb-6 text-center text-foreground">
            Expertise
          </h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {expertise.map((skill) => (
              <Badge
                key={skill}
                variant="outline"
                className="text-xs font-mono uppercase tracking-wider px-3 py-1.5 bg-transparent text-foreground/85"
                style={{ borderColor: "var(--border-strong)" }}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Education */}
        <div ref={eduRef} className="reveal card-surface p-8 mt-8">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary/80">
            Education
          </span>
          <h3 className="font-display text-2xl mt-2 mb-4 text-foreground">
            {education.degree}
          </h3>
          <div className="space-y-1 text-sm text-muted-foreground">
            <p className="text-foreground">{education.school}</p>
            <p>
              GPA {education.gpa} · {education.period}
            </p>
          </div>

          <div className="mt-6">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary/80 mb-3">
              Coursework
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {coursework.map((c) => (
                <Badge
                  key={c}
                  variant="outline"
                  className="text-[10px] font-mono uppercase tracking-wider bg-transparent text-foreground/80"
                  style={{ borderColor: "var(--border-strong)" }}
                >
                  {c}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Experience timeline */}
        <div ref={expHeaderRef} className="reveal flex items-end justify-between mt-12 mb-6">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary/80">
              Experience
            </span>
            <h3 className="font-display text-2xl mt-2 text-foreground">
              The Hand So Far
            </h3>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Latest
          </span>
        </div>

        <ol className="relative pl-10 md:pl-12">
          {/* Vertical rail */}
          <span
            aria-hidden
            className="absolute left-3 md:left-4 top-3 bottom-3 w-px"
            style={{ background: "var(--gradient-red)" }}
          />

          {experiences.slice(0, revealed).map((exp, i) => (
            <ExperienceItem
              key={exp.id}
              exp={exp}
              indexInBatch={i % REVEAL_BATCH}
              suit={SUITS[i % SUITS.length]}
            />
          ))}
        </ol>

        {(canDealMore || canFold) && (
          <div className="mt-8 flex justify-center flex-wrap gap-3">
            {canDealMore && (
              <button
                type="button"
                onClick={dealMore}
                className="card-surface group inline-flex items-center gap-3 px-5 py-3 transition-transform hover:-translate-y-0.5"
                style={{ borderColor: "var(--border-strong)" }}
              >
                <Plus className="w-4 h-4 text-primary transition-transform group-hover:rotate-90" />
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-foreground/85 group-hover:text-primary transition-colors">
                  Deal more
                </span>
                <span
                  className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
                  style={{
                    borderLeft: "1px solid var(--border-strong)",
                    paddingLeft: "0.75rem",
                  }}
                >
                  +{Math.min(REVEAL_BATCH, remaining)} in the deck
                </span>
              </button>
            )}

            {canFold && (
              <button
                type="button"
                onClick={fold}
                className="card-surface group inline-flex items-center gap-3 px-5 py-3 transition-transform hover:-translate-y-0.5"
                style={{ borderColor: "var(--border-strong)" }}
              >
                <ChevronUp className="w-4 h-4 text-primary transition-transform group-hover:-translate-y-0.5" />
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-foreground/85 group-hover:text-primary transition-colors">
                  Fold
                </span>
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

function ExperienceItem({
  exp,
  indexInBatch,
  suit,
}: {
  exp: Experience;
  indexInBatch: number;
  suit: string;
}) {
  const ref = useReveal<HTMLLIElement>(0.15);
  const isRedSuit = suit === "♥" || suit === "♦";

  return (
    <li
      ref={ref}
      className="reveal-deal relative pb-10 last:pb-0"
      style={
        { "--deal-delay": `${indexInBatch * 120}ms` } as React.CSSProperties
      }
    >
      {/* Suit anchor on the rail */}
      <span
        aria-hidden
        className="absolute -left-10 md:-left-12 top-3 w-7 h-7 rounded-full grid place-items-center"
        style={{
          background: "var(--background)",
          border: "1px solid var(--border-strong)",
        }}
      >
        <span
          className={`font-display text-base leading-none ${
            isRedSuit ? "text-primary" : "text-foreground/85"
          }`}
        >
          {suit}
        </span>
      </span>

      <article className="card-surface p-6 md:p-7">
        <div className="flex items-center justify-between mb-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary/80">
            {exp.period}
          </span>
        </div>
        <h4 className="font-display text-xl md:text-2xl text-foreground leading-tight mb-1">
          {exp.title}
        </h4>
        <p className="text-sm text-foreground/85 mb-1">{exp.org}</p>
        <p className="text-xs text-muted-foreground mb-4">{exp.location}</p>
        <ul className="space-y-2">
          {exp.points.map((p, j) => (
            <li
              key={j}
              className="flex gap-2 text-xs text-muted-foreground leading-relaxed"
            >
              <span className="text-primary mt-0.5">▸</span>
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </article>
    </li>
  );
}
