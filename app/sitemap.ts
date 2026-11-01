import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import UiuxData from "@/data/UIUX_DATA.json";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const posts = getAllPosts();
  // Newest letter date, so /letters' lastmod changes only when a letter is added
  const lettersModified = posts.reduce<Date | undefined>((latest, post) => {
    const date = new Date(post.date);
    return !latest || date > latest ? date : latest;
  }, undefined);

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
      url: `${siteConfig.url}/letters`,
      lastModified: lettersModified,
      changeFrequency: "weekly" as const,
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
  ].map((route) => ({
    ...route,
    lastModified: route.lastModified ?? lastModified,
  }));

  const designRoutes: MetadataRoute.Sitemap = UiuxData.map((project) => ({
    url: `${siteConfig.url}/designs/${project.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const letterRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${siteConfig.url}/letters/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...designRoutes, ...letterRoutes];
}
