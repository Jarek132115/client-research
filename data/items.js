/* Shopify Prospector - prospect data (SOURCE OF TRUTH). Prepend newest-first; never overwrite older prospects. Gate-validated JS. */
window.SITE_ITEMS = [
  {
    "id": "2026-06-20-under-the-weather",
    "date": "2026-06-20",
    "title": "Under the Weather",
    "categories": [
      "pet"
    ],
    "summary": [
      "<b>~$10M/yr vet-formulated pet wellness brand (bland-diet meals, supplements and recovery gels for dogs and cats).</b> On the homepage Best Sellers grid the product cards carry mismatched descriptions: the cat 'Hairball Support Gel' card is described as 'a variety pack of soothing instant meals for your pup's upset tummy', and the 'Colostrum Gel for Cats' card carries the hairball blurb - copy that belongs to other products and mislabels them at the moment of choice.",
      "Founder and CEO Kyla Sternlieb still owns the company (Winooski, Vermont). The leak is a homepage merchandising and content fix, and several PDPs also ship with no product description at all."
    ],
    "sections": [
      {
        "h": "Why this is a good lead",
        "blocks": [
          {
            "p": "Under the Weather sells vet-formulated bland-diet meals, supplements and recovery gels for dogs and cats DTC on Shopify. A 2024 Entrepreneur feature put the business at roughly $10M a year, and the site claims 100,000+ customers and 250,000+ pets helped.",
            "why": "Strong, verifiable revenue and a reachable founder-CEO paired with a specific, screenshot-able content leak on the highest-traffic page - a fast credibility win rather than a full rebuild."
          }
        ]
      }
    ],
    "sources": "<a href='https://undertheweatherpet.com/' target='_blank' rel='noopener'>Homepage Best Sellers</a> &middot; <a href='https://www.entrepreneur.com/starting-a-business/this-animal-lovers-side-hustle-now-makes-10-million-a-year/499727' target='_blank' rel='noopener'>Entrepreneur ($10M feature)</a> &middot; <a href='https://www.crunchbase.com/person/kyla-sternlieb-d976' target='_blank' rel='noopener'>Founder (Crunchbase)</a>",
    "prospect": {
      "url": "undertheweatherpet.com",
      "vertical": "pet",
      "shopifyConfirmed": true,
      "shopifySignal": "products.json store 0364/8736/4667, vendor 'Under the Weather'; multiple live products (e.g. Taurine Powder Topper for Cats, Nursing Kit for Puppies) ship with empty body_html",
      "revenue": {
        "estimate": "Est. ~$10M/yr (triangulated, not filed accounts)",
        "confidence": "high",
        "signals": [
          {
            "method": "Press figure",
            "detail": "2024 Entrepreneur feature headline states the business makes $10 million a year; founder profiled by name",
            "source": "Entrepreneur"
          },
          {
            "method": "Organic traffic",
            "detail": "SEMrush US: ~15,964 organic visits/mo across ~22,800 ranking keywords",
            "source": "SEMrush domain_rank (us)"
          },
          {
            "method": "Scale claims",
            "detail": "Site states 100,000+ customers and 250,000+ pets helped; broad multi-line catalog with an active blog and reviews",
            "source": "Live site"
          }
        ]
      },
      "contacts": [
        {
          "name": "Kyla Sternlieb",
          "role": "Founder & CEO (owner)",
          "linkedin": "https://www.crunchbase.com/person/kyla-sternlieb-d976",
          "email": "kyla@undertheweatherpet.com",
          "emailStatus": "pattern-guess",
          "publiclyActive": true,
          "notes": "University of Vermont '06; founded and still owns Under the Weather in Winooski VT; profiled by name in Entrepreneur and UVM press. Reachable founder-CEO."
        }
      ],
      "lighthouse": {
        "mobile": null,
        "desktop": null
      },
      "weaknesses": [
        {
          "issue": "Homepage Best Sellers cards carry mismatched product descriptions: the cat 'Hairball Support Gel' card reads 'a variety pack of soothing instant meals for your pup's upset tummy', and the 'Colostrum Gel for Cats' card carries the hairball-elimination blurb - the copy belongs to other products",
          "area": "home",
          "severity": "high",
          "why": "Wrong descriptions on the highest-traffic page mislabel products at the moment of choice, confuse cat-vs-dog buyers, and erode trust on a health product."
        },
        {
          "issue": "Multiple products ship with no description at all (empty body_html in products.json, e.g. Taurine Powder Topper for Cats, Nursing Kit for Puppies), so those PDPs have no body copy",
          "area": "pdp",
          "severity": "med",
          "why": "An empty PDP description lowers conversion and forfeits product-page SEO on supplements people research before buying."
        },
        {
          "issue": "Social-proof inconsistency: several Best Sellers cards show very low review counts (4-7 reviews) sitting directly beside hero claims of 100,000+ customers and 250,000+ pets helped",
          "area": "home",
          "severity": "med",
          "why": "Thin per-product proof next to a huge headline number reads as a mismatch and weakens both claims."
        },
        {
          "issue": "The Best Sellers grid mixes well-reviewed hero SKUs (e.g. Ready-Cal, 194 reviews) with brand-new 4-7 review items without ordering by proof, diluting the strongest social proof",
          "area": "home",
          "severity": "low",
          "why": "Leading with low-proof items in a best-sellers module wastes the most persuasive real estate on the page."
        }
      ],
      "demo": {
        "primaryPage": "home",
        "rationale": "Rebuild the homepage Best Sellers section so each card shows its own correct description, proof is consistent, and the best-reviewed products lead.",
        "mechanics": [
          "Fix the card copy so each product shows its own description (Hairball Gel reads as a hairball product, Colostrum reads as colostrum)",
          "Pull the live review count and rating onto each card from the same source as the PDP so the numbers match",
          "Order the grid by review volume so the strongest social proof leads",
          "Add a one-line concern tag (Digestion, Hairball, Recovery) so cat and dog buyers self-select correctly"
        ],
        "bestseller": "Homepage Best Sellers module - undertheweatherpet.com"
      },
      "score": {
        "revenue": 5,
        "weakness": 3,
        "accessibility": 4,
        "vertical": 3,
        "total": 15
      },
      "priority": "solid",
      "scrutiny": "Passes as a solid. Revenue is the strongest part - a named Entrepreneur feature puts it near $10M and SEMrush shows ~16k organic visits/mo, so this is a real business not a guess. Founder-CEO Kyla Sternlieb still owns it and is publicly named, so reachability is genuine. The leak is real and screenshot-able (mismatched Best Sellers descriptions, plus empty PDP bodies confirmed in products.json) but it is a content and merchandising cleanup rather than a broken funnel, so it is a credibility fix worth an hour, not a full rebuild - lead honestly on that. Worth an hour.",
      "outreach": [
        {
          "channel": "email",
          "style": "warm-human",
          "subject": "small mixup on your best sellers",
          "body": "Hi Kyla, I was on your site looking at the cat gels and noticed the Hairball Support Gel card actually describes 'soothing instant meals for your pup', and the Colostrum gel card has the hairball wording - looks like a couple of the best-seller descriptions got crossed. Easy fix, but on a health product it is the kind of thing that makes a first-time buyer hesitate. I tidied up that section as a quick before/after if you want to see it: [demo link]. Love what you have built. [Your name]"
        },
        {
          "channel": "email",
          "style": "teardown",
          "subject": "your best sellers section is mislabeling products",
          "body": "Hi Kyla, on your homepage Best Sellers the cat Hairball Gel is described as instant meals for a pup and the Colostrum gel carries the hairball blurb, and a few of those product pages have no description at all. For a 100,000-customer health brand that is avoidable friction right where people choose. I rebuilt the section so each card shows its own correct copy, the review counts match the product pages, and the best-reviewed items lead: [demo link]. Worth a look? [Your name]"
        },
        {
          "channel": "email",
          "style": "demo-first",
          "subject": "rebuilt your best sellers section (free)",
          "body": "Hi Kyla, I put together a free before/after of your homepage Best Sellers: corrected the mismatched descriptions (the Hairball and Colostrum cards are swapped), pulled real review counts onto each card, and ordered them by proof. Here it is: [demo link]. If it is useful I am happy to send the snippet over or walk through it. [Your name]"
        }
      ],
      "operatorTodo": [
        "Verify kyla@undertheweatherpet.com before sending - pattern guess; Apollo people-match needs a paid plan.",
        "Run PageSpeed on the homepage and a couple of PDPs.",
        "Eyeball the live Best Sellers module and screenshot the mismatched cards before outreach (observed 2026-06-20).",
        "Check the same section on mobile - browser mobile-emulation was unavailable this run."
      ],
      "caveats": "Revenue is a TRIANGULATED estimate (2024 Entrepreneur feature ~$10M + SEMrush ~16k organic/mo + on-site 100k-customer claim), not filed accounts. Email kyla@undertheweatherpet.com is a PATTERN GUESS, not verified (Apollo unavailable on the free plan). Lighthouse not yet run. Mobile not verified (browser mobile-emulation unavailable). The mismatched Best Sellers descriptions and empty product body_html were observed live on 2026-06-20. No mockup this run."
    }
  },
  {
    "id": "2026-06-12-tactipup",
    "date": "2026-06-12",
    "title": "Tactipup",
    "categories": [
      "pet"
    ],
    "summary": [
      "<b>USA-made, made-to-order tactical dog gear (collars, leashes, harnesses).</b> The bestseller collar PDP (4,157 reviews) configures a visually-customized product through five plain text dropdowns with NO clickable swatches - buyers cannot see the camo + thread-color combo they are building.",
      "Owner Paul Haynes (law-enforcement family-owned, Largo FL, since 2017) is reachable. The leak is on the PDP, and the mockup rebuilds that PDP with visual swatches."
    ],
    "sections": [
      {
        "h": "Why this is a good lead",
        "blocks": [
          {
            "p": "Tactipup hand-embroiders tactical dog collars and leashes to order in Largo, Florida. The bestseller 1.5in collar alone has 4,157 reviews and the brand runs a 1-2 week made-to-order backlog.",
            "why": "A clean, specific, visible PDP leak (visual product sold via text dropdowns), a reachable family owner, and a function-over-form category - exactly the profile that converts better after a swatch-based rebuild."
          }
        ]
      }
    ],
    "sources": "<a href='https://www.tactipup.com/products/personalized-1-5-basic-tactical-dog-collar' target='_blank' rel='noopener'>Bestseller collar PDP</a> &middot; <a href='https://www.tactipup.com/pages/about-us' target='_blank' rel='noopener'>About / owner</a> &middot; <a href='https://www.zoominfo.com/p/Paul-Haynes/-1663818537' target='_blank' rel='noopener'>Owner (ZoomInfo)</a>",
    "prospect": {
      "url": "tactipup.com",
      "vertical": "pet",
      "shopifyConfirmed": true,
      "shopifySignal": "products.json store 1717/9379, vendor Tactipup; bestseller is a single Default-Title variant with options bolted on via the Bold Product Options app",
      "revenue": {
        "estimate": "Est. low-to-mid seven figures/yr (six-figures/mo, inferred - no public figure)",
        "confidence": "low",
        "signals": [
          {
            "method": "Operational scale",
            "detail": "Bestseller 1.5in collar has 4,157 reviews (Extreme collar +1,694); made-to-order USA workshop with a 1-2 week backlog; nine years operating (since 2017); featured in press",
            "source": "Live site / press"
          },
          {
            "method": "Catalog + tenure",
            "detail": "Broad personalized catalog (collars, leashes, harnesses, patches), perpetual demand, established 2017",
            "source": "Site + products.json"
          }
        ]
      },
      "contacts": [
        {
          "name": "Paul Haynes",
          "role": "Owner",
          "linkedin": "https://www.tactipup.com/pages/about-us",
          "email": "paul@tactipup.com",
          "emailStatus": "pattern-guess",
          "publiclyActive": true,
          "notes": "Law-enforcement family-owned business, Clearwater/Largo FL. ZoomInfo lists the owner email beginning with p (consistent with paul@). Reachable small-business owner."
        }
      ],
      "lighthouse": {
        "mobile": null,
        "desktop": null
      },
      "weaknesses": [
        {
          "issue": "PDP leak: the bestseller collar is a visually-customized product (camo pattern, embroidery thread color, size) configured through five required plain text dropdowns via Bold Options (Camo Pattern/Color, Neck Size, Custom Text, Font Color, Add flag Patch) with no clickable swatches; the real colors exist only as a static Color Menu reference image in the gallery",
          "area": "pdp",
          "severity": "high",
          "why": "Buyers cannot see the camo and thread combo they are building and must cross-reference a gallery image against dropdown text - high friction on a product sold entirely on its look."
        },
        {
          "issue": "Add-to-Cart is buried below all five stacked required option fields; nothing actionable sits above the fold on the buy side",
          "area": "pdp",
          "severity": "med",
          "why": "Every extra required step before a visible Add-to-Cart sheds conversions, especially on mobile."
        },
        {
          "issue": "Perpetual Sale: every product shows a struck compare-at price (e.g. $34.95 / $39.95) sitewide and on the homepage",
          "area": "home",
          "severity": "med",
          "why": "Always-on fake discounting trains buyers to discount the brand and weakens real promotions."
        },
        {
          "issue": "Slow-loading hero: the homepage hero renders as a blank black void for roughly three seconds before the photo appears (verified - it does load)",
          "area": "home",
          "severity": "med",
          "why": "Cold traffic can hit an empty above-the-fold for several seconds, a real LCP and bounce risk (confirm with PageSpeed)."
        }
      ],
      "demo": {
        "primaryPage": "pdp",
        "rationale": "Rebuild the bestseller collar PDP so a visually-customized product is configured visually: swatch tiles for camo, thread-color dots, size buttons, and a clear preview above one Add-to-Cart.",
        "mechanics": [
          "Replace the camo/color text dropdown with clickable swatch tiles that update the preview",
          "Replace the font-color dropdown with thread-color dots",
          "Turn neck size into buttons with the inch ranges inline",
          "Surface one clear Add-to-Cart with the live price directly under the selectors"
        ],
        "bestseller": "Personalized 1.5in Basic Tactical Dog Collar - tactipup.com/products/personalized-1-5-basic-tactical-dog-collar"
      },
      "score": {
        "revenue": 2,
        "weakness": 4,
        "accessibility": 4,
        "vertical": 4,
        "total": 14
      },
      "priority": "solid",
      "scrutiny": "Passes as a solid and is the cleanest leak of the day. A $35 collar whose entire appeal is the look is sold through five plain text dropdowns with no visual swatches (Bold Options bolted onto a single-variant product), and the Add-to-Cart sits below all of them. That is specific, visible, and exactly what a swatch-based PDP rebuild fixes - the leak-matched mockup is built. Revenue is the soft spot (no public figure, only 4,157+ reviews and a made-to-order backlog as scale signals), so treat six-figures/mo as likely but unconfirmed. Owner is reachable. Worth an hour.",
      "outreach": [
        {
          "channel": "email",
          "style": "warm-human",
          "subject": "building a collar on your site",
          "body": "Hey Paul, went to build a collar for my dog on your site and realized I was picking the camo and the thread color from plain dropdown menus, so I could not actually see the combo I was making until I cross-referenced your color chart image. The collars themselves look awesome. I rebuilt your bestseller page with clickable camo and color swatches plus a live preview so people can see what they are buying: [demo link]. No agenda, just thought you would want to see it. [Your name]"
        },
        {
          "channel": "email",
          "style": "teardown",
          "subject": "your collar page is sold on looks but picked by dropdowns",
          "body": "Hi Paul, your [bestseller] is a visual product but it is configured through five text dropdowns (camo, size, text, font color, flag) with the real colors hidden in a gallery image, and the Add to Cart sits below all five. For a $35 collar people buy for the look, that is friction. I rebuilt the PDP with visual camo and thread swatches, size buttons, a preview, and one clear Add to Cart. Quick before/after, no charge: [demo link]. Worth a look? [Your name]"
        },
        {
          "channel": "email",
          "style": "demo-first",
          "subject": "rebuilt your bestseller collar page (free)",
          "body": "Hi Paul, I rebuilt your [bestseller] page as a free demo: the camo and thread-color dropdowns are now clickable swatches, neck size is buttons, and there is a live preview above one clear Add to Cart. Before/after here: [demo link]. If it is useful, happy to walk through it on a quick call. [Your name]"
        }
      ],
      "operatorTodo": [
        "Verify paul@tactipup.com before sending - pattern guess; ZoomInfo shows owner email starts with p; Apollo match needs a paid plan.",
        "Confirm the swatch-vs-dropdown finding and the buried Add-to-Cart on mobile (browser mobile-emulation was unavailable this run).",
        "Run PageSpeed on the homepage (slow hero) and the collar PDP.",
        "Swap the mockup swatch stand-in colors for the real crops from their Color Menu image before sending."
      ],
      "caveats": "Revenue is a LOW-confidence inference (no third-party dollar figure; 4,157+ reviews, nine years operating, and a made-to-order backlog as scale signals), not filed accounts. Email paul@tactipup.com is a PATTERN GUESS, not verified (Apollo people-match unavailable on the free plan; ZoomInfo shows the owner email begins with p). Mobile not verified live (browser mobile-emulation unavailable this run). Lighthouse not yet run. The PDP leak was observed live on 2026-06-12. Mockup is a DRAFT - swatch colors are brand-color stand-ins pending the real Color Menu crops.",
      "mockupLive": "/mockups/2026-06-12-tactipup/basic-tactical-collar-fixed.html",
      "mockupStatus": "draft"
    }
  },
  {
    "id": "2026-06-12-pup-labs",
    "date": "2026-06-12",
    "title": "Pup Labs",
    "categories": [
      "pet"
    ],
    "summary": [
      "<b>~$2-3M vet-formulated dog supplement brand (dental, joint, gut, ear).</b> Aggressively optimized funnel, but with one objective, pointable leak: the SAME product (ProDenta) shows 2,946 reviews on the homepage card but only 99 on its own PDP, and the hero claims 25,000 reviews while the trust bar says 15,000+.",
      "Founder Peter Tzemis is a public DTC operator. The fix is a data/merchandising cleanup, not a theme overhaul - so we lead with the review-count contradiction and keep expectations honest."
    ],
    "sections": [
      {
        "h": "Why this is a good lead",
        "blocks": [
          {
            "p": "Pup Labs sells vet-formulated dog supplements DTC on Shopify (ProDenta, Freedom Joint Drops, K9 Belly Bliss, K9 EarClear), reportedly $2-3M as of mid-2024, with an aggressive subscribe-and-save funnel.",
            "why": "A real, screenshot-able social-proof contradiction across the funnel on an otherwise high-converting store, plus a reachable founder - a credibility fix worth an hour, framed honestly rather than as a broken-site rebuild."
          }
        ]
      }
    ],
    "sources": "<a href='https://puplabs.com/products/prodenta' target='_blank' rel='noopener'>ProDenta PDP</a> &middot; <a href='https://puplabs.com/' target='_blank' rel='noopener'>Homepage (review counts)</a> &middot; <a href='https://businessabc.net/direct-to-consumer-disruption-in-the-pet-industry-lessons-from-this-dog-supplement-brand' target='_blank' rel='noopener'>Revenue mention</a>",
    "prospect": {
      "url": "puplabs.com",
      "vertical": "pet",
      "shopifyConfirmed": true,
      "shopifySignal": "products.json store 0627/1234/8910, vendor puplabsco; assets on cdn.shopify.com",
      "revenue": {
        "estimate": "~$2-3M/yr (reported mid-2024)",
        "confidence": "medium",
        "signals": [
          {
            "method": "Reported revenue",
            "detail": "Reported annual revenue of $2-3M as of mid-2024 (trade write-up)",
            "source": "businessabc / trade press"
          },
          {
            "method": "Operational scale",
            "detail": "Claims 100,000+ customers and 25,000 reviews; broad vet-formulated catalog; named lead vet consultant; founder is a known DTC operator",
            "source": "Live site"
          }
        ]
      },
      "contacts": [
        {
          "name": "Peter Tzemis",
          "role": "Founder",
          "linkedin": "https://www.linkedin.com/in/petertzemis",
          "email": "peter@puplabs.com",
          "emailStatus": "pattern-guess",
          "publiclyActive": true,
          "notes": "Founder and biologist; a well-known direct-response/DTC marketer, publicly active. Dr. Randy Aronson is the named lead vet consultant (not the decision-maker)."
        }
      ],
      "lighthouse": {
        "mobile": null,
        "desktop": null
      },
      "weaknesses": [
        {
          "issue": "Social-proof contradiction: the ProDenta product shows 2,946 reviews on the homepage bestseller card but only 99 reviews on its own PDP; the homepage hero claims 25,000 reviews sitewide while the trust bar says 15,000+",
          "area": "pdp",
          "severity": "high",
          "why": "A shopper who notices the same product flip from ~2,900 to 99 reviews at the buy box loses trust; inflated or contradictory social proof reads as fake and depresses conversion on an otherwise high-intent page."
        },
        {
          "issue": "Manufactured today-only urgency: the PDP frames a standing subscribe discount as Todays Price plus an Order By Jun 12th deadline that is always the current day",
          "area": "pdp",
          "severity": "med",
          "why": "Date-stamped fake urgency erodes credibility with returning visitors who keep seeing the same today deadline."
        },
        {
          "issue": "Promo-overlay hero image: the ProDenta hero is a marketing graphic with 20% OFF Subscription, Free dog treats, and a FREE GIFT badge baked into the product image rather than a clean product render",
          "area": "pdp",
          "severity": "med",
          "why": "Baked-in promo graphics date quickly, cannot be A/B tested, and look busy and templated at the decision point."
        },
        {
          "issue": "Lowest-risk entry option out of stock: on Tummy Essentials the single 1 Pouch is sold out, pushing the entry price to a $100 two-pack",
          "area": "pdp",
          "severity": "med",
          "why": "Removing the low-risk trial size raises the first-purchase barrier in a trust-driven category."
        }
      ],
      "demo": {
        "primaryPage": "pdp",
        "rationale": "Rebuild the ProDenta PDP with one honest review number from a single source of truth, a clean product render, and a standing (not fake-dated) offer.",
        "mechanics": [
          "Unify the review count from one source so the homepage card, hero, and PDP all show the same honest number",
          "Replace the promo-overlay hero with a clean product render and move the offer into the buy box",
          "Drop the date-stamped fake urgency for a standing, honest subscribe offer",
          "Restore a low-risk single-unit entry option or a clear trial"
        ],
        "bestseller": "ProDenta Dog Dental Powder - puplabs.com/products/prodenta"
      },
      "score": {
        "revenue": 3,
        "weakness": 3,
        "accessibility": 4,
        "vertical": 4,
        "total": 14
      },
      "priority": "solid",
      "scrutiny": "Passes as a solid, with eyes open. Pup Labs is an aggressively-optimized CRO funnel, so this is NOT a weak-theme rebuild - the honest, pointable leak is a social-proof contradiction (ProDenta shows ~2,946 reviews on the homepage but 99 on its PDP; hero says 25,000, trust bar says 15,000+). That objective inconsistency is a real trust-tax at the buy box, but it is a data/merchandising fix more than a theme overhaul - lead with the review-count contradiction, keep expectations honest, and do not oversell a broken site it is not. Founder is reachable.",
      "outreach": [
        {
          "channel": "email",
          "style": "warm-human",
          "subject": "quick thing on your ProDenta page",
          "body": "Hi Peter, big respect for the funnel you have built at Pup Labs. One thing jumped out: your homepage card says ProDenta has about 2,946 reviews, but the ProDenta page itself shows 99, and the hero says 25,000 reviews while the badge strip says 15,000-plus. Sharp buyers notice that and it dents trust right at the buy box. I mocked up a cleaned-up version with one honest number throughout: [demo link]. No agenda, just thought you would want to know. [Your name]"
        },
        {
          "channel": "email",
          "style": "teardown",
          "subject": "your review counts contradict each other",
          "body": "Hi Peter, on ProDenta your numbers disagree across the funnel: 2,946 reviews on the homepage card, 99 on the PDP, 25,000 in the hero, 15,000-plus in the trust bar. On a trust-driven supplement that contradiction costs conversions. I rebuilt the PDP pulling one honest review number from a single source, with a clean product render and a standing offer instead of the always-today deadline. Quick before/after: [demo link]. Worth a look? [Your name]"
        },
        {
          "channel": "email",
          "style": "demo-first",
          "subject": "tightened up your ProDenta page (free)",
          "body": "Hi Peter, I rebuilt your ProDenta page as a free demo: one consistent honest review count, a clean product render instead of the promo-overlay image, and a standing subscribe offer instead of the always-today deadline. Before/after here: [demo link]. If it is useful, happy to walk through it on a quick call. [Your name]"
        }
      ],
      "operatorTodo": [
        "Verify peter@puplabs.com before sending - pattern guess; Apollo match needs a paid plan.",
        "Confirm the ProDenta review-count discrepancy is still live and not a widget-loading artifact - screenshot the homepage card and the PDP side by side.",
        "Run PageSpeed on the ProDenta PDP; pull a clean ProDenta product render for any demo.",
        "MOCKUP SKIPPED - flagged for manual generation: the leak is a cross-page data inconsistency (awkward to demo as a single-page rebuild) and the only ProDenta hero on their CDN is a promo-overlay image the recipe says to avoid. Generate by hand with a clean render."
      ],
      "caveats": "Revenue ~$2-3M is a reported mid-2024 third-party figure, not filed accounts (US brand). Email peter@puplabs.com is a PATTERN GUESS, not verified (Apollo people-match unavailable on the free plan). Mobile not verified live (browser mobile-emulation unavailable this run). Lighthouse not yet run. The review-count numbers were read live on 2026-06-12; confirm they are not a review-widget loading artifact before sending. No mockup generated - flagged for manual generation (see operatorTodo)."
    }
  },
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
      "caveats": "Revenue is a LOW-confidence inference from operational-scale signals (own organic cordyceps farm, national media, multi-format catalog, eight years operating); there is no third-party dollar figure, so six-figures/mo is likely but UNCONFIRMED - verify before investing. Not filed accounts (US brand). Email alex@mushroomrevival.com is a PATTERN GUESS, not verified (Apollo people-match unavailable on the free plan). Lighthouse not yet run. Weaknesses observed live on the Daily 10 PDP on 2026-06-10.",
      "mockupLive": "/mockups/mushroom-revival/daily-10-fixed.html",
      "mockupStatus": "draft"
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
      "caveats": "Revenue ~$5-6M is a third-party aggregator estimate (Growjo / ZoomInfo / PitchBook), not filed accounts (US brand). Email afif@biohmhealth.com is a PATTERN GUESS, not verified (Apollo people-match unavailable on the free plan). Lighthouse not yet run. The reviews-absence weakness should be confirmed live (a JS widget may load). Observed 2026-06-10.",
      "mockupLive": "/mockups/biohm-health/probiotic-supplement-fixed.html",
      "mockupStatus": "draft"
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
      "mockupLive": "/mockups/truwild/wild-greens-fixed.html",
      "mockupStatus": "ready"
    }
  }
];
