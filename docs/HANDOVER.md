# HANDOVER — operating manual

## What this is
A private, self-updating site that every day at 2am finds and fully qualifies
high-revenue US Shopify stores on weak themes. Each morning you open a ranked queue:
why each is a good lead, revenue estimate + signals, decision-maker + likely email,
named weaknesses, a demo plan, two ready outreach drafts, a short operator to-do, and
an honest caveats line.

## The machine
Claude routine (daily 02:00, repo attached) → reads knowledge/ + insights.json + recent
prospects → rotates vertical → runs a WIDE-FUNNEL pipeline → writes data/items.js → runs
node scripts/check.js (gate + rebuild) → git push → Vercel auto-deploys the private site.
One source of truth: data/items.js; everything else is derived.

### Routine v2 — wide funnel + scrutiny (the selection rigor)
The routine no longer publishes a fixed count. Each night it:
- **Phase A — wide net:** casts ~100 candidate brands in today's vertical (volume up top).
- **Phase B — fast triage:** cuts to ~15-20 (kills non-Shopify, redesigned, sub-six-figure,
  no owner, already-seen).
- **Phase C — full audit:** revenue/weaknesses/contact/demo/score on the survivors.
- **Phase D — skeptical scrutiny:** re-attacks its own shortlist as a critic ("would I
  really build a free demo for this?"), rejects anything that doesn't survive, and records
  a one-line `prospect.scrutiny` verdict on each that does. This self-criticism is how a
  single run reaches multi-agent-style rigor.
- **Phase E — publish what qualifies:** publishes ONLY the survivors — could be 6, could be
  10. It never pads to a number or lowers the bar; a thin day is published thin and noted.
Outreach is **3 distinct human approaches** per prospect (`warm-human`, `teardown`,
`demo-first`), each tagged by `style` so the learning loop tracks which converts. The gate
requires ≥2 drafts and accepts the optional `scrutiny` field; the real invariants (≥2
revenue signals, ≥3 weaknesses, mandatory caveats) are unchanged. Full prompt: AUTOMATION.md.

## Daily use (5 minutes)
1. Open the site, enter the password. Filter Priority "top".
2. On a prospect you like, do its Operator to-do: verify email in Apollo (free plan —
   spend credits only here), run PageSpeed on the demo page, pull <store>/products.json,
   glance at the live page on your phone.
3. Build the demo for the page named in Demo plan; send the better outreach draft
   (hit copy). Replace [demo link]/[bestseller]/[Your name]. Log it in knowledge/outcomes.md.
4. Check Analytics (top bar) to watch which vertical is winning.

## Deploy (one time)
1. git init, commit, push to a new PRIVATE GitHub repo.
2. Import to Vercel: framework Other, build none, output ./. Cross-account note: the
   GitHub account hosting the repo must authorize the Vercel GitHub app for it.
3. Set env var SITE_PASS = your password → redeploy. The site shows a login page
   (Vercel strips the native popup, so middleware.js serves our own). Reachable from
   any device once you know the password.
4. Attach the repo to the Claude routine (see AUTOMATION.md). Schedule 02:00.
5. After the first real run, delete the seed "Example Brand" from data/items.js and
   re-run the gate.

## Honesty boundaries
A 2am routine can't verify an email or run Lighthouse, so those are marked ("pattern
guess" / "not yet run") and put on the operator to-do. Trust green "verified" only
after Apollo confirms; treat amber "pattern guess" as a lead, not a fact.

## Gotchas
- Routine MUST have the repo attached under Repositories or it can't push.
- Never hand-edit data/index.json / entries/ / stats.json — derived; edit items.js + run gate.
- Keep data/items.js valid JS (the gate evals it via Node, never in the browser).
- US revenue is always an estimate (no Companies House). Every caveats line says so.
- Daily vertical rotation trades demo reuse for discovery data; once a winner emerges,
  consider weekly rotation.
- Sender identity is you personally, independent developer. Never attach an agency.

## Files
index.html, assets/app.js, assets/styles.css — viewer. data/items.js — source of truth.
data/index.json|index.meta.json|stats.json|entries/ — derived. scripts/taxonomy.js,
build-data.js, check.js — engine + gate. knowledge/*.md — learning memory.
middleware.js, vercel.json — hosting + password gate. docs/ — automation + this manual.
