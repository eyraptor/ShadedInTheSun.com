# Code Templates

## RULE: Verify graberblinds.com and normanusa.com BEFORE editing any page.

---

## HERO SECTION
```html
<section class="margin-tb-25">
  <div class="padding-15 outer-flex">
    <img class="max-width-90p-h-auto margin-rl30" width="800" height="533" src="/images/YOUR-IMAGE.webp" alt="Descriptive alt text">
    <div class='centerSmall'>
      <h1 class="h-center balanced-text variable-h1-orange stagger1">Your Main Heading - Primary Keyword</h1>
      <div class='margin-t-25'>
        <h2 class='variable-h2-orange h-center margin-t-15'>What You'll Learn in This Article:</h2>
        <ul class='margin-t-10' style="display: inline-block; text-align: left;">
          <li class='fs-550 padding-left-15px margin-t-10'><span class='pop-100'>✓</span> <span class='text-neutral-900'>Specific outcome 1</span></li>
          <li class='fs-550 padding-left-15px margin-t-10'><span class='pop-100'>✓</span> <span class='text-neutral-900'>Specific outcome 2</span></li>
          <li class='fs-550 padding-left-15px margin-t-10'><span class='pop-100'>✓</span> <span class='text-neutral-900'>Specific outcome 3</span></li>
          <li class='fs-550 padding-left-15px margin-t-10'><span class='pop-100'>✓</span> <span class='text-neutral-900'>Specific outcome 4</span></li>
        </ul>
      </div>
      <p class='Second-Color fs-900 h-center-div margin-t-25'>Call Brent & Edna today at <a class='button2 vertical-align-text' href="tel:14052595599" onclick="return gtag_report_conversion();">405-259-5599</a><br>for your window treatment questions.</p>
    </div>
  </div>
</section>
```

---

## OPENING CONTENT (separate section below hero)
```html
<section>
  <div class='vertical-center container'>
    <p class='h-center-div padding-15 max-width-80p'>Opening paragraph here.</p>
  </div>
</section>
```

---

## MAIN CONTENT SECTION
```html
<section>
  <div class='vertical-center container'>
    <h2 class='variable-h2-orange h-center balanced-text'>Section Heading</h2>
    <ul class='margin-tb-25'>
      <li class='fs-550 padding-left-15px'><span class='pop-100'>&#8226;</span> <span class="fw-bold text-neutral-900 fs-550">Bullet title:</span> <span class='text-neutral-900'>Description text.</span></li>
    </ul>
  </div>
</section>
```

---

## RELATED ARTICLES
```html
<section>
  <div class='vertical-center container'>
    <h2 class='variable-h2-orange h-center balanced-text margin-tb-25'>Related Articles</h2>
  </div>
  <div class="container grid-3-col">
    <div class="card h-center-div">
      <h3 class='variable-h3 h-center balanced-text'>Article Title 1</h3>
      <p class='padding-left-5px'>Description with <a href="/page1.html">descriptive link text</a> here.</p>
    </div>
    <div class="card h-center-div">
      <h3 class='variable-h3 h-center balanced-text'>Article Title 2</h3>
      <p class='padding-left-5px'>Description with <a href="/page2.html">descriptive link text</a> here.</p>
    </div>
    <div class="card h-center-div">
      <h3 class='variable-h3 h-center balanced-text'>Article Title 3</h3>
      <p class='padding-left-5px'>Description with <a href="/page3.html">descriptive link text</a> here.</p>
    </div>
  </div>
</section>
```

---

## META TAGS
```html
<title>Primary Keyword Location | Shaded In The Sun</title>
<meta name="description" content="Max 135 chars. Emotional hook + benefit + soft CTA. No phone number.">
<link rel="canonical" href="https://shadedinthesun.com/page.html">
<meta property="og:title" content="Same as title tag">
<meta property="og:description" content="Same as meta description">
```

---

## IMAGE RULES
- All images: `width` `height` `alt` `loading="lazy"`
- Hero/LCP image only: `fetchpriority="high"` — NO `loading="lazy"`
- Format: .webp preferred
- Standard size: 800x533

---

## LINK RULES
- 3–5 internal links per page in body text
- Descriptive anchor text only — never "click here", "read more", "learn more"
- Links INLINE in `<p>` tags — never on headings
- No duplicate links between body and Related Articles

---

## CSS CLASSES — IN TRANSITION
Most pages still use legacy classes. Do NOT swap classes unless Brent explicitly asks.

**Legacy (still active on most pages):**
`variable-h1-orange`, `variable-h2-orange`, `variable-h3-orange`, `variable-h3`,
`pop-100`, `text-neutral-900`, `Second-Color`, `centerSmall`, `footer-layout`, `stagger1`

**New (use only on pages already migrated):**
`heading-1-accent`, `heading-2-accent`, `heading-2-primary`, `heading-3-primary`,
`heading-3-accent`, `text-accent`, `text-neutral`, `text-primary`