"use client";

import Image from "next/image";
import { useScrollProgress } from "@/hooks/use-scroll-progress";

export function HeroSection() {
  const { ref, progress } = useScrollProgress<HTMLDivElement>();

  // Finish the flip before the sticky pin releases, so the portrait gets
  // a moment to "linger" instead of scrolling away the instant it lands.
  const FLIP_COMPLETE_AT = 0.45;
  const flipProgress = Math.min(1, progress / FLIP_COMPLETE_AT);
  const flipRotate = `rotateY(${(1 - flipProgress) * 180}deg)`;

  return (
    <section
      id="home"
      ref={ref}
      className="relative w-full"
      style={{ height: "320vh" }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Faint poker-table grid backdrop */}
        <div className="absolute inset-0 bg-grid opacity-60" />

        {/* Crimson glow blob */}
        <div
          className="absolute top-[18%] left-[10%] w-[40rem] h-[40rem] rounded-full blur-[140px] pointer-events-none"
          style={{ background: "oklch(0.55 0.22 25 / 0.18)" }}
        />

        <div className="relative z-10 container mx-auto h-full px-4 lg:px-8 flex items-center pt-20 pb-12">
          <div className="w-full grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-center">
            {/* LEFT - copy */}
            <div className="space-y-6 max-w-2xl">
              <p className="font-mono text-xs tracking-[0.4em] uppercase text-primary/80">
                Last updated: April 2026
              </p>

              <div className="inline-flex flex-col items-start">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.05]">
                  <span className="text-gradient">
                    Hi, I&rsquo;m Aurelius Nguyen
                  </span>
                </h1>
                <div
                  className="h-px w-4/5 mt-3"
                  style={{ background: "var(--gradient-red)" }}
                />
              </div>

              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                I&apos;m an honors Master&apos;s student in{" "}
                <span className="text-primary font-semibold">
                  Computer Science
                </span>{" "}
                at the{" "}
                <span className="text-foreground font-semibold">
                  University of Minnesota
                </span>
                , specializing in{" "}
                <span className="text-primary font-semibold">
                  Machine Learning
                </span>{" "}
                and{" "}
                <span className="text-primary font-semibold">
                  Artificial Intelligence
                </span>
                .
              </p>

              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                I&apos;m also passionate about{" "}
                <span className="text-primary">Cybersecurity</span>,{" "}
                <span className="text-primary">Data Engineering</span>,{" "}
                <span className="text-primary">Quantum Computing</span>, and{" "}
                <span className="text-primary">Agentic Systems</span>.
              </p>

              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                I participate in{" "}
                <span className="text-primary">Hackathons</span> and{" "}
                <span className="text-primary">CTF competitions</span> (mostly{" "}
                <span className="text-primary">Reverse Engineering</span> and{" "}
                <span className="text-primary">Cryptography</span>) every
                weekend.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                {/* PRIMARY — filled crimson, swept gradient on hover */}
                <a
                  href="#projects"
                  className="cta cta--primary group"
                >
                  <span className="cta__label">View My Work</span>
                </a>

                {/* SECONDARY — outlined, sweeps to crimson on hover */}
                <a
                  href="#contact"
                  className="cta cta--ghost group"
                >
                  <span className="cta__label">Get In Touch</span>
                </a>
              </div>

              <style jsx>{`
                .cta {
                  position: relative;
                  display: inline-flex;
                  align-items: center;
                  justify-content: center;
                  gap: 0.75rem;
                  padding: 0.875rem 1.5rem;
                  min-width: 180px;
                  min-height: 48px;
                  border-radius: 8px;
                  font-family: var(--font-jetbrains), ui-monospace, monospace;
                  font-size: 0.7rem;
                  font-weight: 600;
                  text-transform: uppercase;
                  letter-spacing: 0.25em;
                  overflow: hidden;
                  transition: transform 500ms var(--ease-out-expo),
                    box-shadow 500ms var(--ease-out-expo),
                    border-color 400ms var(--ease-out-expo),
                    color 400ms var(--ease-out-expo);
                  isolation: isolate;
                }
                .cta:hover {
                  transform: translateY(-2px);
                }
                .cta::before {
                  content: "";
                  position: absolute;
                  inset: 0;
                  z-index: -1;
                  transition: opacity 500ms var(--ease-out-expo),
                    transform 500ms var(--ease-out-expo);
                }
                .cta__arrow {
                  transition: transform 400ms var(--ease-out-expo);
                  flex-shrink: 0;
                }
                .cta:hover .cta__arrow {
                  transform: translateX(4px);
                }
                .cta:hover .cta__arrow--diagonal {
                  transform: translate(3px, -3px);
                }

                /* Primary — filled crimson with subtle sheen on hover */
                .cta--primary {
                  background: var(--gradient-red);
                  color: var(--primary-foreground);
                  border: 1px solid transparent;
                  box-shadow: 0 8px 24px -10px oklch(0.55 0.22 25 / 0.5);
                }
                .cta--primary::before {
                  background: linear-gradient(
                    135deg,
                    oklch(0.66 0.22 25),
                    oklch(0.55 0.22 25) 50%,
                    oklch(0.40 0.18 25)
                  );
                  opacity: 0;
                }
                .cta--primary:hover {
                  box-shadow: 0 14px 36px -10px oklch(0.55 0.22 25 / 0.7),
                    0 0 0 1px oklch(0.66 0.22 25 / 0.5);
                }
                .cta--primary:hover::before {
                  opacity: 1;
                }

                /* Ghost — outlined, slides crimson fill on hover */
                .cta--ghost {
                  background: transparent;
                  color: oklch(0.96 0 0 / 0.85);
                  border: 1px solid var(--border-strong);
                }
                .cta--ghost::before {
                  background: var(--gradient-red);
                  transform: translateX(-100%);
                }
                .cta--ghost:hover {
                  color: var(--primary-foreground);
                  border-color: oklch(0.66 0.22 25);
                  box-shadow: 0 8px 24px -10px oklch(0.55 0.22 25 / 0.45);
                }
                .cta--ghost:hover::before {
                  transform: translateX(0);
                }

                .cta__label {
                  position: relative;
                  z-index: 1;
                }
                .cta__arrow {
                  position: relative;
                  z-index: 1;
                }
              `}</style>
            </div>

            {/* RIGHT - square flip card; pull left of the scroll rail */}
            <div
              className="flex justify-center lg:justify-start mx-auto lg:mx-0 lg:mr-24 xl:mr-32"
              style={{ perspective: "1800px" }}
            >
              {/* Glow wrapper - filter must live on a non-3D ancestor or it
                  flattens the preserve-3d context and the back face vanishes. */}
              <div
                className="relative aspect-square w-72 sm:w-80 lg:w-96"
                style={{
                  filter: `drop-shadow(0 0 ${
                    24 + flipProgress * 36
                  }px oklch(0.55 0.22 25 / ${0.30 + flipProgress * 0.40}))`,
                  transition: "filter 600ms var(--ease-out-expo)",
                }}
              >
              <div
                className="flip-card absolute inset-0"
                style={{
                  transformStyle: "preserve-3d",
                  transform: flipRotate,
                }}
              >
                {/* Back face - branded card-back image (default) */}
                <div
                  className="flip-face flip-face-back rounded-none overflow-hidden"
                  aria-hidden
                  style={{
                    border: "1px solid var(--border-strong)",
                    background: "#0a0a0a",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/cardback-square.png"
                    alt=""
                    width={400}
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

                {/* Front face - square portrait (sharp corners) */}
                <div className="flip-face card-surface overflow-hidden rounded-none">
                  <Image
                    src="/images/pfp.png"
                    alt="Aurelius Nguyen"
                    fill
                    sizes="(max-width: 640px) 18rem, (max-width: 1024px) 20rem, 24rem"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none">
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
            Scroll
          </span>
          <div
            className="w-px h-8"
            style={{ background: "var(--gradient-red)" }}
          />
        </div>
      </div>
    </section>
  );
}
