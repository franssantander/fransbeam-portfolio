import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

type PageMetadataOptions = {
  title: string;
  description: string;
  /** Route path, e.g. "/projects". Resolved against `metadataBase`. */
  path: string;
  keywords?: string[];
  /** Absolute URL or public path; defaults to the site OG image. */
  image?: string;
  type?: "website" | "article";
};

export const absoluteUrl = (path: string) =>
  path === "/" ? siteConfig.url : `${siteConfig.url}${path}`;

/**
 * Per-page metadata. Next.js replaces (not merges) nested `openGraph` /
 * `twitter` objects and drops the title template below a plain string title,
 * so every page needs the full set.
 */
export function pageMetadata({
  title,
  description,
  path,
  keywords,
  image = siteConfig.images.og,
  type = "website",
}: PageMetadataOptions): Metadata {
  const fullTitle = siteConfig.title.template.replace("%s", title);
  // Only the default OG image has known dimensions
  const images = [
    image === siteConfig.images.og
      ? { url: image, width: 1200, height: 630, alt: fullTitle }
      : { url: image, alt: fullTitle },
  ];

  return {
    // Re-declare the template so nested routes keep "<title> | Francis Santander"
    title: { default: title, template: siteConfig.title.template },
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}

/** Schema.org `@id`s so JSON-LD blocks across pages reference one entity. */
export const schemaIds = {
  person: `${siteConfig.url}/#person`,
  website: `${siteConfig.url}/#website`,
  venture: `${siteConfig.venture.url}/#organization`,
  ventureApp: `${siteConfig.venture.url}/#app`,
};
