import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

import { Badge } from "@/components/nb/badge";
import { Disclosure } from "@/components/v2/disclosure";
import type { Project } from "@/lib/projects";

// Only local screenshots are used. Several projects carry generic Unsplash
// URLs as filler; a stock photo of a stethoscope tells a recruiter nothing,
// so those cards run text-only instead.
function localImage(project: Project) {
  return project.image?.startsWith("/") ? project.image : undefined;
}

export function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  const image = localImage(project);

  return (
    <article
      className={[
        "flex flex-col rounded-base border-2 border-border bg-secondary-background shadow-shadow",
        "transition-transform duration-150 hover:-translate-y-0.5",
        featured ? "sm:flex-row" : "",
      ].join(" ")}
    >
      {image && (
        <div
          className={[
            "relative border-border bg-background",
            featured
              ? "aspect-[16/10] border-b-2 sm:aspect-auto sm:w-1/2 sm:border-b-0 sm:border-r-2"
              : "aspect-[16/10] border-b-2",
          ].join(" ")}
        >
          <Image
            src={image}
            alt={project.imageAlt ?? `${project.title} screenshot`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
            className="object-cover"
          />
        </div>
      )}

      <div className={["flex flex-1 flex-col gap-3 p-5", image && featured ? "sm:p-6" : ""].join(" ")}>
        <div className="flex flex-wrap items-center gap-2">
          <Badge>{project.tag}</Badge>
          <span className="text-xs text-foreground-muted">{project.period}</span>
        </div>

        {/* The title stays plain text. An inline link inside a heading is a
            ~25px tap target, which is miserable on a phone; the link gets its
            own full-height row at the bottom of the card instead. */}
        <h3 className="text-xl leading-tight sm:text-2xl">{project.title}</h3>

        <p className="text-sm leading-relaxed text-foreground-muted">
          {project.blurb}
        </p>

        <ul className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <li key={t}>
              <Badge variant="neutral">{t}</Badge>
            </li>
          ))}
        </ul>

        <div className="mt-auto space-y-3 pt-2">
          <Disclosure summary="What I built" count={project.highlights.length}>
            <ul className="space-y-2.5">
              {project.highlights.map((h, i) => (
                <li
                  key={i}
                  className="border-l-2 border-main pl-3 text-sm leading-relaxed text-foreground-muted"
                >
                  {h}
                </li>
              ))}
            </ul>
          </Disclosure>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="group flex h-11 items-center gap-2 rounded-base border-2 border-border bg-main px-3 text-sm text-main-foreground shadow-shadow transition-all duration-150 hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none active:translate-x-boxShadowX active:translate-y-boxShadowY active:shadow-none active:scale-[0.98] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-border focus-visible:ring-offset-2"
            >
              <span className="font-heading">
                {project.link.includes("github.com") ? "Source" : "Live site"}
              </span>
              <ArrowUpRight
                weight="bold"
                className="ml-auto size-4 shrink-0 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
