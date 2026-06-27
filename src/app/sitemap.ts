import type { MetadataRoute } from "next";
import { services, serviceHref } from "@/data/services";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap[number][] = [
    { url: `${base}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/projects`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap[number][] = services.map((s) => ({
    url: `${base}${serviceHref(s.slug)}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const legalRoutes: MetadataRoute.Sitemap[number][] = ["/privacy", "/terms"].map(
    (p) => ({
      url: `${base}${p}`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    }),
  );

  return [...staticRoutes, ...serviceRoutes, ...legalRoutes];
}
