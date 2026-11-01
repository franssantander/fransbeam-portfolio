import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import { ChevronLeftIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui";
import { FadeUp } from "@/components/animations/fade-up";
import RevealLine from "@/components/animations/reveal-line";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { formatFullDate } from "@/utils/formatPostDate";
import { siteConfig } from "@/config/site";
import { absoluteUrl, pageMetadata, schemaIds } from "@/lib/seo";
import { cn } from "@/lib/utils";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const metadata = pageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/letters/${post.slug}`,
    image: post.cover || undefined,
    type: "article",
  });

  return {
    ...metadata,
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    openGraph: {
      ...metadata.openGraph,
      type: "article",
      publishedTime: post.date,
      authors: [siteConfig.url],
    },
  };
}

const markdownComponents: Components = {
  img: ({ src, alt }) =>
    typeof src === "string" ? (
      <Image
        src={src}
        alt={alt ?? ""}
        width={0}
        height={0}
        sizes="(max-width: 768px) 100vw, 768px"
        className="w-full h-auto rounded-xl border border-border"
      />
    ) : null,
  a: ({ href, children }) => {
    const isExternal = href?.startsWith("http");
    return (
      <a
        href={href}
        {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
      >
        {children}
      </a>
    );
  },
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const url = absoluteUrl(`/letters/${post.slug}`);

  return (
    <main className="px-6 md:px-10 max-w-3xl mx-auto py-16 lg:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            url,
            mainEntityOfPage: url,
            image: post.cover || absoluteUrl(siteConfig.images.og),
            datePublished: post.date,
            wordCount: post.content.trim().split(/\s+/).length,
            inLanguage: "en",
            author: { "@id": schemaIds.person },
            publisher: { "@id": schemaIds.person },
            isPartOf: { "@id": schemaIds.website },
          }),
        }}
      />
      <Link
        href="/letters"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12 font-ibm"
      >
        <ChevronLeftIcon size={16} />
        all letters
      </Link>

      {/* Header */}
      {post.subtitle && (
        <FadeUp delay={0.05}>
          <p className="text-xs text-muted-foreground uppercase tracking-widest font-ibm mb-4">
            {post.subtitle}
          </p>
        </FadeUp>
      )}
      <RevealLine delay={0.1}>
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.1] font-geist">
          {post.title}
        </h1>
      </RevealLine>
      <FadeUp delay={0.2}>
        <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
          {post.excerpt}
        </p>

        <div className="mt-8 pt-6 border-t border-border flex items-center gap-3">
          <Avatar>
            <AvatarImage
              src={siteConfig.person.image}
              alt={siteConfig.shortName}
            />
            <AvatarFallback>FS</AvatarFallback>
          </Avatar>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span className="text-sm font-medium">{siteConfig.shortName}</span>
            <span className="text-xs text-muted-foreground tracking-widest tabular-nums font-ibm">
              · {formatFullDate(post.date)} · {post.readingTime} MIN READ
            </span>
          </div>
        </div>
      </FadeUp>

      {/* Cover */}
      {post.cover && (
        <FadeUp delay={0.3}>
          <div className="relative mt-8 w-full aspect-video overflow-hidden rounded-2xl border border-border bg-muted">
            <Image
              src={post.cover}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
              priority
            />
          </div>
        </FadeUp>
      )}

      {/* Body */}
      <FadeUp inView delay={0.1}>
        <article
          className={cn(
            "mt-12 prose prose-neutral dark:prose-invert max-w-none",
            "prose-headings:font-geist prose-headings:tracking-tight prose-a:underline-offset-4 prose-pre:border prose-pre:border-border prose-img:my-8",
            // Drop the backticks / quote marks the typography plugin adds
            "prose-code:before:content-none prose-code:after:content-none [&_blockquote_p]:before:content-none [&_blockquote_p]:after:content-none",
            // Inline code chip (leave fenced code blocks alone)
            "[&_:not(pre)>code]:rounded [&_:not(pre)>code]:bg-muted [&_:not(pre)>code]:px-1.5 [&_:not(pre)>code]:py-0.5 [&_:not(pre)>code]:font-normal",
          )}
        >
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={markdownComponents}
          >
            {post.content}
          </ReactMarkdown>
        </article>
      </FadeUp>

      {/* Footer nav */}
      <div className="mt-16 pt-8 border-t border-border flex items-center justify-between">
        <Link
          href="/letters"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ChevronLeftIcon size={16} />
          All letters
        </Link>
        <p className="text-xs text-muted-foreground font-ibm">
          {formatFullDate(post.date)}
        </p>
      </div>
    </main>
  );
}
