# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## CRITICAL: Git Rules

- **Always work on `main` branch only.** Never create a new branch for any reason unless the user explicitly asks.
- **Never push to GitHub** (no `git push`) unless the user explicitly asks.
- **Never create pull requests** unless the user explicitly asks.
- All commits go directly to `main`.

## What This Is

Static HTML website for **Shaded In The Sun** (shadedinthesun.com), a custom window treatment dealer in Edmond/Oklahoma City. Authorized dealers for Graber® and Norman®. There is no build system, framework, or package manager — all files are plain HTML/CSS/JS deployed directly.

## No Build Commands

This is a static site. There is no `npm install`, no build step, no test runner. To preview: open any `.html` file directly in a browser or use a local static server.

## Key Files and Structure

- **`Template.html`** — Master page template. Use as the starting point for new pages and as the reference for correct structure.
- **`css/style.css`** — Single shared stylesheet for the entire site. Do not create page-specific CSS files.
- **`sitemap.txt`** — Plain-text list of all live URLs. Update when adding a new page.
- **`.claude/commands/`** — Session reference files (see Custom Commands below).

Images: `/images/` (use `.webp` format). Fonts: `/fonts/` (local Roboto woff2 files, 9 weights preloaded).

## Custom Slash Commands

These files in `.claude/commands/` load as slash commands:

- **`/load-seo-session`** — Full SEO project status: which pages are safe to edit, which are in Google recovery (do not touch), completed optimizations, and current ranking data. Load this at the start of any session involving HTML page work.
- **`/code-templates`** — Exact copy-paste HTML templates for hero sections, Related Articles, images, meta tags, and internal links. Always use these — do not freestyle structure.
- **`/section-structure-guide`** — H-class usage rules, section flow, and what NOT to do.
- **`/pages-to-update`** — Prioritized list of pages needing SEO optimization work.

## Page Architecture

Every page follows this section order, sourced from `Template.html` and `patio-shades-nichols-hills.html` (the gold-standard reference):

1. **`<head>`** — Meta tags, font preloads, canonical link, CSS preload (non-blocking), LCP image preload, JSON-LD schema. **No tracking scripts in head.**
2. **Header** — Checkbox-based responsive nav (no JS required). Duplicated on every page.
3. **Hero section** — `outer-flex` layout with image + `center-small` div containing H1, "What You'll Learn" box (`learn-box` class, blue accent border), checklist bullets, and phone CTA.
4. **Opening content** — Separate `<section>` below hero. Never inside the hero div.
5. **Main content sections** — H2 headings, bullet lists, product card grids.
6. **Related Articles** — 3-card `grid-3-col` layout at the end of every page.
7. **Footer** — Two-column layout with contact info and nav. Duplicated on every page.
8. **Script block** — All tracking scripts (GA4, Google Ads, GTM, Calendly, Ahrefs) placed **after `</footer>`**, each with delayed loading. See memory file `page_performance_checklist.md` for the exact script block.

## HTML Conventions

**CSS classes** (critical — these are the current non-legacy class names):
- H1: `heading-1-accent h-center balanced-text`
- H2 (main sections, accent/orange color): `heading-2-accent h-center balanced-text`
- H2 (main sections, dark/primary color): `heading-2-primary h-center balanced-text`
- H2 ("What You'll Learn"): `heading-2-accent h-center margin-t-15`
- H3 (Related Articles cards): `heading-3-primary h-center balanced-text` — **never `-accent`**
- H3 (product/feature cards): `heading-3-accent h-center balanced-text`

**"What You'll Learn" box** — every page hero must have this, wrapped in `class="learn-box"`:
- The `learn-box` class applies the blue accent border, padding, and rounded corners
- Checklist bullets use `<span class='text-accent'>✓</span>` and `<span class='text-neutral'>text</span>`
- The `<ul>` needs `style="display: inline-block; text-align: left;"` to align bullets inside the centered box

**Hero layout class**: use `center-small` (not `centerSmall` — that is legacy)

**Footer inner div**: use `footer-columns` (not `footer-layout` — that is legacy)

**Inline text color classes**:
- `text-accent` — accent color (replaces legacy `pop-100`)
- `text-neutral` — body text color (replaces legacy `text-neutral-900`)
- `text-primary` — dark heading color (replaces legacy `Second-Color`, `text-primary-400`)

**Legacy classes — do NOT use on any new or rewritten page:**
`variable-h1`, `variable-h1-orange`, `variable-h2`, `variable-h2-orange`, `variable-h3`, `variable-h3-orange`, `pop-100`, `text-neutral-900`, `Second-Color`, `text-primary-400`, `centerSmall`, `footer-layout`, `stagger1` (not a real class), `underline-text`, `left-align`

**Internal links** — must be inline in `<p>` text with descriptive anchor text. Never on headings. Never "click here", "read more", or "learn more". Each page needs 3–5 internal links in main content; avoid duplicating links between body and Related Articles.

**Images** — All must have `width`, `height`, `alt`, and `loading="lazy"` (except the hero/LCP image which must have `fetchpriority="high"` and NO `loading="lazy"`).

## Brand and Content Rules

**REQUIRED FACT-CHECK BEFORE TOUCHING ANY PAGE:** Every page must be verified against both official brand sources before any edits are made:
- **https://graberblinds.com** — for all Graber® product names, features, specifications, and lift systems
- **https://normanusa.com** — for all Norman® product names, features, specifications, and automation systems

Check every product claim, feature description, model name, and technical detail. Correct inaccuracies first, then proceed with any other work. This is non-negotiable.

- Always use **Graber®** and **Norman®** (with ® symbol).
- **Before editing any page**: verify all product claims against graberblinds.com (Graber) and normanusa.com (Norman). Correct inaccuracies before SEO work.
- Zebra shades are NOT blackout — they reverse at night. Do not claim complete privacy.
- Locations are always capitalized: Oklahoma City, Edmond, Nichols Hills — never lowercase.

## SEO Standards (enforced on all pages)

- **Title tags:** 55–60 characters. Format: `Keyword + Location | Shaded In The Sun`
- **Meta descriptions:** Maximum 135 characters. Emotional hook + benefit + soft CTA. **No phone numbers in meta descriptions** — the phone belongs on the page, not in meta (it suppresses CTR).
- **OG tags** (`og:title`, `og:description`) must match meta tags.
- **FAQ schema** (`application/ld+json`) with 4+ questions targets featured snippets.
- H1 = exact search question or primary keyword phrase (not a branded headline).
- "What You'll Learn" section with 3–4 specific checkmark bullets goes in every page hero.
- Sitemap.xml: new pages at priority `0.8`, `changefreq: weekly`.

## Performance Checklist

Before publishing any page, apply every item in `memory/page_performance_checklist.md`. Reference `index.html` as the gold-standard example — it has been fully optimized (scripts delayed, CSS non-blocking, LCP preloaded, hero image with fetchpriority).

Pages completed as of March 2026: `index.html`, `window-shades.html`, `graber.html`.
