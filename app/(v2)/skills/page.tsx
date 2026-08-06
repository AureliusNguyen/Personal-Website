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
    // Chips are not links, so the hover is feedback that the grid is alive
    // rather than an affordance promising navigation: it lifts into a hard
    // shadow and the label goes bold, no colour change.
    <li className="group inline-flex h-9 cursor-default items-center gap-2 rounded-base border-2 border-border bg-background px-2.5 text-sm text-foreground transition-all duration-150 hover:-translate-x-boxShadowX hover:-translate-y-boxShadowY hover:shadow-shadow hover:font-heading">
      {/* Fixed slot keeps every chip the same height whether the glyph is an
          SVG component or a devicon font glyph. */}
      <span className="inline-flex size-4 shrink-0 items-center justify-center text-base leading-none transition-transform duration-150 group-hover:scale-110">
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
        lede="Languages, ML and AI frameworks, infrastructure, and security tooling I have shipped with."
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
