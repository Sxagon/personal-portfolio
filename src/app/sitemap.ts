import type { MetadataRoute } from "next";
import { profile } from "@/content/profile";
import { routing } from "@/i18n/routing";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(routing.locales.map((l) => [l, `${profile.siteUrl}/${l}`]));
  return routing.locales.map((locale) => ({
    url: `${profile.siteUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: locale === routing.defaultLocale ? 1 : 0.8,
    alternates: { languages },
  }));
}
