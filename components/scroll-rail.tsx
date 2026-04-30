"use client";

import { useEffect, useState } from "react";

const SUITS = ["♠", "♣", "♦", "♥"] as const;

export function ScrollRail() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let rafId = 0;
    let last = -1;

    function tick() {
      const max =
        document.documentElement.scrollHeight - window.innerHeight || 1;
      const next = Math.max(0, Math.min(1, window.scrollY / max));
      if (Math.abs(next - last) > 0.001) {
        last = next;
        setProgress(next);
      }
      rafId = requestAnimationFrame(tick);
    }

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  // Each suit owns 1/N of the page and spins one full revolution within
  // its own segment. Crossing into the next segment swaps the suit and
  // resets the rotation to 0 — so every suit gets exactly one full turn.
  const suitProgress = progress * SUITS.length;
  const suitIndex = Math.min(SUITS.length - 1, Math.floor(suitProgress));
  const suit = SUITS[suitIndex];
  const localRotation = (suitProgress - Math.floor(suitProgress)) * 360;
  const pct = String(Math.round(progress * 100)).padStart(2, "0");
  const isRedSuit = suit === "♥" || suit === "♦";

  return (
    <aside
      aria-hidden
      className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-4 pointer-events-none"
    >
      <div
        className="w-12 h-12 rounded-full grid place-items-center card-surface"
        style={{
          transform: `rotate(${localRotation}deg)`,
          transition: "border-color 400ms var(--ease-out-expo)",
        }}
      >
        <span
          className={`font-display text-xl ${
            isRedSuit ? "text-primary" : "text-foreground/85"
          }`}
        >
          {suit}
        </span>
      </div>

      <div className="w-px h-40 bg-border relative overflow-hidden rounded-full">
        <div
          className="absolute inset-x-0 top-0 rounded-full"
          style={{
            height: `${progress * 100}%`,
            background:
              "linear-gradient(to bottom, var(--primary-glow), var(--primary-deep))",
          }}
        />
      </div>

      <span className="font-mono text-xs text-foreground/70 tabular-nums">
        {pct}
      </span>
    </aside>
  );
}
