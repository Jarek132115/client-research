# AUTOMATION — how the 2am routine runs

The site is the viewer; this routine fills it. It runs unattended in a Claude
Routine with this repo attached, does the full qualification pipeline, then commits
and pushes so Vercel redeploys.

## Setup (one time)
1. In the Claude app, create a Routine set to run daily at 02:00 your timezone.
2. Attach THIS repository under Repositories (not just connectors). Without repo
   access it can't write and must stop.
3. Paste the routine prompt below into the Instructions box.
4. "Run now" once to verify a real run completes and pushes.
5. (Optional) connect StoreLeads/Apollo if you have them, so the routine can pull
   revenue tiers / verify emails itself. Without them it leaves those on each
   prospect's operator to-do.

## What the routine can / cannot do unattended
CAN: discover, confirm Shopify, triangulate revenue, infer weaknesses, source
contact names + likely email pattern, score, draft outreach, push.
CANNOT (these become operatorTodo): verify an email, run Lighthouse, read the site
visually / pull /products.json. The honest split protects your sender reputation.

## THE ROUTINE PROMPT (paste into Instructions)
```
You are the daily prospecting routine for a Shopify theme-fix + CRO service. Work
INSIDE this attached repository and publish today's prospects by committing to it.
Follow the shopify-prospect-finder logic. Be honest: never fabricate an email, a
Lighthouse score, a URL, or a revenue figure.

1. READ: knowledge/digest.md (house standard, brands already seen — never re-surface),
   knowledge/sources.md (mine top scorers first), knowledge/outcomes.md (bias to what
   works), and recent entries in data/items.js (don't repeat recent brands).
1b. LEARN (approval-gated): run `node scripts/build-insights.js` to refresh
   knowledge/insights.json from logged outcomes, then READ it. Let it INFORM (not
   override) today's vertical pick and the pricing/targeting language in records —
   e.g. lean toward a vertical/opener/weakness-lead with a strong reply rate, and
   quote in line with pricingByVertical. BUT only ACT on changes that have been
   APPROVED (ticked `[x]`) in knowledge/suggestions.md. Append any new data-driven
   suggestions as unchecked `[ ]` items; NEVER auto-apply them and NEVER edit the
   vertical rotation, taxonomy, or digest.md house standard on your own. Treat low
   `confidence` (small sample) as a weak hint only.
2. PICK TODAY'S VERTICAL: compute days since ROTATION_EPOCH in scripts/taxonomy.js,
   modulo the ROTATION list. State which vertical. Tag every prospect with it.
3. DISCOVER 15–25 US candidate brands in that vertical, biased to the larger
   commercial end, away from tiny cult brands. Avoid already-seen + recent brands.
4. FAST TRIAGE: confirm Shopify (fetch homepage; look for meta-shopify-checkout-api-token,
   meta-shopify-digital-wallet, cdn/shop/ or cdn.shopify.com asset URLs, /tools/recurring/).
   Gut-check revenue with one signal. Skip recent redesigns. Confirm a findable owner.
   Most candidates die here.
5. FULL AUDIT on survivors: revenue (>=2 triangulated signals, confidence low/med/high,
   US = estimate not filed accounts); >=3 named weaknesses with severity + why; >=1
   decision-maker (name, role, LinkedIn, likely email pattern marked "pattern-guess",
   note if publicly active — NEVER claim verified); lighthouse stays null; demo = single
   highest-leverage page (default bestseller PDP) + one-line rationale + 3–5 named mechanics.
6. SCORE each 1–5 (revenue, weakness, accessibility, vertical), total /20. Bands:
   16–20 top, 12–15 solid, 8–11 hold, <8 skip.
7. DRAFT OUTREACH (house voice: direct, friendly, no fluff, no em dashes, no agency-speak,
   sign as the operator personally). Two emails per prospect: one teardown-led, one
   demo-offer. Leave [demo link], [bestseller], [Your name] as placeholders.
8. WRITE: prepend one object per qualifying prospect to data/items.js (newest first,
   exact shape, never overwrite). id = "<today>-<brand-slug>". Publish 1–3 strong ones.
   On a thin day publish the single best "hold" with honest caveats rather than nothing —
   never skip a day. Every record needs a caveats line + operatorTodo (verify email in
   Apollo, run PageSpeed, pull /products.json, eyeball the PDP).
9. UPDATE MEMORY same commit: add each brand to digest.md "already seen", advance threads
   + changelog line, promote/decay sources.md scores.
10. GATE + PUSH: run `node scripts/check.js <today's-date>` — must pass. Fix failures.
    Then git add -A, commit "prospects: <date> <vertical> (<n> brands)", git push origin main.

BAR: every record usable, specific, sourced — actionable this morning. If blocked
(no repo access, can't confirm Shopify, ambiguity), STOP and report rather than guess.
```

## Weekly learning loop
Once a week, open a Claude session on this repo:
```
Read knowledge/outcomes.md (this week's log), digest.md, sources.md. Then:
1. Which vertical, opener style, and weakness-lead got the best reply rate?
2. Rewrite digest.md active threads + durable lessons to reflect what worked.
3. Re-score discovery channels in sources.md.
4. Propose edits to the routine prompt in docs/AUTOMATION.md. Show the diff before applying.
Commit the changes.
```
