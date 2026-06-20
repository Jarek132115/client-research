# Prospecting digest - distilled judgment (read me first, every run)

Read before prospecting; update after. Keep tight; prune stale. Each run should be
smarter than the last.

## House standard (do not drift)
- Only publish prospects that are confirmed Shopify, estimate six figures/mo ($100k+),
  have 3+ named fixable weaknesses, and have a reachable decision-maker.
- US market. No Companies House - revenue is always triangulated estimate, never filed
  accounts. Say so in every caveats line.
- Never fabricate: no invented emails (mark pattern guesses), no invented Lighthouse
  scores (mark "not yet run"), no invented URLs. If you can't link it, drop it.
- Sender identity is the operator personally, independent Shopify developer. Never
  attach any agency/employer name. Demos carry the prospect's branding, not ours.
- Depth over volume. 1-3 strong prospects beats 10 shallow ones. A leak must be specific,
  visible and screenshot-able - if a store is genuinely well-built, DISQUALIFY it.

## Active threads (advance, don't repeat)
- Supplements (2026-06-10): high-revenue + weak-theme overlap sits in bootstrapped, founder-run
  mid-tier brands (TRUWILD, BIOHM, Mushroom Revival), NOT well-funded famous names (Needed, Moon
  Juice, Bloom) which already run polished CRO themes. Hunt one tier below the listicle headliners.
- Pet (2026-06-12): same pattern. Cleanest leaks are on bootstrapped owner-run brands whose
  personalization is bolted on via apps (Tactipup: a visual product sold via Bold-Options text
  dropdowns, no swatches). Sophisticated CRO funnels (Pup Labs) still leak on social-proof
  consistency, but that is a data fix not a theme rebuild - lead honestly. Polished design-led
  brands (The Foggy Dog) have no leak: disqualify, do not invent one.

## Durable lessons
- "High revenue AND bad theme" overlap is densest in function-over-form verticals:
  supplements, homeware, pet, automotive, hobby, tools. Design-led categories are thin.
- Subscribe-and-save off the PDP on a daily consumable is the highest-value, easiest demo fix.
- A publicly active founder is the strongest accessibility signal. Weight it.
- Brands in "best of" roundups usually already redesigned. Hunt one tier below.
- (2026-06-10) products.json (or /cart.js) is the fast Shopify confirm; a blank/blocked
  response means re-confirm another way. Apollo people-match/org-enrich need a PAID plan -
  on the free plan, emails stay pattern-guesses.
- (2026-06-10 run 2) Broken internal links / 404s from a brand's own nav or copy are a strong
  demo-able weakness AND a discovery signal. Shogun/MS-Word-paste markup is another tell.
  PE-acquired brands (Ultima) fail reachable-founder; grow-supply brands (North Spore) are off-thesis.
