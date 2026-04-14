import type { Metadata } from "next"
import { VerticalLanding, type VerticalContent } from "@/components/VerticalLanding"

export const metadata: Metadata = {
  title: "Cold Email for Agencies Selling to Ecommerce Brands — ColdCopy",
  description:
    "Generate personalized cold email sequences for ecommerce prospects in 8 seconds. Paste any store URL, get 5 emails that reference their actual products, platform, and gaps. Built for agencies and service providers doing their own outreach.",
  alternates: { canonical: "https://coldcopy.pro/cold-email-for-ecommerce" },
  openGraph: {
    title: "Cold Email for Agencies Selling to Ecommerce Brands — ColdCopy",
    description:
      "Paste any ecommerce store URL. Get a personalized 5-email cold sequence in 8 seconds. No research sprint required.",
    url: "https://coldcopy.pro/cold-email-for-ecommerce",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630 }],
  },
}

const content: VerticalContent = {
  vertical: "Ecommerce",
  verticalSlug: "ecommerce",
  heroTagline: "For agencies and service providers selling to ecommerce brands",
  heroHeadline: "Pitch ecommerce brands without spending 30 minutes researching every store",
  heroDescription:
    "You sell to ecommerce brands — email marketing, CRO, paid ads, SaaS, or services. The problem: a good pitch means knowing their products, their platform, their gaps. ColdCopy reads each store and writes a personalized 5-email sequence in 8 seconds. Stop researching. Start pitching.",
  painSectionTitle: "Why service providers struggle to scale outreach to ecommerce brands",

  painPoints: [
    {
      title: "Every ecommerce store needs a different angle",
      description:
        "Pitching a $200k/month fashion brand is different from pitching a $40k/month pet store. Platform, product mix, AOV, and category gaps change the pitch entirely. Writing a fresh, specific email for each one from scratch is unsustainable — so most people send the same template to everyone and wonder why nobody replies.",
    },
    {
      title: "Ecommerce founders know a generic pitch in two seconds",
      description:
        "\"I help ecommerce brands grow their revenue\" gets deleted instantly. The pitches that get replies reference the store specifically: their abandoned cart rate for their price point, what their product mix is missing, their platform's limitations. That level of research takes 30-45 minutes per prospect — or 8 seconds with ColdCopy.",
      stat: "Personalized cold emails get 2-3x higher reply rates than generic templates",
      statSource: "Woodpecker, 2024 Cold Email Benchmarks",
    },
    {
      title: "You can pitch 3 prospects a week, or 30",
      description:
        "At 30-45 minutes of research per prospect, you're sending 3-4 personalized emails a week. To build a pipeline that actually moves, you need 10x that. ColdCopy reads any ecommerce store URL and generates a full 5-email sequence in 8 seconds — $19/month, unlimited.",
    },
  ],

  beforeEmail: {
    subject: "Services for your store",
    body: "Hi,\n\nI help ecommerce brands increase revenue through email marketing. I've worked with Shopify stores doing $20k-200k/month and consistently deliver 15-30% revenue lifts.\n\nWould love to chat about your store. 15 minutes?\n\nBest",
  },
  afterEmail: {
    subject: "Your cookware store has no post-purchase cross-sell",
    body: "Hey Jordan — looked at your store. You're selling 40+ cookware SKUs at $45-180/item with no email flow after purchase.\n\nWith your product mix, a 3-email post-purchase sequence — complementary utensils, care guide, restock reminder — typically adds 8-12% to monthly revenue for stores at your volume.\n\nI can set this up in a week. Want to see the framework?",
  },

  exampleSequence: [
    { subject: "Your post-purchase flow has a $12k gap", preview: "Identifies cross-sell opportunity based on their actual product catalog and price point" },
    { subject: "What stores at your volume recover from abandoned carts", preview: "Benchmark data from comparable stores in their category" },
    { subject: "The one thing WooCommerce stores miss that Shopify handles automatically", preview: "Platform-specific hook that shows you know their stack" },
    { subject: "Framework I built for a store like yours", preview: "Social proof from a comparable customer in their niche" },
    { subject: "Last note — no hard feelings", preview: "Clean breakup email with an open door for future timing" },
  ],

  steps: [
    {
      title: "Paste any ecommerce store URL",
      description:
        "Drop any store URL — Shopify, WooCommerce, BigCommerce, Squarespace Commerce, or custom build. ColdCopy reads their products, pricing, platform signals, and brand positioning.",
    },
    {
      title: "Describe what you sell to ecommerce brands",
      description:
        "Tell ColdCopy your offer: email marketing, CRO, paid ads, SaaS tools, fulfillment, photography, packaging — whatever you're pitching and what problem it solves.",
    },
    {
      title: "Get 5 personalized emails in 8 seconds",
      description:
        "ColdCopy generates a complete sequence with subject lines and body copy referencing the store's actual setup, gaps, and positioning. Export as CSV for Instantly or Lemlist, or copy/paste into Gmail.",
    },
  ],

  faqs: [
    {
      question: "Does ColdCopy work with any ecommerce platform, not just Shopify?",
      answer:
        "Yes. ColdCopy reads any publicly accessible store: Shopify, WooCommerce, BigCommerce, Squarespace Commerce, Magento, and custom builds. It extracts whatever product data, pricing, and positioning is visible on the site.",
    },
    {
      question: "I sell SaaS tools to ecommerce brands. Will this work for me?",
      answer:
        "Yes. Paste any prospect store URL, describe your tool and what problem it solves, and ColdCopy writes outreach that references their specific store setup and likely pain points — not a generic opener.",
    },
    {
      question: "How is this different from using ChatGPT?",
      answer:
        "ChatGPT doesn't read the prospect's store. You'd have to copy-paste their product list, pricing, and platform details yourself — which means you're still doing the research. ColdCopy reads the URL directly and uses that context to write the emails.",
    },
    {
      question: "Can I use ColdCopy if I pitch multiple ecommerce verticals?",
      answer:
        "That's exactly what it's built for. Whether you're pitching fashion brands one week and home goods brands the next, ColdCopy adapts the angle to each store's category, product mix, and positioning automatically.",
    },
    {
      question: "What does ColdCopy cost?",
      answer:
        "One free sequence with no signup. Then $19/month for unlimited sequences across all your prospects. Cancel anytime.",
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
