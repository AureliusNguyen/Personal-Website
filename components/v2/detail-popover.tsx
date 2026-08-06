import { CaretDown } from "@phosphor-icons/react/dist/ssr";

/**
 * Detail shown in a popover rather than expanded inline.
 *
 * Inline expansion pushed the card taller than its neighbours and broke the
 * grid's rhythm. This renders into the browser's top layer instead, so the
 * panel overlays the page, cannot be clipped by the card, and costs zero
 * layout shift. Cards stay a uniform height whether open or not.
 *
 * Uses the native Popover API, not a tooltip: a hover tooltip is unreachable
 * on a phone. `popover="auto"` gives click-to-open, click-outside-to-close,
 * Esc-to-close, focus management, and correct semantics with no JS at all.
 *
 * Positioning uses CSS anchor positioning where the browser supports it,
 * pinning the panel under its trigger. Where it does not, the UA default
 * centres the panel in the viewport, which is a fine fallback.
 */
export function DetailPopover({
  id,
  summary,
  count,
  children,
}: {
  id: string;
  summary: string;
  count?: number;
  children: React.ReactNode;
}) {
  const popoverId = `detail-${id}`;

  return (
    <div className="detail-popover-root relative">
      <button
        type="button"
        popoverTarget={popoverId}
        style={{ anchorName: `--anchor-${id}` } as React.CSSProperties}
        className="detail-trigger flex h-11 w-full cursor-pointer items-center gap-2 rounded-base border-2 border-border bg-background px-3 text-sm text-foreground shadow-shadow transition-all duration-150 hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none active:translate-x-boxShadowX active:translate-y-boxShadowY active:shadow-none active:scale-[0.98] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <CaretDown weight="bold" className="detail-caret size-4 shrink-0" />
        <span className="font-heading">{summary}</span>
        {typeof count === "number" && (
          // Notification-badge meaning: clears once the panel is open and the
          // items have been seen, returns when it closes again.
          <span className="detail-count ml-auto rounded-base border-2 border-border bg-main px-1.5 text-xs text-main-foreground">
            {count}
          </span>
        )}
      </button>

      <div
        id={popoverId}
        popover="auto"
        style={{ positionAnchor: `--anchor-${id}` } as React.CSSProperties}
        className="detail-panel"
      >
        {children}
      </div>
    </div>
  );
}
