"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

const navItems = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Awards", href: "#awards" },
  { name: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const lastY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      requestAnimationFrame(() => {
        const y = window.scrollY;
        setIsScrolled(y > 50);

        // threshold to avoid flicker
        const delta = y - lastY.current;
        const THRESH = 8;

        if (y <= 10) setIsVisible(true);
        else if (delta > THRESH) setIsVisible(false); // down -> hide
        else if (delta < -THRESH) setIsVisible(true); // up   -> show

        lastY.current = y;
        ticking.current = false;
      });
    };

    onScroll(); // set initial state
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={[
        "fixed top-0 left-0 right-0 z-50 relative overflow-visible",
        // glassy red base
        "bg-red-500/18 dark:bg-red-400/14",
        "backdrop-blur-xl backdrop-saturate-150 supports-[backdrop-filter]:backdrop-blur-xl",
        // edge
        "border-b",
        isScrolled
          ? "border-red-500/40 dark:border-red-400/35"
          : "border-transparent",
        // outer red aura
        "drop-shadow-[0_0_40px_rgba(244,63,94,0.55)]",
        // motion
        "transition-transform duration-500 ease-out will-change-transform",
        isVisible ? "translate-y-0" : "-translate-y-full",
      ].join(" ")}
    >
      {/* HUGE multi-layer glow behind bar */}
      <div
        aria-hidden
        className={[
          "pointer-events-none absolute -inset-x-12 -top-20 h-[220px] -z-10",
          // stack 3 gradients for reach + intensity
          "bg-[radial-gradient(80%_50%_at_50%_0%,rgba(244,63,94,0.55),transparent_65%)]",
          "before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(110%_60%_at_50%_0%,rgba(244,63,94,0.35),transparent_70%)]",
          "after:content-[''] after:absolute after:inset-0 after:bg-[radial-gradient(160%_80%_at_50%_-20%,rgba(244,63,94,0.25),transparent_75%)]",
          // more spread
          "blur-3xl sm:blur-[60px]",
          // brighten when scrolled
          isScrolled ? "opacity-100" : "opacity-90",
          "transition-opacity duration-500",
        ].join(" ")}
      />

      {/* thin inner highlight line (gives a glass edge) */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-red-400/60 to-transparent"
      />

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a
            href="#"
            className="flex items-center gap-0 group transition-all duration-300 hover:drop-shadow-[0_0_12px_rgba(220,38,38,1)] hover:filter hover:brightness-110"
          >
            <div className="relative w-10 h-10 ">
              <Image
                src="/images/logo.png"
                alt="AN Logo"
                fill
                className="object-contain rounded-full bg-white"
              />
            </div>
            <span className="text-2xl font-bold">
              <span className="text-foreground">Aurelius</span>
              <span className="text-primary">Nguyen</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-muted-foreground text-white hover:text-primary transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen((s) => !s)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </Button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-red-500/15">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-muted-foreground text-white hover:text-primary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
