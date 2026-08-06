import type { MetadataRoute } from "next";

import { profile } from "@/lib/content/profile";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // The archive stays reachable by link, just not through search.
      disallow: "/v1",
    },
    sitemap: `${profile.site}/sitemap.xml`,
  };
}
