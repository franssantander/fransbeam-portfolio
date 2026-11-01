import type { Metadata } from "next";
import UiuxData from "@/data/UIUX_DATA.json";
import { absoluteUrl, pageMetadata, schemaIds } from "@/lib/seo";

type Props = {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
};

const findProject = (slug: string) => UiuxData.find((p) => p.slug === slug);

export function generateStaticParams() {
  return UiuxData.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: Omit<Props, "children">): Promise<Metadata> {
  const { slug } = await params;
  const project = findProject(slug);
  if (!project) return {};

  const name = project.project_name.replace(/\s*\(Case Study\)$/, "");

  // Case-study images are AVIF, which most social previews can't render,
  // so these pages keep the default OG image.
  return pageMetadata({
    title: `${name} — ${project.type} UI/UX Case Study`,
    description: project.overview || project.description,
    path: `/designs/${project.slug}`,
    keywords: [
      name,
      `${project.type} Design`,
      "UI/UX Case Study",
      ...project.tools,
    ],
  });
}

export default async function Layout({ children, params }: Props) {
  const { slug } = await params;
  const project = findProject(slug);

  return (
    <>
      {project && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CreativeWork",
              name: project.project_name,
              description: project.overview || project.description,
              url: absoluteUrl(`/designs/${project.slug}`),
              image: project.images.hero || project.img,
              genre: project.type,
              dateCreated: project.year,
              keywords: project.tools.join(", "),
              creator: { "@id": schemaIds.person },
            }),
          }}
        />
      )}
      {children}
    </>
  );
}
