# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio site for Francis Santander, built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS 4. Deployed on Vercel.

## Commands

```bash
npm run dev      # start dev server (localhost:3000)
npm run build    # production build
npm run start    # run production build
npm run lint     # eslint
```

There is no test suite configured in this repo.

## Architecture

**Content is data-driven, not hardcoded.** Nearly all page content (projects, UI/UX case studies, experience, skills, nav links, email) lives in JSON files under `data/` (`PROJECT_DATA.json`, `UIUX_DATA.json`, `EXPERIENCE_DATA.json`, `SKILLS_DATA.json`, `NAV_LINKS.json`, `TECH_STACK.json`, `EMAIL.json`). Components import these JSON files directly and map over them — to add/edit a project, case study, or skill, edit the JSON, not the component. Shapes for this data are defined in `interfaces/index.tsx` (`Project`, `Uiux`, `Experience`, `Skills`).

**Single-page layout with route-mirrored sections.** The home page (`app/(home)/page.tsx`) renders all sections (`hero`, `projects`, `uiux`, `experience`, `skills`, `contact`) stacked vertically in one scrollable page, each wrapped in `id="<section>"` divs and a `FadeUp` scroll-reveal animation. `app/(home)/section-rail.tsx` + `hooks/useScrollSpy.ts` drive a fixed side-nav that highlights the active section based on scroll position. The routes under `app/(home)/projects`, `/uiux` (as `designs`), `/experience`, `/skills`, `/contact` are secondary/deep-linkable pages that also exist independently — check both the section component and any matching route page when changing a section's content or behavior.

**Detail pages read the slug client-side.** `app/(home)/designs/[slug]/page.tsx` is a client component (`"use client"`) that uses `useParams()` and `.find()`s the matching entry out of `UIUX_DATA.json` directly, rather than using `generateStaticParams`/server data fetching. Follow this pattern for any similar detail routes.

**Component organization:**
- `components/ui/` — shadcn-generated primitives (button, card, dialog, select, etc.). This project uses shadcn with `iconLibrary: hugeicons` and style `radix-nova` (see `components.json`) — use the shadcn CLI to add new primitives rather than hand-rolling them, and use `@hugeicons/react` (`HugeiconsIcon`) for icons, not another icon set.
- `components/home/<section>/` — one folder per home-page section (e.g. `projects/`, `uiux/`, `experience/`, `skills/`, `contact/`), each with a top-level section component plus a `*-card.tsx` for its repeated item.
- `components/animations/` — shared scroll/entrance animation wrappers (`FadeUp`, `RevealLine`, `ScrambleText`, `CountUp`) built on `framer-motion`. Reuse these for new animated content instead of writing new motion variants inline.

**Styling:** Tailwind CSS 4 with CSS variables (`app/globals.css`), `cn()` (`lib/utils.ts`, clsx + tailwind-merge) for conditional classnames, `class-variance-authority` for component variants. Theming is via `next-themes` (`providers/theme-provider.tsx`), default theme is `dark`, applied via the `class` attribute.

**Path alias:** `@/*` maps to the repo root (see `tsconfig.json`), e.g. `@/components/ui`, `@/data/PROJECT_DATA.json`, `@/lib/utils`.

**SEO/metadata:** Centralized in `config/site.ts` (`siteConfig`) and consumed by `app/layout.tsx` (metadata, JSON-LD Person schema) and `app/sitemap.ts`. Update `siteConfig` rather than editing metadata inline in pages.

**Env vars:** `BLOB_STORE_ID` and `BLOB_READ_WRITE_TOKEN` for Vercel Blob storage (used to host project/image assets referenced by URL in `data/*.json`, e.g. `PROJECT_DATA.json` image URLs).
