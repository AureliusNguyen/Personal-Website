import { CaretDown } from "@phosphor-icons/react/dist/ssr";

/**
 * Progressive disclosure built on native <details>. The whole point of the
 * redesign is that a recruiter sees a short page and opens only what they
 * care about, so this had to be cheap: no state, no hydration, no JS at all.
 * It also gets keyboard support and correct screen-reader semantics for free.
 */
export function Disclosure({
  summary,
  count,
  children,
}: {
  summary: string;
  count?: number;
  children: React.ReactNode;
}) {
  return (
    <details className="group">
      <summary className="flex h-11 cursor-pointer list-none items-center gap-2 rounded-base border-2 border-border bg-background px-3 text-sm text-foreground transition-all duration-150 hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none active:scale-[0.98] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background shadow-shadow [&::-webkit-details-marker]:hidden">
        <CaretDown
          weight="bold"
          className="size-4 shrink-0 transition-transform duration-200 group-open:rotate-180"
        />
        <span className="font-heading">{summary}</span>
        {/* Reads like a notification badge: the count says "there are N things
            you have not seen", so it clears once you open and see them, and
            comes back when collapsed. */}
        {typeof count === "number" && (
          <span className="ml-auto rounded-base border-2 border-border bg-main px-1.5 text-xs text-main-foreground group-open:hidden">
            {count}
          </span>
        )}
      </summary>
      <div className="pt-4">{children}</div>
    </details>
  );
}
