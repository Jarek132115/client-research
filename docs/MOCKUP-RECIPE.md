# MOCKUP-RECIPE — generate a draft "fixed page" mockup for any qualified prospect

This is the executable spec for producing a single, self-contained HTML mockup that
shows the prospect's PDP rebuilt with their real brand and their flagged bugs fixed.
The output is always a **draft** — never claim ready.

Both `mockups/truwild/wild-greens-fixed.html` (ready) and
`mockups/mushroom-revival/daily-10-fixed.html` (draft) were produced by this recipe.
Read the TruWild file before running this for any new prospect — it is the quality
bar.

---

## INPUT (must all be available)

- `prospect.id` (e.g. `2026-06-10-mushroom-revival`) — used to derive the output folder.
- `prospect.weaknesses[]` — the flagged bugs you must fix and demonstrate.
- `prospect.demo.bestseller` or the URL in `prospect.demo.rationale` — the live PDP
  to rebuild (the page where the buy decision happens).
- A product handle derivable from the URL — used to name the output file.

If any input is missing, **stop and flag for manual generation**. Do not guess a page.

---

## HARD RULES (apply to every run)

- **Drafts only.** The routine sets `mockupStatus: "draft"` and nothing else. The
  string `"ready"` is reserved for Jarek's manual polish pass. Nothing auto-sends.
- **Real brand assets only.** If the brand cannot be cleanly extracted (no public
  product imagery, blocked CDN, licensed fonts with no acceptable Google substitute),
  STOP and flag — do not ship a generic template with their logo glued on.
- **Never invent verified-sounding numbers.** Every assumed discount, review count,
  or claim must be flagged as assumed in the report. Use products.json truth where
  possible.
- **A failed mockup is reported and skipped.** The prospect still publishes. Mockup
  failure must NEVER block the publish gate, and must NEVER weaken `scripts/check.js`
  invariants (≥2 revenue signals, ≥3 weaknesses, mandatory caveats, ≥2 outreach
  drafts).
- **Self-contained file.** No JS. No Shopify scripts. No carousels. No third-party
  widgets. No cookie banners. No embeds. Fonts via Google Fonts `<link>` or system
  stacks. Brand assets hotlinked from the prospect's own public CDN.
- **Never use real, identifiable customer photos.** Faces scraped from the
  prospect's CDN or video wall must NOT appear in the mockup — the owner will
  recognize their own customers and it reads as invasive. For any customer / UGC /
  testimonial row, use styled initial-avatars (a circle in the brand accent color
  with the person's initials) plus their real first name and real quote text.
  Real names and real quote TEXT are fine; real face PHOTOS are not.
- **Never use a hero/product image with promotional text or graphic overlays
  baked in.** Avoid images with "Immunity / Detox" badges, sale flags, sparkle or
  icon decorations, or other marketing graphics carried over from the brand's
  promo assets. Use a clean product render or clean composition with no embedded
  promo graphics. If only an overlaid image is available on their CDN, prefer a
  plain clean bottle/product render instead — a clean render beats a busy
  overlaid one.
- **Never use emoji as icons anywhere in a mockup.** Not for benefits,
  ingredients, features, decoration, or testimonial avatars — anywhere. Always
  use consistent inline SVG line-icons in the brand's accent color (same stroke
  weight, same viewBox, same medallion frame across the set). Emoji read as
  unfinished / AI-generated and undercut premium and clinical brands especially.
  If a specific icon can't be designed cleanly, use the SAME placeholder SVG on
  every card before mixing in emoji.
- **Always use the brand's REAL review count and star rating from their live
  page.** Pull from `aggregateRating`, `ratingValue`, `reviewCount`, the
  Stamped / Yotpo / Judge.me widget markup, or `products.json`. Never invent or
  approximate review counts, star averages, or star distributions. If the count
  or distribution cannot be read live, leave a `TODO: confirm live` for the
  operator instead of fabricating — a credibility-blowing fabricated number is
  worse than an obviously placeholder one.
- **Never state a specific clinical/study date or statistic that cannot be
  verified from the brand's live page.** No year, no "n=", no p-value, no
  percentage that isn't in their own copy. Omit or generalize ("recent
  placebo-controlled trial," "their published study") instead of inventing.
  Clinical brands recognize and refuse fake citations on sight.

---

## THE METHOD — step by step

