import type { Metadata } from "next";
import "devicon/devicon.min.css";

import { PageHeader } from "@/components/v2/page-header";
import { categories, type Skill } from "@/lib/content/skills";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Languages, ML and AI frameworks, infrastructure, and security tooling I have shipped with.",
  alternates: { canonical: "/skills" },
};

function SkillChip({ skill }: { skill: Skill }) {
  const Icon = skill.isReactIcon ? skill.icon : null;
  return (
    <li className="inline-flex h-9 items-center gap-2 rounded-base border-2 border-border bg-background px-2.5 text-sm">
      {/* Fixed slot keeps every chip the same height whether the glyph is an
          SVG component or a devicon font glyph. */}
      <span className="inline-flex size-4 shrink-0 items-center justify-center text-base leading-none">
        {Icon ? (
          <Icon className="size-4" />
        ) : (
          <i
            className={skill.icon as string}
            style={{ fontSize: "1rem", lineHeight: 1 }}
          />
        )}
      </span>
      {skill.name}
    </li>
  );
}

export default function SkillsPage() {
  return (
    <>
      <PageHeader
        title="Skills"
        lede="Grouped by where I actually use them, not by how impressive the list looks."
      />

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {categories.map((cat) => (
            <section
              key={cat.title}
              className="rounded-base border-2 border-border bg-secondary-background p-5 shadow-shadow sm:p-6"
            >
              <h2 className="text-xl sm:text-2xl">{cat.title}</h2>
              <p className="mt-1.5 text-sm text-foreground-muted">
                {cat.blurb}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <SkillChip key={s.name} skill={s} />
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
