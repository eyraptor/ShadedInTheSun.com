# Load SEO Session - Complete Context for All Work

**Purpose:** Load all critical SEO documentation and page status at the start of every session.

**Use this command when:** Starting any work on ShadedInTheSun.com HTML pages

---

## SECTION 1: CRITICAL DIRECTIVES - READ FIRST

### You Must NOT Touch These Pages (Recovery Period)
These pages were recently modified and are currently recovering in Google's index. **DO NOT make changes to:**
- graber.html (modified Nov 15-17)
- norman.html (completed week of Nov 10)
- window-shades.html (modified early Nov)
- Top-Five-Window-Treatment-Trends-in-Oklahoma-City.html (modified Nov 10-12)

**Why?** These pages are causing the current SEO decline. Google needs 5-10 business days to re-crawl and update rankings after changes. Further edits will delay recovery.

### You CAN Work On These 12 Pages (Safe to Edit)
These pages have NOT been recently modified and do NOT have "What You'll Learn" + Related Articles sections:

1. shades-and-shutters-and-blinds-oh-my.html (3 internal links - needs formatting)
2. zebra-shades-stylish-solution.html (3 internal links - needs formatting)
3. Window-Treatment-Value.html (4 internal links - needs formatting)
4. Best-Alternatives-to-Blinds.html (6 internal links - needs formatting)
5. Types-of-window-blinds.html (6 internal links - needs formatting)
6. Cool-Your-Edmond-Oklahoma-Sunroom.html (6 internal links - needs formatting)
7. Energy-Saving-Window-Shades-Edmond-and-OKC.html (19 internal links - needs formatting)
8. custom-blinds-oklahoma-city.html (3 internal links - needs formatting)
9. best-motorized-blinds-installer-oklahoma-city.html (13 internal links - needs formatting)
10. norman-smartdrape-oklahoma-city.html (6 internal links - needs formatting)
11. best-window-treatment-company-edmond-ok.html (5 internal links - needs formatting)
12. best-window-treatments-oklahoma-weather.html (1 internal link - CRITICAL: needs more links first)

---

## SECTION 2: MANDATORY SEO GUIDELINES

### Before Making ANY Changes:
1. **Read SEO-WORKING-INSTRUCTIONS.md** (Section 1-12)
2. **Check INTERNAL-LINK-PRIORITY-CHECKLIST.md** before updating Related Articles
3. **Verify you are NOT modifying a page in the "DO NOT TOUCH" list above**
4. **Ask the user if uncertain** - never assume

### Core Rules:
- **"What You'll Learn" section:** H2 title with 3-4 checkmark bullets, specific promises
- **Related Articles:** 3 cards with descriptive links placed INLINE in paragraph text
- **Internal links:** 3-5 minimum per page, all descriptive (never "click here", "read more", "learn more")
- **Meta descriptions:** Maximum 135 characters (verified by SEMRush)
- **Title tags:** 55-60 characters
- **Images:** All must have width, height, alt text, and loading="lazy"
- **Locations:** Always capitalize (Oklahoma City, Edmond, NOT oklahoma city)

### Critical Reminder:
- Links in Related Articles must be INLINE within paragraph text, NOT on headings
- Model: `<p>Discover <a href="/page.html">linked text</a> and more content here.</p>`
- NOT: `<h3><a href="/page.html">Heading Text</a></h3>`

---

## SECTION 3: CURRENT LINK STATUS

### Pages Ranked by Current Internal Links:
- graber.html: 75 links
- window-shades.html: 75 links
- norman.html: 70 links
- window-shutters.html: 64 links
- about.html: 62 links
- blog.html: 61 links
- contact.html: 60 links
- faq.html: 48 links
- Energy-Saving-Window-Shades-Edmond-and-OKC.html: 19 links ✓
- motorized-window-treatments-for-OKC.html: 19 links ✓
- best-motorized-blinds-installer-oklahoma-city.html: 13 links ✓
- WindowShadeOpacitiesExplained.html: 13 links ✓
- fiveCustomBlindReasons.html: 12 links ✓
- LuxuryWindowTreatments.html: 10 links ✓
- graber-ultralite-lift-system.html: 7 links ✓

### Pages Needing More Internal Links (Priority):
- best-window-treatments-oklahoma-weather.html: 1 link → needs 2 more
- 2025Trends.html: 1 link → needs 2 more
- why-is-hunter-douglas-so-expensive.html: 1 link → needs 2 more
- newsletter.html: 0 links → needs 5 links

---

## SECTION 4: HERO SECTION TEMPLATE

When adding "What You'll Learn" sections, use this responsive hero structure:

