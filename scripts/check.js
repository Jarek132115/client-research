#!/usr/bin/env node
/* Quality gate (Node version) — run before every commit: node scripts/check.js [YYYY-MM-DD]
   Validates data/items.js + prospect-record honesty rules, then rebuilds derived data.
   Exit 0 = pass, exit 1 = fail. */
const fs = require("fs");
const path = require("path");
const cp = require("child_process");
const REPO = path.resolve(__dirname, "..");
const SRC = path.join(REPO, "data", "items.js");
const { CATEGORIES } = require("./taxonomy.js");
const REQUIRED = ["id","date","title","summary","sections","categories","prospect"];
function loadItems(){ const g={}; global.window=g;
  try { eval(fs.readFileSync(SRC,"utf8")); } catch(e){ fail(["data/items.js is not valid JavaScript: "+e.message]); }
  return (g.SITE_ITEMS||window.SITE_ITEMS||[]); }
const errors=[], warnings=[];
function checkProspect(where,p){ if(!p||typeof p!=="object"){errors.push(where+" prospect must be an object");return;}
  if(!p.url) errors.push(where+" prospect.url missing");
  if(p.shopifyConfirmed!==true) warnings.push(where+" shopifyConfirmed not true — only pursue confirmed Shopify");
  const rev=p.revenue||{}; if(!rev.estimate) errors.push(where+" revenue.estimate missing");
  if((rev.signals||[]).length<2) errors.push(where+" needs >=2 revenue signals (has "+((rev.signals||[]).length)+")");
  const wk=p.weaknesses||[]; if(wk.length<3) errors.push(where+" needs >=3 weaknesses (has "+wk.length+")");
  for(const w of wk) if(!["high","med","low"].includes(w.severity)) errors.push(where+" weakness severity must be high/med/low: "+w.issue);
  const cts=p.contacts||[]; if(!cts.length||!cts.some(c=>c.name)) errors.push(where+" needs >=1 contact with a name");
  for(const c of cts) if(c.emailStatus&&!["pattern-guess","verified","unknown"].includes(c.emailStatus)) errors.push(where+" bad emailStatus: "+c.name);
  const d=p.demo||{}; if(!["home","pdp","cart"].includes(d.primaryPage)) errors.push(where+" demo.primaryPage must be home/pdp/cart");
  if((d.mechanics||[]).length<3) errors.push(where+" demo needs 3-5 mechanics (has "+((d.mechanics||[]).length)+")");
  const sc=p.score||{}, parts=["revenue","weakness","accessibility","vertical"];
  if(parts.every(k=>k in sc)&&"total" in sc){ for(const k of parts) if(!(Number.isInteger(sc[k])&&sc[k]>=1&&sc[k]<=5)) errors.push(where+" score."+k+" must be int 1-5");
    const sum=parts.reduce((a,k)=>a+(sc[k]||0),0); if(sc.total!==sum) errors.push(where+" score.total ("+sc.total+") != sum ("+sum+")"); }
  else errors.push(where+" score must have revenue/weakness/accessibility/vertical/total");
  if(!["top","solid","hold","skip"].includes(p.priority)) errors.push(where+" priority must be top/solid/hold/skip");
  else if(sc.total!=null){ const t=sc.total, band=t>=16?"top":t>=12?"solid":t>=8?"hold":"skip";
    if(p.priority!==band) warnings.push(where+" priority "+p.priority+" doesn't match score "+t+" (expected "+band+")"); }
  if((p.outreach||[]).length<2) errors.push(where+" needs >=2 outreach drafts (multi-approach: warm-human / teardown / demo-first)");
  if(p.scrutiny!=null && (typeof p.scrutiny!=="string" || !p.scrutiny.trim())) errors.push(where+" scrutiny, if present, must be a non-empty string (the critic's verdict)");
  if(p.screenshot!=null && (typeof p.screenshot!=="string" || !p.screenshot.trim())) errors.push(where+" screenshot, if present, must be a non-empty string (URL or repo path)");
  if(!p.caveats) errors.push(where+" caveats is mandatory (state estimated vs confirmed)"); }
function fail(list){ list.forEach(e=>console.error("FAIL: "+e)); console.error("\n"+list.length+" error(s). NOT safe to publish."); process.exit(1); }
const items = loadItems();
const valid = new Set(CATEGORIES);
if(!items.length) fail(["no prospects found in data/items.js"]);
const ids=[];
items.forEach((r,i)=>{ const where="item["+i+"] id="+JSON.stringify(r.id||"?");
  for(const f of REQUIRED){ const v=r[f]; if(v==null||v===""||(Array.isArray(v)&&!v.length)) errors.push(where+" missing/empty: "+f); }
  const cats=r.categories; if(!Array.isArray(cats)||!cats.length) errors.push(where+" categories must be non-empty array");
  else { const bad=cats.filter(c=>!valid.has(c)); if(bad.length) errors.push(where+" invalid vertical: "+bad.join(",")); }
  if(r.prospect) checkProspect(where,r.prospect); ids.push(r.id); });
const dupes=[...new Set(ids.filter(x=>ids.filter(y=>y===x).length>1))];
if(dupes.length) errors.push("duplicate ids: "+dupes.join(", "));
const dates=items.map(r=>r.date||""); const sorted=[...dates].sort().reverse();
if(JSON.stringify(dates)!==JSON.stringify(sorted)) errors.push("prospects not sorted newest-first by date");
if(process.argv[2]){ const ref=process.argv[2]; const d=new Date(ref+"T00:00:00");
  const prev=new Date(d.getTime()-86400000).toISOString().slice(0,10);
  const newest=dates.slice().sort().reverse()[0];
  if(newest!==ref&&newest!==prev) warnings.push("newest prospect "+newest+" is not "+ref+" or the day before — did today's run add anything?"); }
warnings.forEach(w=>console.log("WARN: "+w));
if(errors.length) fail(errors);
try{ cp.execFileSync("node",[path.join(REPO,"scripts","build-data.js")],{stdio:"pipe"});
  console.log("OK: regenerated index.json + index.meta.json + stats.json + entries/"); }
catch(e){ console.log("WARN: build-data.js did not run: "+(e.stderr?e.stderr.toString():e.message)); }
console.log("OK: "+items.length+" prospects, valid JS, unique ids, sorted, valid verticals, records complete.");
