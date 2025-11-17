# Page Section Structure - Exact Layout Pattern

**Reference model:** patio-shades-nichols-hills.html (lines 168-198)

---

## Complete Page Flow

### Section 1: HERO SECTION (lines 169-191)
```html
<section class="margin-tb-25">
  <div class="padding-15 outer-flex">
    <img class="max-width-90p-h-auto margin-rl30" width="800" height="533" src="/images/image.webp" alt="...">
    <div class='centerSmall'>
      <h1 class="h-center fs-1000 balanced-text variable-h1-orange stagger1">Main Heading</h1>

      <div class='margin-t-25'>
        <h2 class='variable-h2-orange h-center margin-t-15'>What You'll Learn in This Article:</h2>
        <ul class='margin-t-10'>
          <li class='fs-550 padding-left-15px margin-t-10'><span class='pop-100'>✓</span> <span class='text-neutral-900'>Bullet 1</span></li>
          <li class='fs-550 padding-left-15px margin-t-10'><span class='pop-100'>✓</span> <span class='text-neutral-900'>Bullet 2</span></li>
          <li class='fs-550 padding-left-15px margin-t-10'><span class='pop-100'>✓</span> <span class='text-neutral-900'>Bullet 3</span></li>
          <li class='fs-550 padding-left-15px margin-t-10'><span class='pop-100'>✓</span> <span class='text-neutral-900'>Bullet 4</span></li>
        </ul>
      </div>

      <p class='Second-Color fs-900 h-center margin-t-25'>Call Brent & Edna today at <a class='button2 vertical-align-text' href="tel:14052595599" onclick="return gtag_report_conversion();">405-259-5599</a> <br>for your window treatment questions.</p>
    </div>
  </div>
</section>
```

---

### Section 2: OPENING CONTENT (lines 193-198)
**THIS IS SEPARATE FROM HERO** - Opening paragraphs go here, NOT in hero section

```html
<section>
  <div class='vertical-center container'>
    <p class='h-center-div padding-15 max-width-80p'>First opening paragraph introducing the topic and establishing context. This paragraph expands on the hero section promise. Links can be added here for internal navigation.</p>
    <p class='h-center-div padding-15 max-width-80p'>Second opening paragraph if needed, continuing to introduce and contextualize the main topic for the reader.</p>
  </div>
</section>
```

**Key points:**
- Separate `<section>` from hero
- Uses `vertical-center container` for layout
- Paragraphs have `h-center-div padding-15 max-width-80p` classes
- This is where your opening content goes, not in the hero
- Can include internal links naturally

---

### Section 3: MAIN CONTENT (various structures)

Example from patio-shades (lines 200-217):

```html
<section>
  <div class='vertical-center container'>
    <h2 class='h-center balanced-text variable-h2-orange'>Section Heading Here</h2>
    <p class=''>Regular paragraph content.</p>
    <ul class='margin-tb-25'>
      <li class='fs-550 padding-left-15px'><span class='pop-100'> &#8226;</span> <span
          class="fw-bold text-neutral-900 fs-550">Bullet title:</span>
        <span class='text-neutral-900'> Bullet description text.</span>
      </li>
      <li class='fs-550 padding-left-15px'><span class='pop-100'> &#8226;</span> <span
          class="fw-bold text-neutral-900 fs-550">Bullet title:</span>
        <span class='text-neutral-900'> Bullet description text.</span>
      </li>
    </ul>
  </div>
</section>
```

**Key points:**
- `h2` uses `variable-h2-orange` class
- Bullet points use ` &#8226;` (bullet character)
- Each bullet has bold title + description
- Content wrapped in `vertical-center container`

---

### Section 4: RELATED ARTICLES (at end)

```html
<section>
  <div class='vertical-center container'>
    <h2 class='h-center balanced-text margin-tb-25 variable-h2-orange'>Related Articles</h2>
  </div>
  <div class="container grid-3-col">
    <div class="card h-center-div">
      <h3 class='variable-h3 h-center balanced-text'>Title 1</h3>
      <p class='padding-left-5px'>Description with <a href="/link.html">descriptive link</a> text.</p>
    </div>
    <!-- Two more cards... -->
  </div>
</section>
```

---

## H-CLASSES AND WHEN TO USE THEM

### H1 Classes:
- `class="h-center fs-1000 balanced-text variable-h1-orange stagger1"`
- Used once per page in hero section
- Always use `variable-h1-orange`
- Includes `stagger1` for animation

### H2 Classes:
**With -orange (hero/main sections):**
- `class="h-center balanced-text variable-h2-orange"` (main content sections)
- `class="variable-h2-orange h-center margin-t-15"` (in "What You'll Learn" div)
- `class='h-center balanced-text margin-tb-25 variable-h2-orange'` (Related Articles heading)

**Without -orange (rarely used):**
- `class="h-center balanced-text margin-tb-25 variable-h2"` (some secondary sections)

### H3 Classes:
**For cards/sections (variable-h3, no -orange):**
- `class='variable-h3 h-center balanced-text'` (Related Articles cards)
- `class='variable-h3-orange h-center balanced-text'` (Product feature cards, grid items)

**When to use which:**
- Use `variable-h3` for Related Articles
- Use `variable-h3-orange` for product/feature cards in grids
- Ask if you're unsure for a specific page context

---

## WHEN TO USE WHICH SECTION STRUCTURE

| Content Type | Structure | Example |
|------|-----------|---------|
| Opening introduction | `<section>` → `<div class='vertical-center container'>` → `<p>` | patio-shades lines 193-198 |
| Main topic with bullets | `<section>` → `<div class='vertical-center container'>` → `<h2>` + `<ul>` | patio-shades lines 200-217 |
| Grid of items (Related Articles) | `<section>` → `<div class="container grid-3-col">` → multiple `<div class="card">` | template.html lines 335-353 |
| Alternative content (cards with images) | `<section>` → `<div class="container grid-3-col">` → `<div class="card h-center-div">` with image | template.html lines 184-283 |

---

## DO NOT

❌ Put opening paragraph inside hero section
❌ Use `<div class='vertical-center container'>` inside hero
❌ Make h3 headings into links
❌ Use variable-h1-orange on h2 or h3
❌ Use variable-h3-orange on Related Articles headings
❌ Create custom class combinations not shown in examples

---

**Last Updated:** November 17, 2025
**Version:** 1.0
