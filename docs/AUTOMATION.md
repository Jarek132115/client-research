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
3. PHASE A - WIDE NET: in today's vertical, cast deliberately wide and assemble ~100
   candidate US Shopify brands, mining multiple discovery channels from sources.md
   (category review sites, Facebook Ad Library, niche/DTC press, social scroll,
   customer-intent search, forums). This is a working list ONLY - do not audit deeply
   yet. Volume here is the whole point: a wide top of funnel is what lets the bar stay
   high later. Avoid brands already in digest.md "already seen" and recently published.
4. PHASE B - FAST TRIAGE: rapidly cut the ~100 down to ~15-20 survivors. Kill any that
   are: not Shopify (fetch homepage; look for meta-shopify-checkout-api-token,
   meta-shopify-digital-wallet, cdn/shop/ or cdn.shopify.com assets, /tools/recurring/),
   recently redesigned, clearly sub-six-figure, missing a findable owner, or already
   seen. Most candidates die here. State how many of the ~100 survived and the main
   kill reasons.
5. PHASE C - FULL AUDIT on the ~15-20 survivors: revenue (>=2 triangulated signals,
   confidence low/med/high, US = estimate not filed accounts); >=3 named weaknesses with
   severity + why; >=1 decision-maker (name, role, LinkedIn, email - verify in Apollo
   where possible, else mark "pattern-guess"; note if publicly active; NEVER claim
   verified unless it is); lighthouse stays null; demo = single highest-leverage page
   (default bestseller PDP) + one-line rationale + 3-5 named mechanics. Score each 1-5
   (revenue, weakness, accessibility, vertical), total /20; bands 16-20 top, 12-15 solid,
   8-11 hold, <8 skip.
6. PHASE D - SKEPTICAL SCRUTINY PASS (the decisive step): turn on the audited shortlist
   AS A CRITIC and attack each lead honestly. For each, ask out loud: "Would I actually
   spend an hour building a free demo for this store and reaching out? What is the WEAKEST
   part of this lead? Is the revenue real or wishful thinking? Is the owner genuinely
   reachable, or am I guessing? Are the weaknesses real, fixable wins or just nitpicks?"
   Reject anything that doesn't survive - be ruthless; a rejected lead costs nothing, a
   padded one costs your sender reputation AND poisons the learning loop. For each
   SURVIVOR, write a one-line verdict into the record as prospect.scrutiny = short text on
   why it passed the critic (e.g. "Revenue solid on 2 aligned signals, founder active on
   LinkedIn, the off-PDP subscribe leak is a real money fix - worth an hour."). Only
   prospects with an honest passing verdict go forward.
7. PHASE E - PUBLISH WHAT QUALIFIES: publish ONLY the prospects that passed Phase D.
   Could be 10, could be 6 - DO NOT pad to a number and DO NOT lower the bar to hit a
   count. "However many truly qualify" is the rule: a rigorous day yielding 6 real
   A-players beats 10 where 4 are filler. If fewer than ~5 survive, that's fine - publish
   them and note in the commit + changelog that the vertical was thin today. Never pad,
   never skip the rigor to fill the page.
8. OUTREACH - 3 DISTINCT HUMAN APPROACHES per prospect (so the operator can A/B test and
   the learning loop can see which converts). Tag each with its style. All first-person,
   the operator personally (an independent designer/developer), short, no agency-speak, no
   buzzwords, no em dashes:
   - style "warm-human": writes like a real person who genuinely browsed their store -
     casual, curious, warm, zero corporate tone, like texting a friend who runs a shop,
     not a work email. This one is tested hardest: make it genuinely un-salesy.
   - style "teardown": leads with one specific concrete observation about their site and
     the single fix it points to.
   - style "demo-first": leads with "I already rebuilt your [page], here's the before/after."
   Leave [demo link], [bestseller], [Your name] as placeholders.
9. WRITE: prepend one object per qualifying prospect to data/items.js (newest first, exact
   shape, never overwrite). id = "<today>-<brand-slug>". Every record needs prospect.scrutiny,
   a caveats line, and operatorTodo (verify email in Apollo, run PageSpeed, pull
   /products.json, eyeball the PDP).
10. UPDATE MEMORY same commit: add each brand to digest.md "already seen", advance threads
   + changelog line (note if the vertical was thin), promote/decay sources.md scores.
11. GATE + PUSH: run `node scripts/check.js <today's-date>` - must pass (it now requires
    >=2 outreach drafts and accepts the prospect.scrutiny field). Fix failures. Then
    git add -A, commit "prospects: <date> <vertical> (<n> brands)", git push origin main.

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
