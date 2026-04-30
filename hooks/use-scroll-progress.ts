"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Tracks scroll progress through an element.
 *
 * - When the element is TALLER than the viewport (sticky/pinned sections):
 *   progress goes from 0 (element top hits viewport top) to 1 (element bottom
 *   leaves viewport top minus one viewport height — i.e. the end of the
 *   "pinnable" range).
 *
 * - When the element is SHORTER than the viewport (regular reveals):
 *   progress goes from 0 (element about to enter from below) to 1 (element
 *   has fully passed the viewport top).
 */
export function useScrollProgress<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let rafId = 0;
    let last = -1;

    function tick() {
      const node = el;
      if (!node) {
        rafId = requestAnimationFrame(tick);
        return;
      }
      const rect = node.getBoundingClientRect();
      const vh = window.innerHeight || 1;

      let p: number;
      if (rect.height > vh) {
        // Pinned range: how far the user has scrolled past the section's top edge.
        const scrollable = rect.height - vh;
        const offset = -rect.top;
        p = offset / scrollable;
      } else {
        // Standard viewport traversal.
        const total = rect.height + vh;
        const seen = vh - rect.top;
        p = seen / total;
      }
      p = Math.max(0, Math.min(1, p));

      if (Math.abs(p - last) > 0.0008) {
        last = p;
        setProgress(p);
      }
      rafId = requestAnimationFrame(tick);
    }

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return { ref, progress };
}
