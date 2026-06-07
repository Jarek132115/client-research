/* Shared, pure, READ-ONLY insights engine. Used by both the live dashboard
   (api/notes.js ?insights=1) and the nightly digest (scripts/build-insights.js),
   so the aggregation math is defined exactly once. Never mutates anything.

   computeInsights(rows, metaById):
     rows     = store_notes rows [{id, prospect_id, kind, payload, created_at}]
     metaById = { <prospect_id>: { vertical, score, priority, wkLead } }
   Defensive: zero rows -> zeroed/empty structures, never throws. */

const REPLY_RESPONSES = new Set(["replied-cold", "replied-interested", "call-booked", "closed-won"]);

// The "lead" weakness = the area of the highest-severity weakness (high>med>low).
function leadWeaknessArea(prospect) {
  const wk = (prospect && prospect.weaknesses) || [];
  const rank = { high: 3, med: 2, low: 1 };
  let best = null;
  for (const w of wk) if (!best || (rank[w.severity] || 0) > (rank[best.severity] || 0)) best = w;
  return best ? (best.area || "") : "";
}

function numStats(nums) {
  const xs = nums.filter(n => typeof n === "number" && !isNaN(n));
  if (!xs.length) return { avg: 0, median: 0, n: 0 };
  const s = xs.slice().sort((a, b) => a - b);
  const avg = Math.round(xs.reduce((a, b) => a + b, 0) / xs.length);
  const mid = Math.floor(s.length / 2);
  const median = Math.round(s.length % 2 ? s[mid] : (s[mid - 1] + s[mid]) / 2);
  return { avg, median, n: xs.length };
}

function computeInsights(rows, metaById) {
  rows = Array.isArray(rows) ? rows : [];
  metaById = metaById || {};
  const meta = id => metaById[id] || {};
  const isReply = o => REPLY_RESPONSES.has((o.payload || {}).response);

  const outreach = rows.filter(r => r.kind === "outreach");
  const pricing = rows.filter(r => r.kind === "pricing")
    .slice().sort((a, b) => (a.created_at < b.created_at ? 1 : a.created_at > b.created_at ? -1 : (b.id || 0) - (a.id || 0)));

  // one deal per prospect (newest pricing row wins) — matches the panel's semantics
  const dealByProspect = {};
  for (const r of pricing) if (!dealByProspect[r.prospect_id]) dealByProspect[r.prospect_id] = r;
  const dealEntries = Object.entries(dealByProspect); // [prospect_id, row]
  const deals = dealEntries.map(([, r]) => r.payload || {});

  // ---- outreach reply rates ----
  const totalOutreach = outreach.length;
  const replies = outreach.filter(isReply).length;
  const replyRate = totalOutreach ? +(replies / totalOutreach * 100).toFixed(1) : 0;

  function rateBy(keyFn) {
    const g = {};
    for (const o of outreach) {
      const k = keyFn(o);
      if (!k) continue;
      g[k] = g[k] || { sent: 0, replies: 0 };
      g[k].sent++;
      if (isReply(o)) g[k].replies++;
    }
    return Object.keys(g).map(k => ({
      key: k, sent: g[k].sent, replies: g[k].replies,
      rate: g[k].sent ? +(g[k].replies / g[k].sent * 100).toFixed(1) : 0
    })).sort((a, b) => b.rate - a.rate || b.sent - a.sent);
  }
  const byOpener = rateBy(o => (o.payload || {}).style);
  const byVertical = rateBy(o => meta(o.prospect_id).vertical);
  const byWeakness = rateBy(o => meta(o.prospect_id).wkLead);

  // ---- deals ----
  const stageCounts = {};
  for (const d of deals) { const s = d.stage || "not-started"; stageCounts[s] = (stageCounts[s] || 0) + 1; }
  const won = stageCounts.won || 0, lost = stageCounts.lost || 0;
  const winRate = (won + lost) ? +(won / (won + lost) * 100).toFixed(1) : 0;
  const quoted = numStats(deals.map(d => d.quoted).filter(v => v != null));
  const close = numStats(deals.filter(d => d.stage === "won").map(d => d.close_value).filter(v => v != null));

  const pv = {};
  for (const [pid, r] of dealEntries) {
    const v = meta(pid).vertical; if (!v) continue;
    const d = r.payload || {};
    pv[v] = pv[v] || { quoted: [], close: [] };
    if (d.quoted != null) pv[v].quoted.push(d.quoted);
    if (d.stage === "won" && d.close_value != null) pv[v].close.push(d.close_value);
  }
  const pricingByVertical = Object.keys(pv).map(v => ({
    vertical: v, quoted: numStats(pv[v].quoted), close: numStats(pv[v].close)
  })).sort((a, b) => b.quoted.avg - a.quoted.avg);

  // ---- what's working (need a minimum sample before we "call" anything) ----
  const MIN = 2;
  const topOf = arr => arr.filter(x => x.sent >= MIN)[0] || null; // arr already sorted by rate
  const whatsWorking = {
    topVertical: topOf(byVertical),
    topOpener: topOf(byOpener),
    topWeaknessLead: topOf(byWeakness)
  };

  // confidence from outreach sample size
  const confidence = totalOutreach >= 30 ? "high" : totalOutreach >= 10 ? "medium" : "low";

  return {
    sampleSize: { outreach: totalOutreach, deals: deals.length },
    confidence,
    outreach: { total: totalOutreach, replies, replyRate, byOpener, byVertical, byWeakness },
    deals: { stageCounts, won, lost, winRate, quoted, close, pricingByVertical },
    whatsWorking
  };
}

module.exports = { computeInsights, leadWeaknessArea, REPLY_RESPONSES };
