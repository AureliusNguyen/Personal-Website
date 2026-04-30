"use client";

import { useScrollProgress } from "@/hooks/use-scroll-progress";

const STEPS = [
  {
    rank: "10",
    word: "Recon",
    blurb: "Study the domain, users, papers, threat models, and edge cases.",
  },
  {
    rank: "J",
    word: "Decode",
    blurb: "Break messy systems down until the core structure is clear.",
  },
  {
    rank: "Q",
    word: "Forge",
    blurb: "Build focused prototypes that turn ideas into working proof.",
  },
  {
    rank: "K",
    word: "Verify",
    blurb: "Attack it with tests, counterexamples, metrics, and failure cases.",
  },
  {
    rank: "A",
    word: "Ship",
    blurb: "Launch with observability, learn from feedback, and iterate fast.",
  },
] as const;
const SUIT = "♥";

const FAN_GAP = 250; // px between cards in fanned position
const FAN_TILT = 6; // deg between cards
// Scroll choreography knobs (all in fractions of the section's scroll progress).
// Section is 1100vh tall - sticky 100vh => 1000vh of scroll-locked range.
const ENTRY_END = 0.18;        // dealing-in animation: ~180vh of scroll
const FLIP_START = 0.20;       // first flip kicks off at 20%
const SLOT_PER_CARD = 0.13;    // each card "owns" 13% of section (~130vh of scroll)
const FLIP_DURATION = 0.07;    // the flip itself takes 7%       (~70vh of scroll)
// 5 slots = 65% of section. Last flip ends at 0.85.
// The remaining ~15% (~150vh of scroll) is pure linger - fully-revealed fan
// stays pinned so the user has time to read all five words before the sticky
// releases into the next section.

function clamp(value: number, min = 0, max = 1) {
  return Math.max(min, Math.min(max, value));
}

export function ManifestoSection() {
  const { ref, progress } = useScrollProgress<HTMLDivElement>();

  const entry = clamp(progress / ENTRY_END);
  // Linger starts after the last card has finished flipping. During linger
  // the fan converges into a tighter "hand" and the Royal Flush stamp lands.
  const LINGER_START = FLIP_START + STEPS.length * SLOT_PER_CARD; // 0.85
  const linger = clamp((progress - LINGER_START) / (1 - LINGER_START));
  const barWidth = `${Math.round(progress * 100)}%`;

  return (
    <section
      id="workflow"
      ref={ref}
      className="relative w-full"
      style={{ height: "1100vh" }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div
          className="absolute inset-x-0 top-1/3 h-[40rem] rounded-full blur-[160px] pointer-events-none"
          style={{ background: "oklch(0.55 0.22 25 / 0.10)" }}
        />

        {/* Eyebrow */}
        <header className="absolute top-24 lg:top-28 left-0 right-0 z-10 px-6 text-center">
          <p className="font-mono text-xs tracking-[0.4em] uppercase text-primary/80">
            How I approach my work
          </p>
          <h2 className="mt-3 text-4xl md:text-6xl lg:text-7xl font-semibold text-foreground">
            <span className="text-gradient">Dealt the hand. Deliver the win.</span>
          </h2>
        </header>

        {/* Cards stage */}
        <div
          className="absolute top-20 inset-0 flex items-center justify-center z-10"
          style={{ perspective: "1800px" }}
        >
          <div className="relative w-full max-w-6xl h-[420px]">
            {STEPS.map((step, i) => {
              const center = (STEPS.length - 1) / 2;
              const targetX = (i - center) * FAN_GAP;
              const targetRot = (i - center) * FAN_TILT;

              // Entry: slide in from off-screen left to fanned position
              const startX = -1400;
              const x = startX + (targetX - startX) * entry;
              const rot = targetRot * entry;

              // Flip: each card occupies SLOT_PER_CARD of the section, but the
              // flip itself only fires for FLIP_DURATION inside that slot. The
              // remaining slot time is a pause before the next card starts.
              const flipStart = FLIP_START + i * SLOT_PER_CARD;
              const flipEnd = flipStart + FLIP_DURATION;
              const flip = clamp((progress - flipStart) / (flipEnd - flipStart));
              // Start back-side up (180), reveal word at flip=1 (0).
              const ry = (1 - flip) * 180;

              return (
                <div
                  key={step.word}
                  className="absolute top-1/2 left-1/2 w-56 h-80"
                  style={{
                    transform: `translate(-50%, -50%) translateX(${x}px) rotate(${rot}deg)`,
                    zIndex: 10 + i,
                    transition: "filter 500ms var(--ease-out-expo)",
                    filter: `drop-shadow(0 0 ${
                      18 + flip * 26
                    }px oklch(0.55 0.22 25 / ${0.25 + flip * 0.35}))`,
                  }}
                >
                <div
                  className="flip-card absolute inset-0"
                  style={{
                    transform: `rotateY(${ry}deg)`,
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* Back face - branded card-back image */}
                  <div
                    className="flip-face flip-face-back rounded-[14px] overflow-hidden"
                    aria-hidden
                    style={{
                      border: "1px solid var(--border-strong)",
                      background: "#0a0a0a",
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/cardback.png"
                      alt=""
                      width={280}
                      height={400}
                      style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  </div>

                  {/* Front face - revealed word */}
                  <div className="flip-face card-surface flex flex-col justify-between p-5 overflow-hidden">
                    <div className="flex flex-col items-start leading-none">
                      <span className="font-display text-2xl text-primary">
                        {step.rank}
                      </span>
                      <span
                        aria-hidden
                        className="font-display text-2xl text-primary -mt-1"
                      >
                        {SUIT}
                      </span>
                    </div>

                    <div className="flex-1 flex items-center justify-center">
                      <h3 className="font-display text-4xl md:text-5xl text-foreground text-center leading-none">
                        {step.word}
                      </h3>
                    </div>

                    <p className="text-xs text-muted-foreground leading-snug">
                      {step.blurb}
                    </p>
                  </div>
                </div>
                </div>
              );
            })}

            {/* Royal Flush stamp - fades in once all 5 cards are revealed */}
            <div
              className="absolute left-1/2 top-full z-20 text-center pointer-events-none"
              style={{
                opacity: linger,
                transform: `translate(-50%, ${(1 - linger) * 18}px)`,
              }}
            >
              <p
                className="royal-pulse font-display text-3xl md:text-5xl whitespace-nowrap inline-block"
                style={{
                  background: "var(--gradient-text)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                {" "} Royal Flush!{" "}
                <span
                  className="text-primary"
                  style={{
                    textShadow: "0 0 24px oklch(0.55 0.22 25 / 0.6)",
                    WebkitTextFillColor: "currentColor",
                  }}
                >
                  ♥
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Mini progress bar */}
        <div className="absolute bottom-16 left-0 right-0 px-6 lg:px-16">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              <span>Dealt</span>
              <span>Deliver</span>
            </div>
            <div className="h-px w-full bg-border relative overflow-hidden">
              <div
                className="absolute inset-y-0 left-0"
                style={{
                  width: barWidth,
                  background: "var(--gradient-red)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
