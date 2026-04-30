"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Workflow", href: "#workflow" },
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
        const delta = y - lastY.current;
        const THRESH = 8;
        if (y <= 10) setIsVisible(true);
        else if (delta > THRESH) setIsVisible(false);
        else if (delta < -THRESH) setIsVisible(true);
        lastY.current = y;
        ticking.current = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={[
        "fixed top-0 left-0 right-0 z-50",
        "backdrop-blur-xl backdrop-saturate-150",
        "border-b transition-all duration-500 ease-out will-change-transform",
        isScrolled ? "border-[var(--border-strong)]" : "border-transparent",
        isVisible ? "translate-y-0" : "-translate-y-full",
      ].join(" ")}
      style={{
        background: isScrolled
          ? "oklch(0.04 0.005 25 / 0.85)"
          : "oklch(0.04 0.005 25 / 0.55)",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a
            href="#home"
            aria-label="Aurelius Nguyen - Home"
            className="flex items-center group transition-all duration-300"
          >
            <div
              className="relative w-10 h-10 ml-0.5 rounded overflow-hidden"
              style={{ border: "1px solid var(--border-strong)" }}
            >
              <Image
                src="/images/logo.svg"
                alt="AN Logo"
                fill
                className="object-contain bg-background group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </a>

          <div className="hidden md:flex items-center gap-7">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="nav-link font-mono text-[11px] uppercase tracking-[0.25em] text-foreground/75 hover:text-foreground transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen((s) => !s)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </Button>
        </div>

        {isMobileMenuOpen && (
          <div
            className="md:hidden py-4 space-y-3"
            style={{ borderTop: "1px solid var(--border-strong)" }}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block font-mono text-xs uppercase tracking-[0.25em] text-foreground/75 hover:text-primary transition-colors py-2"
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
