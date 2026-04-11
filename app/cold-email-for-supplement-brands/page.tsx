import type { Metadata } from "next"
import { VerticalLanding, type VerticalContent } from "@/components/VerticalLanding"

export const metadata: Metadata = {
  title: "Cold Email Sequences for Supplement & Wellness Brands — ColdCopy",
  description:
    "Generate personalized cold email sequences for supplement and wellness brands in 8 seconds. Paste a prospect's URL, get 5 emails referencing their actual products and formulations.",
  alternates: { canonical: "https://coldcopy.pro/cold-email-for-supplement-brands" },
  openGraph: {
    title: "Cold Email Sequences for Supplement & Wellness Brands — ColdCopy",
    description:
      "Paste a supplement brand URL. Get a personalized 5-email cold sequence in 8 seconds.",
    url: "https://coldcopy.pro/cold-email-for-supplement-brands",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630 }],
  },
}

const content: VerticalContent = {
  vertical: "Supplement & Wellness",
  verticalSlug: "supplement-brands",
  heroTagline: "Cold email that gets replies",
  heroDescription:
    "Paste any supplement or wellness brand URL. ColdCopy reads their product line, ingredients, pricing, and subscription model — then writes a 5-email sequence that sounds like you spent 30 minutes on their site. Takes 8 seconds.",

  painPoints: [
    {
      title: "Supplement brands live and die by subscription LTV",
      description:
        "Most supplement DTC brands make their money on repeat orders. But convincing new retail partners, influencers, or B2B buyers to carry your product requires personalized outreach that shows you understand their catalog and customer base — not a spray-and-pray pitch.",
      stat: "Subscription supplement brands have 3-5x higher LTV than one-time purchase models",
      statSource: "Recharge, 2024 Subscription Commerce Report",
    },
    {
      title: "Compliance makes generic outreach risky",
      description:
        "Supplement brands can't afford to make vague health claims in cold emails. The best outreach focuses on business metrics — cart recovery rates, average order value, subscription uptake — not product efficacy. ColdCopy generates business-focused sequences, not health claims.",
    },
    {
      title: "The market is crowded — personalization is your edge",
      description:
        "There are 30,000+ supplement brands on Shopify alone. Retail buyers and influencers get pitched daily. The emails that get opened reference the prospect's specific formulations, price points, and positioning — not generic category pitches.",
    },
  ],

  beforeEmail: {
    subject: "Collaboration opportunity",
    body: "Hi,\n\nI represent a premium supplement brand and I think your audience would love our products.\n\nWe offer high-quality supplements with competitive wholesale margins. Would you be interested in learning more?\n\nLet me know if you'd like to set up a call.",
  },
  afterEmail: {
    subject: "Your magnesium line is missing a subscription hook",
    body: "Hey — I was browsing your store and noticed your magnesium glycinate ($38/bottle) is listed as a one-time purchase only.\n\nMost supplement brands at your price point see 40-60% subscription uptake when they offer a 15% subscribe-and-save option on daily-use SKUs.\n\nI put together a 3-step retention framework for your top 5 products based on typical consumption cycles. Want me to send it?",
  },

  exampleSequence: [
    { subject: "Your magnesium line — subscription gap", preview: "Identifies specific SKU and missing subscription option based on their product page" },
    { subject: "What [competitor brand] changed last quarter", preview: "References a similar supplement brand's subscription model shift" },
    { subject: "Retention framework for your top 5 SKUs", preview: "Offers a consumption-cycle-based retention plan specific to their catalog" },
    { subject: "Cart recovery for $38+ supplement orders", preview: "Price-point-specific abandonment strategy based on their AOV" },
    { subject: "Last note — keeping this short", preview: "Breakup email with a soft CTA and no pressure" },
  ],

  steps: [
    {
      title: "Paste a supplement brand URL",
      description:
        "Drop any supplement or wellness brand URL. ColdCopy reads their product lines, ingredients, pricing tiers, subscription options, and brand story.",
    },
    {
      title: "Describe your offer",
      description:
        "Tell ColdCopy what you're pitching: wholesale partnerships, email marketing services, influencer management, fulfillment — whatever your angle is.",
    },
    {
      title: "Get 5 emails in 8 seconds",
      description:
        "ColdCopy writes a full sequence referencing their actual products, price points, and business model. Export to Instantly, Lemlist, or copy/paste to Gmail.",
    },
  ],

  faqs: [
    {
      question: "Will ColdCopy make health claims in the emails?",
      answer:
        "No. ColdCopy generates business-focused outreach — revenue opportunities, cart recovery, subscription models, and partnership angles. It doesn't generate efficacy claims or medical statements about supplements.",
    },
    {
      question: "Can it reference specific product ingredients?",
      answer:
        "Yes. ColdCopy reads the product pages and can reference specific ingredients, formulations, and product names. It uses these as context for business angles, not health claims.",
    },
    {
      question: "Does it work for wholesale outreach to retailers?",
      answer:
        "Absolutely. Paste the retailer's website URL, describe your supplement line and wholesale terms, and ColdCopy generates a sequence that references the retailer's existing catalog and customer positioning.",
    },
    {
      question: "How does ColdCopy handle subscription-based supplement brands?",
      answer:
        "ColdCopy detects subscription options, pricing tiers, and product consumption cycles from the prospect's site. It uses this data to write emails that reference specific subscription gaps or opportunities.",
    },
    {
      question: "What's the cost?",
      answer:
        "One free sequence with no signup. Then $19/month for unlimited sequences. Cancel anytime.",
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
              name: "How to write cold emails for supplement brands",
              description:
                "Generate personalized cold email sequences for supplement and wellness brands in 8 seconds using ColdCopy.",
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
