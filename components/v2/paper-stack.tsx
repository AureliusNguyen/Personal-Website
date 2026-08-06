/**
 * Stacked-paper hover.
 *
 * At rest all three layers sit exactly on top of each other, so the card looks
 * like a single sheet. On hover the content card slides up-left off the stack,
 * revealing two blank sheets underneath. The middle sheet trails at half the
 * distance so the result is a real three-layer fan rather than a card floating
 * over one merged rectangle; the bottom sheet never moves.
 *
 * The card keeps its own hard shadow pointing down-right, which is what makes
 * it read as lifted off the stack rather than as another sheet in it.
 *
 * Sheets are real elements, not ::before/::after. Pseudo-elements would need
 * `z-index: -1`, and the moment the card gains a transform it creates a
 * stacking context and the sheets pop in front of it. DOM order is reliable.
 *
 * Sheets are aria-hidden and pointer-events-none: purely decorative, and they
 * must never intercept a click meant for the card.
 */
export function PaperStack({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const sheet =
    "pointer-events-none absolute inset-0 rounded-base border-2 border-border bg-secondary-background transition-transform duration-200 ease-out";

  return (
    <div className={`group relative h-full ${className}`}>
      {/* Bottom sheet: anchored, never moves. */}
      <span aria-hidden className={sheet} />
      {/* Middle sheet: trails the card at half distance. */}
      <span
        aria-hidden
        className={`${sheet} group-hover:-translate-x-1.5 group-hover:-translate-y-1.5`}
      />
      {/* The real card, which is what actually slides off the stack. */}
      <div className="relative h-full transition-transform duration-200 ease-out group-hover:-translate-x-3 group-hover:-translate-y-3">
        {children}
      </div>
    </div>
  );
}
