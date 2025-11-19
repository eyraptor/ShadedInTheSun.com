# Code Templates & Examples

**These are the EXACT templates from your working pages. Use these when adding "What You'll Learn" and Related Articles sections.**

---

## HERO SECTION WITH "WHAT YOU'LL LEARN" - Exact Template

Copy this structure exactly from patio-shades-nichols-hills.html lines 169-191:

```html
<section class="margin-tb-25">
  <div class="padding-15 outer-flex">
    <img class="max-width-90p-h-auto margin-rl30" width="800" height="533" src="/images/YOUR-IMAGE.webp" alt="Descriptive alt text describing the image">
    <div class='centerSmall'>
      <h1 class="h-center balanced-text variable-h1-orange stagger1">Your Main Page Heading - Include Primary Keyword</h1>

      <div class='margin-t-25'>
        <h2 class='variable-h2-orange h-center margin-t-15'>What You'll Learn in This Article:</h2>
        <ul class='margin-t-10'>
          <li class='fs-550 padding-left-15px margin-t-10'><span class='pop-100'>✓</span> <span class='text-neutral-900'>Specific learning outcome 1 - be detailed and specific</span></li>
          <li class='fs-550 padding-left-15px margin-t-10'><span class='pop-100'>✓</span> <span class='text-neutral-900'>Specific learning outcome 2 - what will reader understand</span></li>
          <li class='fs-550 padding-left-15px margin-t-10'><span class='pop-100'>✓</span> <span class='text-neutral-900'>Specific learning outcome 3 - real benefit or knowledge</span></li>
          <li class='fs-550 padding-left-15px margin-t-10'><span class='pop-100'>✓</span> <span class='text-neutral-900'>(Optional) Specific learning outcome 4 - maximum 4 bullets</span></li>
        </ul>
      </div>

      <p class='Second-Color fs-900 h-center-div margin-t-25'>Call Brent & Edna today at <a class='button2 vertical-align-text' href="tel:14052595599" onclick="return gtag_report_conversion();">405-259-5599</a> <br>for your window treatment questions.</p>
    </div>
  </div>
</section>
```

### Key Points - FOLLOW EXACTLY:
- `h1` class: `h-center balanced-text variable-h1-orange stagger1` (NOT just stagger1)
- `h2` class: `variable-h2-orange h-center margin-t-15` (inside margin-t-25 div)
- Bullets use: `<span class='pop-100'>✓</span> <span class='text-neutral-900'>text</span>` structure
- All list items have: `fs-550 padding-left-15px margin-t-10` classes
- Call-to-action paragraph after bullets with phone number
- Image dimensions verified as 800x533

### DIFFERENT from your old approach:
- ❌ Opening paragraph is NOT in hero section anymore
- ✓ Call-to-action paragraph with phone number IS in hero section
- ✓ Opening content goes in a separate section below (see patio-shades lines 193-198)

---

## RELATED ARTICLES SECTION - Exact Template from template.html

Copy this structure exactly from template.html lines 335-353:

```html
<section>
  <div class='vertical-center container'>
    <h2 class='h-center balanced-text margin-tb-25 variable-h2-orange'>Related Articles</h2>
  </div>
  <div class="container grid-3-col">
    <div class="card h-center-div">
      <h3 class='variable-h3 h-center balanced-text'>Article Title 1</h3>
      <p class='padding-left-5px'>Brief description of article content with <a href="/page1.html">descriptive link text</a> integrated naturally into the paragraph.</p>
    </div>
    <div class="card h-center-div">
      <h3 class='variable-h3 h-center balanced-text'>Article Title 2</h3>
      <p class='padding-left-5px'>Different topic description with <a href="/page2.html">another descriptive link</a> that flows naturally in the text.</p>
    </div>
    <div class="card h-center-div">
      <h3 class='variable-h3 h-center balanced-text'>Article Title 3</h3>
      <p class='padding-left-5px'>Third article description featuring <a href="/page3.html">related content link</a> that complements the other two cards.</p>
    </div>
  </div>
</section>
```

### Key Points - FOLLOW EXACTLY:
- NO background color (NOT bg-light-gray)
- `h2` class: `h-center balanced-text margin-tb-25 variable-h2-orange` (with -orange)
- `h3` class: `variable-h3 h-center balanced-text` (WITHOUT -orange)
- Links are INLINE in `<p>` tags, NOT on headings
- Paragraphs use `padding-left-5px` class
- H3 headings are plain text ONLY - never make them links
- **NO DUPLICATE LINKS:** If a page link appears in the body content, do NOT include it in Related Articles. Each link should appear only once per page.
- **Links can point to ANY page on site** - not limited to "related articles." All pages are window treatment related, so all are valid Related Articles

