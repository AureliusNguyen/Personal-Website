import type { Metadata } from "next";

import { Badge } from "@/components/nb/badge";
import { Disclosure } from "@/components/v2/disclosure";
import { PageHeader } from "@/components/v2/page-header";
import {
  coursework,
  education,
  experiences,
  expertise,
} from "@/lib/content/experience";
import { profile } from "@/lib/content/profile";

export const metadata: Metadata = {
  title: "About",
  description: profile.positioning,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About" lede={profile.positioning} />

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Left rail: who and where */}
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl">Education</h2>
              <div className="mt-4 rounded-base border-2 border-border bg-secondary-background p-5 shadow-shadow">
                <p className="font-heading text-lg leading-snug">
                  {education.degree}
                </p>
                <p className="mt-2 text-sm">{education.school}</p>
                <p className="mt-1 text-sm text-foreground-muted">
                  GPA {education.gpa}
                </p>
                <p className="text-sm text-foreground-muted">
                  {education.period}
                </p>

                <div className="mt-5">
                  <Disclosure summary="Coursework" count={coursework.length}>
                    <ul className="flex flex-wrap gap-1.5">
                      {coursework.map((c) => (
                        <li key={c}>
                          <Badge variant="neutral">{c}</Badge>
                        </li>
                      ))}
                    </ul>
                  </Disclosure>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl">What I work on</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {expertise.map((e) => (
                  <li key={e}>
                    <Badge>{e}</Badge>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl">In short</h2>
              <div className="mt-4 space-y-3">
                {profile.summary.map((line) => (
                  <p
                    key={line}
                    className="max-w-[60ch] leading-relaxed text-foreground-muted"
                  >
                    {line}
                  </p>
                ))}
              </div>
            </section>
          </div>

          {/* Right: the record */}
          <section>
            <h2 className="text-2xl">Experience</h2>
            <ol className="mt-4 space-y-5">
              {experiences.map((exp) => (
                <li
                  key={exp.id}
                  className="rounded-base border-2 border-border bg-secondary-background p-5 shadow-shadow"
                >
                  <p className="text-xs text-foreground-muted">{exp.period}</p>
                  <h3 className="mt-1.5 text-lg leading-snug sm:text-xl">
                    {exp.title}
                  </h3>
                  <p className="mt-1.5 text-sm">{exp.org}</p>
                  <p className="text-sm text-foreground-muted">
                    {exp.location}
                  </p>

                  <div className="mt-4">
                    <Disclosure summary="Detail" count={exp.points.length}>
                      <ul className="space-y-2.5">
                        {exp.points.map((p, i) => (
                          <li
                            key={i}
                            className="border-l-2 border-main pl-3 text-sm leading-relaxed text-foreground-muted"
                          >
                            {p}
                          </li>
                        ))}
                      </ul>
                    </Disclosure>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        </div>
      </div>
    </>
  );
}
