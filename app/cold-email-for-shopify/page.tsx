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
  heroTagline: "Cold email that gets replies",
  heroDescription:
    "Paste any Shopify store URL. ColdCopy reads their products, pricing, and positioning — then writes a 5-email cold sequence with real context from their business. 8 seconds. No copywriting skills needed.",

  painPoints: [
    {
      title: "You're doing everything yourself",
      description:
        "Running a Shopify store at $20-200k/month means you're the CEO, marketer, customer support, and sales team. Writing personalized cold emails for wholesale leads, partnerships, or B2B clients takes 30-45 minutes per prospect. That's time you don't have.",
    },
    {
      title: "Generic outreach gets ignored",
      description:
        "\"I help ecommerce brands grow\" lands in the trash. Shopify store owners get dozens of these daily. The emails that get replies reference specific products, price points, or gaps in the prospect's store — things that prove you actually looked.",
      stat: "Personalized cold emails get 2-3x higher reply rates than generic templates",
      statSource: "Woodpecker, 2024 Cold Email Benchmarks",
    },
    {
      title: "Fiverr is slow and inconsistent",
      description:
        "A single cold email sequence on Fiverr costs $50-75 and takes 3-5 days. The writer doesn't know your niche, doesn't research the prospect's store, and delivers generic copy you still need to rewrite. ColdCopy does it in 8 seconds for $19/month unlimited.",
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
      title: "Paste a Shopify store URL",
      description:
        "Drop any Shopify store URL into ColdCopy. It reads their products, pricing, collections, brand positioning, and About page to understand the business.",
    },
    {
      title: "Describe your offer",
      description:
        "Tell ColdCopy what you sell and who you help. \"I help Shopify stores optimize their post-purchase email flows\" or \"We do wholesale for DTC brands.\"",
    },
    {
      title: "Get 5 emails in 8 seconds",
      description:
        "ColdCopy generates a complete 5-email sequence with subject lines, personalized body copy, wait days, and CTAs. Export as CSV for Instantly or Lemlist, or copy/paste into Gmail.",
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
