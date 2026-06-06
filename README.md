# Shopify Prospector

A private, self-updating dashboard that finds and fully qualifies high-revenue US
Shopify stores running weak themes — the targets for a custom theme-fix + CRO
service. A Claude routine runs daily at 2am, qualifies prospects, and pushes;
Vercel auto-deploys the private site.

- Operating manual: `docs/HANDOVER.md`
- The 2am routine prompt + weekly learning loop: `docs/AUTOMATION.md`
- Source of truth: `data/items.js` (the routine writes here; everything else is derived)

Local: `node scripts/check.js` then `npx http-server -p 8099` (or `python -m http.server 8099`).
