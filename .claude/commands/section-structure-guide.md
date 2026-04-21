# Page Section Structure

## PAGE FLOW ORDER
1. Hero Section
2. Opening Content (separate section)
3. Main Content Sections
4. Related Articles

---

## SECTION STRUCTURE REFERENCE

| Content Type | Structure |
|---|---|
| Opening intro | `<section>` → `<div class='vertical-center container'>` → `<p>` |
| Main topic with bullets | `<section>` → `<div class='vertical-center container'>` → `<h2>` + `<ul>` |
| Related Articles grid | `<section>` → `<div class="container grid-3-col">` → `<div class="card">` |
| Cards with images | `<section>` → `<div class="container grid-3-col">` → `<div class="card h-center-div">` |

---

## H-CLASS QUICK REFERENCE

| Tag | Class | Where Used |
|---|---|---|
| H1 | `h-center fs-1000 balanced-text variable-h1-orange stagger1` | Hero — once per page |
| H2 | `h-center balanced-text variable-h2-orange` | Main content sections |
| H2 | `variable-h2-orange h-center margin-t-15` | "What You'll Learn" div |
| H2 | `h-center balanced-text margin-tb-25 variable-h2-orange` | Related Articles heading |
| H3 | `variable-h3 h-center balanced-text` | Related Articles cards |
| H3 | `variable-h3-orange h-center balanced-text` | Product/feature grid cards |

---

## DO NOT
❌ Opening paragraph inside hero section
❌ `vertical-center container` inside hero
❌ H3 headings as links
❌ `variable-h3-orange` on Related Articles headings
❌ Class combinations not shown above — ask if unsure