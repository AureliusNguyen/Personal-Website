import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FilePdf } from "@phosphor-icons/react/dist/ssr";

import { Button } from "@/components/nb/button";
import { ProjectCard } from "@/components/v2/project-card";
import { profile, RESUME_PATH } from "@/lib/content/profile";
import { projects } from "@/lib/projects";
import { hasResume } from "@/lib/resume";

const FEATURED = ["l33t-kv", "d7-agent-safety", "zk-fl-medical"];

export default function Home() {
  const featured = FEATURED.map(
    (id) => projects.find((p) => p.id === id)!,
  ).filter(Boolean);
  const [lead, ...rest] = featured;
  const resume = hasResume();

  return (
    <>
      {/* Hero: asymmetric split, portrait carries the visual weight */}
      <section className="border-b-2 border-border bg-secondary-background">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 pt-12 pb-14 sm:px-6 sm:pt-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16 lg:pb-20">
          <div>
            <h1 className="text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">
              Aurelius
              <br />
              Nguyen
            </h1>

            <p className="mt-5 inline-block rounded-base border-2 border-border bg-main px-3 py-1.5 font-heading text-sm text-main-foreground shadow-shadow sm:text-base">
              {profile.role}
            </p>

            <p className="mt-6 max-w-[46ch] text-lg leading-relaxed text-foreground-muted">
              I build machine learning systems that ship with proofs, not just
              accuracy numbers.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/projects">
                  View work
                  <ArrowRight weight="bold" />
                </Link>
              </Button>

              {resume && (
                <Button asChild size="lg" variant="neutral">
                  <a href={RESUME_PATH} target="_blank" rel="noreferrer">
                    <FilePdf weight="bold" />
                    Resume
                  </a>
                </Button>
              )}
            </div>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-sm rounded-base border-2 border-border bg-background shadow-shadow lg:max-w-none">
            <Image
              src="/images/pfp.png"
              alt={`${profile.name}, ${profile.role}`}
              fill
              priority
              sizes="(max-width: 1024px) 24rem, 40vw"
              className="rounded-[3px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Selected work: one lead card, two supporting */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-3xl sm:text-4xl">Selected work</h2>
          <Link
            href="/projects"
            className="group inline-flex h-10 items-center gap-1.5 text-sm underline decoration-2 underline-offset-4 transition-colors hover:text-main focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-border"
          >
            All {projects.length} projects
            <ArrowRight
              weight="bold"
              className="size-4 transition-transform duration-150 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        <div className="mt-8 grid gap-6">
          <ProjectCard project={lead} featured />
          <div className="grid gap-6 md:grid-cols-2">
            {rest.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Focus band: full-bleed colour, one idea, one exit */}
      <section className="border-y-2 border-border bg-main">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <p className="max-w-[38ch] text-2xl leading-tight text-main-foreground sm:text-3xl lg:text-4xl">
            <span className="font-heading">Right now</span> I am extending an
            NSF-funded federated learning testbed so attacks and defenses plug
            in without forking the training loop.
          </p>
          <Link
            href="/about"
            className="mt-8 inline-flex h-12 items-center gap-2 rounded-base border-2 border-border bg-secondary-background px-6 font-heading text-foreground shadow-shadow transition-all duration-150 hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none active:translate-x-boxShadowX active:translate-y-boxShadowY active:shadow-none active:scale-[0.98] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-border focus-visible:ring-offset-2"
          >
            Read the background
            <ArrowRight weight="bold" className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
