# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

KUKO is a Costa Rican data-journalism platform focused on evidence-based investigative content. The name comes from the Cabécar language (meaning "to see / look attentively"). The single production workspace is `web/` — an Astro 5 static site deployed to Cloudflare Pages, with Keystatic as the git-based CMS.

## Commands

Package manager is **npm** for `web/`.

```bash
cd web
npm install
npm run dev        # Astro dev server at http://localhost:4321; Keystatic editor at /keystatic
npm run build      # Static build (reads content/ files at build time)
npm run preview    # Preview the static build locally
```

There are no tests yet.

## Architecture

```
kuko/
├── web/           # Astro 5 production site → Cloudflare Pages
│   ├── keystatic.config.ts      # CMS schema: articles, authors, categories, datasets
│   ├── content/                 # Git-tracked content files (written by Keystatic editor)
│   │   ├── articles/            # Directory-per-article: content/articles/<slug>/index.yaml
│   │   ├── authors/             # Flat YAML: content/authors/<slug>.yaml
│   │   ├── categories/          # Flat YAML: content/categories/<slug>.yaml
│   │   └── datasets/            # Flat YAML: content/datasets/<slug>.yaml
│   ├── public/images/           # Uploaded images (written by Keystatic editor)
│   ├── src/
│   │   ├── lib/reader.ts        # Keystatic reader singleton
│   │   ├── layouts/BaseLayout.astro    # HTML shell, SEO meta, Header + Footer
│   │   ├── pages/
│   │   │   ├── index.astro                          # Homepage — hardcoded demo content
│   │   │   ├── investigaciones/index.astro          # Article grid + client-side filters — hardcoded demo content
│   │   │   ├── articulo/[slug].astro                # Dynamic article template (uses Keystatic reader)
│   │   │   ├── articulo/sistema-numeracion-buses.astro  # Static hardcoded article page
│   │   │   ├── datos.astro
│   │   │   ├── contexto-internacional.astro
│   │   │   ├── propuestas.astro
│   │   │   └── acerca-de.astro
│   │   ├── components/
│   │   │   ├── shared/          # Header.astro, Footer.astro (vanilla JS for interactivity)
│   │   │   ├── cards/           # ArticleCard.astro
│   │   │   ├── HomeHeroChart.tsx     # Recharts LineChart — CCSS waitlist (homepage hero)
│   │   │   ├── HomeBusChart.tsx      # Recharts BarChart — bus routes (homepage col 2)
│   │   │   ├── ArticleRoutesChart.tsx # Recharts BarChart — routes by province (article)
│   │   │   └── article/         # React islands (client:only="react"):
│   │   │                        #   ReadingProgress, StickyToC, ArticleBody
│   │   └── styles/globals.css   # Tailwind v4 base + Inter font + design tokens
│   └── astro.config.mjs         # output: static, Cloudflare adapter, React + Tailwind v4 + Keystatic
│
└── docs/          # Project briefs (Spanish): project_overview.md, design_brief.md
```

## Content pattern: hardcoded vs CMS

**Current state**: `index.astro` and `investigaciones/index.astro` use **hardcoded data** (the 12 demo articles from the original prototype). The Keystatic reader is wired up but the article file format (`entryLayout: 'content'` + `fields.document()` body) has a parsing mismatch that prevents articles from loading via the reader.

**When Keystatic reader works** (e.g. `articulo/[slug].astro`), the flow is:
`web/content/**` → Keystatic reader in Astro frontmatter → prerendered static HTML → Cloudflare Pages CDN

**Static hardcoded articles** (`articulo/sistema-numeracion-buses.astro`) take priority over the dynamic `[slug].astro` route in Astro — static routes win over dynamic ones.

## CMS: Keystatic

Keystatic is a git-based CMS embedded in the Astro site. Content is stored as YAML files in `web/content/`. The editor runs at `/keystatic` during local dev.

- **Schema** lives in `web/keystatic.config.ts` — edit this to add fields or collections.
- **Reader** (`src/lib/reader.ts`) exposes `reader.collections.articles.all()` etc. for use in Astro page frontmatter at build time.
- **Storage mode**: `local` for dev (writes to disk). For production editing on the live site, configure `github` storage (requires a GitHub OAuth App) and redeploy.
- **Publish workflow**: `draft` → `published` → `archived`. All pages filter to `status === 'published'`.

## React islands in Astro

Interactive features are React islands with `client:only="react"`:
- `HomeHeroChart`, `HomeBusChart` — Recharts charts on the homepage
- `ArticleRoutesChart` — Recharts chart inside the buses article
- `ReadingProgress` — scroll-based progress bar
- `StickyToC` — active section tracking via `getBoundingClientRect().top <= 120`
- `ArticleBody` — Keystatic `DocumentRenderer` with custom renderers for pull quotes, stat callouts, options lists

All icons in Astro components (`.astro` files) are **inline SVG** — do not import lucide-react in Astro files. Lucide can be used inside React island `.tsx` files only.

## Filters on /investigaciones

Filters (category, content type, search) are entirely client-side using vanilla JS with `data-*` attributes on article cards. No page reload or server roundtrip. Hidden/shown via `element.style.display`.

## Design System

Defined in `docs/design_brief.md`. Enforce these when adding UI:

- **Font**: Inter variable — weights 300, 400, 600 only
- **Base palette**: `#FFFFFF` / `#000000` / `#2D2D2D` / `#7A7A7A` / `#F5F5F5` / `#E8E8E8`
- **Accent** (≤5% of surface area): `#00A896` (turquoise) — links on hover, CTAs, active badges
- **Category accent colors** — small badges/dots only, never large areas:
  - Movilidad `#00A896` · Salud `#E85D75` · Educación `#5B8DEE` · Economía `#F5A623`
  - Política `#7B68EE` · Ambiente `#50C878` · Urbanismo `#FF6B35` · Tecnología `#9B59B6` · Justicia `#34495E`
- **Border-radius: 0** — all elements square-cornered (`globals.css` enforces this globally)
- **Borders**: 1px solid, no drop shadows except subtle hover states (`hover:shadow-[Npx_Npx_0px...]`)
- **Icons**: inline SVG in `.astro` files; Lucide React in `.tsx` islands only
- **Charts**: Recharts for current charts; D3 planned for future hardcoded data visualizations

Key rules: no gradients, no large color fills, no border-radius > 0, no auto-play, no parallax.

## Key Dependencies (`web/`)

- `astro@^5` + `@astrojs/cloudflare` — framework + deployment adapter
- `@astrojs/react` — React islands
- `@keystatic/core` + `@keystatic/astro` — CMS and editor
- `tailwindcss@^4` + `@tailwindcss/vite` — styling (v4 syntax: `@import "tailwindcss"`, `@theme {}`)
- `recharts@^2` — charts in React islands
