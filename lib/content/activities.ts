import { workshops, type Workshop } from "@/lib/content/workshops";

// Things outside work and research: leadership, teaching, open source,
// volunteering. Each activity can carry its own sub-items (workshops today,
// merged PRs or events later) without the page needing to change.

export type ActivityKind = "Leadership" | "Open Source" | "Volunteering";

export type Activity = {
  id: string;
  kind: ActivityKind;
  role: string;
  org: string;
  period: string;
  summary: string;
  points: string[];
  workshops?: Workshop[];
};

export const activities: Activity[] = [
  {
    id: "cpp-club",
    kind: "Leadership",
    role: "Vice President",
    org: "C++ Club, University of Minnesota",
    period: "Aug 2026 - Present",
    summary:
      "I run a workshop series on the low-level design problems that come up in technical interviews: one familiar question per session, pushed until the textbook answer stops being the right one.",
    points: [
      "Designed and teach an interview-focused low-level design series that turns standard questions into lessons on memory layout, concurrency, and how changing requirements reshape a design.",
      "Taught the first session, Design an LRU Cache, to 20 students, carrying the textbook O(1) answer through cache-line-aware layout, TTL expiry, lock contention, 2Q / Segmented LRU, and distributed sharding.",
      "Publish every deck and recording openly so members can revisit a session before their own interviews.",
    ],
    workshops,
  },
];
