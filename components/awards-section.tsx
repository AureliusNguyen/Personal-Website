"use client";

import { Badge } from "./ui/badge";
import { Flag, Brain } from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import { useReveal } from "@/hooks/use-reveal";

const ctfPlacements = [
  "Top 1 IUCTF 2025",
  "Top 3 MinneHackCTF 2025",
  "Top 4 UMNACMCTF 2025",
  "Top 18 K17CTF 2025",
  "Top 19 OlympicsCTF 2025",
  "Top 27 WannaGameCTF 2025",
  "Top 29 squ1rrel CTF 2026",
  "Top 30 BitsCTF 2025",
  "Top 31 UTCTF 2026",
  "Top 35 ECTF 2025",
  "Top 40 ApoorvCTF 2026",
  "Top 44 DawgCTF 2026",
  "Top 50 RITSEC CTF 2026",
  "Top 51 K!nd4SUS CTF 2026",
  "Top 60 pingCTF 2026",
  "Top 61 TAMUctf 2026",
  "Top 62 EHAX CTF 2026",
  "Top 71 BITSCTF 2026",
  "Top 106 IrisCTF 2024",
];

const hackathonPlacements = [
  "Top 20 / 1,500 Headstarter Hackathon",
  "Participant @ OriginHouse 2025",
  "Participant @ MinneHack 2025",
];

const otherAwards = [
  "$2K Undergraduate Research Award",
  "$60K UMN Global Excellence Scholarship",
  "Top 94 / 118,941 @ CryptoHack.org",
];

const links = [
  { name: "GopherHack", href: "https://gopherhack.com/", Icon: Flag },
  { name: "CryptoHack", href: "https://cryptohack.org/user/Madarame/", Icon: Brain },
  { name: "LeetCode", href: "https://leetcode.com/u/aureliusnguyen/", Icon: SiLeetcode },
];

export function AwardsSection() {
  const headerRef = useReveal<HTMLDivElement>();
  const ctfRef = useReveal<HTMLDivElement>();
  const hackRef = useReveal<HTMLDivElement>();
  const othersRef = useReveal<HTMLDivElement>();
  const linksRef = useReveal<HTMLDivElement>();

  return (
    <section id="awards" className="relative py-24 px-4">
      <div className="absolute inset-0 bg-grid opacity-25 pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative">
        <div ref={headerRef} className="reveal text-center mb-16">
          <p className="font-mono text-xs tracking-[0.4em] uppercase text-primary/80">
            Track Record
          </p>
          <h2 className="mt-3 text-5xl md:text-6xl font-semibold text-gradient">
            Awards & Achievements
          </h2>
          <div
            className="h-px w-24 mx-auto mt-6"
            style={{ background: "var(--gradient-red)" }}
          />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Recognition across CTFs, hackathons, research, and merit-based
            scholarships.
          </p>
        </div>

        {/* CTFs */}
        <div ref={ctfRef} className="reveal card-surface p-8">
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary/80">
              Capture the Flag
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              ~$3K total prizes
            </span>
          </div>
          <h3 className="font-display text-2xl text-foreground mb-2">
            Top placements across major CTF competitions
          </h3>
          <p className="text-sm text-muted-foreground mb-6">
            Reverse engineering and cryptography focus, every weekend.
          </p>
          <div className="flex flex-wrap gap-2">
            {ctfPlacements.map((p) => (
              <Badge
                key={p}
                variant="outline"
                className="text-[10px] font-mono uppercase tracking-wider bg-transparent text-foreground/85"
                style={{ borderColor: "var(--border-strong)" }}
              >
                {p}
              </Badge>
            ))}
          </div>
        </div>

        {/* Hackathons */}
        <div
          ref={hackRef}
          className="reveal card-surface p-8 mt-8"
          style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary/80">
              Hackathons
            </span>
          </div>
          <h3 className="font-display text-2xl text-foreground mb-2">
            Top placements at competitive hackathons
          </h3>
          <p className="text-sm text-muted-foreground mb-6">
            End-to-end AI and agentic products, designed, built, and shipped
            under weekend-tight deadlines.
          </p>
          <div className="flex flex-wrap gap-2">
            {hackathonPlacements.map((p) => (
              <Badge
                key={p}
                variant="outline"
                className="text-[10px] font-mono uppercase tracking-wider bg-transparent text-foreground/85"
                style={{ borderColor: "var(--border-strong)" }}
              >
                {p}
              </Badge>
            ))}
          </div>
        </div>

        {/* Research, scholarships, leaderboards */}
        <div
          ref={othersRef}
          className="reveal card-surface p-8 mt-8"
          style={{ "--reveal-delay": "240ms" } as React.CSSProperties}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary/80">
              Awards & Recognition
            </span>
          </div>
          <h3 className="font-display text-2xl text-foreground mb-2">
            Research grants, scholarships, and global leaderboards
          </h3>
          <p className="text-sm text-muted-foreground mb-6">
            Funded research, merit-based scholarships, and worldwide platform
            rankings.
          </p>
          <div className="flex flex-wrap gap-2">
            {otherAwards.map((p) => (
              <Badge
                key={p}
                variant="outline"
                className="text-[10px] font-mono uppercase tracking-wider bg-transparent text-foreground/85"
                style={{ borderColor: "var(--border-strong)" }}
              >
                {p}
              </Badge>
            ))}
          </div>
        </div>

        {/* Profiles */}
        <div ref={linksRef} className="reveal card-surface p-8 mt-8">
          <h3 className="font-display text-2xl mb-6 text-center text-foreground">
            Competitive programming 
          </h3>
          <p className="text-sm text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
            Live ratings, write-ups, and rankings from the platforms I grind every week.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            {links.map(({ name, href, Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-md group transition-colors"
                style={{
                  background: "transparent",
                  border: "1px solid var(--border-strong)",
                }}
              >
                <Icon className="w-4 h-4 text-primary group-hover:rotate-12 transition-transform" />
                <span className="font-mono text-xs uppercase tracking-wider text-foreground/85 group-hover:text-primary transition-colors">
                  {name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
