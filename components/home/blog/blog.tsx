import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import BlogCard from "./blog-card";
import { getAllPosts } from "@/lib/blog";
import { ScrambleText } from "@/components/animations/scramble-text";

export default function Blog() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <section className="w-full">
      <div className="flex items-end justify-between mb-10">
        <h2 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[0.9] space-y-1 font-geist">
          <span className="block text-muted-foreground">
            <ScrambleText text="Recent" delay={0} />
          </span>
          <span className="block">
            <ScrambleText text="Letters" delay={0.1} />
          </span>
        </h2>
        <Link
          href="/letters"
          className="group inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors mb-1 font-ibm"
        >
          All letters
          <ArrowRightIcon
            size={14}
            className="transition-transform group-hover:translate-x-0.5"
          />
        </Link>
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed max-w-xl -mt-4 mb-10">
        Personal reflections on Stoicism, clear thinking, and living well —
        written as letters, mostly to myself.
      </p>

      <div className="flex flex-col divide-y divide-border border-y border-border">
        {posts.map((post) => (
          <BlogCard post={post} key={post.slug} />
        ))}
      </div>
    </section>
  );
}
