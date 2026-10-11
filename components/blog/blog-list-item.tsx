import Image from "next/image";
import Link from "next/link";
import { BlogPostMeta } from "@/interfaces";
import { formatMonthYear } from "@/utils/formatPostDate";

export default function BlogListItem({
  post,
  index,
}: {
  post: BlogPostMeta;
  index: number;
}) {
  return (
    <Link href={`/letters/${post.slug}`}>
      <div className="group flex flex-col sm:flex-row items-start gap-4 sm:gap-6 py-6 sm:py-8">
        <div className="relative w-full sm:w-36 aspect-[3/2] shrink-0 overflow-hidden rounded-lg border border-border bg-muted">
          {post.cover && (
            <Image
              src={post.cover}
              alt={post.title}
              fill
              sizes="(max-width: 640px) 100vw, 144px"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              priority={index < 2}
            />
          )}
        </div>

        <div className="flex-1 min-w-0 space-y-2">
          <p className="text-[11px] text-muted-foreground uppercase tracking-widest font-ibm">
            {post.subtitle || formatMonthYear(post.date)}
          </p>
          <h2 className="font-bold text-lg md:text-xl leading-snug group-hover:text-muted-foreground transition-colors duration-200 font-geist">
            {post.title}
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
            {post.excerpt}
          </p>
          <p className="text-xs text-muted-foreground tabular-nums font-ibm">
            {formatMonthYear(post.date)} · {post.readingTime} min read
          </p>
        </div>
      </div>
    </Link>
  );
}
