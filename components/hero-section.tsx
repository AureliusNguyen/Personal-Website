"use client";

import Image from "next/image";
import { Button } from "./ui/button";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Red glow effect */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" />

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left side - Text Content */}
          <div className="flex-1 space-y-8 text-left">
            <div
              data-sal="fade"
              data-sal-duration="800"
              data-sal-delay="100"
              className="space-y-4"
            >
              <h1 className="text-5xl md:text-7xl lg:text-5xl font-bold">
                <span className="text-foreground">Hi, I&apos;m Aurelius Nguyen</span>
              </h1>
              <div className="h-1 w-132 bg-gradient-to-r from-primary to-transparent" />
            </div>

            <p
              data-sal="fade"
              data-sal-duration="800"
              data-sal-delay="300"
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed"
            >
              I'm an honors Master&apos;s student in{" "}
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

            <p
              data-sal="fade"
              data-sal-duration="800"
              data-sal-delay="500"
              className="text-lg text-muted-foreground"
            >
              I&apos;m also passionate about{" "}
              <span className="text-primary">Cybersecurity</span>,{" "}
              <span className="text-primary">Data Engineering</span>,{" "}
              <span className="text-primary">Quantum Computing</span>, and{" "}
              <span className="text-primary">Agentic Systems</span>.
            </p>
            <p
              data-sal="fade"
              data-sal-duration="800"
              data-sal-delay="500"
              className="text-lg text-muted-foreground"
            >
              I participate in <span className="text-primary">Hackathons</span>{" "}
              and <span className="text-primary">CTF competitions </span>(mostly{" "}
              <span className="text-primary">Reverse Engineering</span> and{" "}
              <span className="text-primary">Cryptography</span>) every weekend.
            </p>

            <div
              data-sal="slide-up"
              data-sal-duration="800"
              data-sal-delay="700"
              className="flex flex-wrap gap-4 pt-4"
            >
              <Button
                asChild
                size="lg"
                className="group relative overflow-hidden bg-primary hover:bg-primary/30 border-primary/50 min-w-[160px] min-h-[45px]"
              >
                <a href="#projects">
                  <span className="relative z-10">View My Work</span>
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary/50 hover:bg-primary/30 min-w-[160px] min-h-[45px]"
              >
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
          </div>

          {/* Right side - Profile Picture */}
          <div
            data-sal="slide-left"
            data-sal-duration="800"
            data-sal-delay="100"
            className="flex-shrink-0"
          >
            <div className="relative group">
              {/* Animated square wave lines */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute border-2 border-primary/30 group-hover:animate-wave-out"
                    style={{
                      width: "320px",
                      height: "320px",
                      animationDelay: `${i * 0.4}s`,
                    }}
                  />
                ))}
              </div>

              {/* Profile image */}
              <div className="relative w-80 h-80 overflow-hidden border-4 border-primary/40 group-hover:border-primary transition-all duration-300">
                <Image
                  src="/images/pfp.png"
                  alt="Aurelius Nguyen"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        data-sal="fade"
        data-sal-duration="800"
        data-sal-delay="1100"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
