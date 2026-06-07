/* Minimal .env loader for the local DB scripts (no dependency on dotenv).
   Loads the file produced by `vercel env pull` so POSTGRES_URL etc. are set.
   Does not override variables already present in the real environment. */
const fs = require("fs");
const path = require("path");
module.exports = function loadEnv() {
  const repo = path.resolve(__dirname, "..");
  for (const f of [".env.local", ".env.development.local", ".env"]) {
    const p = path.join(repo, f);
    if (!fs.existsSync(p)) continue;
    for (const line of fs.readFileSync(p, "utf8").split(/\r?\n/)) {
      const m = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)\s*$/);
      if (!m) continue;
      let v = m[2];
      if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) v = v.slice(1, -1);
      if (process.env[m[1]] === undefined) process.env[m[1]] = v;
    }
  }
};
