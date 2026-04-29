# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

KUKO is a Costa Rican data-journalism platform focused on evidence-based investigative content. The name comes from the Cabécar language (meaning "to see / look attentively"). The repo has two active workspaces: a Vite prototype (`demo-ui/`) for design iteration, and an Astro production site (`web/`) with Keystatic as the CMS.

## Commands

Package manager is **pnpm** for `demo-ui/`, **npm** for `web/`.

```bash
# Demo UI (Vite + React — design reference only, not production)
cd demo-ui && pnpm dev

# Production site + CMS editor
cd web && npm install
npm run dev        # starts Astro dev server; editor at http://localhost:4321/keystatic
npm run build      # static build (reads content/ files at build time)
```

There are no tests yet.

## Architecture

```
kuko/
├── demo-ui/       # Vite + React prototype (UI design reference, not deployed)
│   └── src/app/
│       ├── App.tsx              # createBrowserRouter (react-router v7)
│       ├── pages/               # All page components
│       └── components/shared/   # Header, Footer, NewsletterSection
│
├── web/           # Astro 4 production site → Cloudflare Pages
│   ├── keystatic.config.ts      # CMS schema: articles, authors, categories, datasets
│   ├── content/                 # Git-tracked content files (written by Keystatic editor)
│   │   ├── articles/
│   │   ├── authors/
│   │   ├── categories/
│   │   └── datasets/
│   ├── public/images/           # Uploaded images (written by Keystatic editor)
│   ├── src/
│   │   ├── lib/reader.ts        # Keystatic reader singleton (used in Astro frontmatter)
│   │   ├── layouts/BaseLayout.astro    # HTML shell, SEO meta, Header + Footer
│   │   ├── pages/
│   │   │   ├── index.astro
│   │   │   ├── investigaciones/index.astro  # Article grid + client-side filters
│   │   │   ├── articulo/[slug].astro        # Article template (prerender = true)
│   │   │   ├── datos.astro
│   │   │   ├── contexto-internacional.astro
│   │   │   ├── propuestas.astro
│   │   │   └── acerca-de.astro
│   │   ├── components/
│   │   │   ├── shared/          # Header.astro, Footer.astro (vanilla JS for interactivity)
│   │   │   ├── cards/           # ArticleCard.astro
│   │   │   └── article/         # React islands (client:only="react"):
│   │   │                        #   ReadingProgress, StickyToC, ArticleBody
│   │   └── styles/globals.css   # Tailwind base + Inter font
│   └── astro.config.mjs         # hybrid output, Cloudflare adapter, React + Tailwind + Keystatic
│
└── docs/          # Project briefs (Spanish)
```

### CMS: Keystatic

Keystatic is a git-based CMS embedded in the Astro site. Content is stored as YAML/MDX files in `web/content/`. The editor runs at `/keystatic` during local dev.

- **Schema** lives in `web/keystatic.config.ts` — edit this to add fields or collections.
- **Reader** (`src/lib/reader.ts`) exposes `reader.collections.articles.all()` etc. for use in Astro page frontmatter at build time.
- **Storage mode**: `local` for dev (writes to disk). For production editing on the live site, configure `github` storage (requires a GitHub OAuth App) and redeploy.
- **Publish workflow**: `draft` → `published` → `archived`. All pages filter to `status === 'published'`.

### Data flow

`web/content/**` files → Keystatic reader in Astro frontmatter → prerendered static HTML → Cloudflare Pages CDN.

On a git push (content edit committed locally), Cloudflare Pages rebuilds automatically (≈30s).

### React islands in Astro

Interactive article features are React islands with `client:only="react"`:
- `ReadingProgress` — scroll-based progress bar tied to `#article-body`
- `StickyToC` — active section tracking via `getBoundingClientRect().top <= 120`
- `ArticleBody` — Keystatic `DocumentRenderer` with custom renderers for pull quotes, stat callouts, options lists

### Custom blocks in the editor

Defined in `keystatic.config.ts` under `articles → body → componentBlocks`:
- `pullQuote` — text + optional attribution
- `statCallout` — 1–3 stat/label pairs
- `optionsList` — 2–6 title+description items

Charts are published as images for now. A D3-based `<Chart />` React component is planned for hardcoded data visualizations in specific article pages.

### Filters on /investigaciones

Filters are entirely client-side (vanilla JS, data attributes). No page reload or server roundtrip. All articles are prerendered into the HTML; hidden/shown via `display: none`.

## Design System

Defined in `docs/design_brief.md`. Enforce these when adding UI:

- **Font**: Inter variable — weights 300, 400, 600 only
- **Base palette**: `#FFFFFF` / `#000000` / `#2D2D2D` / `#7A7A7A` / `#F5F5F5` / `#E8E8E8`
- **Accent** (≤5% of surface area): `#00A896` (turquoise) — links on hover, CTAs, active badges
- **Category accent colors** — small badges/dots only, never large areas:
  - Movilidad `#00A896` · Salud `#E85D75` · Educación `#5B8DEE` · Economía `#F5A623`
  - Política `#7B68EE` · Ambiente `#50C878` · Urbanismo `#FF6B35` · Tecnología `#9B59B6` · Justicia `#34495E`
- **Border-radius: 0** — all elements square-cornered
- **Borders**: 1px solid, no drop shadows except subtle hover states
- **Icons**: Lucide React, outline style, 1.5px stroke
- **Charts**: D3 (planned) — minimal axes, no gridlines, monochrome or single category color

Key rules: no gradients, no large color fills, no border-radius > 0, no auto-play, no parallax.

## Key Dependencies (`web/`)

- `@keystatic/core` + `@keystatic/astro` — CMS and editor
- `@astrojs/cloudflare` — deployment adapter
- `@astrojs/react` — React islands
- `tailwindcss` v3 — styling
- `lucide-react` — icons (in demo-ui; use inline SVG in Astro components)
