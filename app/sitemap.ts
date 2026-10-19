import type { MetadataRoute } from "next";
import { categories } from "@/data/categories";
import { stories } from "@/data/stories";
import { SITE_URL } from "@/lib/seo";

/**
 * Every public page. Left out on purpose: /thank-you and /api (not for search)
 * and /login and /signup (redirects).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const page = (path: string, priority: number) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    priority,
  });

  return [
    page("/", 1.0),
    page("/services", 0.9),
    ...categories.map((c) => page(`/services/${c.slug}`, 0.7)),
    page("/how-it-works", 0.7),
    page("/request-a-project", 0.7),
    page("/about", 0.7),
    page("/skills-program", 0.7),
    page("/skills-program/apply", 0.7),
    page("/contact", 0.7),
    page("/stories", 0.7),
    ...stories.map((s) => page(`/stories/${s.slug}`, 0.7)),
    page("/pricing", 0.7),
    page("/packages", 0.7),
    page("/careers", 0.7),
    page("/careers/apply", 0.7),
    page("/for-businesses", 0.7),
    page("/for-executives", 0.7),
    page("/security", 0.7),
    page("/accessibility", 0.7),
    page("/legal/privacy-policy.pdf", 0.7),
    page("/legal/terms-and-conditions.pdf", 0.7),
  ];
}
