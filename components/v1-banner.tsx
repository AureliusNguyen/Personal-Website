import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

/**
 * Return path from the archived v1 site to the current one.
 *
 * Deliberately bottom-LEFT and fixed: v1's nav is fixed top-0 and its scroll
 * rail is fixed right-center, so this is the only edge left free. Nothing in
 * the v1 tree had to change to make room for it.
 */
export function V1Banner() {
  return (
    <Link
      href="/"
      className="group fixed bottom-4 left-4 z-[60] inline-flex h-11 items-center gap-2 rounded-full px-4 transition-transform duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97]"
      style={{
        background: "oklch(0.07 0.01 25 / 0.92)",
        border: "1px solid var(--border-strong)",
        backdropFilter: "blur(8px)",
      }}
    >
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground group-hover:text-foreground transition-colors">
        Archived v1
      </span>
      <span
        aria-hidden
        className="h-3 w-px"
        style={{ background: "var(--border-strong)" }}
      />
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground group-hover:text-primary transition-colors">
        Current site
      </span>
      <ArrowUpRight
        weight="bold"
        className="h-3 w-3 text-primary transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </Link>
  );
}
