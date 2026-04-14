import type { Metadata } from "next"
import { VerticalLanding, type VerticalContent } from "@/components/VerticalLanding"

export const metadata: Metadata = {
  title: "Cold Email Sequences for Shopify Stores — ColdCopy",
  description:
    "Generate personalized cold email sequences for Shopify stores in 8 seconds. Paste a prospect's URL, get 5 emails with real context from their store. Built for Shopify founders doing $20k-200k/month.",
  alternates: { canonical: "https://coldcopy.pro/cold-email-for-shopify" },
  openGraph: {
    title: "Cold Email Sequences for Shopify Stores — ColdCopy",
    description:
      "Paste a Shopify store URL. Get a personalized 5-email cold sequence in 8 seconds. No copywriting skills needed.",
    url: "https://coldcopy.pro/cold-email-for-shopify",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630 }],
  },
}

const content: VerticalContent = {
  vertical: "Shopify",
  verticalSlug: "shopify",
  heroTagline: "For everyone selling to Shopify stores",
  heroHeadline: "Get your product in front of Shopify stores — without writing every pitch from scratch",
  heroDescription:
    "You sell to Shopify merchants — apps, services, wholesale, or products. The hard part: every good pitch needs real research on their store. ColdCopy reads each store's site and writes a personalized 5-email sequence in 8 seconds. No research hours. No generic templates.",
  painSectionTitle: "Why pitching Shopify stores is harder than it looks",

  painPoints: [
    {
      title: "Researching every store eats your day",
      description:
        "Before you write a single word, you need to know: what they sell, how they price it, what's missing from their store. For one prospect, that's 20-30 minutes of research. For 20 prospects, it's a week of work before you've sent anything.",
    },
    {
      title: "Shopify owners can tell when you didn't look",
      description:
        "Store owners get dozens of pitches a week. The ones deleted in 3 seconds: \"I help ecommerce brands grow.\" The ones that get replies: emails that reference their specific products, their pricing, their gaps — proof you spent time on their store specifically.",
      stat: "Personalized cold emails get 2-3x higher reply rates than generic templates",
      statSource: "Woodpecker, 2024 Cold Email Benchmarks",
    },
    {
      title: "Fiverr won't research 50 stores for you",
      description:
        "A copywriter on Fiverr can write one good sequence. They can't research 50 different Shopify stores and personalize each one. ColdCopy reads each store automatically and generates a fresh, specific sequence in 8 seconds — for $19/month unlimited.",
    },
  ],

  beforeEmail: {
    subject: "Partnership opportunity",
    body: "Hi there,\n\nI came across your Shopify store and I think there's a great opportunity for us to work together.\n\nWe help ecommerce brands increase their revenue through strategic email marketing. Would you be open to a quick call?\n\nBest regards",
  },
  afterEmail: {
    subject: "Your cart recovery is leaving money on the table",
    body: "Hey Sarah — I was looking at your store and noticed you're running a 15% discount on first orders but there's no recovery sequence for abandoned carts.\n\nMost Shopify stores at your price point ($45-120 per item) recover 12-18% of abandoned carts with a 3-email sequence.\n\nI put together a recovery framework based on your specific product mix. Want me to send it over?",
  },

  exampleSequence: [
    { subject: "Your cart recovery gap", preview: "Identifies missing post-checkout flow based on store analysis" },
    { subject: "What [similar brand] did differently", preview: "Social proof from a comparable Shopify store in the same price range" },
    { subject: "Quick framework for your product mix", preview: "Offers a specific, actionable resource tailored to their catalog" },
    { subject: "The 30-day follow-up most stores skip", preview: "Post-purchase sequence opportunity based on their product cycle" },
    { subject: "Last note — no hard feelings", preview: "Low-pressure breakup email with a clear door-open close" },
  ],

  steps: [
    {
      title: "Paste the URL of the store you want to pitch",
      description:
        "Drop any Shopify store URL into ColdCopy. It reads their products, pricing, collections, and brand positioning — everything you'd spend 30 minutes researching manually.",
    },
    {
      title: "Describe what you sell to store owners",
      description:
        "Tell ColdCopy your offer. \"I sell wholesale candles to boutique retailers\" or \"I build email flows for Shopify stores\" — whatever you're pitching.",
    },
    {
      title: "Get 5 personalized emails in 8 seconds",
      description:
        "ColdCopy writes a complete sequence referencing the store's actual products, gaps, and positioning. Export as CSV for Instantly or Lemlist, or copy/paste into Gmail.",
    },
  ],

  faqs: [
    {
      question: "Does ColdCopy work with any Shopify store URL?",
      answer:
        "Yes. ColdCopy reads any publicly accessible Shopify store — including custom domains. It extracts product data, pricing, collections, and brand messaging to personalize the sequence.",
    },
    {
      question: "How is this different from Shopify Email or Klaviyo?",
      answer:
        "Shopify Email and Klaviyo are for sending emails to YOUR customers. ColdCopy writes cold outreach emails to prospects who've never heard of you — for partnerships, wholesale, B2B leads, or client acquisition.",
    },
    {
      question: "Can I use ColdCopy for Shopify wholesale outreach?",
      answer:
        "Absolutely. Paste a retailer's website URL, describe your wholesale offer, and ColdCopy generates a sequence that references the retailer's specific product mix and positioning.",
    },
    {
      question: "What if the Shopify store has a password-protected page?",
      answer:
        "ColdCopy can only read publicly accessible pages. If a store's main pages are public (which most are), it will extract enough context. Password-protected development stores won't work.",
    },
    {
      question: "How many sequences can I generate per month?",
      answer:
        "Unlimited on the $19/month plan. Your first sequence is free with no signup and no credit card required.",
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
              name: "How to write cold emails for Shopify stores",
              description:
                "Generate personalized cold email sequences for any Shopify store in 8 seconds using ColdCopy.",
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
