"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CaretDoubleLeft, House, List, X } from "@phosphor-icons/react";

import { ThemeToggle } from "@/components/v2/theme-toggle";

const NAV = [
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Awards", href: "/awards" },
  { label: "Activities", href: "/activities" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  // Desktop row of page buttons, folded into one toggle by default.
  const [expanded, setExpanded] = useState(false);

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
        </Link>

        <div className="flex items-center gap-2">
          {/* Desktop page buttons. They unfold leftward out of the toggle
              and fold back into it.

              Width is animated with a grid track going 0fr -> 1fr rather than
              `width`, which cannot transition to an intrinsic size. The track
              is anchored on the right beside the toggle, so growing it pushes
              the row out to the left.

              The row is right-anchored inside the clipping box, so the moving
              edge is the far (left) one: opening uncovers the button next to
              the toggle first, closing covers the far button first. Each
              button also fades and slides, staggered in the same order as the
              edge. Closing is the opening played backwards: same durations,
              reversed stagger, ease-in instead of ease-out. */}
          <div
            id="desktop-nav"
            className={[
              "hidden lg:grid",
              "transition-[grid-template-columns] duration-500",
              expanded
                ? "grid-cols-[1fr] ease-[cubic-bezier(0.22,1,0.36,1)]"
                : "grid-cols-[0fr] ease-[cubic-bezier(0.64,0,0.78,0)]",
            ].join(" ")}
          >
            {/* overflow-hidden does the clipping; the vertical padding and
                negative margin give the hard shadows and focus rings room so
                they are not cut off along with the hidden buttons. */}
            <div className="-my-2 flex min-w-0 justify-end overflow-hidden py-2">
              <ul
                // Folded buttons must not be reachable by Tab.
                inert={!expanded}
                className="flex shrink-0 items-center gap-1 whitespace-nowrap pl-1 pr-2"
              >
                {NAV.map((item, i) => {
                  const active = pathname === item.href;
                  const fromToggle = NAV.length - 1 - i;
                  return (
                    <li
                      key={item.href}
                      style={{
                        transitionDelay: `${(expanded ? fromToggle : i) * 40}ms`,
                      }}
                      className={[
                        "transition-[opacity,transform] duration-300",
                        expanded
                          ? "translate-x-0 opacity-100 ease-[cubic-bezier(0.22,1,0.36,1)]"
                          : "translate-x-4 opacity-0 ease-[cubic-bezier(0.64,0,0.78,0)]",
                      ].join(" ")}
                    >
                      <Link
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        // Same physics as every other button on the site: 2px
                        // border, hard shadow, drops into the shadow on hover
                        // and press. Fixed width with a centred label, so every
                        // button matches whatever the word, and the bolder
                        // active weight cannot nudge its neighbours.
                        className={[
                          "inline-flex h-10 w-24 items-center justify-center rounded-base border-2 border-border px-2 text-sm shadow-shadow transition-all duration-150",
                          "hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none",
                          "active:translate-x-boxShadowX active:translate-y-boxShadowY active:shadow-none active:scale-[0.98]",
                          "focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                          active
                            ? "bg-main font-heading text-main-foreground"
                            : "bg-background font-base text-foreground",
                        ].join(" ")}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            aria-controls="desktop-nav"
            aria-label={expanded ? "Hide page links" : "Show page links"}
            title={expanded ? "Hide page links" : "Show page links"}
            className="group relative hidden size-11 shrink-0 cursor-pointer place-items-center rounded-base border-2 border-border bg-background text-foreground shadow-shadow transition-all duration-150 hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none active:translate-x-boxShadowX active:translate-y-boxShadowY active:shadow-none active:scale-[0.95] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background lg:grid"
          >
            {/* While folded: a crimson ring pings outward from the button and
                the arrows sway left, a steady "press me, it opens this way".
                Both stop once open, and pause under the cursor. */}
            {!expanded && (
              <span
                aria-hidden
                className="nav-ping pointer-events-none absolute -inset-0.5 rounded-base border-2 border-main"
              />
            )}
            {/* Points left while folded (this opens that way), turns to point
                right when open (this closes that way). */}
            <span
              className={[
                "grid place-items-center transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                expanded ? "rotate-180" : "rotate-0",
              ].join(" ")}
            >
              <CaretDoubleLeft
                size={20}
                weight="bold"
                aria-hidden
                className={expanded ? "" : "nav-sway"}
              />
            </span>
          </button>

          <ThemeToggle />

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-11 shrink-0 cursor-pointer place-items-center rounded-base border-2 border-border bg-secondary-background text-foreground shadow-shadow transition-all duration-150 active:translate-x-boxShadowX active:translate-y-boxShadowY active:shadow-none focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background lg:hidden"
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
          className="border-t-2 border-border bg-secondary-background lg:hidden"
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
                      "my-2 flex h-12 items-center rounded-base border-2 border-border px-4 shadow-shadow transition-all duration-150",
                      "active:translate-x-boxShadowX active:translate-y-boxShadowY active:shadow-none active:scale-[0.99]",
                      active
                        ? "bg-main font-heading text-main-foreground"
                        : "bg-background font-base text-foreground",
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
