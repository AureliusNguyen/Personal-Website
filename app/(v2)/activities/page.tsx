import type { Metadata } from "next";

import { Badge } from "@/components/nb/badge";
import { PageHeader } from "@/components/v2/page-header";
import { WorkshopCard } from "@/components/v2/workshop-card";
import { activities } from "@/lib/content/activities";

export const metadata: Metadata = {
  title: "Activities",
  description:
    "Leadership, teaching, open source, and volunteering, including the interview-focused low-level design workshops I teach at the University of Minnesota C++ Club.",
  alternates: { canonical: "/activities" },
};

export default function ActivitiesPage() {
  return (
    <>
      <PageHeader
        title="Activities"
        lede="Leadership, teaching, open source, and volunteering outside of work and research."
      />

      <div className="mx-auto max-w-6xl space-y-16 px-4 py-12 sm:px-6 sm:py-16">
        {activities.map((a) => {
          const held = (a.workshops ?? []).filter((w) => w.slides || w.recording);
          const upcoming = (a.workshops ?? []).filter(
            (w) => !w.slides && !w.recording,
          );

          return (
            <section key={a.id} aria-labelledby={`${a.id}-title`}>
              <div className="rounded-base border-2 border-border bg-secondary-background p-5 text-foreground shadow-shadow sm:p-6">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge>{a.kind}</Badge>
                  <span className="text-xs text-foreground-muted">{a.period}</span>
                </div>
                <h2 id={`${a.id}-title`} className="mt-3 text-2xl sm:text-3xl">
                  {a.role}
                </h2>
                <p className="mt-1 text-sm">{a.org}</p>
                <p className="mt-4 max-w-[65ch] text-pretty leading-relaxed text-foreground-muted">
                  {a.summary}
                </p>
                <ul className="mt-5 space-y-2.5">
                  {a.points.map((p, i) => (
                    <li
                      key={i}
                      className="max-w-[75ch] border-l-2 border-main pl-3 text-sm leading-relaxed text-foreground-muted"
                    >
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              {held.length > 0 && (
                <div className="mt-10">
                  <h3 className="text-xl sm:text-2xl">Workshops</h3>
                  <div className="mt-5 grid gap-8 md:grid-cols-2 md:gap-10">
                    {held.map((w) => (
                      <WorkshopCard key={w.id} workshop={w} />
                    ))}
                  </div>
                </div>
              )}

              {upcoming.length > 0 && (
                <div className="mt-10">
                  <h3 className="text-xl sm:text-2xl">Coming up</h3>
                  <div className="mt-5 grid gap-8 md:grid-cols-2 md:gap-10">
                    {upcoming.map((w) => (
                      <WorkshopCard key={w.id} workshop={w} />
                    ))}
                  </div>
                </div>
              )}
            </section>
          );
        })}
      </div>
    </>
  );
}
