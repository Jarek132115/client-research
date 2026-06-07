#!/usr/bin/env node
/* Nightly learning-loop digest. READ-ONLY against captured data and the prospect
   pipeline — it only WRITES two in-repo bridge files the 2am routine consumes:
     knowledge/insights.json   compact machine-readable learnings (overwritten)
     knowledge/suggestions.md  approval-gated proposals (APPENDED; never clobbers
                               existing items, so human-ticked approvals survive)
   Run: node scripts/build-insights.js   (needs POSTGRES_URL — pull it locally first)
   Safe on an empty DB: writes a valid low-confidence insights.json + leaves
   suggestions untouched. Never mutates store_notes or data/items.js. */
require("./load-env.js")();
const fs = require("fs");
const path = require("path");
const { computeInsights, leadWeaknessArea } = require("./insights.js");

const REPO = path.resolve(__dirname, "..");
const SRC = path.join(REPO, "data", "items.js");
const OUT_JSON = path.join(REPO, "knowledge", "insights.json");
const OUT_SUGG = path.join(REPO, "knowledge", "suggestions.md");

const SUGG_HEADER = `# Suggestions — APPROVAL GATE

These are **data-driven proposals** generated from your logged outreach + deals. They are
**NOT applied automatically.** The 2am routine reads \`knowledge/insights.json\` for context
and may *append* new suggestions here, but it must NEVER edit the vertical rotation, pricing,
or targeting on its own. **You** decide: tick a box to approve, then (or tell a Claude Code
session to) apply it. Unchecked = not in effect.

- \`[ ]\` = proposed, not approved   ·   \`[x]\` = approved by you
- This file is only ever appended to; your ticks are preserved across nightly runs.

## Pending (auto-generated)
`;

function buildMeta() {
  // read data/items.js exactly like build-data.js does (full records -> wkLead)
  const g = {}; global.window = g;
  try { eval(fs.readFileSync(SRC, "utf8")); } catch (e) { return {}; }
  const all = g.SITE_ITEMS || (typeof window !== "undefined" && window.SITE_ITEMS) || [];
  const m = {};
  for (const r of all) m[r.id] = {
    vertical: (r.categories || [])[0] || "",
    score: (r.prospect && r.prospect.score && r.prospect.score.total) || 0,
    priority: (r.prospect && r.prospect.priority) || "",
    wkLead: leadWeaknessArea(r.prospect || {})
  };
  return m;
}

(async () => {
  let rows = [];
  if (process.env.POSTGRES_URL) {
    try {
      const { sql } = require("@vercel/postgres");
      const r = await sql`SELECT id, prospect_id, kind, payload, created_at FROM store_notes`;
      rows = r.rows;
    } catch (e) { console.error("build-insights: DB read failed (" + e.message + ") — writing empty insights"); }
  } else {
    console.error("build-insights: POSTGRES_URL not set — writing empty insights (run: vercel env pull .env.local)");
  }

  const ins = computeInsights(rows, buildMeta());
  const ww = ins.whatsWorking;
  const digest = {
    generated: new Date().toISOString(),
    sampleSize: ins.sampleSize,
    confidence: ins.confidence,
    overallReplyRate: ins.outreach.replyRate,
    winRate: ins.deals.winRate,
    topVertical: ww.topVertical,
    topOpener: ww.topOpener,
    topWeaknessLead: ww.topWeaknessLead,
    replyRateByOpener: ins.outreach.byOpener,
    replyRateByVertical: ins.outreach.byVertical,
    pricingByVertical: ins.deals.pricingByVertical.map(p => ({
      vertical: p.vertical, quotedAvg: p.quoted.avg, quotedMedian: p.quoted.median, closeAvg: p.close.avg, deals: p.quoted.n
    }))
  };
  fs.writeFileSync(OUT_JSON, JSON.stringify(digest, null, 2));
  console.log("build-insights: wrote insights.json (sample: " + ins.sampleSize.outreach + " outreach / " + ins.sampleSize.deals + " deals, confidence " + ins.confidence + ")");

  // ---- approval-gated suggestions (append-only, idempotent by key) ----
  const candidates = [];
  const overall = ins.outreach.replyRate;
  if (ins.sampleSize.outreach >= 4) {
    if (ww.topVertical && ww.topVertical.rate > overall * 1.3 && ww.topVertical.rate > overall) {
      candidates.push({ key: "vertical:" + ww.topVertical.key,
        text: `Weight vertical rotation toward **${ww.topVertical.key}** (reply rate ${ww.topVertical.rate}% vs ${overall}% overall, n=${ww.topVertical.sent}) — APPROVE?` });
    }
    if (ww.topOpener) {
      candidates.push({ key: "opener:" + ww.topOpener.key,
        text: `Favor the **${ww.topOpener.key}** opener (reply rate ${ww.topOpener.rate}%, n=${ww.topOpener.sent}) — APPROVE?` });
    }
    if (ww.topWeaknessLead) {
      candidates.push({ key: "weakness:" + ww.topWeaknessLead.key,
        text: `Lead outreach with the **${ww.topWeaknessLead.key}** weakness (reply rate ${ww.topWeaknessLead.rate}%, n=${ww.topWeaknessLead.sent}) — APPROVE?` });
    }
  }
  for (const p of digest.pricingByVertical) {
    if (p.deals >= 2) candidates.push({ key: "pricing:" + p.vertical,
      text: `Quote **${p.vertical}** around $${p.quotedMedian} (median of ${p.deals} deals${p.closeAvg ? `, closes ~$${p.closeAvg}` : ""}) — APPROVE?` });
  }

  let content = fs.existsSync(OUT_SUGG) ? fs.readFileSync(OUT_SUGG, "utf8") : SUGG_HEADER;
  let appended = 0;
  for (const c of candidates) {
    if (!content.includes("sugg:" + c.key)) { content += `- [ ] ${c.text} <!-- sugg:${c.key} | ${digest.generated.slice(0, 10)} -->\n`; appended++; }
  }
  fs.writeFileSync(OUT_SUGG, content.endsWith("\n") ? content : content + "\n");
  console.log("build-insights: suggestions.md — " + appended + " new suggestion(s) appended (" + candidates.length + " candidate(s), confidence " + ins.confidence + ")");
  process.exit(0);
})().catch(e => { console.error("build-insights failed:", e.message); process.exit(1); });
