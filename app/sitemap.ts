import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants/site";
import { getAllGuideSlugs } from "@/lib/content/guides/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_URL.replace(/\/$/, "");
  const staticRoutes = [
    "",
    "/treatments",
    "/about",
    "/guides",
    "/transparency",
    "/safety",
    "/terms-of-service"
  ];

  const now = new Date();

  return [
    ...staticRoutes.map((path) => ({
      url: `${base}${path}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8
    })),
    ...getAllGuideSlugs().map((slug) => ({
      url: `${base}/guides/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6
    }))
  ];
}
