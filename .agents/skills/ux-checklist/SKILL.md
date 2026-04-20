---
name: ux-checklist
description: Apply UX/UI standards when reviewing or rewriting any HTML page on shadedinthesun.com. Use this skill whenever a page is being rewritten, reviewed for quality, or audited for user experience issues. Also use when the user mentions whitespace, layout, mobile, readability, visual hierarchy, page flow, above the fold, CTA visibility, or spacing problems. Always load this alongside the seo-audit skill during Phase 5 page rewrites.
metadata:
  version: 1.0.0
---

# UX/UI Page Checklist — shadedinthesun.com

This skill defines the UX/UI standards for every page on shadedinthesun.com. It is loaded during page rewrites to ensure every change improves both search ranking AND user experience. A page that ranks but doesn't convert is a failure; a page that looks great but doesn't rank is also a failure. Both must pass.

## Why UX Matters for This Site

Window treatments are a high-consideration, visual purchase. Visitors are comparing options, imagining products in their homes, and deciding whether to trust a local business with a significant home investment. Every layout decision either builds or erodes that trust.

---

## Section 1: Whitespace and Breathing Room

Whitespace is not wasted space — it signals quality and helps the eye know where to focus. Pages that feel cramped communicate low-end. Pages with proper breathing room communicate premium.

**Check for each page:**
- The hero section (`outer-flex`) has adequate top and bottom padding — `margin-tb-25` minimum, `margin-tb-50` preferred for main content sections
- There is a visible gap between the hero section and the first content section below it — the two sections should feel like separate blocks, not one continuous blob
- **index.html specific:** The homepage hero needs more whitespace between the hero image/text and the first product/service section below. If sections feel stacked directly on top of each other without breathing room, add `margin-tb-50` or `padding-tb-50` to the separating section
- Card grids (`grid-3-col`) have consistent gap spacing — cards should not touch each other
- Related Articles section has top and bottom padding that separates it clearly from the main content above

**Fix pattern:** Add `margin-tb-50` or `padding-tb-50` to sections that feel compressed. Use `bg-light-gray` on alternating sections to create visual separation without relying solely on whitespace.

---

## Section 2: Visual Hierarchy

The eye should travel naturally: hero headline → supporting text → key benefit → CTA. If a visitor has to work to figure out what the page is about or what to do next, the hierarchy is broken.

**Check for each page:**
- H1 uses `stagger1` class and is the largest, most prominent text on the page
- H2 section headings (`variable-h2-orange` or `heading-2-accent`) are clearly subordinate to H1 but dominant over body text
- H3 card titles (`variable-h3-orange` or `variable-h3`) are visually smaller than H2
- Body text does not compete visually with headings — if a paragraph feels as heavy as a heading, the heading classes may be missing
- Sections alternate between white background and `bg-light-gray` — this creates visual rhythm and tells the eye "new section" without requiring extra whitespace
- No section should have more than 3-4 dense paragraphs in a row without a visual break (heading, image, bullet list, or card grid)

---

## Section 3: Above the Fold — CTA Visibility

The single most important UX goal: a visitor should be able to see what this business does and how to contact them without scrolling. On mobile, this is critical.

**Check for each page:**
- The H1 is visible above the fold on desktop (1280px viewport)
- The phone number or "Schedule a Consultation" CTA button is visible in the hero section without scrolling on desktop
- On mobile, the hero stacks cleanly: image on top (or hidden), headline, brief description, CTA button — all within the first screen
- The `centerSmall` div in the hero contains the CTA — verify it's there and that the button is styled with the correct button class, not plain text

**What "above the fold" means here:** The hero section (`outer-flex`) is the above-the-fold zone. Everything inside it should be compelling enough that a visitor who sees nothing else still knows: (1) what the business does, (2) where it serves, (3) how to take action.

---

## Section 4: Mobile Layout

All pages use responsive CSS from `style.css`. Verify the mobile layout works correctly for each rewritten page.

**Check for each page:**
- `outer-flex` collapses to a single column on mobile — image stacks above text or is hidden via CSS
- Hero image does not cause horizontal scroll on mobile
- Navigation checkbox toggle works (no JS required — verify the label/checkbox pattern is intact)
- Card grids (`grid-3-col`) collapse to single column on mobile
- Font sizes are readable on mobile — body text should not be smaller than 16px effective size
- Tap targets (buttons, links) are large enough — minimum 44px height

---

## Section 5: Content Density

Pages that are walls of text lose visitors quickly. Oklahoma City homeowners browsing window treatment options are often doing so from their phones while watching TV. Content must be scannable.

**Check for each page:**
- No more than 3-4 sentences per paragraph
- Bullet lists are used for features, benefits, or comparisons (not everything — but lists are a tool)
- Product feature sections use card grids, not long paragraphs
- The "What You'll Learn" hero checklist uses `✓` bullets for scannability
- Key information (price ranges, product names, location) appears in bold or in a heading — not buried mid-paragraph

---

## Section 6: Image Standards

Images on this site serve two purposes: search ranking (alt text, file naming) and emotional resonance (showing beautiful window treatments in Oklahoma homes builds desire). Both must be met.

**Check for each page:**
- Hero/LCP image: has `fetchpriority="high"`, NO `loading="lazy"`, has `width` and `height` attributes
- All other images: have `loading="lazy"`, `width`, `height`, and descriptive `alt` text
- Alt text describes what is in the image AND includes a relevant keyword naturally — e.g., `"Custom cellular shades installed in an Edmond Oklahoma living room"` not `"shades image"`
- Images are proportional — no stretching, no awkward cropping
- Hero image dimensions feel generous, not tiny — on desktop, the hero image should fill roughly half the hero section width

---

## Section 7: Related Articles Section

Every page ends with a Related Articles section. This section exists to keep visitors on the site longer and to build internal link equity. It must meet both goals.

**Check for each page:**
- 3 cards present, each with a descriptive H3 title and a paragraph containing an inline link
- Link text is short and descriptive — 2-5 words maximum (e.g., "custom blind options" not "click here to learn about custom blinds")
- Links do not duplicate any links already present in the main body content
- Cards link to pages that are genuinely related to the current page's topic — not just random pages
- The section uses `bg-light-gray` background to visually separate it from the main content
- H3 titles in Related Articles use `variable-h3 h-center balanced-text` (NOT `-orange`) per site conventions

---

## Section 8: Pre-Publish UX Checklist

Run this before marking any page as ready for review:

- [ ] Hero section has adequate whitespace — no cramped feeling
- [ ] H1 is visible above the fold on desktop
- [ ] CTA (phone or consultation button) is in the hero section
- [ ] Visual hierarchy is clear: H1 > H2 > H3 > body
- [ ] Sections alternate backgrounds (white / light-gray) for rhythm
- [ ] No wall-of-text sections — content is broken up visually
- [ ] All images have width, height, alt text, loading attributes
- [ ] Hero LCP image has fetchpriority="high" and no loading="lazy"
- [ ] Related Articles section present, 3 cards, no duplicate links
- [ ] Mobile layout verified — no horizontal scroll, hero stacks cleanly
- [ ] index.html: extra whitespace added between hero and first content section if not already present
