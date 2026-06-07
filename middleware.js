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
<meta name="viewport" content="width=device-width,initial-scale=1"><title>KONARSTUDIO — sign in</title>
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700;800&family=JetBrains+Mono:wght@500&display=swap" rel="stylesheet">
<style>:root{--bg:#f6f7f9;--panel:#fff;--line:#e7e9ee;--text:#15171c;--dim:#5a6170;--faint:#9aa0ad;--accent:#2563eb;--ink:#fff}
*{box-sizing:border-box}body{margin:0;height:100vh;display:grid;place-items:center;background:var(--bg);color:var(--text);font-family:"Plus Jakarta Sans",system-ui,-apple-system,sans-serif;padding:20px}
.box{background:var(--panel);border:1px solid var(--line);border-radius:16px;padding:32px 30px;width:344px;box-shadow:0 1px 2px rgba(20,23,31,.04),0 18px 40px -20px rgba(20,23,31,.22)}
.brand{display:flex;align-items:center;gap:11px;margin-bottom:20px}
.brand-name{font-weight:800;font-size:17px;letter-spacing:-.02em;line-height:1}
.brand-thin{font-weight:500;color:var(--dim)}
.brand small{display:block;margin-top:3px;font-family:"JetBrains Mono",monospace;font-size:9px;font-weight:500;color:var(--faint);letter-spacing:.16em;text-transform:uppercase}
h1{font-size:15px;font-weight:700;margin:0 0 4px;letter-spacing:-.01em}
p{color:var(--dim);font-size:12.5px;margin:0 0 20px;line-height:1.5}
input{width:100%;background:var(--bg);border:1px solid var(--line);border-radius:10px;color:var(--text);padding:11px 13px;font-family:inherit;font-size:13.5px;outline:none;margin-bottom:12px;transition:.16s}
input:focus{border-color:var(--accent);box-shadow:0 0 0 3px color-mix(in srgb,var(--accent) 22%,transparent)}
input::placeholder{color:var(--faint)}
button{width:100%;background:var(--accent);color:var(--ink);border:0;border-radius:10px;padding:11px;font-family:inherit;font-weight:600;font-size:13.5px;cursor:pointer;transition:.16s}
button:hover{background:#1d4ed8}
.err{color:#dc2626;font-size:12px;margin-bottom:12px;font-weight:500}</style></head><body>
<form class="box" method="POST" action="/__login">
<div class="brand">
<svg width="30" height="30" viewBox="0 0 28 28" fill="none" aria-hidden="true"><rect width="28" height="28" rx="8" fill="#2563eb"/><path d="M9.5 7.5V20.5M9.5 14L18 7.5M9.5 14L18 20.5" stroke="#fff" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/></svg>
<span><span class="brand-name">KONAR<span class="brand-thin">STUDIO</span></span><small>client research</small></span></div>
<h1>Sign in</h1>
<p>This workspace is private. Enter the password to continue.</p>
${error ? `<div class="err">${error}</div>` : ""}
<input type="password" name="password" placeholder="Password" autofocus autocomplete="current-password">
<button type="submit">Enter</button></form></body></html>`;
  return new Response(html, { status: 401, headers: { "Content-Type": "text/html; charset=utf-8" } });
}
