"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowLeft01FreeIcons,
  GridViewIcon,
  LeftToRightListBulletIcon,
} from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";
import { BlogPostMeta } from "@/interfaces";
import { ScrambleText } from "@/components/animations/scramble-text";
import BlogListItem from "./blog-list-item";
import BlogGridCard from "./blog-grid-card";

type View = "list" | "grid";

const VIEWS = [
  { id: "list", label: "List view", icon: LeftToRightListBulletIcon },
  { id: "grid", label: "Grid view", icon: GridViewIcon },
] as const;

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number],
    },
  },
};

export default function BlogIndex({ posts }: { posts: BlogPostMeta[] }) {
  const [view, setView] = useState<View>("list");

  return (
    <main className="px-6 md:px-10 max-w-7xl mx-auto py-16 lg:py-24">
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
        >
          <HugeiconsIcon icon={ArrowLeft01FreeIcons} size={16} />
          Back to home
        </Link>
      </div>

      {/* Header */}
      <div className="flex items-start justify-between gap-6 mb-10">
        <div className="space-y-3">
          <h1 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[0.9] font-geist">
            <ScrambleText text="Letters" delay={0} />
          </h1>
          <motion.p
            className="text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            Reflections on Stoicism, philosophy, and the craft of building
            things.
          </motion.p>
        </div>

        <div className="flex shrink-0 items-center gap-0.5 rounded-lg border border-border p-0.5">
          {VIEWS.map(({ id, label, icon }) => (
            <Button
              key={id}
              size="icon-sm"
              variant="ghost"
              aria-label={label}
              aria-pressed={view === id}
              onClick={() => setView(id)}
              className={cn(
                "text-muted-foreground",
                view === id && "bg-muted text-foreground",
              )}
            >
              <HugeiconsIcon icon={icon} size={16} />
            </Button>
          ))}
        </div>
      </div>

      {/* Posts */}
      <motion.div
        key={view}
        className={
          view === "list"
            ? "flex flex-col divide-y divide-border border-t border-border"
            : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 pt-2"
        }
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.08, delayChildren: 0.2 },
          },
        }}
      >
        {posts.map((post, index) => (
          <motion.div key={post.slug} variants={itemVariants}>
            {view === "list" ? (
              <BlogListItem post={post} index={index} />
            ) : (
              <BlogGridCard post={post} index={index} />
            )}
          </motion.div>
        ))}
      </motion.div>

      {posts.length === 0 && (
        <p className="py-16 text-center text-sm text-muted-foreground">
          No letters yet.
        </p>
      )}
    </main>
  );
}