- (2026-06-12) HONEST LEAK CHECK before publishing: walk the real funnel and watch for load
  artifacts (Tactipup's "empty hero" was just a ~3s slow-load, NOT broken - verify before claiming).
  The mockup must rebuild WHATEVER page the leak is on (Tactipup leak = PDP swatches), not a default
  PDP. Browser mobile-emulation was unavailable this run - audit desktop, put "verify mobile" on the
  operator to-do.

- (2026-06-20) BROWSER-GEO CAVEAT: the isolated browser profile resolved to a UK geo, so Shopify Markets served GBP / EN-GB storefronts (EVANNEX showed prices in pounds; TESERY redirected to /en-gb). A 'wrong currency/locale' leak seen this way is a BROWSER artifact, NOT a real US-customer leak - re-verify currency from a US-geo session before ever claiming it. Separately: leak-prone older personalization brands (dogIDs, Mimi Green) frequently run WooCommerce/custom, not Shopify - confirm platform (products.json / URL structure) before auditing.

## Brands already seen (don't re-surface)
- TRUWILD (truwild.com) - 2026-06-10 - PUBLISHED top (16/20): $0.00 subscribe price, mixed GBP/USD, wrong-product header; founder Zac Curhan.
- BIOHM Health (biohmhealth.com) - 2026-06-10 - PUBLISHED solid (14/20): broken link to flagship, 4-way discount stack, Shogun/Word bloat; ~$5-6M; founders Ghannoum.
- Mushroom Revival (mushroomrevival.com) - 2026-06-10 - PUBLISHED solid (15/20): broken autoship price, 404 nav links, thin reviews; founder Alex Dorr; revenue low-confidence.
- Pup Labs (puplabs.com) - 2026-06-12 - PUBLISHED solid (14/20): social-proof contradiction (ProDenta 2,946 reviews on homepage vs 99 on PDP; hero 25,000 vs trust-bar 15,000+); ~$2-3M; founder Peter Tzemis. Mockup flagged-skip.
- Tactipup (tactipup.com) - 2026-06-12 - PUBLISHED solid (14/20): visual collar sold via 5 plain Bold-Options text dropdowns, no swatches, buried ATC; owner Paul Haynes (Largo FL); revenue low-confidence. Leak-matched PDP mockup built.
- Needed (thisisneeded.com) - 2026-06-10 - REJECTED: site already well-optimized; not a theme-fix fit.
- Moon Juice (moonjuice.com) - 2026-06-10 - REJECTED: premium, polished theme; no weak-theme hook.
- Protekt (protekt.com) - 2026-06-10 - REJECTED: no verifiable revenue (privately held).
- North Spore (northspore.com) - 2026-06-10 - REJECTED: ~$18.5M but grow-your-own supplies, off-thesis.
- Ultima Replenisher (ultimareplenisher.com) - 2026-06-10 - REJECTED: $16M but PE-owned, hired CEO - fails reachable-founder.
- Lost Empire Herbs (lostempireherbs.com) - 2026-06-10 - SKIPPED: products.json/cart.js blocked.
- WagWell (wagwell.com) - 2026-06-12 - SKIPPED: products.json blocked/empty, could not confirm or audit.

- Under the Weather (undertheweatherpet.com) - 2026-06-20 - PUBLISHED solid (15/20): homepage Best Sellers cards show mismatched descriptions (cat Hairball Gel described as dog meals; Colostrum carries the hairball blurb) + empty PDP body_html on multiple products + low per-product reviews beside a 100k-customer claim; ~$10M (Entrepreneur) + ~16k organic/mo; founder/CEO/owner Kyla Sternlieb (Winooski VT).
- We Feed Raw (wefeedraw.com) - 2026-06-20 - DQ (pet): polished quiz-led funnel, no pointable leak; founder Alissa Zalneraitis.
- A Pup Above (apupabove.com) - 2026-06-20 - DQ (pet): polished hero/benefits/CTA + social proof, no leak.
- Maxbone (maxbone.com) - 2026-06-20 - DQ (pet): polished; the apparent 'broken hero' was a ~4s slow-load artifact, not a real leak (verified).
- dogIDs (dogids.com) - 2026-06-20 - SKIPPED (pet): Cloudflare bot-wall + non-Shopify URL stack; could not audit or confirm platform.
- Mimi Green (shopmimigreen.com) - 2026-06-20 - SKIPPED (pet): WooCommerce (/my-account, /cart, custom slugs; empty products.json), not Shopify - off-platform.
- T Sportline (tsportline.com) - 2026-06-20 - DQ (automotive): polished, established Tesla wheel/accessory brand, model-based nav, no pointable leak.
- TESERY (tesery.com) - 2026-06-20 - SKIPPED (automotive): served /en-gb storefront, overseas (likely China) brand; weak reachable-US-founder fit.
- EVANNEX (evannex.com) - 2026-06-20 - HELD (automotive): US family business (Pressman), reachable founder, but its only visible 'leak' (GBP pricing) was a UK-browser-geo artifact, not a real US-customer leak; otherwise reasonably built. Re-audit from a US-geo browser before pursuing.
## Disqualified (do not resurface)
- Clean Simple Eats (cleansimpleeats.com) - 2026-06-12 - DISQUALIFIED on manual review: No demonstrable leak - the live PDP is genuinely well-built; the research-flagged bugs (sold-out Pink Burst, hidden subscribe price) were stale/speculative and do not exist on the live site. Do not re-add. We do not pursue prospects without a real, demonstrable leak.
- The Foggy Dog (thefoggydog.com) - 2026-06-12 - DISQUALIFIED (pet): polished, well-built site - clear variant selectors with size guides, prominent ATC, set discount, testimonials, guarantee, shelter donation. No pointable money leak; would not invent one.

## Changelog
- 2026-06-20 - pet (rotation day 530), switched to automotive mid-run on user direction; SEMrush used for revenue sizing; NO mockups this run (user direction). Pet: published 1 (Under the Weather, solid 15/20); DQ We Feed Raw / A Pup Above / Maxbone (all polished); skipped dogIDs (Cloudflare/non-Shopify) + Mimi Green (WooCommerce). Automotive (Tesla-accessory tier): T Sportline DQ (polished), TESERY skip (overseas/en-gb), EVANNEX held (currency 'leak' was a UK-browser-geo artifact). Net 1 published. Finding: pet is thrice-mined and leak-prone older brands skew non-Shopify; automotive Tesla tier reads polished/overseas - the march to 10 golden is a multi-run accumulation.
- 2026-06-12 - pet (rotation day 522) via Cowork. Audited The Foggy Dog (DQ: well-built), Pup Labs (solid: review-count contradiction), Tactipup (solid: dropdown personalization). Published 2 (Tactipup, Pup Labs); disqualified The Foggy Dog; CSE removed and disqualified here (its run-1 removal never reached origin). Tactipup leak-matched PDP mockup built (visual swatches, draft); Pup Labs mockup flagged-skip. Mobile emulation unavailable; emails pattern-guess.
- 2026-06-10 (run 2) - supplements, same-day second pass. Fresh net ~30 -> 5 audited -> 2 published (BIOHM, Mushroom Revival); 3 rejected. Prepended above TRUWILD + CSE.
- 2026-06-10 - supplements (rotation day 520). Wide net ~70 -> 5 deep-audited -> 2 published (TRUWILD top, CSE solid); 3 rejected. Calibration run via Cowork.
- 2025-01-06 - repo seeded with one worked-example record; no real prospects yet.
