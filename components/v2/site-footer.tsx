import Link from "next/link";
import { ClockCounterClockwise } from "@phosphor-icons/react/dist/ssr";
import { profile } from "@/lib/content/profile";

/**
 * Deliberately link-light. The contact page owns every way to reach Leo, so
 * repeating GitHub, LinkedIn, and email down here only competes with it.
 *
 * The one link that stays is the v1 archive. This footer is the only place it
 * is discoverable, and /v1 is noindex so search will never surface it either.
 */
export function SiteFooter() {
  return (
    <footer className="border-t-2 border-border bg-secondary-background text-foreground">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-heading text-lg">{profile.name}</p>
            <p className="mt-1 max-w-sm text-sm text-foreground-muted">
              {profile.role} in {profile.location}.
            </p>
          </div>

          <Link
            href="/v1"
            className="inline-flex h-10 w-fit cursor-pointer items-center gap-2 rounded-base border-2 border-border bg-background px-3 text-xs text-foreground shadow-shadow transition-all duration-150 hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none active:translate-x-boxShadowX active:translate-y-boxShadowY active:shadow-none active:scale-[0.98] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <ClockCounterClockwise weight="bold" className="size-4" />
            Visit the v1 site
          </Link>
        </div>

        <p className="mt-8 border-t-2 border-border pt-6 text-center text-xs text-foreground-muted">
          Built with Love <span aria-label="love">&#10084;&#65039;</span> (c){" "}
          {new Date().getFullYear()} {profile.name}.
        </p>
      </div>
    </footer>
  );
}
