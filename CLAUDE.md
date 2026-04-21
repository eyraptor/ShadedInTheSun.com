# CLAUDE.md

## CRITICAL: Git Rules
- Always work on `main` branch only — never create branches unless asked
- Never `git push` unless explicitly asked
- Never create pull requests unless explicitly asked

## What This Is
Static HTML website for **Shaded In The Sun** (shadedinthesun.com), custom window treatment dealer in Edmond/Oklahoma City. Authorized dealers for Graber® and Norman®. No build system — plain HTML/CSS/JS deployed directly. No `npm install`, no build step, no test runner.

## Key Files
- **`Template.html`** — Master template. Use as starting point for all new pages.
- **`css/style.css`** — Single shared stylesheet. Do not create page-specific CSS files.
- **`sitemap.txt`** — Update when adding a new page.
- **`patio-shades-nichols-hills.html`** — Gold-standard reference page.
- **`index.html`** — Gold-standard performance reference. Build and test all site-wide changes here first.

Images: `/images/` (.webp format). Fonts: `/fonts/` (local Roboto woff2, 9 weights preloaded).

## Slash Commands (load as needed)
- **`/load-seo-session`** — Page status, do-not-touch list, SEO standards
- **`/code-templates`** — HTML templates, class reference, link and image rules
- **`/section-structure-guide`** — Page flow, H-class usage, section structure

## Page Architecture
Every page follows this order:
1. `<head>` — Meta tags, font preloads, canonical, CSS preload, LCP preload, JSON-LD schema. No tracking scripts in head.
2. Header — Checkbox-based responsive nav. Duplicated on every page.
3. Hero — `outer-flex` layout, image + H1 + "What You'll Learn" + phone CTA.
4. Opening content — Separate `<section>` below hero. Never inside hero.
5. Main content — H2 headings, bullet lists, product card grids.
6. Related Articles — 3-card `grid-3-col` layout. Every page.
7. Footer — Two-column layout. Duplicated on every page.
8. Script block — GA4, Google Ads, GTM, Calendly, Ahrefs — all after `</footer>` with delayed loading.

## Active Site-Wide Projects (In Progress)
These updates are being rolled out across ALL pages — do not assume any page is complete:

- **Header/Navigation redesign** — Moving logo into center of menu bar (3-column layout: nav left, logo center, CTA right). Build and approve on `index.html` first before rolling out site-wide. Do NOT modify header on other pages until `index.html` version is approved by Brent.
- **FAB (Floating Action Button)** — replacing contact button on all pages with new hover button showing "Contact" and "Request a Call Back". Use `index.html` as reference once complete.
- **CSS class migration** — legacy classes being replaced with new classes site-wide. Do not swap classes unless Brent explicitly asks. See code-templates.md for both legacy and new class reference.

## Brand Rules
- Always **Graber®** and **Norman®** with ® symbol
- Verify all product claims against graberblinds.com and normanusa.com before any edits
- Zebra shades are NOT blackout — they reverse at night, not fully private
- Locations always capitalized: Oklahoma City, Edmond, Nichols Hills

## SEO Standards
- Title tags: 55–60 characters. Format: `Keyword + Location | Shaded In The Sun`
- Meta descriptions: 135 characters max. No phone numbers in meta.
- OG tags must match meta tags
- FAQ schema (JSON-LD) with 4+ questions on every page
- H1 = primary keyword phrase, not a branded headline
- Sitemap.xml: new pages at priority `0.8`, `changefreq: weekly`

## Performance Reference Pages (script/CSS optimization complete)
Build and test all site-wide changes on `index.html` first, then roll out to other pages.
Currently optimized: `index.html`, `window-shades.html`, `graber.html`

- Scripts delayed, after `</footer>`
- CSS non-blocking
- LCP image preloaded with `fetchpriority="high"` — no `loading="lazy"` on hero image
- All other images: `width` `height` `alt` `loading="lazy"`