"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { Badge } from "./ui/badge";
import { projects, cardGlyphs, type Project } from "@/lib/projects";

export function ProjectsSection() {
  const [flipped, setFlipped] = useState<boolean[]>(() =>
    projects.map(() => false)
  );

  function toggle(i: number) {
    setFlipped((prev) => {
      const next = [...prev];
      next[i] = !next[i];
      return next;
    });
  }

  return (
    <section id="projects" className="relative py-24 px-4">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative">
        <div className="text-center mb-16">
          <p className="font-mono text-xs tracking-[0.4em] uppercase text-primary/80">
            Selected Work
          </p>
          <h2 className="mt-3 text-5xl md:text-6xl font-semibold text-gradient">
            Featured Projects
          </h2>
          <div
            className="h-px w-24 mx-auto mt-6"
            style={{ background: "var(--gradient-red)" }}
          />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            From classical ML to agentic AI. From research to engineering. From
            idea to shipped product.
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mt-3">
            Click to flip
          </p>
        </div>

        <div
          className="grid md:grid-cols-2 gap-8"
          style={{ perspective: "1400px" }}
        >
          {projects.map((project, i) => {
            const glyph = cardGlyphs[i % cardGlyphs.length];
            const isRedSuit = glyph.suit === "♥" || glyph.suit === "♦";
            const suitColor = isRedSuit
              ? "text-primary"
              : "text-foreground/85";
            const isFlipped = flipped[i];

            return (
              <article
                key={project.id}
                onClick={() => toggle(i)}
                className="project-card relative aspect-[5/6] group cursor-pointer select-none"
                style={{ perspective: "1400px" }}
                role="button"
                aria-pressed={isFlipped}
              >
                <div
                  className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: isFlipped ? "rotateY(0deg)" : "rotateY(180deg)",
                  }}
                >
                  {/* Front face */}
                  <ProjectCardFront
                    project={project}
                    glyph={glyph}
                    suitColor={suitColor}
                    isInteractive={isFlipped}
                  />

                  {/* Back face - noir card-back with radial glow + giant suit */}
                  <div
                    aria-hidden
                    className={`flip-face flip-face-back card-surface project-card-back flex items-center justify-center overflow-hidden ${
                      isFlipped ? "pointer-events-none" : ""
                    }`}
                  >
                    <div
                      className="absolute inset-3 rounded-[10px] border pointer-events-none"
                      style={{
                        borderColor: "var(--border-strong)",
                      }}
                    />
                    <span
                      className="relative font-display text-[9rem] text-primary leading-none"
                      style={{
                        textShadow: "0 0 36px oklch(0.55 0.22 25 / 0.65)",
                      }}
                    >
                      ♠
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

type FrontProps = {
  project: Project;
  glyph: { rank: string; suit: string };
  suitColor: string;
  isInteractive: boolean;
};

function ProjectCardFront({
  project,
  glyph,
  suitColor,
  isInteractive,
}: FrontProps) {
  return (
    <div
      className={`flip-face card-surface overflow-hidden ${
        isInteractive ? "" : "pointer-events-none"
      }`}
    >
      <div className="block h-full w-full p-6 md:p-7 relative">
        {/* Suit watermark - moved up so it doesn't sit behind the Visit button */}
        <span
          aria-hidden
          className={`absolute -top-16 -right-6 font-display text-[16rem] leading-none pointer-events-none select-none ${suitColor} opacity-[0.10]`}
        >
          {glyph.suit}
        </span>

        {/* Top-left rank+suit */}
        <div className="absolute top-3 left-4 flex flex-col items-center leading-none">
          <span className={`font-display text-base ${suitColor}`}>
            {glyph.rank}
          </span>
          <span className={`font-display text-base -mt-0.5 ${suitColor}`}>
            {glyph.suit}
          </span>
        </div>

        {/* Bottom-right rank+suit (rotated 180) */}
        <div className="absolute bottom-3 right-4 flex flex-col items-center leading-none rotate-180">
          <span className={`font-display text-base ${suitColor}`}>
            {glyph.rank}
          </span>
          <span className={`font-display text-base -mt-0.5 ${suitColor}`}>
            {glyph.suit}
          </span>
        </div>

        <div className="relative z-10 flex flex-col h-full pt-8">
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary/80">
              {project.tag}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              {project.period}
            </span>
          </div>

          <h3 className="font-display text-2xl md:text-3xl text-foreground leading-tight mb-3">
            {project.title}
          </h3>

          <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
            {project.blurb}
          </p>

          <ul className="space-y-2 mb-4">
            {project.highlights.map((h, i) => (
              <li
                key={i}
                className="flex gap-2 text-xs text-muted-foreground leading-relaxed"
              >
                <span className="text-primary mt-0.5">▸</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>

          {/* Project visual placeholder - fixed height anchored to the bottom
              of the card so every card has an identical visual area. Visit
              button is overlaid in its top-right corner. */}
          <div
            className="mt-auto h-[280px] mb-4 rounded-md grid place-items-center relative"
            style={{
              border: "1px dashed var(--border-strong)",
              background:
                "linear-gradient(160deg, oklch(0.07 0.01 25) 0%, oklch(0.04 0.005 25) 100%)",
            }}
          >
            <a
              href={project.link ?? "#"}
              target={project.link ? "_blank" : undefined}
              rel={project.link ? "noreferrer" : undefined}
              aria-disabled={!project.link}
              onClick={(e) => {
                e.stopPropagation();
                if (!project.link) e.preventDefault();
              }}
              className={`absolute top-3 right-3 z-10 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md font-mono text-[10px] uppercase tracking-wider transition-colors backdrop-blur-sm ${
                project.link
                  ? "text-foreground/85 hover:text-primary cursor-pointer"
                  : "text-muted-foreground cursor-not-allowed opacity-70"
              }`}
              style={{
                border: "1px solid var(--border-strong)",
                background: "oklch(0.04 0.005 25 / 0.75)",
              }}
            >
              Visit
              <ExternalLink className="w-3 h-3" />
            </a>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Visual · TBD
            </span>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <Badge
                key={t}
                variant="outline"
                className="text-[10px] font-mono uppercase tracking-wider bg-transparent text-foreground/80"
                style={{ borderColor: "var(--border-strong)" }}
              >
                {t}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
