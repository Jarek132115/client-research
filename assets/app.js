/* Shopify Prospector — renderer. Loads index.json, lazy-loads each full prospect
   from data/entries/<id>.json (cached), falls back to data/items.js if a fetch
   fails so the site never hard-breaks. */
(function () {
  const nav = document.getElementById("nav");
  const content = document.getElementById("content");
  const searchEl = document.getElementById("search");
  let META = [], FACET = [], STATS = null;
  let catFilter = null, priFilter = null, legacy = null, current = null;
  const cache = {};
  const sortFn = (a, b) => (a.date < b.date ? 1 : (a.date > b.date ? -1 : ((b.score || 0) - (a.score || 0))));
  const esc = s => (s == null ? "" : String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])));

  async function loadIndex() {
    try {
      const res = await fetch("data/index.json", { cache: "no-cache" });
      if (!res.ok) throw 0;
      const idx = await res.json();
      if (Array.isArray(idx) && idx.length) return idx.slice().sort(sortFn);
      throw 0;
    } catch (e) {
      legacy = await loadLegacy();
      legacy.forEach(r => { cache[r.id] = r; });
      return legacy.slice().sort(sortFn).map(r => ({
        id: r.id, date: r.date, title: r.title, categories: r.categories || [],
        url: (r.prospect && r.prospect.url) || "",
        score: (r.prospect && r.prospect.score && r.prospect.score.total) || 0,
        priority: (r.prospect && r.prospect.priority) || "",
        revenue: (r.prospect && r.prospect.revenue && r.prospect.revenue.estimate) || "",
        q: (r.title + " " + (r.summary || []).join(" ")).replace(/<[^>]+>/g, " ").toLowerCase()
      }));
    }
  }
  function loadLegacy() {
    if (window.SITE_ITEMS) return Promise.resolve(window.SITE_ITEMS);
    return new Promise(resolve => {
      const s = document.createElement("script");
      s.src = "data/items.js";
      s.onload = () => resolve(window.SITE_ITEMS || []);
      s.onerror = () => resolve([]);
      document.head.appendChild(s);
    });
  }
  async function loadJSON(url) {
    try { const r = await fetch(url, { cache: "no-cache" }); if (!r.ok) throw 0; return await r.json(); }
    catch (e) { return null; }
  }
  async function getEntry(id) {
    if (cache[id]) return cache[id];
    const j = await loadJSON("data/entries/" + id + ".json");
    if (j) return (cache[id] = j);
    legacy = legacy || await loadLegacy();
    const r = (legacy || []).find(x => x.id === id);
    return r ? (cache[id] = r) : null;
  }

  function renderChips() {
    const sw = document.querySelector(".search-wrap");
    if (FACET.length) {
      const vl = document.createElement("div"); vl.className = "facet-label"; vl.textContent = "Vertical";
      const wrap = document.createElement("div"); wrap.className = "chips";
      wrap.innerHTML = `<button class="chip" data-cat="">All</button>` +
        FACET.map(c => `<button class="chip" data-cat="${esc(c.slug)}" title="${esc(c.fullLabel || "")}">${esc(c.label || c.slug)} <span class="chip-n">${c.count}</span></button>`).join("");
      sw.after(vl); vl.after(wrap);
      wrap.querySelectorAll(".chip").forEach(b => b.addEventListener("click", () => {
        const slug = b.dataset.cat || null;
        catFilter = (slug === catFilter) ? null : slug;
        markChips(); buildNav();
      }));
    }
    const pl = document.createElement("div"); pl.className = "facet-label"; pl.textContent = "Priority";
    const pw = document.createElement("div"); pw.className = "chips priority";
    const pris = ["top", "solid", "hold"];
    pw.innerHTML = `<button class="chip" data-pri="">All</button>` +
      pris.map(p => `<button class="chip" data-pri="${p}">${p}</button>`).join("");
    (document.querySelector(".chips") || sw).after(pl); pl.after(pw);
    pw.querySelectorAll(".chip").forEach(b => b.addEventListener("click", () => {
      const p = b.dataset.pri || null;
      priFilter = (p === priFilter) ? null : p;
      markChips(); buildNav();
    }));
    markChips();
  }
  function markChips() {
    document.querySelectorAll(".chip[data-cat]").forEach(c =>
      c.classList.toggle("active", (c.dataset.cat || null) === (catFilter || null)));
    document.querySelectorAll(".chip[data-pri]").forEach(c =>
      c.classList.toggle("active", (c.dataset.pri || null) === (priFilter || null)));
  }

  function buildNav() {
    const f = (searchEl.value || "").trim().toLowerCase();
    const items = META.filter(r =>
      (!f || (r.q || "").includes(f)) &&
      (!catFilter || (r.categories || []).includes(catFilter)) &&
      (!priFilter || r.priority === priFilter));
    nav.innerHTML = items.map(r => {
      const pri = r.priority ? `<span class="pri-pill pri-${r.priority}">${r.priority}</span>` : "";
      const rev = r.revenue ? `<span class="ni-rev">${esc(r.revenue)}</span>` : "";
      return `<button class="nav-item" data-id="${esc(r.id)}">
        <span class="ni-title">${esc(r.title)}</span>
        <span class="ni-date">${esc(r.date)}</span>
        <span class="ni-meta">${pri}${rev}<span class="ni-score">${r.score || 0}/20</span></span>
      </button>`;
    }).join("") || `<div class="empty">No matches</div>`;
    nav.querySelectorAll(".nav-item").forEach(b =>
      b.addEventListener("click", () => { location.hash = b.dataset.id; }));
    markActive();
  }
  function markActive() {
    nav.querySelectorAll(".nav-item").forEach(b =>
      b.classList.toggle("active", b.dataset.id === current));
  }
  searchEl.addEventListener("input", buildNav);

  function bars(score) {
    const rows = [["Revenue tier", score.revenue], ["Weakness severity", score.weakness],
      ["Accessibility", score.accessibility], ["Vertical fit", score.vertical]];
    return `<div class="score-grid">` + rows.map(([k, v]) =>
      `<div class="score-row"><span class="k">${k}</span>
        <span class="bar"><i style="width:${(v / 5 * 100)}%"></i></span>
        <span class="v">${v}/5</span></div>`).join("") + `</div>`;
  }
  function revenueCard(rev) {
    const sigs = (rev.signals || []).map(s =>
      `<div class="sig"><span class="m">${esc(s.method)}</span>
        <span><span class="det">${esc(s.detail)}</span><br><span class="src">${esc(s.source)}</span></span></div>`).join("");
    return `<div class="card"><h3>Revenue estimate</h3>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:10px">
        <span class="rev-headline">${esc(rev.estimate)}</span>
        <span class="conf conf-${esc(rev.confidence)}">${esc(rev.confidence)} confidence</span></div>
      ${sigs}</div>`;
  }
  function weaknessCard(wk) {
    const rows = wk.map(w =>
      `<div class="weak"><span class="sev sev-${esc(w.severity)}">${esc(w.severity)}</span>
        <span class="issue">${esc(w.issue)}</span>
        ${w.area ? `<span class="area">${esc(w.area)}</span>` : ""}
        ${w.why ? `<span class="why">${esc(w.why)}</span>` : ""}</div>`).join("");
    return `<div class="card"><h3>Site weaknesses (${wk.length})</h3>${rows}</div>`;
  }
  function contactsCard(cts) {
    const rows = cts.map(c => {
      const es = c.emailStatus || "unknown";
      const links = [];
      if (c.email) links.push(`<a href="mailto:${esc(c.email)}">${esc(c.email)}</a> <span class="email-status es-${esc(es)}">${esc(es.replace("-", " "))}</span>`);
      if (c.linkedin) links.push(`<a href="${esc(c.linkedin)}" target="_blank" rel="noopener">LinkedIn</a>`);
      return `<div class="contact">
        <div class="row1"><span class="name">${esc(c.name)}</span>
          <span class="role">${esc(c.role || "")}</span>
          ${c.publiclyActive ? `<span class="active-badge">publicly active</span>` : ""}</div>
        ${links.length ? `<div class="links">${links.join("")}</div>` : ""}
        ${c.notes ? `<div class="notes">${esc(c.notes)}</div>` : ""}</div>`;
    }).join("");
    return `<div class="card"><h3>Decision-makers</h3>${rows}</div>`;
  }
  function demoCard(d) {
    const mech = (d.mechanics || []).map((m, i) =>
      `<div class="mech"><span class="n">${String(i + 1).padStart(2, "0")}</span><span class="t">${esc(m)}</span></div>`).join("");
    return `<div class="card"><h3>Demo plan</h3>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:10px;flex-wrap:wrap">
        <span class="demo-page">${esc(d.primaryPage)}</span>
        ${d.bestseller ? `<span style="font-family:var(--mono);font-size:11.5px;color:var(--text-faint)">${esc(d.bestseller)}</span>` : ""}</div>
      ${d.rationale ? `<p style="margin:0 0 12px;color:var(--text-dim)">${esc(d.rationale)}</p>` : ""}
      ${mech}</div>`;
  }
  function lighthouseCard(lh) {
    const box = (dev, m) => {
      if (!m) return `<div class="lh-box"><div class="dev">${dev}</div><div class="lh-pending">not yet run</div></div>`;
      return `<div class="lh-box"><div class="dev">${dev}</div><div class="lh-metrics">
        <div class="m"><div class="v">${esc(m.performance)}</div><div class="k">perf</div></div>
        <div class="m"><div class="v">${esc(m.lcp)}</div><div class="k">LCP</div></div>
        <div class="m"><div class="v">${esc(m.cls)}</div><div class="k">CLS</div></div></div></div>`;
    };
    return `<div class="card"><h3>Lighthouse</h3><div class="lh-grid">
      ${box("Mobile", lh.mobile)}${box("Desktop", lh.desktop)}</div></div>`;
  }
  function outreachCard(drafts) {
    const rows = drafts.map((d, i) => {
      const subj = d.subject ? `<div class="draft-subject">Subject: <b>${esc(d.subject)}</b></div>` : "";
      return `<div class="draft">
        <div class="draft-head"><span class="draft-style">${esc(d.style || "outreach")}</span>
          <span class="draft-channel">${esc(d.channel || "email")}</span>
          <button class="copy-btn" data-draft="${i}">copy</button></div>
        ${subj}<div class="draft-body" data-body="${i}">${esc(d.body)}</div></div>`;
    }).join("");
    return `<div class="card"><h3>Outreach drafts</h3>${rows}</div>`;
  }
  function todoCard(todo) {
    return `<div class="card todo"><h3>Operator to-do (before sending)</h3>` +
      todo.map(t => `<div class="todo-item"><span class="box"></span><span>${esc(t)}</span></div>`).join("") + `</div>`;
  }

  /* ── Outreach log (Phase 2: DB-backed, /api/notes kind="outreach") ── */
  const OL_CHANNELS = ["email", "LinkedIn DM", "Instagram DM", "other"];
  const OL_STYLES = ["teardown", "demo-offer", "follow-up", "other"];
  const OL_RESPONSES = ["no-reply", "opened", "replied-cold", "replied-interested", "call-booked", "bounced", "closed-won", "closed-lost"];
  function olRespClass(r) {
    return ({ "closed-won": "olr-win", "call-booked": "olr-win", "replied-interested": "olr-good",
      "opened": "olr-warm", "replied-cold": "olr-warm", "no-reply": "olr-neutral",
      "bounced": "olr-bad", "closed-lost": "olr-bad" })[r] || "olr-neutral";
  }
  function olToday() { const d = new Date(), z = n => String(n).padStart(2, "0"); return d.getFullYear() + "-" + z(d.getMonth() + 1) + "-" + z(d.getDate()); }
  function outreachLogCard(id) {
    const opt = (arr, sel) => arr.map(o => `<option value="${esc(o)}"${o === sel ? " selected" : ""}>${esc(o)}</option>`).join("");
    return `<div class="card ol-card">
      <h3>Outreach log</h3>
      <p class="ol-hint">Your real sent outreach for this prospect, saved live to the database — separate from the draft templates above.</p>
      <form class="ol-form" id="ol-form" autocomplete="off">
        <div class="ol-row">
          <label class="ol-field"><span>Date</span><input type="date" name="date" value="${olToday()}"></label>
          <label class="ol-field"><span>Channel</span><select name="channel">${opt(OL_CHANNELS, "email")}</select></label>
          <label class="ol-field"><span>Style</span><select name="style">${opt(OL_STYLES, "teardown")}</select></label>
          <label class="ol-field"><span>Response</span><select name="response">${opt(OL_RESPONSES, "no-reply")}</select></label>
        </div>
        <label class="ol-field"><span>What I sent</span><textarea name="sent" rows="3" placeholder="Paste or summarise the message you sent…"></textarea></label>
        <label class="ol-field"><span>Notes (optional)</span><textarea name="notes" rows="2" placeholder="Anything to remember…"></textarea></label>
        <div class="ol-actions"><button type="submit" class="ol-save">Save outreach</button><span class="ol-status" id="ol-status"></span></div>
      </form>
      <div class="ol-list" id="ol-list"><div class="ol-loading">Loading saved outreach…</div></div>
    </div>`;
  }
  function initOutreachLog(id) {
    const form = document.getElementById("ol-form");
    const listEl = document.getElementById("ol-list");
    const statusEl = document.getElementById("ol-status");
    if (!form || !listEl) return;
    function renderList(entries) {
      if (!entries.length) { listEl.innerHTML = `<div class="ol-empty">No outreach logged yet.</div>`; return; }
      listEl.innerHTML = entries.map(n => {
        const p = n.payload || {}, resp = p.response || "no-reply", sent = p.sent || "";
        const sentHtml = !sent ? "" : (sent.length > 120
          ? `<details class="ol-sent"><summary>what I sent</summary><div class="ol-sent-body">${esc(sent)}</div></details>`
          : `<div class="ol-sent-body inline">${esc(sent)}</div>`);
        return `<div class="ol-entry">
          <div class="ol-entry-head">
            <span class="ol-date">${esc(p.date || (n.created_at || "").slice(0, 10))}</span>
            ${p.channel ? `<span class="ol-tag">${esc(p.channel)}</span>` : ""}
            ${p.style ? `<span class="ol-tag">${esc(p.style)}</span>` : ""}
            <span class="ol-resp ${olRespClass(resp)}">${esc(resp)}</span>
            <button class="ol-del" data-id="${esc(n.id)}" title="Delete entry">×</button>
          </div>${sentHtml}${p.notes ? `<div class="ol-notes">${esc(p.notes)}</div>` : ""}</div>`;
      }).join("");
      listEl.querySelectorAll(".ol-del").forEach(b => b.addEventListener("click", () => delEntry(b.dataset.id)));
    }
    async function loadList() {
      try {
        const res = await fetch("/api/notes?prospect_id=" + encodeURIComponent(id), { cache: "no-store" });
        if (!res.ok) throw new Error("http " + res.status);
        const data = await res.json();
        if (current !== id) return; // navigated away before this resolved
        renderList((data.notes || []).filter(n => n.kind === "outreach"));
      } catch (e) {
        if (current !== id) return;
        listEl.innerHTML = `<div class="ol-error">Couldn't load saved outreach (the rest of this page is unaffected). Try reloading.</div>`;
      }
    }
    async function delEntry(rowId) {
      if (!window.confirm("Delete this outreach entry?")) return;
      try {
        const res = await fetch("/api/notes?id=" + encodeURIComponent(rowId), { method: "DELETE" });
        if (!res.ok) throw new Error("http " + res.status);
        await loadList();
      } catch (e) { statusEl.textContent = "delete failed"; statusEl.className = "ol-status err"; }
    }
    form.addEventListener("submit", async ev => {
      ev.preventDefault();
      const fd = new FormData(form);
      const payload = { date: fd.get("date"), channel: fd.get("channel"), style: fd.get("style"),
        sent: (fd.get("sent") || "").trim(), response: fd.get("response"), notes: (fd.get("notes") || "").trim() };
      statusEl.textContent = "saving…"; statusEl.className = "ol-status";
      try {
        const res = await fetch("/api/notes", { method: "POST", headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ prospect_id: id, kind: "outreach", payload }) });
        if (!res.ok) throw new Error("http " + res.status);
        statusEl.textContent = "saved ✓"; statusEl.className = "ol-status ok";
        form.querySelector('[name=sent]').value = ""; form.querySelector('[name=notes]').value = "";
        setTimeout(() => { if (statusEl) statusEl.textContent = ""; }, 1600);
        await loadList();
      } catch (e) { statusEl.textContent = "save failed — your text is still here"; statusEl.className = "ol-status err"; }
    });
    loadList();
  }

  function renderSections(sections) {
    return (sections || []).map(s => {
      const blocks = (s.blocks || []).map(b => {
        let h = "";
        if (b.sub) h += `<h4 style="margin:0 0 4px;font-size:14px">${esc(b.sub)}</h4>`;
        if (b.p) h += `<p style="margin:0 0 8px;color:var(--text-dim)">${esc(b.p)}</p>`;
        if (b.list) h += `<ul style="margin:0 0 8px;padding-left:18px;color:var(--text-dim)">${b.list.map(li => `<li>${esc(li)}</li>`).join("")}</ul>`;
        if (b.why) h += `<div style="font-size:12.5px;color:var(--text-dim)"><b style="color:var(--text)">Why it matters:</b> ${esc(b.why)}</div>`;
        return h;
      }).join("");
      return `<div class="card"><h3>${esc(s.h)}</h3>${s.intro ? `<p style="color:var(--text-dim)">${esc(s.intro)}</p>` : ""}${blocks}</div>`;
    }).join("");
  }

  async function show(id) {
    current = id; markActive();
    content.innerHTML = `<div class="wrap"><div class="loading">Loading…</div></div>`;
    const r = await getEntry(id);
    if (!r) { content.innerHTML = `<div class="wrap"><div class="empty">Not found.</div></div>`; return; }
    const p = r.prospect || {};
    const sc = p.score || {};
    const verticalTags = (r.categories || []).map(c => {
      const f = FACET.find(x => x.slug === c);
      return `<span class="tag">${esc(f ? f.fullLabel : c)}</span>`;
    }).join("");
    const summary = (r.summary || []).map(s => `<p>${s}</p>`).join("");
    content.innerHTML = `<div class="wrap">
      <div class="p-head">
        <div>
          <h1 class="p-title">${esc(r.title)}</h1>
          ${p.url ? `<a class="p-url" href="https://${esc(p.url)}" target="_blank" rel="noopener">${esc(p.url)} ↗</a>` : ""}
        </div>
        ${sc.total != null ? `<div class="p-scorebox"><div><span class="n">${sc.total}</span><span class="d">/20</span></div>
          <div class="lbl">${esc(p.priority || "")}</div></div>` : ""}
      </div>
      <div class="p-sub">
        ${p.shopifyConfirmed ? `<span class="tag shopify">✓ Shopify</span>` : `<span class="tag">Shopify unconfirmed</span>`}
        ${verticalTags}
        <span class="tag">${esc(r.date)}</span>
      </div>
      ${summary ? `<div class="summary">${summary}</div>` : ""}
      ${sc.total != null ? `<div class="card"><h3>Score breakdown</h3>${bars(sc)}</div>` : ""}
      ${p.revenue ? revenueCard(p.revenue) : ""}
      ${(p.weaknesses || []).length ? weaknessCard(p.weaknesses) : ""}
      ${renderSections(r.sections)}
      ${(p.contacts || []).length ? contactsCard(p.contacts) : ""}
      ${p.demo ? demoCard(p.demo) : ""}
      ${p.lighthouse ? lighthouseCard(p.lighthouse) : ""}
      ${(p.outreach || []).length ? outreachCard(p.outreach) : ""}
      ${outreachLogCard(id)}
      ${(p.operatorTodo || []).length ? todoCard(p.operatorTodo) : ""}
      ${p.caveats ? `<div class="card"><h3>Caveats</h3><div class="caveats">${esc(p.caveats)}</div></div>` : ""}
      ${r.sources ? `<div class="sources">Sources: ${r.sources}</div>` : ""}
    </div>`;
    content.querySelectorAll(".copy-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const i = +btn.dataset.draft;
        const body = (p.outreach[i] && p.outreach[i].body) || "";
        const subj = (p.outreach[i] && p.outreach[i].subject) || "";
        navigator.clipboard.writeText((subj ? "Subject: " + subj + "\n\n" : "") + body).then(() => {
          btn.textContent = "copied ✓"; setTimeout(() => btn.textContent = "copy", 1400);
        }).catch(() => { btn.textContent = "copy failed"; });
      });
    });
    initOutreachLog(id);
    content.scrollTop = 0;
  }

  function showStats() {
    current = "__stats__"; markActive();
    if (!STATS) { content.innerHTML = `<div class="wrap"><div class="empty">No stats yet.</div></div>`; return; }
    const s = STATS;
    const cards = [
      [s.total, "prospects total"], [s.byPriority.top, "top priority"],
      [s.byPriority.solid, "solid"], [s.avgScore, "avg score /20"],
      [s.withVerifiedEmail, "verified emails"], [s.withLighthouse, "lighthouse run"]
    ].map(([v, k]) => `<div class="stat"><div class="v">${v}</div><div class="k">${k}</div></div>`).join("");
    const rows = (s.verticalStats || []).map(v =>
      `<tr><td>${esc(v.label)}</td><td class="num">${v.count}</td><td class="num">${v.topCount}</td><td class="num">${v.avgScore}</td></tr>`).join("");
    content.innerHTML = `<div class="wrap">
      <h1 class="p-title" style="margin-bottom:6px">Analytics</h1>
      <p style="color:var(--text-dim);margin:0 0 22px">Which verticals are producing the best prospects. Generated ${esc(s.generated)}.</p>
      <div class="stats-grid">${cards}</div>
      <div class="card"><h3>By vertical — what's working</h3>
        <table class="vtable"><thead><tr><th>Vertical</th><th style="text-align:right">Prospects</th>
          <th style="text-align:right">Top-tier</th><th style="text-align:right">Avg score</th></tr></thead>
          <tbody>${rows || `<tr><td colspan="4" class="empty">No data yet</td></tr>`}</tbody></table></div>
    </div>`;
    content.scrollTop = 0;
  }

  function route() {
    const h = (location.hash || "").replace(/^#/, "");
    if (h === "stats") return showStats();
    if (h && META.some(r => r.id === h)) return show(h);
    if (META[0]) { current = META[0].id; markActive(); return show(META[0].id); }
    content.innerHTML = `<div class="wrap"><div class="empty">No prospects yet. The 2am routine will populate this.</div></div>`;
  }
  window.addEventListener("hashchange", route);

  const tt = document.getElementById("theme-toggle");
  if (tt) tt.addEventListener("click", () => {
    const light = document.documentElement.getAttribute("data-theme") === "light";
    if (light) { document.documentElement.removeAttribute("data-theme"); try { localStorage.setItem("site-theme", "dark"); } catch (e) {} }
    else { document.documentElement.setAttribute("data-theme", "light"); try { localStorage.setItem("site-theme", "light"); } catch (e) {} }
  });

  (async function () {
    META = await loadIndex();
    [FACET, STATS] = await Promise.all([
      loadJSON("data/index.meta.json").then(m => (m && m.categories) || []),
      loadJSON("data/stats.json")
    ]);
    renderChips();
    buildNav();
    route();
  })();
})();
