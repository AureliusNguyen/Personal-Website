"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { House, List, X } from "@phosphor-icons/react";

import { ThemeToggle } from "@/components/v2/theme-toggle";
import { profile } from "@/lib/content/profile";

const NAV = [
  { label: "Work", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Awards", href: "/awards" },
  { label: "Contact", href: "/contact" },
];

export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the panel on navigation. Without this the menu stays open behind
  // the new page on mobile.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // A fixed-position panel over a scrollable body scrolls the page behind it.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-border bg-secondary-background">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6"
      >
        <Link
          href="/"
          aria-label="Home"
          aria-current={pathname === "/" ? "page" : undefined}
          className="group flex min-w-0 items-center gap-3 rounded-base focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          {/* text-main-foreground is explicit: the glyph sits on bg-main, so
              inheriting the page foreground would render it near-white on
              crimson once dark mode is on. */}
          <span className="grid size-10 shrink-0 place-items-center rounded-base border-2 border-border bg-main text-main-foreground shadow-shadow transition-transform duration-150 group-hover:translate-x-boxShadowX group-hover:translate-y-boxShadowY group-hover:shadow-none group-active:translate-x-boxShadowX group-active:translate-y-boxShadowY group-active:shadow-none">
            <House size={20} weight="bold" aria-hidden />
          </span>
          <span className="truncate font-heading text-base">{profile.name}</span>
        </Link>

        <div className="flex items-center gap-2">
          <ul className="hidden items-center gap-1 md:flex">
            {NAV.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={[
                      "inline-flex h-10 items-center rounded-base border-2 px-3 text-sm transition-all duration-150",
                      "focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                      active
                        ? "border-border bg-main font-heading text-main-foreground shadow-shadow"
                        : "border-transparent font-base text-foreground hover:border-border hover:bg-background active:scale-[0.97]",
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <ThemeToggle />

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-11 shrink-0 cursor-pointer place-items-center rounded-base border-2 border-border bg-secondary-background text-foreground shadow-shadow transition-all duration-150 active:translate-x-boxShadowX active:translate-y-boxShadowY active:shadow-none focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background md:hidden"
          >
            {open ? (
              <X size={20} weight="bold" aria-hidden />
            ) : (
              <List size={20} weight="bold" aria-hidden />
            )}
          </button>
        </div>
      </nav>

      {open && (
        <div
          id="mobile-nav"
          className="border-t-2 border-border bg-secondary-background md:hidden"
        >
          <ul className="mx-auto max-w-6xl px-4 py-3 sm:px-6">
            {NAV.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={[
                      "flex h-12 items-center rounded-base border-2 px-4 my-1 transition-all duration-150",
                      active
                        ? "border-border bg-main font-heading text-main-foreground shadow-shadow"
                        : "border-transparent font-base text-foreground active:border-border active:bg-background",
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
