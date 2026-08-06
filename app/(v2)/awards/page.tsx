import type { Metadata } from "next";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

import { Badge } from "@/components/nb/badge";
import { Disclosure } from "@/components/v2/disclosure";
import { PageHeader } from "@/components/v2/page-header";
import {
  ctfPlacements,
  hackathonPlacements,
  otherAwards,
  profileLinks,
} from "@/lib/content/awards";

export const metadata: Metadata = {
  title: "Awards",
  description:
    "CTF placements, hackathon results, research grants, and scholarships.",
  alternates: { canonical: "/awards" },
};

// 19 CTF placements is a wall of text. Lead with the strongest few and let
// anyone who cares open the rest.
const CTF_PREVIEW = 6;

export default function AwardsPage() {
  const preview = ctfPlacements.slice(0, CTF_PREVIEW);
  const remainder = ctfPlacements.slice(CTF_PREVIEW);

  return (
    <>
      <PageHeader
        title="Awards"
        lede="Competition results, research funding, and scholarships."
      />

      <div className="mx-auto max-w-6xl space-y-8 px-4 py-12 sm:px-6 sm:py-16">
        <section className="rounded-base border-2 border-border bg-secondary-background p-5 shadow-shadow sm:p-6">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h2 className="text-2xl">Capture the flag</h2>
            <p className="text-sm text-foreground-muted">
              {ctfPlacements.length} placements, roughly $3K in prizes
            </p>
          </div>
          <p className="mt-2 max-w-[60ch] text-sm text-foreground-muted">
            Reverse engineering and cryptography, most weekends.
          </p>

          <ul className="mt-5 flex flex-wrap gap-2">
            {preview.map((p) => (
              <li key={p}>
                <Badge>{p}</Badge>
              </li>
            ))}
          </ul>

          {remainder.length > 0 && (
            <div className="mt-4">
              <Disclosure summary="More placements" count={remainder.length}>
                <ul className="flex flex-wrap gap-2">
                  {remainder.map((p) => (
                    <li key={p}>
                      <Badge variant="neutral">{p}</Badge>
                    </li>
                  ))}
                </ul>
              </Disclosure>
            </div>
          )}
        </section>

        <div className="grid gap-8 md:grid-cols-2">
          <section className="rounded-base border-2 border-border bg-secondary-background p-5 shadow-shadow sm:p-6">
            <h2 className="text-2xl">Hackathons</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {hackathonPlacements.map((p) => (
                <li key={p}>
                  <Badge variant="neutral">{p}</Badge>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-base border-2 border-border bg-secondary-background p-5 shadow-shadow sm:p-6">
            <h2 className="text-2xl">Grants and scholarships</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {otherAwards.map((p) => (
                <li key={p}>
                  <Badge variant="neutral">{p}</Badge>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="border-y-2 border-border bg-main -mx-4 px-4 py-8 sm:-mx-6 sm:px-6">
          <h2 className="text-2xl text-main-foreground">Profiles</h2>
          <ul className="mt-5 flex flex-wrap gap-3">
            {profileLinks.map(({ name, href }) => (
              <li key={name}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex h-11 items-center gap-2 rounded-base border-2 border-border bg-secondary-background px-4 text-sm shadow-shadow transition-all duration-150 hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none active:translate-x-boxShadowX active:translate-y-boxShadowY active:shadow-none active:scale-[0.98] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-border focus-visible:ring-offset-2"
                >
                  {name}
                  <ArrowUpRight
                    weight="bold"
                    className="size-3.5 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
