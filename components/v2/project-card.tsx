import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

import { Badge } from "@/components/nb/badge";
import { DetailPopover } from "@/components/v2/detail-popover";
import { PaperStack } from "@/components/v2/paper-stack";
import type { Project } from "@/lib/projects";

// Only local screenshots are used. Several projects carry generic Unsplash
// URLs as filler; a stock photo of a stethoscope tells a recruiter nothing,
// so those cards run text-only instead.
function localImage(project: Project) {
  return project.image?.startsWith("/") ? project.image : undefined;
}

function ProjectLink({
  href,
  label,
  primary = false,
}: {
  href: string;
  label: string;
  primary?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={[
        "group inline-flex h-11 flex-1 items-center gap-2 rounded-base border-2 border-border px-3 text-sm shadow-shadow",
        "cursor-pointer transition-all duration-150",
        "hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none",
        "active:translate-x-boxShadowX active:translate-y-boxShadowY active:shadow-none active:scale-[0.98]",
        "focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        primary
          ? "bg-main text-main-foreground"
          : "bg-background text-foreground",
      ].join(" ")}
    >
      <span className="font-heading">{label}</span>
      <ArrowUpRight
        weight="bold"
        className="ml-auto size-4 shrink-0 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </a>
  );
}

export function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  const image = localImage(project);

  // Nothing public to click means the work is not shipped yet. Derived rather
  // than hand-maintained so a project cannot claim to be done while offering
  // no way to see it, and so adding a link later clears the badge on its own.
  const inProgress =
    project.status === "in-progress" ||
    (project.status !== "shipped" && !project.demo && !project.repo);

  return (
    <PaperStack>
      <article
        className={[
          // The shadow drops on hover. It points down-right, so once the card
          // slides up-left off the stack it would land inside the gap on one
          // side only and make the fan look lopsided. The bottom sheet carries
          // the shadow instead while the card is lifted.
          "flex h-full flex-col overflow-hidden rounded-base border-2 border-border bg-secondary-background text-foreground shadow-shadow transition-shadow duration-200 group-hover:shadow-none",
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
              // Anchor top-left. On the featured card the image column stretches
              // to match the text column, and a centred crop cuts the title off
              // the left edge once the disclosure is open.
              className="object-cover object-left-top"
            />
          </div>
        )}

        <div
          className={[
            "flex flex-1 flex-col gap-3 p-5",
            image && featured ? "sm:p-6" : "",
          ].join(" ")}
        >
          <div className="flex flex-wrap items-center gap-2">
            <Badge>{project.tag}</Badge>
            {inProgress && (
              // A real semantic state, so it gets a live dot. Neutral fill
              // rather than crimson: this is a status note, not a headline,
              // and it must not outrank the category badge beside it.
              <Badge variant="neutral" className="gap-1.5">
                <span
                  aria-hidden
                  className="size-1.5 rounded-full bg-main ring-1 ring-border"
                />
                In progress
              </Badge>
            )}
            <span className="text-xs text-foreground-muted">
              {project.period}
            </span>
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
            <DetailPopover
              id={project.id}
              summary="What I built"
              count={project.highlights.length}
            >
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
            </DetailPopover>

            {(project.demo || project.repo) && (
              <div className="flex flex-wrap gap-2">
                {project.demo && (
                  <ProjectLink href={project.demo} label="Live app" primary />
                )}
                {project.repo && (
                  <ProjectLink href={project.repo} label="Source" />
                )}
              </div>
            )}
          </div>
        </div>
      </article>
    </PaperStack>
  );
}
