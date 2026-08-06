import type { Metadata } from "next";
import { ArrowUpRight, NotePencil } from "@phosphor-icons/react/dist/ssr";

import { Badge } from "@/components/nb/badge";
import { Button } from "@/components/nb/button";
import { PageHeader } from "@/components/v2/page-header";
import { plannedTopics, posts } from "@/lib/content/posts";
import { profile } from "@/lib/content/profile";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Writing on agentic systems, AI governance and verification, federated learning security, and CTF writeups.",
  alternates: { canonical: "/blog" },
};

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default function BlogPage() {
  const published = posts.filter((p) => p.href);

  return (
    <>
      <PageHeader
        title="Blog"
        lede="Notes on what I learned, built,and thought about. All written without AI."
      />

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        {published.length === 0 ? (
          // Empty state rather than a hidden route: the nav link exists, so
          // landing here has to explain itself and offer somewhere to go.
          <div className="mx-auto max-w-2xl rounded-base border-2 border-border bg-secondary-background p-6 text-center shadow-shadow sm:p-10">
            <span className="mx-auto grid size-14 place-items-center rounded-base border-2 border-border bg-main text-main-foreground">
              <NotePencil size={26} weight="bold" aria-hidden />
            </span>

            <h2 className="mt-6 text-2xl sm:text-3xl">Nothing published yet</h2>
            <p className="mx-auto mt-3 max-w-[46ch] text-balance text-foreground-muted">
              I am writing the first few now. They will land here as they go
              out.
            </p>

            <p className="mt-8 text-sm font-heading">What to expect</p>
            <ul className="mt-3 flex flex-wrap justify-center gap-2">
              {plannedTopics.map((t) => (
                <li key={t}>
                  <Badge variant="neutral">{t}</Badge>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button asChild variant="neutral">
                <a href={`mailto:${profile.email}?subject=Ping%20me%20when%20you%20publish`}>
                  Email me when the first one lands
                </a>
              </Button>
            </div>
          </div>
        ) : (
          <ul className="grid gap-8 md:grid-cols-2 md:gap-10">
            {published.map((post) => (
              <li key={post.slug}>
                <a
                  href={post.href}
                  target={post.href?.startsWith("http") ? "_blank" : undefined}
                  rel={post.href?.startsWith("http") ? "noreferrer" : undefined}
                  className="group flex h-full flex-col gap-3 rounded-base border-2 border-border bg-secondary-background p-5 text-foreground shadow-shadow transition-all duration-150 hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none active:translate-x-boxShadowX active:translate-y-boxShadowY active:shadow-none active:scale-[0.99] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <span className="text-xs text-foreground-muted">
                    {formatDate(post.date)}
                  </span>

                  <span className="flex items-start gap-2 font-heading text-xl leading-snug">
                    {post.title}
                    <ArrowUpRight
                      weight="bold"
                      className="mt-1 size-4 shrink-0 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>

                  <span className="text-pretty text-sm leading-relaxed text-foreground-muted">
                    {post.summary}
                  </span>

                  <span className="mt-auto flex flex-wrap gap-1.5 pt-2">
                    {post.tags.map((t) => (
                      <Badge key={t} variant="neutral">
                        {t}
                      </Badge>
                    ))}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
