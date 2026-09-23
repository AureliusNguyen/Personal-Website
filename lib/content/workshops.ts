// C++ Club workshop series, rendered under its activity on /activities.
// A workshop with no slides and no recording is shown as "Upcoming", so the
// planned schedule can be published before a session happens.

export type WorkshopTrack = "Low-Level Design" | "Systems" | "Optimization";

export type Workshop = {
  id: string;
  number: number;
  title: string;
  track: WorkshopTrack;
  /** ISO date, or undefined while the session is still being scheduled. */
  date?: string;
  summary: string;
  /** What the session walks through, in order. Shown behind a click. */
  covered: string[];
  attendees?: number;
  slides?: string;
  recording?: string;
};

export const workshops: Workshop[] = [
  {
    id: "lld-1-lru-cache",
    number: 1,
    title: "Design an LRU Cache",
    track: "Low-Level Design",
    date: "2026-09-22",
    summary:
      "Starts from a classic interview problem and keeps changing the requirements until the textbook answer stops being the right one.",
    covered: [
      "Designing from operations first: what must be fast decides the data structure, not the other way round.",
      "Why O(1) is not the end: rebuilding the hash-map-plus-linked-list solution as a contiguous array with index links and a free list, because Big-O counts operations, not cache misses.",
      "Capacity in bytes instead of entries, and TTL expiry, where one cache has to keep two orderings at once.",
      "Concurrency: get() is logically a read but writes to the recency list, so 64 threads contend on every hit.",
      "Cache pollution from crawlers, and fixing it with 2Q / Segmented LRU so new keys must earn a place.",
      "Scaling out: key ownership across servers, adding and removing nodes, and surviving a crashed shard.",
    ],
    attendees: 20,
    slides:
      "https://docs.google.com/presentation/d/1ViqeBkZp3HayxwydZprvKkrdULpMxuwj2UStUKfCnF8",
    recording:
      "https://drive.google.com/file/d/1oCVPByraRZcOFB1Es3-zf_cHAS-g0SUW/view",
  },
  {
    id: "lld-2-malloc",
    number: 2,
    title: "Build Your Own malloc",
    track: "Low-Level Design",
    summary:
      "What actually happens between a program asking for memory and the kernel handing it over, built up from a bump allocator to free lists.",
    covered: [
      "Bump allocation, free lists, and why fragmentation is the real enemy.",
      "Where the heap comes from: brk, sbrk, and mmap.",
      "Alignment, headers, and the metadata hiding next to every allocation.",
    ],
  },
  {
    id: "sys-1-cd",
    number: 3,
    title: "What Really Happens When You Type cd",
    track: "Systems",
    summary:
      "Following one two-letter command from the keyboard down through the shell and into the kernel.",
    covered: [
      "Why cd has to be a shell builtin and cannot be a separate program.",
      "The chdir system call and a process's current working directory.",
      "How paths are resolved, and what the kernel checks on the way.",
    ],
  },
];
