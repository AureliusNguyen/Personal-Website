import Link from "next/link";
import { ArrowUpRight, ClockCounterClockwise } from "@phosphor-icons/react/dist/ssr";
import { profile, socials } from "@/lib/content/profile";

export function SiteFooter() {
  return (
    <footer className="border-t-2 border-border bg-secondary-background text-foreground">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-heading text-lg">{profile.name}</p>
            <p className="mt-1 max-w-sm text-sm text-foreground-muted">
              {profile.role} in {profile.location}.
            </p>
          </div>

          <ul className="flex flex-col gap-1 sm:items-end">
            {socials.map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noreferrer" : undefined}
                  className="group inline-flex h-10 items-center gap-1.5 rounded-base px-1 text-sm underline decoration-2 underline-offset-4 transition-colors hover:text-main focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {s.name}
                  <ArrowUpRight
                    weight="bold"
                    className="size-3.5 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t-2 border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-foreground-muted">
            Built with Next.js and Tailwind. (c) {new Date().getFullYear()}{" "}
            {profile.name}.
          </p>

          <Link
            href="/v1"
            className="inline-flex h-10 w-fit items-center gap-2 rounded-base border-2 border-border bg-background px-3 text-xs text-foreground shadow-shadow transition-all duration-150 hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none active:translate-x-boxShadowX active:translate-y-boxShadowY active:shadow-none active:scale-[0.98] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <ClockCounterClockwise weight="bold" className="size-4" />
            Visit the v1 site
          </Link>
        </div>
      </div>
    </footer>
  );
}
