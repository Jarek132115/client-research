#!/usr/bin/env node
/* On-demand navbar+hero screenshot capture (SPIKE — not wired into the nightly
   routine yet). Uses thum.io (free, keyless, supports a top crop) to capture, then
   downloads the bytes and writes them into the repo so the static site serves them.
   Needs only HTTP + a file write — no browser binary.

   Usage:  node scripts/capture-screenshot.js <prospect-id> <store-url>
   Example: node scripts/capture-screenshot.js 2025-01-06-example-brand https://www.allbirds.com

   It writes assets/screenshots/<prospect-id>.png and prints the exact field to set:
     prospect.screenshot: "assets/screenshots/<prospect-id>.png"
   (Set that field on the prospect in data/items.js, then run node scripts/check.js.) */
const fs = require("fs");
const path = require("path");

const [, , id, url] = process.argv;
if (!id || !url) { console.error("usage: node scripts/capture-screenshot.js <prospect-id> <store-url>"); process.exit(1); }
if (!/^https?:\/\//i.test(url)) { console.error("url must start with http(s)://"); process.exit(1); }

const REPO = path.resolve(__dirname, "..");
const OUT_DIR = path.join(REPO, "assets", "screenshots");
const OUT_FILE = path.join(OUT_DIR, id + ".png");
// width 1200, crop the top 700px (navbar + hero), no animation
const shotUrl = "https://image.thum.io/get/width/1200/crop/700/noanimate/" + url;

(async () => {
  console.log("capture: requesting " + shotUrl);
  const res = await fetch(shotUrl, { redirect: "follow" });
  if (!res.ok) { console.error("capture: service returned HTTP " + res.status); process.exit(1); }
  const buf = Buffer.from(await res.arrayBuffer());
  // validate it's a real PNG and not an error/placeholder page
  const isPNG = buf.length > 8 && buf[0] === 0x89 && buf[1] === 0x50 && buf[2] === 0x4e && buf[3] === 0x47;
  if (!isPNG) { console.error("capture: response was not a PNG (got " + buf.length + " bytes) — aborting, not saving"); process.exit(1); }
  if (buf.length < 5000) { console.error("capture: PNG suspiciously small (" + buf.length + " bytes) — likely a placeholder, aborting"); process.exit(1); }
  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(OUT_FILE, buf);
  console.log("capture: wrote " + OUT_FILE + " (" + Math.round(buf.length / 1024) + " KB)");
  console.log('capture: set this on the prospect in data/items.js ->  screenshot: "assets/screenshots/' + id + '.png"');
  process.exit(0);
})().catch(e => { console.error("capture failed:", e.message); process.exit(1); });
