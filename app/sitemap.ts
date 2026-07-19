import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import UiuxData from "@/data/UIUX_DATA.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteConfig.url, changeFrequency: "monthly" as const, priority: 1 },
    {
      url: `${siteConfig.url}/projects`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/designs`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/experience`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/skills`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/contact`,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    },
  ].map((route) => ({ ...route, lastModified }));

  const designRoutes: MetadataRoute.Sitemap = UiuxData.map((project) => ({
    url: `${siteConfig.url}/designs/${project.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...designRoutes];
}