### 1. Study the gold standard
Read `mockups/truwild/wild-greens-fixed.html` end-to-end before doing anything else.
It defines the structure (announcement bar, sticky header, breadcrumbs, hero +
buy box, benefits, ingredient/feature section, trust strip, reviews, footer), the
polish bar (premium spacing, no broken layout, no filler that looks like filler),
and the tone (presented as a normal beautiful page — no error annotations, no
before/after, no callouts).

### 2. Verify bugs live (do not skip)
Fetch the live PDP today. For each flagged weakness in `prospect.weaknesses[]`,
confirm it still reproduces. If a bug has been fixed since the original audit,
**say so explicitly in the report** and rebuild without silently working around
the stale finding. Never build a mockup that "fixes" a bug that no longer exists.

```powershell
mkdir -p mockups/<prospect-id>
curl -sL -A "Mozilla/5.0" "<live PDP url>" -o mockups/<prospect-id>/page.html
curl -sL -A "Mozilla/5.0" "<live PDP url>.json" -o mockups/<prospect-id>/product.json
```

### 3. Verify true pricing
Find the real subscription/discount math. Two sources of truth, in order:
1. `products.json` — variant `price` (cents) and `compare_at_price` give the
   canonical one-time price.
2. Live HTML — search the buy-box markup for `SAVE \d+%` badges (e.g. Mushroom
   Revival ships `SAVE 20%` / `SAVE 24%` / `SAVE 28%` per pack tier directly in
   the static HTML). Confirm them by computing the discount.

If a discount % can be verified, use it. If you genuinely cannot find one, pick a
visibly sensible value (10–20% for a daily consumable) and **flag the assumption
clearly in the report** as "assumed — needs Jarek confirmation before sending."
Never silently invent a percentage that reads as verified.

### 4. Extract their real brand
From the live HTML:

- **Fonts.** Grep CSS for `font-family` declarations and `--font-*-family` vars.
  If a font is licensed (AvenirLTPro, custom display faces) and not on Google
  Fonts, substitute the closest free Google Font and **note the substitution in
  the report**. Common fallbacks: Figtree ≈ AvenirLTPro; Inter ≈ generic
  geometric; Bebas Neue ≈ condensed display; Playfair / EB Garamond ≈ classic
  serif.
- **Palette.** `grep -ohE "#[0-9a-fA-F]{6}" page.html | sort | uniq -c | sort -rn`
  — the top 5–10 with high frequency (≥3 occurrences) are the brand tokens. Ignore
  one-off error reds (`#EB001B`) and Shopify chrome (`#006FCF`).
- **Logo.** Search for `cdn/shop/files/*logo*.svg` or `*.png` — hotlink the URL.
- **Hero product image.** Use the image URL from the selected variant in
  products.json (`product.images[0]` or the variant-specific image). Apply the
  **no-baked-overlays hard rule** here: if the candidate image has promotional
  text, sale flags, or marketing graphics rendered into it, fall back to a plain
  clean product render instead.
- **Real product copy.** Use the `body_html` text from products.json — at minimum
  the lede sentence, supports list, and ingredient list. Stripped of HTML, it's a
  ready-to-paste fragment.
- **Review meta.** Grep for `ratingValue`, `reviewCount`, `stamped-summary`,
  `aggregateRating`, or the Yotpo / Judge.me equivalents (e.g.
  `yotpo-reviews-overall-rating` JSON-LD). Apply the **real-review-numbers hard
  rule** here: use the live numbers verbatim. If the widget loads dynamically and
  the counts cannot be read, leave a `TODO: confirm live rating + count` for the
  operator — never substitute an "illustrative" number.
- **Customer / UGC content.** Real first names and real quote TEXT can be pulled
  from the prospect's review widget or video wall. Apply the
  **no-real-customer-photos hard rule** here: never hotlink the customer's face
  thumbnail — render a styled initial-avatar in the brand accent color instead.

### 5. Build a single self-contained HTML file
Path: `mockups/<prospect-id>/<product-handle>-fixed.html`

Structure (mirror the gold standard exactly):
1. **Announcement bar** if on-brand for the prospect (skip if their site doesn't
   use one).
2. **Sticky header** — single logo image, nav links as placeholder anchors
   (`href="#"` — never `href="/products/dead-link"`), Account, Cart pill. **Never
   produce a 404 from the mockup itself.**
3. **Breadcrumbs** — Shop / Category / **Product**.
4. **Hero + buy box** (the main event):
   - Hero image card on a soft gradient with corner pills (e.g. USDA Organic,
     pack size, key claim).
   - Buy box: stars + review count + key tag pill at the top → big title → lede →
     pack selector if applicable → **One-time vs Subscribe/Autoship pricing**
     with the correct discount math and a "Save X%" pill → subscription summary
     strip → quantity + accent CTA button → 3 trust badges.
   - **The buy-box pricing fix is the hero.** It should be impossible to miss.
