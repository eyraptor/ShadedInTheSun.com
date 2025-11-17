# Code Templates & Examples

**Use these templates when adding "What You'll Learn" and Related Articles sections**

---

## HERO SECTION WITH "WHAT YOU'LL LEARN" - Complete Example

This is the **CORRECT PATTERN** used on pages like motorized-window-treatments-for-OKC.html and norman.html

```html
<section class="margin-tb-25">
  <div class="padding-15 outer-flex">
    <img class="max-width-90p-h-auto margin-rl30" width="800" height="533" src="/images/example.webp" alt="Descriptive text about what's in the image" loading="lazy">
    <div class='centerSmall'>
      <h1 class='stagger1 balanced-text'>Your Main Heading Here - Include Primary Keyword</h1>
      <h2 class='h-center balanced-text margin-tb-25 variable-h2'>What You'll Learn in This Article:</h2>
      <ul aria-label="Article topics" style="display: inline-block;">
        <li>✓ Specific benefit or learning outcome 1</li>
        <li>✓ Specific benefit or learning outcome 2</li>
        <li>✓ Specific benefit or learning outcome 3</li>
        <li>✓ (Optional) Specific benefit or learning outcome 4</li>
      </ul>
      <p>A compelling opening paragraph that introduces your topic and establishes why the reader should care. Mention the value they'll get from reading.</p>
    </div>
  </div>
</section>
```

### Key Points:
- Image width/height MUST match actual file dimensions (verify first!)
- H1 includes primary keyword or main benefit
- H2 says exactly "What You'll Learn in This Article:"
- Bullets are 3-4 maximum, checkmarks only
- Bullets are SPECIFIC, not vague ("How motorized shades improve daily life" not "learn about shades")
- Paragraph after bullets introduces content

---

## RELATED ARTICLES SECTION - Complete Example

This is the **CORRECT PATTERN** - links are INLINE in paragraph text, NOT on headings

```html
<section class="margin-tb-50 padding-tb-50 bg-light-gray">
  <div class="container">
    <div class="padding-15">
      <h2 class='h-center balanced-text margin-tb-25 variable-h2'>Related Articles</h2>
    </div>
    <div class="container grid-3-col">
      <div class="card h-center-div">
        <h3 class='variable-h3-orange h-center balanced-text'>First Topic Title</h3>
        <p class='padding-left-5px'>Introductory sentence explaining this topic and what the reader will learn from it. Discover <a href="/specific-page.html">descriptive link text here</a> for more detailed information about this specific benefit.</p>
      </div>
      <div class="card h-center-div">
        <h3 class='variable-h3-orange h-center balanced-text'>Second Topic Title</h3>
        <p class='padding-left-5px'>A different angle or complementary topic. Learn how <a href="/another-page.html">related topic or product name</a> addresses different customer needs and provides additional value.</p>
      </div>
      <div class="card h-center-div">
        <h3 class='variable-h3-orange h-center balanced-text'>Third Topic Title</h3>
        <p class='padding-left-5px'>A third perspective or product focus. Explore <a href="/third-page.html">additional resources or product options</a> to find the solution that works best for your situation.</p>
      </div>
    </div>
  </div>
</section>
```

### Key Points:
- H3 is plain text ONLY - NO LINKS on the heading
- Links are INSIDE the `<p>` tag, inline with other text
- Link text is short and descriptive (not "click here", "read more", "learn more")
- Paragraphs are 1-2 sentences
- All three cards should offer variety (not all to similar pages)
- Cards use `h-center-div` class for centered alignment
- Background is `bg-light-gray` for visual separation

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
- Featured images: 800x600
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

## CHECKLIST - Before Publishing Any Change

- [ ] "What You'll Learn" has 3-4 specific checkmark bullets
- [ ] Related Articles has 3 cards with plain H3 headings
- [ ] All links in Related Articles are INLINE in paragraph text
- [ ] No links on headings
- [ ] All links are descriptive
- [ ] Images have width, height, alt text, loading="lazy"
- [ ] All proper nouns capitalized (Oklahoma City, Edmond, Graber®, Norman®)
- [ ] No forced keyword stuffing - reads naturally
- [ ] Meta description is under 135 characters
- [ ] Title tag is 55-60 characters
- [ ] Page has 3-5 internal links in main content
- [ ] Page didn't exist before (or wasn't recently modified)
- [ ] Checked INTERNAL-LINK-PRIORITY-CHECKLIST.md before adding Related Articles

---

**Last Updated:** November 17, 2025
**Version:** 1.0
