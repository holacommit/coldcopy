import type { Metadata } from "next"
import { VerticalLanding, type VerticalContent } from "@/components/VerticalLanding"

export const metadata: Metadata = {
  title: "Cold Email Generator for Ecommerce — ColdCopy",
  description:
    "Generate personalized cold email sequences for ecommerce and DTC brands in 8 seconds. Paste any store URL, get 5 emails with real business context. Built for founders doing their own outreach.",
  alternates: { canonical: "https://coldcopy.pro/cold-email-for-ecommerce" },
  openGraph: {
    title: "Cold Email Generator for Ecommerce — ColdCopy",
    description:
      "Paste any ecommerce store URL. Get a personalized 5-email cold sequence in 8 seconds.",
    url: "https://coldcopy.pro/cold-email-for-ecommerce",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630 }],
  },
}

const content: VerticalContent = {
  vertical: "Ecommerce",
  verticalSlug: "ecommerce",
  heroTagline: "Cold email that gets replies",
  heroDescription:
    "Paste any ecommerce store URL — Shopify, WooCommerce, BigCommerce, custom. ColdCopy reads their products, pricing, and positioning, then writes a 5-email cold sequence with real context. 8 seconds. Works for DTC, wholesale, and B2B outreach.",

  painPoints: [
    {
      title: "Ecommerce founders don't have a sales team",
      description:
        "If you're running a DTC store at $20-200k/month, you ARE the sales team. Writing cold emails to retail partners, influencers, suppliers, or B2B leads means stopping everything else. At 30-45 minutes per prospect, you're lucky to send 3-4 personalized emails per week.",
      stat: "73% of ecommerce founders cite time as the biggest barrier to consistent outreach",
      statSource: "Shopify State of Commerce, 2024",
    },
    {
      title: "Your prospects can tell when you didn't do the homework",
      description:
        "Ecommerce decision-makers — retail buyers, brand managers, influencers — receive 50+ cold pitches weekly. They instantly filter for specificity: does this person know my products, my price range, my market position? Generic emails get archived in under 3 seconds.",
    },
    {
      title: "Every platform requires different outreach angles",
      description:
        "Pitching a Shopify Plus store is different from pitching a WooCommerce shop. A fashion brand needs different messaging than an electronics store. Your cold email strategy should adapt to each prospect's platform, vertical, and business model automatically.",
    },
  ],

  beforeEmail: {
    subject: "Quick question about your store",
    body: "Hi,\n\nI help ecommerce brands increase their revenue through email marketing optimization.\n\nI've worked with several online stores and consistently delivered 20-30% revenue increases through better email flows.\n\nWould you be open to a 15-minute call to see if we can do the same for you?",
  },
  afterEmail: {
    subject: "Your post-purchase flow has a $12k/month gap",
    body: "Hey Jordan — I was looking at your store and ran some numbers.\n\nYou're averaging $85 AOV across 40+ SKUs but there's no cross-sell sequence after purchase. With your product mix (cookware + accessories), a 3-email post-purchase flow suggesting complementary items typically adds 8-12% to monthly revenue.\n\nFor a store at your volume, that's roughly $8-12k/month in incremental revenue from existing customers.\n\nI built a framework for exactly this. Want me to send it?",
  },

  exampleSequence: [
    { subject: "Your post-purchase revenue gap", preview: "Identifies missing cross-sell flow based on their product catalog and AOV" },
    { subject: "What stores at your volume are doing differently", preview: "Benchmark data from comparable ecommerce stores" },
    { subject: "Cross-sell framework for your product mix", preview: "Specific resource built around their actual product categories" },
    { subject: "The abandoned cart number that surprised me", preview: "Cart recovery angle with their price-point-specific data" },
    { subject: "Last one — no hard feelings", preview: "Clean breakup email with an open door" },
  ],

  steps: [
    {
      title: "Paste any ecommerce store URL",
      description:
        "Drop any online store URL — Shopify, WooCommerce, BigCommerce, Squarespace Commerce, or custom. ColdCopy reads products, pricing, collections, and brand positioning.",
    },
    {
      title: "Describe what you're selling",
      description:
        "Tell ColdCopy your offer and who you help. Email marketing services, wholesale, SaaS tools, fulfillment, consulting — any service or product that serves ecommerce brands.",
    },
    {
      title: "Get 5 emails in 8 seconds",
      description:
        "ColdCopy generates a complete 5-email sequence with subject lines, personalized body copy based on the prospect's actual store data, wait-day timing, and CTAs. Export as CSV or copy/paste.",
    },
  ],

  faqs: [
    {
      question: "Does ColdCopy work with stores outside Shopify?",
      answer:
        "Yes. ColdCopy works with any publicly accessible ecommerce store — Shopify, WooCommerce, BigCommerce, Squarespace Commerce, Magento, and custom-built stores. It reads whatever product data, pricing, and brand information is visible on the site.",
    },
    {
      question: "How is ColdCopy different from Instantly or Saleshandy?",
      answer:
        "Instantly and Saleshandy are email sending and deliverability platforms. ColdCopy only writes the emails — it generates personalized sequences from a URL. You then send them using whatever tool you prefer: Gmail, Instantly, Lemlist, Saleshandy, or LinkedIn.",
    },
    {
      question: "Can I use ColdCopy for wholesale and retail buyer outreach?",
      answer:
        "Absolutely. Paste the retailer's URL, describe your wholesale offer, and ColdCopy generates a sequence that references the retailer's existing product assortment, price positioning, and brand mix.",
    },
    {
      question: "Does ColdCopy work for SaaS companies selling to ecommerce?",
      answer:
        "Yes. If you sell tools, services, or software to ecommerce brands, paste any prospective store's URL and ColdCopy generates outreach that references their specific store setup, products, and likely pain points.",
    },
    {
      question: "What's the pricing?",
      answer:
        "One free sequence with no signup required. Then $19/month for unlimited sequences across all verticals and store types. Cancel anytime.",
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
              name: "How to write cold emails for ecommerce brands",
              description:
                "Generate personalized cold email sequences for any ecommerce store in 8 seconds using ColdCopy.",
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
