import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_URL.replace(/\/$/, "");
  const staticRoutes = [
    "",
    "/treatments",
    "/patientjourney",
    "/about",
    "/terms-of-service"
  ];

  const now = new Date();

  return staticRoutes.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8
  }));
}