### Link Text Quality - CRITICAL:
Links should be **descriptive but concise** - help readers understand what information/content they will find when clicking:

#### ❌ WRONG: Sentence-like Link Text
```html
<p>The links need to help <a href="/custom-blinds.html">choose Shaded In The Sun for custom blinds and shutters in their homes</a> with expert installation.</p>
```
**Problem:** Reads like a sentence continuation; doesn't clearly indicate what the destination page contains.

#### ✓ CORRECT: Content-Focused Link Text
```html
<p>Discover <a href="/custom-blinds.html">custom blind options with expert installation in Oklahoma City</a> and enhance your home's appearance.</p>
```
**Better:** Reader immediately understands they'll find information about custom blinds and installation services.

#### ✓ MORE EXAMPLES: Good Link Text
```html
- "explore <a href="/motorized.html">motorized blinds with smart home integration</a>"
- "learn about <a href="/energy-saving.html">energy-efficient window treatment options</a>"
- "discover <a href="/alternatives.html">alternatives to traditional blinds and shades</a>"
- "understand <a href="/opacities.html">the difference between shade opacity levels</a>"
```
**Why these work:** Each link clearly indicates what the reader will LEARN or DISCOVER on that page.

### Common Mistake from Before:
- ❌ DO NOT make h3 headings into links: `<h3><a href="/page.html">Heading</a></h3>`
- ✓ DO put links in paragraph text: `<p>Text with <a href="/page.html">link here</a> continues naturally.</p>`

---

## INCORRECT PATTERNS - WHAT NOT TO DO

### ❌ WRONG: Link on Heading
```html
<h3 class='variable-h3-orange h-center balanced-text'><a href="/page.html">Norman® Window Treatments</a></h3>
```
**Problem:** This looks bad and violates SEO best practices. User said this "looks like crap."

### ✓ CORRECT: Link in Paragraph
```html
<h3 class='variable-h3-orange h-center balanced-text'>Norman® Window Treatments</h3>
<p class='padding-left-5px'>Discover premium <a href="/page.html">Norman® window treatments</a> and SmartDrape automation for complete home control.</p>
```

---

### ❌ WRONG: Generic Link Text
```html
<p>Learn more about motorized shades. <a href="/motorized.html">Click here</a> for details.</p>
<p>Discover our options. <a href="/options.html">Read more →</a></p>
<p>Want to know more? <a href="/info.html">Learn more</a></p>
```
**Problem:** Links don't tell reader what they'll find. Bad for SEO and UX.

### ✓ CORRECT: Descriptive Link Text
```html
<p>Experience the convenience of <a href="/motorized.html">motorized shades with smart home integration</a>.</p>
<p>Explore our <a href="/options.html">complete selection of window treatment options</a>.</p>
<p>Discover how <a href="/info.html">custom shades transform your home's appearance</a>.</p>
```

---

### ❌ WRONG: Trailing Link
```html
<p>Experience the convenience of smart home-integrated motorized shades with automated scheduling and voice control. <a href="/motorized.html">Learn about motorization</a></p>
```
**Problem:** Link doesn't integrate naturally; it's a trailing call-to-action.

### ✓ CORRECT: Integrated Link
```html
<p>Experience the convenience of <a href="/motorized.html">motorized shades</a> with smart home integration, automated scheduling, and voice control.</p>
```

---

## META TAGS - Quick Reference

### Title Tag Example
**Length:** 55-60 characters (not longer than 60)
```html
<title>Custom Window Blinds Oklahoma City | Motorized & Smart Home</title>
```

### Meta Description Example
**Length:** Maximum 135 characters (verified by SEMRush for mobile/desktop)
```html
<meta name="description" content="Custom blinds and shades for every style. Motorized options available. Expert installation in Oklahoma City. Call 405-259-5599!">
```

**Count characters:** Use a character counter tool - 135 max is strict limit

---

## IMAGE ATTRIBUTES - Template

### Correct Image Code
```html
<img class='margin-tb-25'
     src="/images/motorized-shades-oklahoma.webp"
     alt="Motorized blinds installed in Oklahoma City home showing smart control"
     width="800"
     height="533"
     loading="lazy">
```