5. **Why You'll Love It** — 3 benefit cards with icon medallions and brand-voice
   copy. Apply the **no-emoji-icons hard rule** here: every medallion is an inline
   SVG line-icon in the brand accent color, identical stroke weight and viewBox
   across the set. If you cannot design a clean per-card icon, use the same
   placeholder SVG on every card. Never substitute an emoji.
6. **Ingredient / feature section** — uses real ingredient names from
   products.json. Same icon rule applies: SVG line-icons only, never emoji
   (especially never the same 🍄 / 💊 / 🧬 placeholder repeated across cards).
   Skip the section if the product has no meaningful ingredient story.
7. **Trust strip** — dark band with a big claim + 3–4 pills. If the claim names a
   stat or a date, apply the **no-unverified-clinical-claims hard rule** — only
   numbers that appear on the live page may appear here.
8. **Reviews** — big rating + bar histogram + 3 real verified-buyer review cards
   pulled from the live widget (see Step 4 Review meta). Reviewer names, titles,
   and bodies all verbatim from the live page. Never fabricate reviews; leave a
   `TODO: confirm live reviews` instead if the widget can't be read.
9. **Footer** — single logo, nav links, copyright.

Premium polish requirements:
- Mobile-responsive — explicit `@media` rules for ≤980px and ≤780px.
- Generous vertical rhythm (64px section padding desktop, 48px mobile).
- Consistent radius / shadow scale across all surfaces.
- All accents on the active CTA, never spread across the page.

### 6. Self-review against the known defect list
Before reporting, open the file and check for each:
- [ ] **Doubled logo** — if the logo image already contains the wordmark, do not
  add a separate `<span>BrandName</span>` next to it.
- [ ] **Floating / misaligned icons** — no thumbnail strips overlapping the hero
  image; corner pills positioned only at corners.
- [ ] **Button price matches the active selection** — if the active pricing
  option is the autoship $X.XX, the CTA must read `Add to Cart · $X.XX`, not the
  one-time price.
- [ ] **Broken image URLs** — every `src=` resolves to a non-zero-size asset on
  the prospect's CDN.
- [ ] **Ugly font fallback** — substituted Google Font loads and renders at the
  weights actually used.
- [ ] **Placeholder content that reads as filler** — emoji repetition (e.g. the
  same 🍄 on 10 mushroom cards) should be flagged for Jarek's polish.

Fix anything you find before reporting.

### 7. Wire the card
In `data/items.js`, on the prospect's `prospect.*` object, add (after `caveats`):
```js
"mockupLive": "/mockups/<prospect-id>/<product-handle>-fixed.html",
"mockupStatus": "draft"
```
Then run the data pipeline + gate:
```powershell
node scripts/check.js
```
`check.js` must exit 0. If it fails for an unrelated reason, do not "fix" it by
relaxing the gate — fix the data.

### 8. Report honestly
Every run must produce:
1. **Bugs verified live** — for each flagged weakness, "still present" or "fixed
   since research."
2. **Verified vs assumed pricing** — the % used and where it came from.
3. **Brand tokens used** — fonts (with any substitutions noted), top palette
   hexes, asset URLs.
4. **File created** — full repo path.
5. **Synthetic content the operator must replace before sending** — usually
   review prose, sometimes placeholder copy.
6. **Compromises and judgment calls** — anything Jarek needs to polish or sanity-
   check before flipping the status to `"ready"`.

---

## Output paths

- Mockup HTML: `mockups/<prospect-id>/<product-handle>-fixed.html`
- Working scratch files (raw HTML / products.json) may be temporarily downloaded
  to the same folder; **delete them before committing.** Only the `-fixed.html`
  ships.

---

## When to skip generation entirely

Publish the prospect **without** a mockup and flag for manual generation when:
- The brand's CSS / fonts / colors cannot be cleanly extracted.
- The CDN blocks hotlinking (asset returns 403 / requires auth).
- The PDP redirected or 404'd at fetch time.
- The product has no usable images on the public CDN.
- A bug central to the demo has been silently fixed since research and the new
  state changes the value prop.

In all of these cases, the prospect still publishes via the normal routine. The
missing mockup is the routine's run-summary line: "Mockup skipped for <id>:
<reason>." Jarek picks it up by hand.
