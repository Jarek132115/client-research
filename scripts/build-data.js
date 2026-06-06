#!/usr/bin/env node
/* Derives browser data from data/items.js:
 *   data/index.json (bare array), data/index.meta.json (vertical facet),
 *   data/stats.json (analytics), data/entries/<id>.json (one per prospect). */
const fs = require("fs");
const path = require("path");
const { CATEGORIES, CATEGORY_LABELS, CATEGORY_LABELS_SHORT } = require("./taxonomy.js");
const REPO = path.resolve(__dirname, "..");
const SRC = path.join(REPO, "data", "items.js");
const OUT_INDEX = path.join(REPO, "data", "index.json");
const OUT_META = path.join(REPO, "data", "index.meta.json");
const OUT_STATS = path.join(REPO, "data", "stats.json");
const OUT_DIR = path.join(REPO, "data", "entries");
global.window = {};
eval(fs.readFileSync(SRC, "utf8"));
const all = (global.window.SITE_ITEMS || []).slice();
if (!all.length) { console.error("build-data: no prospects found"); process.exit(2); }
all.sort((a,b)=>{ if(a.date!==b.date) return a.date<b.date?1:-1;
  const sa=(a.prospect&&a.prospect.score&&a.prospect.score.total)||0;
  const sb=(b.prospect&&b.prospect.score&&b.prospect.score.total)||0; return sb-sa; });
fs.mkdirSync(OUT_DIR,{recursive:true});
function searchBlob(r){ const p=r.prospect||{};
  const wk=(p.weaknesses||[]).map(w=>w.issue+" "+(w.why||"")).join(" ");
  const ct=(p.contacts||[]).map(c=>c.name+" "+c.role).join(" ");
  return [r.title,(r.summary||[]).join(" "),(r.categories||[]).join(" "),p.url,wk,ct,p.priority,
    JSON.stringify(r.sections||"")].join(" ").replace(/<[^>]+>/g," ").replace(/\s+/g," ").toLowerCase(); }
const index = all.map(r=>{ const p=r.prospect||{}; return {
  id:r.id,date:r.date,title:r.title,categories:r.categories||[],url:p.url||"",
  score:(p.score&&p.score.total)||0,priority:p.priority||"",
  revenue:(p.revenue&&p.revenue.estimate)||"",q:searchBlob(r) }; });
fs.writeFileSync(OUT_INDEX, JSON.stringify(index,null,0));
const counts={}; for(const r of all) for(const c of (r.categories||[])) counts[c]=(counts[c]||0)+1;
const facet = CATEGORIES.filter(c=>counts[c]).map(c=>({slug:c,count:counts[c],
  label:CATEGORY_LABELS_SHORT[c]||c, fullLabel:CATEGORY_LABELS[c]||c}));
fs.writeFileSync(OUT_META, JSON.stringify({categories:facet},null,0));
const byPriority={top:0,solid:0,hold:0,skip:0}, byVertical={}, scores=[];
let withVerifiedEmail=0, withLighthouse=0;
for(const r of all){ const p=r.prospect||{};
  if(p.priority&&byPriority[p.priority]!=null) byPriority[p.priority]++;
  for(const c of (r.categories||[])){ byVertical[c]=byVertical[c]||{count:0,scoreSum:0,top:0};
    byVertical[c].count++; byVertical[c].scoreSum+=(p.score&&p.score.total)||0;
    if(p.priority==="top") byVertical[c].top++; }
  if(p.score&&p.score.total) scores.push(p.score.total);
  if((p.contacts||[]).some(c=>c.emailStatus==="verified")) withVerifiedEmail++;
  if(p.lighthouse&&(p.lighthouse.mobile||p.lighthouse.desktop)) withLighthouse++; }
const avg = scores.length ? scores.reduce((a,b)=>a+b,0)/scores.length : 0;
const verticalStats = Object.keys(byVertical).map(v=>({slug:v,label:CATEGORY_LABELS[v]||v,
  count:byVertical[v].count, topCount:byVertical[v].top,
  avgScore:+(byVertical[v].scoreSum/byVertical[v].count).toFixed(1)}))
  .sort((a,b)=>b.topCount-a.topCount||b.avgScore-a.avgScore);
fs.writeFileSync(OUT_STATS, JSON.stringify({generated:new Date().toISOString().slice(0,10),
  total:all.length, byPriority, avgScore:+avg.toFixed(1), withVerifiedEmail, withLighthouse,
  verticalStats},null,0));
const keep=new Set();
for(const r of all){ keep.add(r.id+".json");
  fs.writeFileSync(path.join(OUT_DIR,r.id+".json"), JSON.stringify(r,null,0)); }
for(const f of fs.readdirSync(OUT_DIR)){ if(f.endsWith(".json")&&!keep.has(f)) fs.unlinkSync(path.join(OUT_DIR,f)); }
console.log("build-data: wrote index.json ("+index.length+") + facet ("+facet.length+") + stats + "+keep.size+" entries");