### What Each Attribute Does:
- `src` - File path (use .webp when possible)
- `alt` - Descriptive text for accessibility and SEO
- `width` - Exact pixel width (verify with file command!)
- `height` - Exact pixel height (verify with file command!)
- `loading="lazy"` - Performance optimization for images below the fold

### Common Image Dimensions on Your Site:
- Hero/body images: 800x533
- Featured images: 800x533
- Smaller icons/graphics: 400x200

---

## HEADING HIERARCHY - Structure

### On Every Page:
```html
<h1>Main page topic (ONE per page)</h1>
  <h2>Section heading 1</h2>
    <p>Content paragraph</p>
  <h2>Section heading 2</h2>
    <p>Content paragraph</p>
```

### NEVER:
- Multiple H1 tags on one page
- H3 before H2
- Skipping heading levels (H1 → H3, skip H2)

---

## INTERNAL LINK STANDARDS

### ✓ Descriptive Links (What to Use)
```
"Explore our complete shade selection"
"Learn about motorized window treatments"
"Discover five reasons to choose custom shades"
"Find out how Norman®'s SmartDrape works"
"Get details on energy-saving options"
```

### ❌ Non-Descriptive Links (Never Use)
```
"Click here"
"Read more"
"Learn more"
"More information"
"Read more →"
"View details"
"More..."
"This page" (avoid - confusing for screen readers)
```

### ✓ Inline vs ❌ Trailing
```
GOOD: "Explore our <a>motorized blind options</a> for smart home integration."
BAD:  "Explore motorized blind options. <a>Click here</a> for details."
```

---

## LOCATION & CAPITALIZATION - Standards

### ✓ Correct Capitalization
```
Oklahoma City (not oklahoma city)
Edmond (not edmond)
Norman® (with ® symbol)
Graber® (with ® symbol)
```

### ✓ Natural Prepositions
```
"blinds for Oklahoma City"
"shades in Oklahoma City"
"serving Oklahoma City and Edmond"
"throughout the Oklahoma City metro"
```

### ❌ Avoid Forced Lowercase
```
❌ "blinds oklahoma city"
❌ "shades oklahoma city"
✓ "blinds for Oklahoma City"
```

---

## BRAND ACCURACY VERIFICATION - REQUIRED BEFORE ANY PAGE EDIT

**CRITICAL DIRECTIVE:** Before editing or optimizing ANY page, you MUST verify all product information, claims, and technical details against the official brand supplier websites.

### Why This Is Non-Negotiable:
- Your site sells Graber® and Norman® products - you represent these brands
- Inaccurate product information damages credibility and violates brand trust
- Competitors will cite accurate information; you must match or exceed accuracy
- Google rewards sites with accurate, authoritative product information
- This is the "single most important thing" for SEO optimization work

### VERIFICATION PROCESS - Do This FIRST:

**For every page you work on:**

1. **Identify all product claims and features mentioned** on the page:
   - Product names and model references
   - Feature descriptions (e.g., "honeycomb structure," "cordless lift system")
   - Material types (e.g., "cellular shades," "roman shades")
   - Technical specifications (dimensions, lift systems, motorization options)
   - Brand-specific claims (e.g., "Norman® SmartDrape," "Graber® UltraLite")

2. **Cross-reference each claim with official sources:**
   - **graberblinds.com** - For all Graber® product specifications, features, and technical details
   - **normanusa.com** - For all Norman® product specifications, features, and technical details
   - Use product pages, spec sheets, feature guides from these official sites
   - Document what the official sources say vs. what your page claims

3. **Verify accuracy by:**
   - Checking product names match official naming conventions
   - Confirming feature descriptions are accurate
   - Validating technical specifications are correct
   - Ensuring brand symbols are used correctly (®, ™)
   - Confirming product availability in Oklahoma market

4. **Correct any inaccuracies BEFORE publishing:**
   - Update wrong product names or descriptions
   - Remove claims not supported by official sources
   - Add missing technical details from official sources
   - Fix misrepresented features or benefits

### What This Means For Your Work:

**BEFORE** you optimize title tags, meta descriptions, hero sections, or any content:
- First, verify all product information is accurate against graberblinds.com and normanusa.com
- Document what you found on the official sites
- Update any inaccuracies in the page content
- THEN proceed with optimization work

