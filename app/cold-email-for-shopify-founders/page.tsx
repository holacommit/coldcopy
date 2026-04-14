import type { Metadata } from "next"
import { VerticalLanding, type VerticalContent } from "@/components/VerticalLanding"

export const metadata: Metadata = {
  title: "Best Cold Email Tool for Shopify Founders — ColdCopy",
  description:
    "ColdCopy is the cold email tool built for Shopify founders. Paste any buyer, retailer, or partner URL — get a personalized 5-email outreach sequence in 8 seconds. $19/month. One free sequence, no signup required.",
  alternates: { canonical: "https://coldcopy.pro/cold-email-for-shopify-founders" },
  openGraph: {
    title: "Best Cold Email Tool for Shopify Founders — ColdCopy",
    description:
      "Paste any buyer or retailer URL. Get a personalized 5-email cold sequence in 8 seconds. Built for Shopify founders doing their own outreach.",
    url: "https://coldcopy.pro/cold-email-for-shopify-founders",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630 }],
  },
}

const content: VerticalContent = {
  vertical: "Shopify",
  verticalSlug: "shopify-founders",
  heroTagline: "The cold email tool built for Shopify founders",
  heroHeadline: "The cold email tool Shopify founders use to pitch buyers, retailers, and partners",
  heroDescription:
    "You built your Shopify store. Now you need to get your products into boutiques, retail stores, and wholesale accounts. ColdCopy is the cold email tool built for Shopify founders doing their own outreach — paste any buyer or retailer URL, get a personalized 5-email sequence in 8 seconds. No copywriting skills needed. No Shopify integration required.",
  painSectionTitle: "Why Shopify founders struggle to scale cold outreach",

  painPoints: [
    {
      title: "Every retail buyer already has a full shelf",
      description:
        "Independent boutiques, specialty stores, and wholesale buyers work with 5-10 brands per category. The ones that get their Shopify product into retail stores send pitches that reference the buyer's actual product mix, price positioning, and gaps — not a generic deck. ColdCopy reads each prospect's site so your wholesale outreach email sounds like it was written specifically for them.",
    },
    {
      title: "Buyers know a generic email in three seconds",
      description:
        "Retail buyers and wholesale managers scan cold emails fast. They're looking for one thing: did you actually look at my store? An email that references their current brands, their price range, and their category gap gets a reply. \"We make great products and would love to partner\" gets deleted.",
      stat: "Personalized cold emails get 2-3x higher reply rates than generic templates",
      statSource: "Woodpecker, 2024 Cold Email Benchmarks",
    },
    {
      title: "Personalized outreach isn't just more polite — it's measurably more effective",
      description:
        "When you pitch a boutique buyer with an email that references their store specifically — the brands they carry, the price tier they serve, the category gap on their floor — you're not just being thoughtful. You're removing the buyer's biggest objection: \"this person doesn't know my business.\" That's why personalized wholesale outreach emails consistently outperform templates across every industry. The research is the hard part. ColdCopy does it automatically.",
      stat: "Cold emails with personalized first lines see 30% higher open rates and 2-3x more replies",
      statSource: "Backlinko, 2024 Cold Email Study",
    },
    {
      title: "You can research one prospect in 30 minutes — or all of them in seconds",
      description:
        "The best way to pitch a boutique buyer is to know their store before you write a single word: what brands do they carry, what's missing from their floor, what's their price point. That's 30 minutes per prospect. To pitch product to retail stores at scale, you need to cut that to zero. ColdCopy reads any retailer's website in 8 seconds and writes the sequence for you.",
    },
  ],

  beforeEmail: {
    subject: "Partnership opportunity — [Brand Name]",
    body: "Hi Sarah,\n\nI came across your store and think there's a great fit with our product line. We're a Shopify brand making [product] and we'd love to explore a wholesale partnership.\n\nWe offer competitive margins and fast shipping. Let me know if you'd be open to a call?\n\nThanks",
  },
  afterEmail: {
    subject: "You carry 3 candle brands — none rotate seasonally",
    body: "Sarah, I noticed you stock 3 soy candle brands but none of them swap scents by season. Our fall/winter collection sold out at Gather & Co two blocks from you — 40 units in 11 days.\n\nLooking for one more stockist in your neighborhood before October. Want me to send samples?",
  },

  exampleSequence: [
    { subject: "You carry 3 candle brands — none rotate seasonally", preview: "References the buyer's current brand mix and identifies the missing seasonal rotation gap" },
    { subject: "What [nearby stockist] added last quarter", preview: "Social proof from a comparable store already carrying the product" },
    { subject: "Here's what 40 units/month looks like on your floor", preview: "Specific revenue projection based on their footprint and traffic" },
    { subject: "Samples — no commitment, delivered this week", preview: "Low-friction next step with zero pressure to buy" },
    { subject: "Last note — no hard feelings", preview: "Clean breakup email with an open door for future timing" },
  ],

  steps: [
    {
      title: "Paste the URL of the buyer or retailer you want to pitch",
      description:
        "Drop any boutique, specialty store, wholesale buyer, or retailer page into ColdCopy. It reads their current brands, product mix, and customer positioning — everything you'd spend 30 minutes researching manually.",
    },
    {
      title: "Describe your Shopify store and what you're offering",
      description:
        "Tell ColdCopy what you make and what you're offering: wholesale terms, sample drop-off, revenue share — whatever your pitch is.",
    },
    {
      title: "Get 5 personalized emails in 8 seconds",
      description:
        "ColdCopy writes a full sequence referencing the buyer's actual brand gaps and category positioning. Copy/paste into Gmail or export as CSV for Instantly or Lemlist.",
    },
  ],

  faqs: [
    {
      question: "Is ColdCopy the best cold email tool for Shopify founders?",
      answer:
        "ColdCopy is built specifically for Shopify founders who need to pitch buyers, retailers, wholesale partners, influencers, and press contacts. Unlike general cold email platforms, ColdCopy reads each prospect's website and generates a personalized 5-email sequence in 8 seconds — no copywriting skills or Shopify integration required. At $19/month with one free sequence and no signup needed, it's designed to be affordable for Shopify stores at any stage.",
    },
    {
      question: "How is ColdCopy different from Klaviyo or Mailchimp for Shopify?",
      answer:
        "Klaviyo and Mailchimp are email marketing platforms for sending newsletters and automated flows to your existing customers. ColdCopy writes cold outreach to people who've never heard of you — retail buyers, wholesale accounts, influencers, and potential partners. It's a writing tool, not a sending tool. Once ColdCopy generates your sequence, you send it from Gmail, Instantly, Lemlist, or any platform you already use.",
    },
    {
      question: "Does ColdCopy integrate with Shopify?",
      answer:
        "ColdCopy doesn't require a Shopify integration. It works by reading the public website of whoever you want to pitch — a retailer's homepage, a buyer's store, or an influencer's site. No app installation, no API key, no Shopify setup required. Paste a prospect URL, describe your offer, and get 5 personalized cold emails in 8 seconds.",
    },
    {
      question: "Is ColdCopy affordable for Shopify startups?",
      answer:
        "Yes. ColdCopy costs $19/month for unlimited sequences with no long-term commitment. Your first sequence is completely free — no signup, no credit card required. For early-stage Shopify founders doing their own outreach, it replaces hours of manual research and copywriting every week.",
    },
    {
      question: "What can I use ColdCopy for as a Shopify store owner?",
      answer:
        "Shopify store owners use ColdCopy for wholesale outreach to boutiques and retailers, pitching influencers and content creators for collaborations, reaching press and media contacts, approaching corporate buyers for bulk orders, and building partnerships with complementary brands. Paste any prospect's URL and ColdCopy writes a sequence tailored to their specific site.",
    },
    {
      question: "Is ColdCopy worth it for Shopify founders?",
      answer:
        "For Shopify founders doing their own wholesale and retail outreach, ColdCopy replaces 30-45 minutes of manual store research per prospect with an 8-second automated read. Personalized cold emails that reference a buyer's actual product mix and gaps get 2-3x higher reply rates than generic templates (Woodpecker, 2024). At $19/month with unlimited sequences, it pays for itself after the first meeting booked. The free trial — one complete 5-email sequence with no signup required — lets you judge the quality before spending anything.",
    },
    {
      question: "What is the best way to pitch a boutique buyer?",
      answer:
        "The best way to pitch a boutique buyer is to reference what they already carry and identify what's missing. Research their current brand mix, price points, and category gaps before writing anything. Then lead with specificity: name a brand they stock, point to a gap your product fills, and make the next step low-friction (samples, a nearby stockist reference, a sell-through number). Keep it under 5 sentences. ColdCopy automates the research step — it reads the boutique's site and writes a wholesale outreach email sequence built around their specific store.",
    },
    {
      question: "How do I get my Shopify product into boutiques and retail stores?",
      answer:
        "Getting a Shopify product into boutiques requires three things: identifying the right retail buyers, personalizing your pitch to their specific store, and following up consistently with a structured sequence. Most Shopify founders skip personalization because researching each store's brand mix takes 30-45 minutes per prospect. ColdCopy automates that research — paste any retailer's URL, describe your offer, and get a personalized wholesale outreach email sequence in 8 seconds. That makes it practical to pitch 20-30 retail stores per week instead of 3-4.",
    },
  ],
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "HowTo",
              name: "How to write cold emails for retail buyers and wholesale partners as a Shopify founder",
              description:
                "Generate personalized cold email sequences for retail buyers, wholesale partners, and influencers in 8 seconds using ColdCopy.",
              step: content.steps.map((s, i) => ({
                "@type": "HowToStep",
                position: i + 1,
                name: s.title,
                text: s.description,
              })),
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: content.faqs.map((f) => ({
                "@type": "Question",
                name: f.question,
                acceptedAnswer: { "@type": "Answer", text: f.answer },
              })),
            },
          ]),
        }}
      />
      <VerticalLanding content={content} />
    </>
  )
}
