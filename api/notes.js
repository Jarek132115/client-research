/* Operator-entered notes API (ADDITIVE lane). Keyed to a prospect's id; never
   touches data/items.js or the git prospect pipeline.

   GET    /api/notes?prospect_id=<id>   -> { notes: [...] }   (newest first)
   POST   /api/notes  body {prospect_id, kind, payload}       -> { note }
   DELETE /api/notes?id=<rowId>                                -> { deleted }

   Auth: mirrors middleware.js EXACTLY — a request is authorized only if it
   carries the cookie  pp_auth=<tokenFor(SITE_PASS)>. Parameterized queries only. */
const { sql } = require("@vercel/postgres");

const KINDS = ["outreach", "pricing", "note", "outcome"];

// --- auth: copied verbatim from middleware.js so the gate is identical ---
function tokenFor(s) {
  try { return btoa(unescape(encodeURIComponent(s))).slice(0, 24); }
  catch (e) { return encodeURIComponent(s).slice(0, 24); }
}
function isAuthed(req) {
  const PASS = (process.env.SITE_PASS || "").replace(/^﻿/, "").trim();
  if (!PASS) return true; // no gate configured (parity with middleware's `if (!PASS) return`)
  const cookie = req.headers.cookie || "";
  return cookie.includes(`pp_auth=${tokenFor(PASS)}`);
}

module.exports = async (req, res) => {
  if (!isAuthed(req)) { res.status(401).json({ error: "unauthorized" }); return; }
  try {
    if (req.method === "GET") {
      const prospectId = (req.query && req.query.prospect_id) || "";
      // Pipeline digest: newest pricing payload per prospect, in one cheap query.
      // Additive — existing prospect_id reads are unchanged.
      if (!prospectId && req.query && req.query.digest === "pricing") {
        const { rows } = await sql`
          SELECT DISTINCT ON (prospect_id) prospect_id, payload
          FROM store_notes WHERE kind = 'pricing'
          ORDER BY prospect_id, created_at DESC, id DESC`;
        const deals = {};
        for (const r of rows) deals[r.prospect_id] = r.payload;
        res.status(200).json({ deals });
        return;
      }
      if (!prospectId) { res.status(400).json({ error: "prospect_id required" }); return; }
      const { rows } = await sql`
        SELECT id, prospect_id, kind, payload, created_at, updated_at
        FROM store_notes WHERE prospect_id = ${prospectId}
        ORDER BY created_at DESC, id DESC`;
      res.status(200).json({ notes: rows });
      return;
    }
    if (req.method === "POST") {
      const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : (req.body || {});
      const prospectId = body.prospect_id;
      const kind = body.kind;
      const payload = body.payload == null ? {} : body.payload;
      if (!prospectId) { res.status(400).json({ error: "prospect_id required" }); return; }
      if (!KINDS.includes(kind)) { res.status(400).json({ error: "kind must be one of: " + KINDS.join(", ") }); return; }
      const { rows } = await sql`
        INSERT INTO store_notes (prospect_id, kind, payload)
        VALUES (${prospectId}, ${kind}, ${JSON.stringify(payload)}::jsonb)
        RETURNING id, prospect_id, kind, payload, created_at, updated_at`;
      res.status(201).json({ note: rows[0] });
      return;
    }
    if (req.method === "DELETE") {
      const id = (req.query && req.query.id) || "";
      if (!id || isNaN(Number(id))) { res.status(400).json({ error: "numeric id required" }); return; }
      const { rows } = await sql`DELETE FROM store_notes WHERE id = ${Number(id)} RETURNING id`;
      if (!rows.length) { res.status(404).json({ error: "not found" }); return; }
      res.status(200).json({ deleted: rows[0].id });
      return;
    }
    res.setHeader("Allow", "GET, POST, DELETE");
    res.status(405).json({ error: "method not allowed" });
  } catch (e) {
    res.status(500).json({ error: "server error", detail: String((e && e.message) || e) });
  }
};
