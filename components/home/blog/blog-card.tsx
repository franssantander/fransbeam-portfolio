import Link from "next/link";
import { BlogPostMeta } from "@/interfaces";
import { formatMonthYear } from "@/utils/formatPostDate";

export default function BlogCard({ post }: { post: BlogPostMeta }) {
  return (
    <Link href={`/letters/${post.slug}`}>
      <div className="group flex items-start justify-between gap-6 py-6">
        <div className="min-w-0 space-y-1.5">
          {post.subtitle && (
            <p className="text-[11px] text-muted-foreground uppercase tracking-widest truncate font-ibm">
              {post.subtitle}
            </p>
          )}
          <h2 className="font-semibold text-base md:text-lg leading-snug group-hover:text-muted-foreground transition-colors duration-200 font-geist">
            {post.title}
          </h2>
          <p className="text-sm text-muted-foreground truncate">
            {post.excerpt}
          </p>
        </div>
        <span className="shrink-0 pt-1 text-xs text-muted-foreground tabular-nums font-ibm">
          {formatMonthYear(post.date)}
        </span>
      </div>
    </Link>
  );
}
