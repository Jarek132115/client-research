#!/usr/bin/env node
/* Safety-net export: dump every store_notes row to a timestamped JSON file in
   backups/. The DB is the only home for operator-entered data (it is NOT in git),
   so run this periodically. Reads POSTGRES_URL — pull it first if running locally:
   vercel env pull .env.local  */
require("./load-env.js")();
const fs = require("fs");
const path = require("path");

(async () => {
  if (!process.env.POSTGRES_URL) {
    console.error("db-export: POSTGRES_URL not set. Run: vercel env pull .env.local");
    process.exit(1);
  }
  const { sql } = require("@vercel/postgres");
  const { rows } = await sql`SELECT * FROM store_notes ORDER BY id`;
  const dir = path.join(__dirname, "..", "backups");
  fs.mkdirSync(dir, { recursive: true });
  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  const out = path.join(dir, "store_notes-" + stamp + ".json");
  fs.writeFileSync(out, JSON.stringify(rows, null, 2));
  console.log("db-export: wrote " + rows.length + " row(s) -> " + out);
  process.exit(0);
})().catch(e => { console.error("db-export failed:", e.message); process.exit(1); });
