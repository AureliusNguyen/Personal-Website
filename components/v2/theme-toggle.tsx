"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "@phosphor-icons/react";

/**
 * Light/dark switch.
 *
 * Every colour here is a theme token, never a literal. A hardcoded
 * `text-black` or `bg-white` on this button is exactly how a toggle ends up
 * invisible in one of the two themes it is meant to control.
 *
 * The icon sits on `bg-main`, so it takes `text-main-foreground` rather than
 * inheriting the page foreground - inheriting would put near-white on crimson
 * in dark mode.
 */
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // The server cannot know the stored theme, so the icon is only correct
  // after mount. Rendering a fixed-size placeholder keeps the nav from
  // shifting when it swaps in.
  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={
        mounted
          ? `Switch to ${isDark ? "light" : "dark"} mode`
          : "Toggle colour theme"
      }
      title={mounted ? `Switch to ${isDark ? "light" : "dark"} mode` : undefined}
      className="grid size-11 shrink-0 cursor-pointer place-items-center rounded-base border-2 border-border bg-main text-main-foreground shadow-shadow transition-all duration-150 hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none active:translate-x-boxShadowX active:translate-y-boxShadowY active:shadow-none active:scale-[0.95] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      {/* Both icons render; visibility is driven by the theme class so the
          correct one is already painted before hydration finishes. */}
      <Sun
        size={20}
        weight="bold"
        aria-hidden
        className={mounted && isDark ? "hidden" : "block"}
      />
      <Moon
        size={20}
        weight="bold"
        aria-hidden
        className={mounted && isDark ? "block" : "hidden"}
      />
    </button>
  );
}
