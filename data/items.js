/* Shopify Prospector - prospect data (SOURCE OF TRUTH).
   The site renders every prospect from here. Add a prospect = PREPEND one object
   (newest first). Never overwrite older prospects. Keep this valid JS.

   id        'YYYY-MM-DD-brand-slug' (globally unique)
   date      'YYYY-MM-DD' (newest first)
   title     Brand name
   categories array of >=1 vertical slug from scripts/taxonomy.js
   summary   array of HTML strings (the 'why this is a good lead in 20s')
   sections  array of section objects
   prospect  structured record - gate-enforced invariants: >=2 revenue signals, >=3
             weaknesses, >=1 named contact, demo with 3-5 mechanics, score that
             sums and matches its priority band, >=2 outreach drafts, a caveats line. */
window.SITE_ITEMS = [

  {
    id: "2026-06-10-truwild",
    date: "2026-06-10",
    title: "TRUWILD",
    categories: ["supplements"],
    summary: [
      "<b>Outdoor-athlete supplement brand, founder-led and growing.</b> The bestseller Wild Greens PDP has live, demo-able bugs: a Subscribe &amp; Save price that renders as <b>$0.00/serving</b> and a mixed &pound;/$ currency display.",
      "Founder Zac Curhan is highly reachable (DTC/operator podcasts, active LinkedIn, publicly weighing investment) and the brand is in a scaling moment."
    ],
    sections: [
      {
        h: "Why this is a good lead",
        blocks: [
          { p: "TRUWILD sells whole-food supplements (Wild Greens, Hydrate, Motion, Adaptogens) to outdoor athletes across DTC, Amazon, Walmart.com and ~110 specialty retailers. Bootstrapped since 2017 and growing fast enough to be publicly weighing outside investment.",
            why: "The bestseller PDP has concrete, fixable conversion bugs (a broken subscribe price, mixed-currency display, a wrong-product section header), the founder is unusually accessible, and the timing (an active growth/scaling moment) is right." }
        ]
      }
    ],
    sources: "<a href='https://truwild.com/products/wild-greens' target='_blank' rel='noopener'>Wild Greens PDP</a> &middot; <a href='https://www.foodnavigator-usa.com/Article/2025/10/03/rapid-growth-and-supply-chain-hurdles-prompt-the-outdoor-focused-brand-to-consider-new-strategiesand-possibly-investors/' target='_blank' rel='noopener'>FoodNavigator, Oct 2025</a> &middot; <a href='https://www.crunchbase.com/organization/truwild' target='_blank' rel='noopener'>Crunchbase</a>",
    prospect: {
      url: "truwild.com",
      vertical: "supplements",
      shopifyConfirmed: true,
      shopifySignal: "Live products.json returns a full Shopify catalog; storefront assets served from cdn.shopify.com",
      revenue: {
        estimate: "~$2-6M/yr (DTC + Amazon/Walmart + ~110 retailers)",
        confidence: "low",
        signals: [
          { method: "Third-party revenue band", detail: "Crunchbase lists TRUWILD among San Diego companies at under $10M revenue", source: "Crunchbase" },
          { method: "Distribution + growth signal", detail: "Omni-channel (DTC, Amazon, Walmart.com, ~110 specialty retailers); FoodNavigator (Oct 2025) reports rapid growth and that the brand is weighing investors", source: "FoodNavigator-USA, Oct 2025" }
        ]
      },
      contacts: [
        { name: "Zac Curhan", role: "Co-Founder & CEO", linkedin: "https://www.linkedin.com/company/truwild",
          email: "zac@truwild.com", emailStatus: "pattern-guess", publiclyActive: true,
          notes: "Left the bottled-water industry to run TRUWILD full-time; appears on DTC/operator podcasts (re:COGs, Manufactured) and is active on LinkedIn. Co-founder Nate Cox leads sourcing/formulation." }
      ],
      lighthouse: { mobile: null, desktop: null },
      weaknesses: [
        { issue: "Subscribe & Save per-serving price renders as $0.00 per serving on the Wild Greens PDP", area: "pdp", severity: "high", why: "The highest-LTV action (subscription) on a daily consumable shows a broken/placeholder price, killing trust and subscribe conversion." },
        { issue: "Mixed-currency display: main price localizes to GBP (about 25.77 pounds) while per-serving costs are hardcoded in USD (about $0.98/serving)", area: "pdp", severity: "med", why: "Inconsistent currency at the decision point confuses buyers and erodes trust." },
        { issue: "Copy/template error: a benefits block on the Wild Greens page is headed for the wrong product (it still reads as the Hydrate section)", area: "pdp", severity: "med", why: "A visible wrong-product header signals low CRO attention and undermines credibility." },
        { issue: "Social proof (293 reviews, 4.8 stars) sits far below a very long PDP, not beside the buy box", area: "pdp", severity: "med", why: "Proof is not visible at the decision point, costing conversion." }
      ],
      demo: {
        primaryPage: "pdp",
        rationale: "Traffic goes to product PDPs, and the bestseller Wild Greens PDP is where the broken subscribe price and currency bugs live - rebuild where the buying decision happens.",
        mechanics: [
          "Fix the Subscribe & Save price so the real discounted per-serving cost shows (not $0.00), with the saving vs one-time",
          "Make currency consistent (localize everything including per-serving, or default US visitors to USD)",
          "Correct the wrong-product (Hydrate) benefits header to Wild Greens and tighten the above-the-fold value prop",
          "Pull the 4.8-star / 293-review social proof up beside the buy box",
          "Add a sticky add-to-cart on the long mobile PDP"
        ],
        bestseller: "Wild Greens - truwild.com/products/wild-greens"
      },
      score: { revenue: 3, weakness: 4, accessibility: 5, vertical: 4, total: 16 },
      priority: "top",
      scrutiny: "Passes the critic. The weaknesses are real, demonstrable bugs (a literal $0.00 subscribe price, mixed pound/dollar pricing, a wrong-product section header) on the bestseller PDP - money-leaking and trivial to demo, not nitpicks. Founder Zac Curhan is unusually reachable (podcasts, active LinkedIn, publicly weighing investment) and the brand is scaling, so timing is good. Revenue is the soft spot: only an under-$10M third-party band, so the six-figure/mo read is likely but not certain. Worth an hour to build the demo.",
      outreach: [
        { channel: "email", style: "warm-human",
          subject: "small thing on your Wild Greens page",
          body: "Hey Zac, fell down a bit of a rabbit hole on your site the other night (the outdoor-athlete angle is great) and ended up on the Wild Greens page. Really like what you've built. One tiny thing jumped out though: the Subscribe and Save line is showing $0.00 per serving, so it looks a little broken right where people decide to subscribe. Felt like an easy win, so I mocked up a cleaned-up version: [demo link]. No agenda, just thought you'd want to see it. Either way, keep it up. [Your name]" },
        { channel: "email", style: "teardown",
          subject: "your Wild Greens page",
          body: "Hi Zac, I was on your Wild Greens page and noticed a few things working against conversion: the Subscribe and Save price renders as $0.00 per serving, the prices mix pounds and dollars on the same page, and one benefits header still reads as the Hydrate section. I rebuilt the page with the subscribe price fixed, one consistent currency, the header corrected, and your 4.8-star reviews pulled up next to the buy button. Quick before/after, no charge: [demo link]. Worth a look? [Your name]" },
        { channel: "email", style: "demo-first",
          subject: "rebuilt your Wild Greens page (free)",
          body: "Hi Zac, I rebuilt your Wild Greens product page as a free demo: fixed the $0.00 subscribe price, made the currency consistent, corrected the wrong-product header, and moved reviews next to the buy box. Before/after here: [demo link]. If it is useful, happy to walk you through it on a quick call. [Your name]" }
      ],
      operatorTodo: [
        "Verify zac@truwild.com before sending (pattern guess; Apollo email match needs a paid plan, so confirm via LinkedIn/site or another tool).",
        "Re-check the Wild Greens PDP from a US IP to confirm the currency behavior and the $0.00 subscribe price (observed in a UK-localized session).",
        "Run PageSpeed Insights on the Wild Greens PDP (mobile + desktop).",
        "Pull truwild.com/products.json for exact Wild Greens variants to build the demo.",
        "Capture a navbar+hero screenshot (capture-screenshot.js/thum.io was network-blocked in the build sandbox)."
      ],
      caveats: "Revenue is a LOW-confidence estimate from a Crunchbase under-$10M band plus multi-channel distribution and press signals, not filed accounts (US brand, no Companies House); six-figure/mo is likely at the midpoint but not certain. Email zac@truwild.com is a PATTERN GUESS, not verified (Apollo people-match is unavailable on the current free plan). Lighthouse not yet run. Weaknesses were observed live on the Wild Greens PDP on 2026-06-10 in a UK-localized browser session, so the GBP currency display may differ for US visitors (the $0.00 subscribe price and the wrong-product header are not location-dependent)."
    }
  },

  {
    id: "2026-06-10-clean-simple-eats",
    date: "2026-06-10",
    title: "Clean Simple Eats",
    categories: ["supplements"],
    summary: [
      "<b>~$21.6M/yr protein &amp; nutrition brand, bootstrapped and founder-led.</b> Functional but dated theme with a clear money leak: bestseller flavors are sold out and the back-in-stock capture looks paused, so proven demand bounces with no waitlist.",
      "Strong revenue and reachable founders (Erika &amp; JJ Peterson); the highest-leverage fix is demand capture on sold-out hero SKUs."
    ],
    sections: [
      {
        h: "Why this is a good lead",
        blocks: [
          { p: "Clean Simple Eats sells protein powders, hydration and wellness products DTC plus retail and a branded CSE+ app. Bootstrapped from personal debt to an estimated eight figures, founded ~2014.",
            why: "Revenue clears six figures/mo comfortably, the founders are public and reachable, and there is a concrete, fixable win (capture demand on sold-out bestsellers) rather than only cosmetic theme gripes." }
        ]
      }
    ],
    sources: "<a href='https://cleansimpleeats.com/products/pink-burst-clear-protein-powder-packets' target='_blank' rel='noopener'>Clear Protein PDP (sold out)</a> &middot; <a href='https://growjo.com/company/Clean_Simple_Eats' target='_blank' rel='noopener'>Growjo revenue estimate</a> &middot; <a href='https://www.utahbusiness.com/entrepreneurship/2024/07/11/how-erika-peterson-co-founded-clean-simple-eats/' target='_blank' rel='noopener'>Utah Business, founder profile</a>",
    prospect: {
      url: "cleansimpleeats.com",
      vertical: "supplements",
      shopifyConfirmed: true,
      shopifySignal: "products.json returns a full Shopify catalog (store 0258/0384/9806); assets on cdn.shopify.com",
      revenue: {
        estimate: "~$21.6M/yr (estimate)",
        confidence: "medium",
        signals: [
          { method: "Third-party revenue estimate", detail: "Growjo / ZoomInfo-class aggregators put annual revenue at ~$21.6M", source: "Growjo / ZoomInfo" },
          { method: "Operational scale", detail: "Established ~2014, omni-channel (DTC + retail locations + a branded CSE+ subscription app), broad catalog with many bestseller SKUs", source: "Site + products.json" }
        ]
      },
      contacts: [
        { name: "Erika Peterson", role: "Co-Founder", linkedin: "https://www.linkedin.com/company/cleansimpleeats",
          email: "erika@cleansimpleeats.com", emailStatus: "pattern-guess", publiclyActive: true,
          notes: "Front-facing co-founder (Utah Business feature, podcasts). Co-founded with JJ Peterson; bootstrapped from personal debt to eight figures." }
      ],
      lighthouse: { mobile: null, desktop: null },
      weaknesses: [
        { issue: "Bestseller flavors are sold out (the PDP shows This flavor sold out fast) and back-in-stock capture appears paused (products.json shows bis-paused tags)", area: "pdp", severity: "high", why: "Proven demand on hero SKUs bounces with no waitlist/email capture, losing both sales and first-party data on a high-revenue consumable." },
        { issue: "Subscribe-and-save is not surfaced at the buy box on the consumable PDP (subscription exists per products.json tags but is not prominent above the fold)", area: "pdp", severity: "med", why: "Under-monetizes recurring revenue on daily-use products; subscription is the main LTV lever for supplements." },
        { issue: "Heavy distressed/grunge display type across headers reduces legibility and scannability, especially on mobile", area: "mobile", severity: "med", why: "Readability friction on the primary conversion path." },
        { issue: "Logo lockup renders the EATS wordmark inside a black block that reads as an unpolished/placeholder treatment", area: "home", severity: "low", why: "Minor first-impression/brand-polish issue at the top of every page." }
      ],
      demo: {
        primaryPage: "pdp",
        rationale: "A high-revenue consumables brand losing demand on sold-out hero SKUs; rebuild a bestseller PDP that captures the demand and surfaces subscribe.",
        mechanics: [
          "Add a back-in-stock email/SMS waitlist on sold-out hero flavors so demand is captured, not bounced",
          "Surface subscribe-and-save inline at the buy box with the per-order saving shown",
          "Tighten header typography for legibility, especially on mobile",
          "Pull the 527-review social proof up beside the buy box"
        ],
        bestseller: "Clear Protein Powder - cleansimpleeats.com/products/pink-burst-clear-protein-powder-packets (note: this flavor currently sold out)"
      },
      score: { revenue: 4, weakness: 3, accessibility: 3, vertical: 4, total: 14 },
      priority: "solid",
      scrutiny: "Passes, but as a solid not a top. Unlike a broken theme, CSE's site is functional, so the honest hook is one concrete money leak: bestseller flavors are sold out with back-in-stock capture paused, so proven demand bounces with no waitlist on a $20M+ consumables brand. That is a real, fixable win worth a demo, not a nitpick. The dated/grunge type and logo treatment are softer, more subjective points I am holding lightly. Founders are public but less overtly outreach-open than TruWild's. Revenue is the strongest part, weaknesses the weakest. Worth an hour, but lead with the back-in-stock leak, not theme aesthetics.",
      outreach: [
        { channel: "email", style: "warm-human",
          subject: "your sold-out flavors",
          body: "Hey Erika, I was poking around your site to grab a protein (the clear protein looks great) and a couple of the flavors I wanted were sold out, with no way to get a heads-up when they are back. I build Shopify pages for a living, so I could not help mocking up a version that grabs an email/text on sold-out flavors and pings people the moment they restock: [demo link]. No agenda, just thought you would want it. Love what you and JJ have built. [Your name]" },
        { channel: "email", style: "teardown",
          subject: "sold-out bestsellers are leaking demand",
          body: "Hi Erika, on your [bestseller] page the flavor was sold out and there was no back-in-stock signup, so that demand (and the email/text) just bounces. On a brand your size that adds up fast. I rebuilt the page with a back-in-stock waitlist, subscribe-and-save surfaced at the buy box, and reviews pulled up next to it. Quick before/after, no charge: [demo link]. Worth a look? [Your name]" },
        { channel: "email", style: "demo-first",
          subject: "rebuilt one of your protein pages (free)",
          body: "Hi Erika, I rebuilt one of your [bestseller] pages as a free demo: a back-in-stock waitlist on sold-out flavors, subscribe-and-save at the buy box, and reviews moved up next to it. Before/after here: [demo link]. If it is useful, happy to walk through it on a quick call. [Your name]" }
      ],
      operatorTodo: [
        "Verify erika@cleansimpleeats.com (and/or JJ Peterson) before sending - pattern guess; Apollo match needs a paid plan.",
        "Confirm the back-in-stock app status and whether sold-out heroes currently capture emails.",
        "Check subscribe-and-save prominence on a live protein PDP (mobile).",
        "Run PageSpeed Insights on a bestseller PDP (mobile + desktop).",
        "Capture a navbar+hero screenshot (capture-screenshot.js/thum.io was network-blocked in the build sandbox)."
      ],
      caveats: "Revenue ~$21.6M is a third-party aggregator estimate (Growjo / ZoomInfo-class), not filed accounts (US brand, no Companies House). Email erika@cleansimpleeats.com is a PATTERN GUESS, not verified (Apollo people-match unavailable on the current free plan). Lighthouse not yet run. The subscribe-prominence weakness is inferred from products.json plus the PDP view and should be eyeballed live. Observed 2026-06-10."
    }
  }

];