```html
<section class="margin-tb-25">
  <div class="padding-15 outer-flex">
    <img class="max-width-90p-h-auto margin-rl30" width="800" height="533" src="/images/example.webp" alt="Descriptive alt text" loading="lazy">
    <div class='centerSmall'>
      <h1 class='stagger1 balanced-text'>Main Heading with Primary Keyword</h1>
      <h2 class='h-center balanced-text margin-tb-25 variable-h2'>What You'll Learn in This Article:</h2>
      <ul aria-label="Article topics" style="display: inline-block;">
        <li>✓ Specific benefit or topic 1</li>
        <li>✓ Specific benefit or topic 2</li>
        <li>✓ Specific benefit or topic 3</li>
      </ul>
      <p>Opening paragraph that introduces the topic and establishes value.</p>
    </div>
  </div>
</section>
```

---

## SECTION 5: RELATED ARTICLES TEMPLATE

For consistency and proper link placement, use this structure:

```html
<section class="margin-tb-50 padding-tb-50 bg-light-gray">
  <div class="container">
    <div class="padding-15">
      <h2 class='h-center balanced-text margin-tb-25 variable-h2'>Related Articles</h2>
    </div>
    <div class="container grid-3-col">
      <div class="card h-center-div">
        <h3 class='variable-h3-orange h-center balanced-text'>Article Title 1</h3>
        <p class='padding-left-5px'>Introductory text with <a href="/page1.html">descriptive link text</a> integrated naturally into the sentence. Keep it flowing naturally.</p>
      </div>
      <div class="card h-center-div">
        <h3 class='variable-h3-orange h-center balanced-text'>Article Title 2</h3>
        <p class='padding-left-5px'>Different content about <a href="/page2.html">another linked topic</a> with proper paragraph structure.</p>
      </div>
      <div class="card h-center-div">
        <h3 class='variable-h3-orange h-center balanced-text'>Article Title 3</h3>
        <p class='padding-left-5px'>Additional related content featuring <a href="/page3.html">third link with descriptive text</a> that readers will find valuable.</p>
      </div>
    </div>
  </div>
</section>
```

**Key Points:**
- H3 headings are plain text ONLY
- Links are INSIDE `<p>` tags, INLINE with other text
- Link text is short and descriptive
- All 3 links should vary in content type when possible

---

## SECTION 6: FILES YOU CAN REFERENCE

Location: `c:\My Documents\ShadedInTheSun.com\SEO Plan\`

- **SEO-WORKING-INSTRUCTIONS.md** - Complete SEO guidelines (read before any changes)
- **INTERNAL-LINK-PRIORITY-CHECKLIST.md** - Which pages need more links (read before updating Related Articles)
- **PROJECT_REFERENCE_GUIDE.md** - Overall site strategy and structure

Location: `c:\My Documents\ShadedInTheSun.com\` (root)

- **COMPLETE_LINK_INVENTORY.txt** - Full link count for all 31 pages (reference only)
- **PRIORITY_PAGES_DETAILED.txt** - Detailed analysis of pages needing work
- **EXECUTIVE_SUMMARY.txt** - Quick overview of site health

---

## SECTION 7: CURRENT RECOVERY STATUS

**Decline Timeline:**
- Oct 26-27: Peak performance (3 clicks, strong rankings)
- Nov 3: 2,300 impressions, 5 clicks, 28.5 avg position
- Nov 10: 1,140 impressions, 0 clicks, 19.3 avg position
- Nov 17: 1,653 impressions, 1 click, 21.7 avg position (continuing to fluctuate)

**What We're Doing:**
- Currently in RECOVERY PHASE - no major page edits to recently-modified pages
- Adding formatting to unmodified pages to build structural consistency
- Monitoring Google's re-crawl and re-evaluation of changed pages

**Expected Recovery:**
- 5-10 business days from final page modification
- Formatting improvements on other pages build equity for when recovery completes

---

## SECTION 8: YOUR TASK CHECKLIST

When working on pages in the safe-to-edit list:

- [ ] Read full SEO-WORKING-INSTRUCTIONS.md
- [ ] Check INTERNAL-LINK-PRIORITY-CHECKLIST.md before updating Related Articles
- [ ] Add "What You'll Learn" section with 3-4 specific checkmark bullets
- [ ] Add Related Articles section with 3 descriptive links (inline in paragraph text)
- [ ] Verify all links are not already in main content
- [ ] Prioritize linking to underperforming pages (those with 1-6 internal links)
- [ ] Check all images have width, height, alt text, loading="lazy"
- [ ] Verify no recently-modified pages were touched
- [ ] Ask user before making changes if uncertain

---

**Last Updated:** November 17, 2025
**Version:** 1.0
**Status:** Production-ready
