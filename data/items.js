/* Shopify Prospector - prospect data (SOURCE OF TRUTH). Prepend newest-first; never overwrite older prospects. Gate-validated JS. */
window.SITE_ITEMS = [
  {
    "id": "2026-06-10-mushroom-revival",
    "date": "2026-06-10",
    "title": "Mushroom Revival",
    "categories": [
      "supplements"
    ],
    "summary": [
      "<b>Founder-led functional-mushroom brand (capsules, tinctures, gummies, powders).</b> The bestseller Daily 10 PDP has a broken buy-box price (Autoship shows $37.95 striking through an identical $37.95 while the 3-pack one-time is $102.47) and the Best Sellers nav links to 404 pages.",
      "Founder Alex Dorr is exceptionally reachable (mycologist, host of the #1 mushroom podcast, author). Revenue is the soft spot - no public figure, so treat six-figures/mo as likely but unconfirmed."
    ],
    "sections": [
      {
        "h": "Why this is a good lead",
        "blocks": [
          {
            "p": "Mushroom Revival (Austin, TX, founded 2018) sells USDA-organic functional-mushroom supplements DTC and in retail, and operates the first USDA-certified-organic cordyceps farm in the Americas.",
            "why": "Real, demo-able PDP bugs (a broken autoship price, 404 nav links, thin/unmanaged reviews), an unusually reachable founder, and a function-over-form category that tends to run weak themes."
          }
        ]
      }
    ],
    "sources": "<a href='https://www.mushroomrevival.com/products/daily-10-mix-mushroom-capsules' target='_blank' rel='noopener'>Daily 10 PDP</a> &middot; <a href='https://www.mushroomrevival.com/pages/about-mushroom-revival' target='_blank' rel='noopener'>About / founder</a> &middot; <a href='https://www.linkedin.com/in/mushroomrevival/' target='_blank' rel='noopener'>Alex Dorr LinkedIn</a>",
    "prospect": {
      "url": "mushroomrevival.com",
      "vertical": "supplements",
      "shopifyConfirmed": true,
      "shopifySignal": "products.json returns a full Shopify catalog (store 0049/1687/1235); assets on cdn.shopify.com",
      "revenue": {
        "estimate": "Est. low-to-mid seven figures/yr (six-figures/mo, inferred - no public figure)",
        "confidence": "low",
        "signals": [
          {
            "method": "Operational scale",
            "detail": "Operates the first USDA-certified-organic cordyceps farm in the Americas; national media presence and the longest-running mushroom podcast; DTC plus retail",
            "source": "Company / press"
          },
          {
            "method": "Catalog + tenure + model",
            "detail": "Eight years operating (since 2018), broad multi-format catalog, premium pricing ($38-455 bundles), autoship/subscription on the PDP",
            "source": "Site + products.json"
          }
        ]
      },
      "contacts": [
        {
          "name": "Alex Dorr",
          "role": "Founder & CEO",
          "linkedin": "https://www.linkedin.com/in/mushroomrevival/",
          "email": "alex@mushroomrevival.com",
          "emailStatus": "pattern-guess",
          "publiclyActive": true,
          "notes": "Mycologist; hosts the #1/longest-running mushroom podcast, published author, very active in media. Customer reviews on-site literally name-check him - exceptional accessibility."
        }
      ],
      "lighthouse": {
        "mobile": null,
        "desktop": null
      },
      "weaknesses": [
        {
          "issue": "Broken buy-box pricing: on the 3-pack the Autoship price shows $37.95 striking through an identical $37.95, while the one-time price is $102.47 - the autoship price does not match the selected pack",
          "area": "pdp",
          "severity": "high",
          "why": "A broken/contradictory price at the exact decision point kills trust and subscribe conversion on a daily consumable."
        },
        {
          "issue": "Broken internal product links: the Best Sellers nav points to handles that 404 (e.g. focus-lions-mane-powder, lions-mane-capsules)",
          "area": "pdp",
          "severity": "high",
          "why": "Dead links from the primary navigation lose buyers mid-journey."
        },
        {
          "issue": "Thin and unmanaged social proof: the hero Daily 10 has only 23 reviews and surfaces negatives prominently (a 1-star email-opt-out complaint and an expired-product complaint) at the buy box",
          "area": "pdp",
          "severity": "med",
          "why": "Low review volume plus visible negatives at the decision point depress conversion."
        },
        {
          "issue": "Heavy discount stacking: a 50%-off sitewide popup, a 20%-off-first-order popup, per-pack save 20-28%, and autoship up-to-36%-off all at once",
          "area": "home",
          "severity": "med",
          "why": "Overlapping promos erode margin and muddy the offer."
        }
      ],
      "demo": {
        "primaryPage": "pdp",
        "rationale": "Rebuild the Daily 10 capsule PDP, where the broken autoship price and weak social proof live, and fix the dead nav links.",
        "mechanics": [
          "Fix the autoship/one-time pricing so the price matches the selected pack and the strikethrough shows a real saving (not the same number)",
          "Repair the Best Sellers nav links so they resolve to live PDPs (no 404s)",
          "Pull more curated reviews up beside the buy box and triage/respond to the visible negatives",
          "Consolidate the promo stack into one clear offer"
        ],
        "bestseller": "Daily 10 Mix Mushroom Capsules - mushroomrevival.com/products/daily-10-mix-mushroom-capsules"
      },
      "score": {
        "revenue": 2,
        "weakness": 4,
        "accessibility": 5,
        "vertical": 4,
        "total": 15
      },
      "priority": "solid",
      "scrutiny": "Passes as a solid. The weaknesses are real, demo-able bugs (a contradictory autoship price at the buy box, 404 links from the Best Sellers nav, thin reviews with unmanaged negatives), and founder Alex Dorr is about as reachable as founders get (mycologist, top mushroom podcast host, author). The honest soft spot is revenue: there is no third-party figure, only operational-scale inference, so I would treat six-figures/mo as likely but unconfirmed and verify before investing heavily. Lead with the broken buy-box price.",
      "outreach": [
        {
          "channel": "email",
          "style": "warm-human",
          "subject": "small bug on your Daily 10 page",
          "body": "Hey Alex, big fan of what you have built with the farm and the podcast. Was on your Daily 10 page and noticed the price box looks a bit broken: on the 3-pack the autoship price shows $37.95 with a strike-through of the same $37.95, while the one-time is $102.47, so it is hard to tell what you actually pay. Felt like an easy win, so I rebuilt a cleaned-up version: [demo link]. No agenda, just thought you would want to see it. [Your name]"
        },
        {
          "channel": "email",
          "style": "teardown",
          "subject": "your Daily 10 buy box",
          "body": "Hi Alex, a few things on your [bestseller] page are costing conversions: the autoship price ($37.95) does not match the selected 3-pack (one-time $102.47) and strikes through an identical number, a couple of your Best Sellers menu links 404, and the reviews section is thin with some unanswered negatives. I rebuilt the page with the pricing fixed, the links repaired, and reviews pulled up next to the buy button. Quick before/after, no charge: [demo link]. Worth a look? [Your name]"
        },
        {
          "channel": "email",
          "style": "demo-first",
          "subject": "rebuilt your Daily 10 page (free)",
          "body": "Hi Alex, I rebuilt your [bestseller] page as a free demo: fixed the autoship/one-time pricing so it matches the selected pack, repaired the 404 nav links, and pulled reviews up next to the buy box. Before/after here: [demo link]. If it is useful, happy to walk through it on a quick call. [Your name]"
        }
      ],
      "operatorTodo": [
        "Verify alex@mushroomrevival.com before sending - pattern guess; Apollo match needs a paid plan.",
        "Confirm revenue clears six-figures/mo (no public figure found; estimate is inference-based).",
        "Re-check the autoship/one-time pricing live across 1/2/3-pack selections.",
        "Run PageSpeed Insights on the Daily 10 PDP (mobile + desktop).",
        "Capture a navbar+hero screenshot (capture-screenshot.js/thum.io was network-blocked in the build sandbox)."
      ],
      "caveats": "Revenue is a LOW-confidence inference from operational-scale signals (own organic cordyceps farm, national media, multi-format catalog, eight years operating); there is no third-party dollar figure, so six-figures/mo is likely but UNCONFIRMED - verify before investing. Not filed accounts (US brand). Email alex@mushroomrevival.com is a PATTERN GUESS, not verified (Apollo people-match unavailable on the free plan). Lighthouse not yet run. Weaknesses observed live on the Daily 10 PDP on 2026-06-10."
    }
  },
  {
    "id": "2026-06-10-biohm-health",
    "date": "2026-06-10",
    "title": "BIOHM Health",
    "categories": [
      "supplements"
    ],
    "summary": [
      "<b>~$5-6M gut-health brand, founder + scientist led.</b> The live Nourish Regimen page links its PROBIOTIC to a 404, the flagship probiotic PDP stacks four overlapping discounts at once, and the pages are Shogun builds full of pasted MS-Word markup.",
      "Founders Afif Ghannoum (CEO) and Dr. Mahmoud Ghannoum (renowned mycobiome scientist, Case Western) are credible and reachable."
    ],
    "sections": [
      {
        "h": "Why this is a good lead",
        "blocks": [
          {
            "p": "BIOHM Health (Cleveland, OH) sells clinically studied probiotics, prebiotics and gut-health products DTC on Shopify, plus an at-home gut test. Revenue is estimated around $5-6M with roughly 20-29 staff and venture backing.",
            "why": "Revenue clears six-figures/mo, the founders are credible and reachable, and the site has concrete, fixable issues (a dead link to the flagship from live copy, a confusing 4-way discount stack, bloated page-builder markup)."
          }
        ]
      }
    ],
    "sources": "<a href='https://biohmhealth.com/products/probiotic-supplement' target='_blank' rel='noopener'>Total Gut Probiotic PDP</a> &middot; <a href='https://growjo.com/company/BIOHM_Health' target='_blank' rel='noopener'>Growjo revenue estimate</a> &middot; <a href='https://www.biohmhealth.com/pages/dr-ghannoum' target='_blank' rel='noopener'>Dr. Ghannoum</a>",
    "prospect": {
      "url": "biohmhealth.com",
      "vertical": "supplements",
      "shopifyConfirmed": true,
      "shopifySignal": "products.json returns a full Shopify catalog (store 1713/4291); assets on cdn.shopify.com; pages built with Shogun",
      "revenue": {
        "estimate": "~$5-6M/yr (estimate)",
        "confidence": "medium",
        "signals": [
          {
            "method": "Third-party revenue estimate",
            "detail": "Growjo puts revenue at ~$5.5M (29 employees); another aggregator ~$6.4M (21 employees); PitchBook ~24 employees",
            "source": "Growjo / ZoomInfo / PitchBook"
          },
          {
            "method": "Funding + operations",
            "detail": "Venture-backed (Vanterra Capital, Middleland Capital); clinically studied formulas; DTC plus an at-home gut test",
            "source": "PR Newswire / AgFunder"
          }
        ]
      },
      "contacts": [
        {
          "name": "Afif Ghannoum",
          "role": "Co-Founder & CEO",
          "linkedin": "https://www.linkedin.com/company/biohm-health",
          "email": "afif@biohmhealth.com",
          "emailStatus": "pattern-guess",
          "publiclyActive": true,
          "notes": "Biotech lawyer turned operator; frequent interviews. Co-founder Dr. Mahmoud Ghannoum is a renowned mycobiome scientist at Case Western - both highly public and reachable."
        }
      ],
      "lighthouse": {
        "mobile": null,
        "desktop": null
      },
      "weaknesses": [
        {
          "issue": "Broken internal product link: the live Nourish Regimen page links its PROBIOTIC to /products/biohm-probiotic-supplement, which 404s (the live handle is /products/probiotic-supplement)",
          "area": "pdp",
          "severity": "high",
          "why": "On-site product copy routes buyers to a 404 instead of the flagship product."
        },
        {
          "issue": "Discount-stacking on the flagship PDP: a sale price, Subscribe & Save 15%, a 40%-off code (TOTALPRO40), and a save-about-30% claim all shown at once",
          "area": "pdp",
          "severity": "med",
          "why": "Overlapping discounts erode margin and muddy the offer at the decision point."
        },
        {
          "issue": "Product pages are built in Shogun with content pasted from MS Word (SCXW/TextRun span artifacts in the HTML), producing bloated, hard-to-maintain markup",
          "area": "pdp",
          "severity": "med",
          "why": "Bloat hurts maintainability and likely page speed (confirm with PageSpeed)."
        },
        {
          "issue": "Customer reviews/ratings are not surfaced at the buy box on the flagship probiotic (it leans on a clinical study and a 2023 award; no visible star rating or review count)",
          "area": "pdp",
          "severity": "med",
          "why": "No customer social proof at the decision point on a $35 supplement."
        }
      ],
      "demo": {
        "primaryPage": "pdp",
        "rationale": "Rebuild the Total Gut Probiotic PDP: fix the dead link, simplify the offer, clean up the markup, and add reviews.",
        "mechanics": [
          "Fix the broken PROBIOTIC link so on-site copy points to the live /products/probiotic-supplement",
          "Consolidate the sale + subscribe + 40%-code + save-30% into one clear, honest offer",
          "Rebuild the PDP with clean semantic HTML (drop the Shogun/Word-paste bloat) for speed and maintainability",
          "Add a customer reviews/ratings widget at the buy box"
        ],
        "bestseller": "Total Gut Probiotic Supplement - biohmhealth.com/products/probiotic-supplement"
      },
      "score": {
        "revenue": 3,
        "weakness": 3,
        "accessibility": 4,
        "vertical": 4,
        "total": 14
      },
      "priority": "solid",
      "scrutiny": "Passes as a solid. Revenue is real (~$5-6M, two aggregators agree) and the founders are credible and reachable (Afif is a public operator, Dr. Ghannoum a renowned scientist). The weaknesses are concrete and demo-able: a verified 404 from live product copy to the flagship, a confusing four-way discount stack, and bloated Shogun/Word markup. The reviews-absence is the softest point - confirm a JS review widget is truly missing before leaning on it. Lead with the dead flagship link.",
      "outreach": [
        {
          "channel": "email",
          "style": "warm-human",
          "subject": "small thing on your site",
          "body": "Hi Afif, really like the mycobiome angle BIOHM is built on. Was reading your Nourish Regimen page and the PROBIOTIC link in the copy goes to a 404 (looks like an old handle), so people clicking through to your flagship hit a dead end. Easy win, so I patched it and cleaned up the product page in a quick demo: [demo link]. No agenda, just thought you would want to know. [Your name]"
        },
        {
          "channel": "email",
          "style": "teardown",
          "subject": "dead link to your flagship probiotic",
          "body": "Hi Afif, a few things on your [bestseller] flow are leaking sales: your Nourish Regimen page links PROBIOTIC to a handle that 404s, the probiotic PDP stacks a sale price plus subscribe plus a 40%-off code plus a save-30% claim at once, and the page markup is heavy Shogun/Word paste. I rebuilt the PDP with the link fixed, one clear offer, clean markup, and reviews added. Quick before/after, no charge: [demo link]. Worth a look? [Your name]"
        },
        {
          "channel": "email",
          "style": "demo-first",
          "subject": "rebuilt your probiotic page (free)",
          "body": "Hi Afif, I rebuilt your [bestseller] page as a free demo: fixed the 404 link from your product copy, consolidated the overlapping discounts into one clear offer, and cleaned up the markup. Before/after here: [demo link]. If it is useful, happy to walk through it on a quick call. [Your name]"
        }
      ],
      "operatorTodo": [
        "Verify afif@biohmhealth.com before sending - pattern guess; Apollo match needs a paid plan.",
        "Confirm whether a JS reviews widget loads on the probiotic PDP (the reviews-absence weakness should be eyeballed live).",
        "Run PageSpeed Insights on the probiotic PDP (mobile + desktop) - the Shogun/Word markup is likely a speed drag.",
        "Pull biohmhealth.com/products/probiotic-supplement.json for exact variants to build the demo.",
        "Capture a navbar+hero screenshot (capture-screenshot.js/thum.io was network-blocked in the build sandbox)."
      ],
      "caveats": "Revenue ~$5-6M is a third-party aggregator estimate (Growjo / ZoomInfo / PitchBook), not filed accounts (US brand). Email afif@biohmhealth.com is a PATTERN GUESS, not verified (Apollo people-match unavailable on the free plan). Lighthouse not yet run. The reviews-absence weakness should be confirmed live (a JS widget may load). Observed 2026-06-10."
    }
  },
  {
    "id": "2026-06-10-truwild",
    "date": "2026-06-10",
    "title": "TRUWILD",
    "categories": [
      "supplements"
    ],
    "summary": [
      "<b>Outdoor-athlete supplement brand, founder-led and growing.</b> The bestseller Wild Greens PDP has live, demo-able bugs: a Subscribe &amp; Save price that renders as <b>$0.00/serving</b> and a mixed &pound;/$ currency display.",
      "Founder Zac Curhan is highly reachable (DTC/operator podcasts, active LinkedIn, publicly weighing investment) and the brand is in a scaling moment."
    ],
    "sections": [
      {
        "h": "Why this is a good lead",
        "blocks": [
          {
            "p": "TRUWILD sells whole-food supplements (Wild Greens, Hydrate, Motion, Adaptogens) to outdoor athletes across DTC, Amazon, Walmart.com and ~110 specialty retailers. Bootstrapped since 2017 and growing fast enough to be publicly weighing outside investment.",
            "why": "The bestseller PDP has concrete, fixable conversion bugs (a broken subscribe price, mixed-currency display, a wrong-product section header), the founder is unusually accessible, and the timing (an active growth/scaling moment) is right."
          }
        ]
      }
    ],
    "sources": "<a href='https://truwild.com/products/wild-greens' target='_blank' rel='noopener'>Wild Greens PDP</a> &middot; <a href='https://www.foodnavigator-usa.com/Article/2025/10/03/rapid-growth-and-supply-chain-hurdles-prompt-the-outdoor-focused-brand-to-consider-new-strategiesand-possibly-investors/' target='_blank' rel='noopener'>FoodNavigator, Oct 2025</a> &middot; <a href='https://www.crunchbase.com/organization/truwild' target='_blank' rel='noopener'>Crunchbase</a>",
    "prospect": {
      "url": "truwild.com",
      "vertical": "supplements",
      "shopifyConfirmed": true,
      "shopifySignal": "Live products.json returns a full Shopify catalog; storefront assets served from cdn.shopify.com",
      "revenue": {
        "estimate": "~$2-6M/yr (DTC + Amazon/Walmart + ~110 retailers)",
        "confidence": "low",
        "signals": [
          {
            "method": "Third-party revenue band",
            "detail": "Crunchbase lists TRUWILD among San Diego companies at under $10M revenue",
            "source": "Crunchbase"
          },
          {
            "method": "Distribution + growth signal",
            "detail": "Omni-channel (DTC, Amazon, Walmart.com, ~110 specialty retailers); FoodNavigator (Oct 2025) reports rapid growth and that the brand is weighing investors",
            "source": "FoodNavigator-USA, Oct 2025"
          }
        ]
      },
      "contacts": [
        {
          "name": "Zac Curhan",
          "role": "Co-Founder & CEO",
          "linkedin": "https://www.linkedin.com/company/truwild",
          "email": "zac@truwild.com",
          "emailStatus": "pattern-guess",
          "publiclyActive": true,
          "notes": "Left the bottled-water industry to run TRUWILD full-time; appears on DTC/operator podcasts (re:COGs, Manufactured) and is active on LinkedIn. Co-founder Nate Cox leads sourcing/formulation."
        }
      ],
      "lighthouse": {
        "mobile": null,
        "desktop": null
      },
      "weaknesses": [
        {
          "issue": "Subscribe & Save per-serving price renders as $0.00 per serving on the Wild Greens PDP",
          "area": "pdp",
          "severity": "high",
          "why": "The highest-LTV action (subscription) on a daily consumable shows a broken/placeholder price, killing trust and subscribe conversion."
        },
        {
          "issue": "Mixed-currency display: main price localizes to GBP (about 25.77 pounds) while per-serving costs are hardcoded in USD (about $0.98/serving)",
          "area": "pdp",
          "severity": "med",
          "why": "Inconsistent currency at the decision point confuses buyers and erodes trust."
        },
        {
          "issue": "Copy/template error: a benefits block on the Wild Greens page is headed for the wrong product (it still reads as the Hydrate section)",
          "area": "pdp",
          "severity": "med",
          "why": "A visible wrong-product header signals low CRO attention and undermines credibility."
        },
        {
          "issue": "Social proof (293 reviews, 4.8 stars) sits far below a very long PDP, not beside the buy box",
          "area": "pdp",
          "severity": "med",
          "why": "Proof is not visible at the decision point, costing conversion."
        }
      ],
      "demo": {
        "primaryPage": "pdp",
        "rationale": "Traffic goes to product PDPs, and the bestseller Wild Greens PDP is where the broken subscribe price and currency bugs live - rebuild where the buying decision happens.",
        "mechanics": [
          "Fix the Subscribe & Save price so the real discounted per-serving cost shows (not $0.00), with the saving vs one-time",
          "Make currency consistent (localize everything including per-serving, or default US visitors to USD)",
          "Correct the wrong-product (Hydrate) benefits header to Wild Greens and tighten the above-the-fold value prop",
          "Pull the 4.8-star / 293-review social proof up beside the buy box",
          "Add a sticky add-to-cart on the long mobile PDP"
        ],
        "bestseller": "Wild Greens - truwild.com/products/wild-greens"
      },
      "score": {
        "revenue": 3,
        "weakness": 4,
        "accessibility": 5,
        "vertical": 4,
        "total": 16
      },
      "priority": "top",
      "scrutiny": "Passes the critic. The weaknesses are real, demonstrable bugs (a literal $0.00 subscribe price, mixed pound/dollar pricing, a wrong-product section header) on the bestseller PDP - money-leaking and trivial to demo, not nitpicks. Founder Zac Curhan is unusually reachable (podcasts, active LinkedIn, publicly weighing investment) and the brand is scaling, so timing is good. Revenue is the soft spot: only an under-$10M third-party band, so the six-figure/mo read is likely but not certain. Worth an hour to build the demo.",
      "outreach": [
        {
          "channel": "email",
          "style": "warm-human",
          "subject": "small thing on your Wild Greens page",
          "body": "Hey Zac, fell down a bit of a rabbit hole on your site the other night (the outdoor-athlete angle is great) and ended up on the Wild Greens page. Really like what you've built. One tiny thing jumped out though: the Subscribe and Save line is showing $0.00 per serving, so it looks a little broken right where people decide to subscribe. Felt like an easy win, so I mocked up a cleaned-up version: [demo link]. No agenda, just thought you'd want to see it. Either way, keep it up. [Your name]"
        },
        {
          "channel": "email",
          "style": "teardown",
          "subject": "your Wild Greens page",
          "body": "Hi Zac, I was on your Wild Greens page and noticed a few things working against conversion: the Subscribe and Save price renders as $0.00 per serving, the prices mix pounds and dollars on the same page, and one benefits header still reads as the Hydrate section. I rebuilt the page with the subscribe price fixed, one consistent currency, the header corrected, and your 4.8-star reviews pulled up next to the buy button. Quick before/after, no charge: [demo link]. Worth a look? [Your name]"
        },
        {
          "channel": "email",
          "style": "demo-first",
          "subject": "rebuilt your Wild Greens page (free)",
          "body": "Hi Zac, I rebuilt your Wild Greens product page as a free demo: fixed the $0.00 subscribe price, made the currency consistent, corrected the wrong-product header, and moved reviews next to the buy box. Before/after here: [demo link]. If it is useful, happy to walk you through it on a quick call. [Your name]"
        }
      ],
      "operatorTodo": [
        "Verify zac@truwild.com before sending (pattern guess; Apollo email match needs a paid plan, so confirm via LinkedIn/site or another tool).",
        "Re-check the Wild Greens PDP from a US IP to confirm the currency behavior and the $0.00 subscribe price (observed in a UK-localized session).",
        "Run PageSpeed Insights on the Wild Greens PDP (mobile + desktop).",
        "Pull truwild.com/products.json for exact Wild Greens variants to build the demo.",
        "Capture a navbar+hero screenshot (capture-screenshot.js/thum.io was network-blocked in the build sandbox)."
      ],
      "caveats": "Revenue is a LOW-confidence estimate from a Crunchbase under-$10M band plus multi-channel distribution and press signals, not filed accounts (US brand, no Companies House); six-figure/mo is likely at the midpoint but not certain. Email zac@truwild.com is a PATTERN GUESS, not verified (Apollo people-match is unavailable on the current free plan). Lighthouse not yet run. Weaknesses were observed live on the Wild Greens PDP on 2026-06-10 in a UK-localized browser session, so the GBP currency display may differ for US visitors (the $0.00 subscribe price and the wrong-product header are not location-dependent).",
      "mockupLive": "/mockups/truwild/wild-greens-fixed.html"
    }
  },
  {
    "id": "2026-06-10-clean-simple-eats",
    "date": "2026-06-10",
    "title": "Clean Simple Eats",
    "categories": [
      "supplements"
    ],
    "summary": [
      "<b>~$21.6M/yr protein &amp; nutrition brand, bootstrapped and founder-led.</b> Functional but dated theme with a clear money leak: bestseller flavors are sold out and the back-in-stock capture looks paused, so proven demand bounces with no waitlist.",
      "Strong revenue and reachable founders (Erika &amp; JJ Peterson); the highest-leverage fix is demand capture on sold-out hero SKUs."
    ],
    "sections": [
      {
        "h": "Why this is a good lead",
        "blocks": [
          {
            "p": "Clean Simple Eats sells protein powders, hydration and wellness products DTC plus retail and a branded CSE+ app. Bootstrapped from personal debt to an estimated eight figures, founded ~2014.",
            "why": "Revenue clears six figures/mo comfortably, the founders are public and reachable, and there is a concrete, fixable win (capture demand on sold-out bestsellers) rather than only cosmetic theme gripes."
          }
        ]
      }
    ],
    "sources": "<a href='https://cleansimpleeats.com/products/pink-burst-clear-protein-powder-packets' target='_blank' rel='noopener'>Clear Protein PDP (sold out)</a> &middot; <a href='https://growjo.com/company/Clean_Simple_Eats' target='_blank' rel='noopener'>Growjo revenue estimate</a> &middot; <a href='https://www.utahbusiness.com/entrepreneurship/2024/07/11/how-erika-peterson-co-founded-clean-simple-eats/' target='_blank' rel='noopener'>Utah Business, founder profile</a>",
    "prospect": {
      "url": "cleansimpleeats.com",
      "vertical": "supplements",
      "shopifyConfirmed": true,
      "shopifySignal": "products.json returns a full Shopify catalog (store 0258/0384/9806); assets on cdn.shopify.com",
      "revenue": {
        "estimate": "~$21.6M/yr (estimate)",
        "confidence": "medium",
        "signals": [
          {
            "method": "Third-party revenue estimate",
            "detail": "Growjo / ZoomInfo-class aggregators put annual revenue at ~$21.6M",
            "source": "Growjo / ZoomInfo"
          },
          {
            "method": "Operational scale",
            "detail": "Established ~2014, omni-channel (DTC + retail locations + a branded CSE+ subscription app), broad catalog with many bestseller SKUs",
            "source": "Site + products.json"
          }
        ]
      },
      "contacts": [
        {
          "name": "Erika Peterson",
          "role": "Co-Founder",
          "linkedin": "https://www.linkedin.com/company/cleansimpleeats",
          "email": "erika@cleansimpleeats.com",
          "emailStatus": "pattern-guess",
          "publiclyActive": true,
          "notes": "Front-facing co-founder (Utah Business feature, podcasts). Co-founded with JJ Peterson; bootstrapped from personal debt to eight figures."
        }
      ],
      "lighthouse": {
        "mobile": null,
        "desktop": null
      },
      "weaknesses": [
        {
          "issue": "Bestseller flavors are sold out (the PDP shows This flavor sold out fast) and back-in-stock capture appears paused (products.json shows bis-paused tags)",
          "area": "pdp",
          "severity": "high",
          "why": "Proven demand on hero SKUs bounces with no waitlist/email capture, losing both sales and first-party data on a high-revenue consumable."
        },
        {
          "issue": "Subscribe-and-save is not surfaced at the buy box on the consumable PDP (subscription exists per products.json tags but is not prominent above the fold)",
          "area": "pdp",
          "severity": "med",
          "why": "Under-monetizes recurring revenue on daily-use products; subscription is the main LTV lever for supplements."
        },
        {
          "issue": "Heavy distressed/grunge display type across headers reduces legibility and scannability, especially on mobile",
          "area": "mobile",
          "severity": "med",
          "why": "Readability friction on the primary conversion path."
        },
        {
          "issue": "Logo lockup renders the EATS wordmark inside a black block that reads as an unpolished/placeholder treatment",
          "area": "home",
          "severity": "low",
          "why": "Minor first-impression/brand-polish issue at the top of every page."
        }
      ],
      "demo": {
        "primaryPage": "pdp",
        "rationale": "A high-revenue consumables brand losing demand on sold-out hero SKUs; rebuild a bestseller PDP that captures the demand and surfaces subscribe.",
        "mechanics": [
          "Add a back-in-stock email/SMS waitlist on sold-out hero flavors so demand is captured, not bounced",
          "Surface subscribe-and-save inline at the buy box with the per-order saving shown",
          "Tighten header typography for legibility, especially on mobile",
          "Pull the 527-review social proof up beside the buy box"
        ],
        "bestseller": "Clear Protein Powder - cleansimpleeats.com/products/pink-burst-clear-protein-powder-packets (note: this flavor currently sold out)"
      },
      "score": {
        "revenue": 4,
        "weakness": 3,
        "accessibility": 3,
        "vertical": 4,
        "total": 14
      },
      "priority": "solid",
      "scrutiny": "Passes, but as a solid not a top. Unlike a broken theme, CSE's site is functional, so the honest hook is one concrete money leak: bestseller flavors are sold out with back-in-stock capture paused, so proven demand bounces with no waitlist on a $20M+ consumables brand. That is a real, fixable win worth a demo, not a nitpick. The dated/grunge type and logo treatment are softer, more subjective points I am holding lightly. Founders are public but less overtly outreach-open than TruWild's. Revenue is the strongest part, weaknesses the weakest. Worth an hour, but lead with the back-in-stock leak, not theme aesthetics.",
      "outreach": [
        {
          "channel": "email",
          "style": "warm-human",
          "subject": "your sold-out flavors",
          "body": "Hey Erika, I was poking around your site to grab a protein (the clear protein looks great) and a couple of the flavors I wanted were sold out, with no way to get a heads-up when they are back. I build Shopify pages for a living, so I could not help mocking up a version that grabs an email/text on sold-out flavors and pings people the moment they restock: [demo link]. No agenda, just thought you would want it. Love what you and JJ have built. [Your name]"
        },
        {
          "channel": "email",
          "style": "teardown",
          "subject": "sold-out bestsellers are leaking demand",
          "body": "Hi Erika, on your [bestseller] page the flavor was sold out and there was no back-in-stock signup, so that demand (and the email/text) just bounces. On a brand your size that adds up fast. I rebuilt the page with a back-in-stock waitlist, subscribe-and-save surfaced at the buy box, and reviews pulled up next to it. Quick before/after, no charge: [demo link]. Worth a look? [Your name]"
        },
        {
          "channel": "email",
          "style": "demo-first",
          "subject": "rebuilt one of your protein pages (free)",
          "body": "Hi Erika, I rebuilt one of your [bestseller] pages as a free demo: a back-in-stock waitlist on sold-out flavors, subscribe-and-save at the buy box, and reviews moved up next to it. Before/after here: [demo link]. If it is useful, happy to walk through it on a quick call. [Your name]"
        }
      ],
      "operatorTodo": [
        "Verify erika@cleansimpleeats.com (and/or JJ Peterson) before sending - pattern guess; Apollo match needs a paid plan.",
        "Confirm the back-in-stock app status and whether sold-out heroes currently capture emails.",
        "Check subscribe-and-save prominence on a live protein PDP (mobile).",
        "Run PageSpeed Insights on a bestseller PDP (mobile + desktop).",
        "Capture a navbar+hero screenshot (capture-screenshot.js/thum.io was network-blocked in the build sandbox)."
      ],
      "caveats": "Revenue ~$21.6M is a third-party aggregator estimate (Growjo / ZoomInfo-class), not filed accounts (US brand, no Companies House). Email erika@cleansimpleeats.com is a PATTERN GUESS, not verified (Apollo people-match unavailable on the current free plan). Lighthouse not yet run. The subscribe-prominence weakness is inferred from products.json plus the PDP view and should be eyeballed live. Observed 2026-06-10."
    }
  }
];