**Example Verification Workflow:**
```
Page: Best-Alternatives-to-Blinds.html
Claims to verify:
- "Graber® cellular shades have honeycomb structure"
- "Roman shades fold up beautifully"
- "Norman® products available"

Action:
1. Visit graberblinds.com → Search cellular shades → Verify honeycomb description
2. Visit graberblinds.com → Search roman shades → Verify fold-up description
3. Visit normanusa.com → Confirm Norman products available in Oklahoma
4. Document findings
5. Update page if any inaccuracies found
6. THEN optimize meta tags and structure
```

### Documentation Requirement:
When loading this file for a work session, I should AUTOMATICALLY check if the current page has had its brand information verified. If NOT verified in this session, I must do brand verification FIRST before proceeding with any optimization work.

**Auto-Load Checklist:**
- ✓ Load this file automatically at session start
- ✓ Identify which page I'm working on
- ✓ Check if that page has been verified against graberblinds.com and normanusa.com
- ✓ If NOT verified, make it the first task before any other edits
- ✓ Document verification findings in my work log

---

## COMPETITOR RESEARCH - REQUIRED BEFORE META TAG OPTIMIZATION

**Location:** SEO Plan\10-17-25 - SITE-WIDE-KEYWORD-AUDIT.md (contains 100 keywords)

**When you need to optimize title/meta description for a page:**

1. **Research top 3-5 competitors ranking for that page's primary keywords**
   - Use Google to search for the target keyword
   - Look at pages ranking in positions 1-5
   - Document their:
     - Page title
     - Meta description
     - H1 tag
     - Opening paragraph focus
     - How they use the primary keyword

2. **Analyze what's working**
   - What keywords appear in their title?
   - How long are their meta descriptions?
   - Do they use location keywords?
   - Do they include phone numbers or CTAs?
   - What benefit/angle are they emphasizing?

3. **Create your optimized version that:**
   - Includes primary keyword naturally (like they do)
   - Includes location keywords (they likely don't - opportunity!)
   - Emphasizes different benefit/angle
   - Includes phone number if space allows (they likely don't - conversion advantage!)
   - Follows our 55-60 char title / 135 char description limits

4. **Example:**
   - Competitor title: "Motorized Blinds | Automated Window Treatments"
   - Our title: "Motorized Blinds Oklahoma City | Smart Home Window Control"
   - Competitor meta: Generic features
   - Our meta: "Motorized blinds with smart home control in Oklahoma City. Expert installation. Free consultation. Call 405-259-5599!"

**This gives us competitive advantage:** Location + phone + benefit differentiation

---

## 100 KEYWORDS FOR SITE

**Reference:** SEO Plan\10-17-25 - SITE-WIDE-KEYWORD-AUDIT.md

The audit contains keywords organized by tier (1-7) covering:
- Problem-focused keywords ("cordless blinds for safety")
- Location-integrated keywords ("motorized blinds Oklahoma City")
- Brand-specific keywords ("Graber exterior shades")
- Solution-focused keywords ("energy saving window treatments")

**Use these keywords as a reference** when:
- Writing page content
- Optimizing titles/descriptions
- Creating "What You'll Learn" bullets
- Deciding on page topics

**DO NOT force keywords** - let them flow naturally in sentences following the capitalization and grammar rules from SEO-WORKING-INSTRUCTIONS.md

---

## CHECKLIST - Before Publishing Any Change

- [ ] "What You'll Learn" has 3-4 specific checkmark bullets (patio-shades format exactly)
- [ ] Hero section matches template exactly: h1 with variable-h1-orange, h2 with variable-h2-orange
- [ ] Call-to-action phone paragraph is in hero section with proper classes
- [ ] Related Articles section matches template exactly (h2 variable-h2-orange, h3 variable-h3)
- [ ] All links in Related Articles are INLINE in paragraph text
- [ ] No links on headings
- [ ] All links are descriptive
- [ ] Images have width, height, alt text, loading="lazy"
- [ ] All proper nouns capitalized (Oklahoma City, Edmond, Graber®, Norman®)
- [ ] No forced keyword stuffing - reads naturally
- [ ] Meta description is under 135 characters (verified with character counter)
- [ ] Title tag is 55-60 characters (verified with character counter)
- [ ] Page has 3-5 internal links in main content
- [ ] Page didn't exist before (or wasn't recently modified)
- [ ] Checked INTERNAL-LINK-PRIORITY-CHECKLIST.md before adding Related Articles
- [ ] Competitor research done for primary keywords (if title/meta being optimized)

---

**Last Updated:** November 17, 2025
**Version:** 1.1 (Updated with exact templates and competitor research requirements)
