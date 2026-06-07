#!/usr/bin/env node
/* Apply db/schema.sql to the live Neon Postgres. Safe to re-run (everything is
   IF NOT EXISTS). Reads POSTGRES_URL from the environment — locally, pull it
   first with:  vercel env pull .env.local  */
require("./load-env.js")();
const fs = require("fs");
const path = require("path");

(async () => {
  if (!process.env.POSTGRES_URL) {
    console.error("db-init: POSTGRES_URL not set. Run: vercel env pull .env.local");
    process.exit(1);
  }
  const { sql } = require("@vercel/postgres");
  const schema = fs.readFileSync(path.join(__dirname, "..", "db", "schema.sql"), "utf8");
  // strip SQL line-comments first, THEN split into statements (a leading comment
  // block belongs to the statement that follows it, so it must not be filtered out)
  const cleaned = schema.split(/\r?\n/).filter(l => !l.trim().startsWith("--")).join("\n");
  const stmts = cleaned.split(/;\s*(?:\r?\n|$)/).map(s => s.trim()).filter(Boolean);
  for (const stmt of stmts) await sql.query(stmt);
  const { rows } = await sql`SELECT to_regclass('public.store_notes') AS tbl`;
  if (!rows[0].tbl) { console.error("db-init: table not found after apply"); process.exit(1); }
  console.log("db-init: OK — store_notes exists (" + rows[0].tbl + "), " + stmts.length + " statements applied");
  process.exit(0);
})().catch(e => { console.error("db-init failed:", e.message); process.exit(1); });
