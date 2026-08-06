import type { Metadata } from "next";

import { PageHeader } from "@/components/v2/page-header";
import { ProjectCard } from "@/components/v2/project-card";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Verification platforms, zero-knowledge federated learning, a from-scratch key-value store, and shipped AI products.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        title="Projects"
        lede="Research systems and shipped products. Each card opens to the detail if you want it."
      />

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>
    </>
  );
}
