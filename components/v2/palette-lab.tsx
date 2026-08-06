"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

/**
 * TEMPORARY. A dev-only switcher for choosing between the three dark
 * palettes. Renders nothing in a production build, so it cannot ship by
 * accident.
 *
 * Delete this file, its import in app/(v2)/layout.tsx, and the two losing
 * [data-dark] blocks in globals.css once a palette is chosen.
 */
const PALETTES = [
  { id: "felt", label: "Jade Felt", swatch: "#0b2b23", edge: "#f2f7f3" },
  { id: "lacquer", label: "Lacquer", swatch: "#0d1210", edge: "#7fd9b4" },
  { id: "table", label: "Jade Table", swatch: "#07231d", edge: "#cdeadd" },
] as const;

const KEY = "dark-palette";

export function PaletteLab() {
  const { setTheme, resolvedTheme } = useTheme();
  const [active, setActive] = useState<string>("felt");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(KEY) ?? "felt";
    apply(saved);
    setActive(saved);
    setMounted(true);
  }, []);

  function apply(id: string) {
    const root = document.documentElement;
    if (id === "felt") root.removeAttribute("data-dark");
    else root.setAttribute("data-dark", id);
    localStorage.setItem(KEY, id);
  }

  function pick(id: string) {
    apply(id);
    setActive(id);
    // Picking a dark palette while in light mode shows nothing, so flip.
    if (resolvedTheme !== "dark") setTheme("dark");
  }

  if (process.env.NODE_ENV !== "development") return null;
  if (!mounted) return null;

  return (
    <div className="fixed bottom-4 left-4 z-[90] rounded-base border-2 border-border bg-secondary-background p-2 text-foreground shadow-shadow">
      <p className="px-1 pb-2 text-[10px] uppercase tracking-widest opacity-70">
        Dark palette (dev only)
      </p>
      <div className="flex flex-col gap-1">
        {PALETTES.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => pick(p.id)}
            aria-pressed={active === p.id}
            className={[
              "flex cursor-pointer items-center gap-2 rounded-base border-2 px-2 py-1.5 text-xs transition-all duration-150",
              active === p.id
                ? "border-border bg-main font-heading text-main-foreground"
                : "border-transparent hover:border-border",
            ].join(" ")}
          >
            <span
              aria-hidden
              className="size-4 shrink-0 rounded-[3px] border-2"
              style={{ background: p.swatch, borderColor: p.edge }}
            />
            {p.label}
          </button>
        ))}
      </div>
    </div>
  );
}
