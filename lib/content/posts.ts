export type Post = {
  slug: string;
  title: string;
  summary: string;
  /** ISO date, e.g. "2026-09-14". */
  date: string;
  tags: string[];
  /** Omit while a post is still a draft; /blog only lists posts with a URL. */
  href?: string;
};

/**
 * Empty on purpose. Add entries here and /blog switches from its empty state
 * to a real list with no other code change.
 *
 * External posts (Medium, Substack, a lab writeup) just need `href`. If you
 * later want the posts hosted here instead, this is the seam to swap for MDX.
 */
export const posts: Post[] = [];

/** Topics the blog is expected to cover, shown while there are no posts. */
export const plannedTopics = [
  "Agentic systems in production",
  "Verification & AI governance",
  "Federated learning security",
  "CTF writeups",
];
