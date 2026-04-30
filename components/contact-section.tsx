"use client";

import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaDiscord,
} from "react-icons/fa";
import { useReveal } from "@/hooks/use-reveal";

type Channel = {
  rank: string;
  suit: "♠" | "♥" | "♦" | "♣";
  label: string;
  value: string;
  href?: string;
  icon: React.ReactNode;
};

const ICON_CLASS = "w-10 h-10";

const channels: Channel[] = [
  {
    rank: "10",
    suit: "♠",
    label: "Location",
    value: "Minneapolis, MN",
    icon: <FaMapMarkerAlt className={ICON_CLASS} />,
  },
  {
    rank: "J",
    suit: "♥",
    label: "Email",
    value: "nguy5272@umn.edu",
    href: "mailto:nguy5272@umn.edu",
    icon: <FaEnvelope className={ICON_CLASS} />,
  },
  {
    rank: "Q",
    suit: "♦",
    label: "GitHub",
    value: "View my projects",
    href: "https://github.com/AureliusNguyen",
    icon: <FaGithub className={ICON_CLASS} />,
  },
  {
    rank: "K",
    suit: "♣",
    label: "LinkedIn",
    value: "Connect with me",
    href: "https://linkedin.com/in/aurelius-nguyen",
    icon: <FaLinkedin className={ICON_CLASS} />,
  },
  {
    rank: "A",
    suit: "♠",
    label: "Discord",
    value: "_Madarame_",
    icon: <FaDiscord className={ICON_CLASS} />,
  },
];

export function ContactSection() {
  const headerRef = useReveal<HTMLDivElement>();
  const gridRef = useReveal<HTMLDivElement>();
  const footerRef = useReveal<HTMLDivElement>();

  return (
    <section id="contact" className="relative py-24 px-4">
      <div className="absolute inset-0 bg-grid opacity-25 pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative">
        <div ref={headerRef} className="reveal text-center mb-16">
          <p className="font-mono text-xs tracking-[0.4em] uppercase text-primary/80">
            Hand Off
          </p>
          <h2 className="mt-3 text-5xl md:text-6xl font-semibold text-gradient">
            Get In Touch
          </h2>
          <div
            className="h-px w-24 mx-auto mt-6"
            style={{ background: "var(--gradient-red)" }}
          />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Open for projects, collabs, or any interesting problem. The
            fastest way to reach me is through the platforms below.
          </p>
        </div>

        <div
          ref={gridRef}
          className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5"
        >
          {channels.map((c) => (
            <ChannelTile key={c.label} channel={c} />
          ))}
        </div>

        <div
          ref={footerRef}
          className="reveal mt-20 text-center text-muted-foreground"
        >
          <p className="text-xs font-mono uppercase tracking-[0.3em] mb-2">
            Built with{" "}
            <span className="text-primary">Next.js</span>
            {" · "}
            <span className="text-primary">TypeScript</span>
            {" · "}
            <span className="text-primary">Tailwind CSS</span>
          </p>
          <p className="text-xs font-mono tracking-wider">
            © {new Date().getFullYear()} Aurelius Nguyen. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}

function ChannelTile({ channel }: { channel: Channel }) {
  const isRedSuit = channel.suit === "♥" || channel.suit === "♦";
  const suitColor = isRedSuit ? "text-primary" : "text-foreground/85";

  const body = (
    <>
      {/* Top-left rank+suit */}
      <div className="absolute top-3 left-4 flex flex-col items-center leading-none pointer-events-none">
        <span className={`font-display text-sm ${suitColor}`}>
          {channel.rank}
        </span>
        <span className={`font-display text-sm -mt-0.5 ${suitColor}`}>
          {channel.suit}
        </span>
      </div>

      {/* Bottom-right rank+suit (rotated 180) */}
      <div className="absolute bottom-3 right-4 flex flex-col items-center leading-none rotate-180 pointer-events-none">
        <span className={`font-display text-sm ${suitColor}`}>
          {channel.rank}
        </span>
        <span className={`font-display text-sm -mt-0.5 ${suitColor}`}>
          {channel.suit}
        </span>
      </div>

      {/* Faint suit watermark */}
      <span
        aria-hidden
        className={`absolute -bottom-10 -right-6 font-display text-[11rem] leading-none pointer-events-none select-none ${suitColor} opacity-[0.06] group-hover:opacity-[0.14] transition-opacity duration-500`}
      >
        {channel.suit}
      </span>

      {/* Centered icon */}
      <div className="flex-1 grid place-items-center">
        <span className="text-primary transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110">
          {channel.icon}
        </span>
      </div>

      {/* Label + value */}
      <div className="mt-auto text-center">
        <span className="block text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground">
          {channel.label}
        </span>
        <span className="block mt-1 font-medium text-foreground truncate group-hover:text-primary transition-colors">
          {channel.value}
        </span>
      </div>
    </>
  );

  const className =
    "card-surface relative aspect-[5/7] p-6 group flex flex-col overflow-hidden transition-transform duration-500 hover:-translate-y-1";

  if (channel.href) {
    return (
      <a
        href={channel.href}
        target={channel.href.startsWith("http") ? "_blank" : undefined}
        rel={channel.href.startsWith("http") ? "noreferrer" : undefined}
        className={className}
      >
        {body}
      </a>
    );
  }

  return <div className={className}>{body}</div>;
}
