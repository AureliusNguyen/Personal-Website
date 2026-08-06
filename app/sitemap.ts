import type { MetadataRoute } from "next";

import { profile } from "@/lib/content/profile";

const ROUTES = [
  "",
  "/projects",
  "/about",
  "/skills",
  "/awards",
  "/blog",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: `${profile.site}${route}`,
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
}
