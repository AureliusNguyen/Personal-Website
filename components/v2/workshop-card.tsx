import { Badge } from "@/components/nb/badge";
import { DetailPopover } from "@/components/v2/detail-popover";
import { PaperStack } from "@/components/v2/paper-stack";
import { ProjectLink } from "@/components/v2/project-card";
import type { Workshop } from "@/lib/content/workshops";

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}

export function WorkshopCard({ workshop }: { workshop: Workshop }) {
  // Same rule as projects: nothing to open means it has not happened yet.
  const upcoming = !workshop.slides && !workshop.recording;

  return (
    <PaperStack>
      <article className="flex h-full flex-col gap-3 rounded-base border-2 border-border bg-secondary-background p-5 text-foreground shadow-shadow transition-shadow duration-200 group-hover:shadow-none">
        <div className="flex flex-wrap items-center gap-2">
          <Badge>#{workshop.number}</Badge>
          <Badge variant="neutral">{workshop.track}</Badge>
          {upcoming && (
            <Badge variant="neutral" className="gap-1.5">
              <span
                aria-hidden
                className="size-1.5 rounded-full bg-main ring-1 ring-border"
              />
              Upcoming
            </Badge>
          )}
          <span className="text-xs text-foreground-muted">
            {workshop.date ? formatDate(workshop.date) : "Date TBA"}
          </span>
        </div>

        <h3 className="text-xl leading-tight sm:text-2xl">{workshop.title}</h3>

        <p className="text-pretty text-sm leading-relaxed text-foreground-muted">
          {workshop.summary}
        </p>

        {workshop.attendees ? (
          <p className="text-sm">
            <span className="font-heading">{workshop.attendees}</span>{" "}
            <span className="text-foreground-muted">attendees</span>
          </p>
        ) : null}

        <div className="mt-auto space-y-3 pt-2">
          <DetailPopover
            id={workshop.id}
            summary={upcoming ? "What we will cover" : "What we covered"}
            count={workshop.covered.length}
          >
            <ol className="space-y-2.5">
              {workshop.covered.map((c, i) => (
                <li
                  key={i}
                  className="border-l-2 border-main pl-3 text-sm leading-relaxed text-foreground-muted"
                >
                  {c}
                </li>
              ))}
            </ol>
          </DetailPopover>

          {!upcoming && (
            <div className="flex flex-wrap gap-2">
              {workshop.slides && (
                <ProjectLink href={workshop.slides} label="Slides" primary />
              )}
              {workshop.recording && (
                <ProjectLink href={workshop.recording} label="Recording" />
              )}
            </div>
          )}
        </div>
      </article>
    </PaperStack>
  );
}
