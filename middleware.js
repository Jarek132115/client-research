/* Vercel Edge Middleware — password gate for a private dashboard.
   Vercel strips WWW-Authenticate, so we serve our own HTML login page + cookie.
   Setup: Vercel → Project → Settings → Environment Variables → SITE_PASS = your password → redeploy. */
export const config = { matcher: ["/((?!_next|favicon.ico).*)"] };
const COOKIE = "pp_auth";
/* UTF-8-safe base64 so a password with stray bytes (e.g. a BOM picked up from how
   the env var was set) can never throw in btoa and 500 the whole site. */
function tokenFor(s) {
  try { return btoa(unescape(encodeURIComponent(s))).slice(0, 24); }
  catch (e) { return encodeURIComponent(s).slice(0, 24); }
}
export default async function middleware(req) {
  // strip a leading BOM and surrounding whitespace the stored value may carry
  const PASS = (process.env.SITE_PASS || "").replace(/^﻿/, "").trim();
  if (!PASS) return;
  const url = new URL(req.url);
  if (url.pathname === "/__login" && req.method === "POST") {
    const form = await req.formData();
    if ((form.get("password") || "") === PASS) {
      const token = tokenFor(PASS);
      return new Response(null, { status: 302, headers: {
        "Set-Cookie": `${COOKIE}=${token}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=2592000`,
        "Location": "/" } });
    }
    return loginPage("Wrong password. Try again.");
  }
  const cookie = req.headers.get("cookie") || "";
  if (cookie.includes(`${COOKIE}=${tokenFor(PASS)}`)) return;
  return loginPage();
}
function loginPage(error) {
  const html = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1"><title>Prospector — sign in</title>
<style>:root{--bg:#0c0e12;--panel:#161a22;--line:#262d3a;--text:#e6e9ef;--dim:#9aa3b2;--accent:#5eead4;--ink:#06231f}
*{box-sizing:border-box}body{margin:0;height:100vh;display:grid;place-items:center;background:radial-gradient(900px 500px at 70% -10%,rgba(94,234,212,.06),transparent 60%),var(--bg);color:var(--text);font-family:ui-monospace,Menlo,monospace}
.box{background:var(--panel);border:1px solid var(--line);border-radius:12px;padding:30px 28px;width:300px}
.b{font-size:18px;font-weight:600;display:flex;align-items:center;gap:8px;margin-bottom:4px;font-family:Georgia,serif}
.dot{width:8px;height:8px;border-radius:50%;background:var(--accent);box-shadow:0 0 12px var(--accent)}
p{color:var(--dim);font-size:12px;margin:0 0 18px}
input{width:100%;background:var(--bg);border:1px solid var(--line);border-radius:6px;color:var(--text);padding:10px 12px;font-family:inherit;font-size:13px;outline:none;margin-bottom:12px}
input:focus{border-color:var(--accent)}
button{width:100%;background:var(--accent);color:var(--ink);border:0;border-radius:6px;padding:10px;font-family:inherit;font-weight:600;font-size:13px;cursor:pointer}
.err{color:#fb7185;font-size:12px;margin-bottom:10px}</style></head><body>
<form class="box" method="POST" action="/__login">
<div class="b"><span class="dot"></span>Prospector</div>
<p>Private. Enter the team password.</p>
${error ? `<div class="err">${error}</div>` : ""}
<input type="password" name="password" placeholder="Password" autofocus autocomplete="current-password">
<button type="submit">Enter</button></form></body></html>`;
  return new Response(html, { status: 401, headers: { "Content-Type": "text/html; charset=utf-8" } });
}
