import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { absoluteUrl, pageMetadata, schemaIds } from "@/lib/seo";
import { visibleProjects } from "@/lib/projects";

export const metadata: Metadata = pageMetadata({
  title: "Featured Projects — Medasin Case Study",
  description:
    "How Francis Santander designed, built, and launched Medasin — a calm productivity app built on the PARA method that links planning, focused work, reflection, and notes.",
  path: "/projects",
  keywords: [
    "Medasin",
    "Medasin Case Study",
    "PARA Method App",
    "Second Brain App",
    "Productivity SaaS",
    "Francis Santander Projects",
    "Francis Santander Founder",
    "Full-Stack Product Engineering",
    "Product Engineer Philippines",
  ],
});

// The case study and the product it describes, linked to the Person and
// Organization declared in the root layout
const medasin = visibleProjects.find((project) => project.case_study);
const jsonLd = medasin && {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "@id": schemaIds.ventureApp,
      name: medasin.project_name,
      url: medasin.link,
      description: siteConfig.venture.description,
      applicationCategory: "ProductivityApplication",
      operatingSystem: "Web",
      datePublished: siteConfig.venture.launchDate,
      creator: { "@id": schemaIds.person },
      publisher: { "@id": schemaIds.venture },
      featureList: medasin.case_study?.features.map(
        ({ title, body }) => `${title}: ${body}`,
      ),
    },
    {
      "@type": "CreativeWork",
      "@id": `${absoluteUrl("/projects")}#case-study`,
      name: `${medasin.project_name} Case Study`,
      url: absoluteUrl("/projects"),
      description: medasin.case_study?.problem,
      about: { "@id": schemaIds.ventureApp },
      author: { "@id": schemaIds.person },
      isPartOf: { "@id": schemaIds.website },
      keywords: medasin.techstack?.map((tech) => tech.name).join(", "),
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      {children}
    </div>
  );
}
