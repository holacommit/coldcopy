import type { Metadata } from "next"
import { VerticalLanding, type VerticalContent } from "@/components/VerticalLanding"

export const metadata: Metadata = {
  title: "Cold Email Sequences for Pet Product Brands — ColdCopy",
  description:
    "Generate personalized cold email sequences for pet product DTC brands in 8 seconds. Paste a brand URL, get 5 emails referencing their products, pet categories, and business model.",
  alternates: { canonical: "https://coldcopy.pro/cold-email-for-pet-brands" },
  openGraph: {
    title: "Cold Email Sequences for Pet Product Brands — ColdCopy",
    description:
      "Paste a pet brand URL. Get a personalized 5-email cold sequence in 8 seconds.",
    url: "https://coldcopy.pro/cold-email-for-pet-brands",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630 }],
  },
}

const content: VerticalContent = {
  vertical: "Pet Product",
  verticalSlug: "pet-brands",
  heroTagline: "Cold email that gets replies",
  heroDescription:
    "Paste any pet product brand URL. ColdCopy reads their product line, pet categories, pricing, and brand positioning — then writes a 5-email cold sequence with genuine context. 8 seconds. No copywriting skills needed.",

  painPoints: [
    {
      title: "Pet parents buy with emotion — your outreach should too",
      description:
        "Pet product purchases are deeply emotional. But most B2B cold emails to pet brands read like corporate proposals. The brands that win partnerships write emails that demonstrate they understand the pet parent mindset and the brand's specific community.",
      stat: "US pet industry spending reached $147 billion in 2024, with DTC brands growing 23% year-over-year",
      statSource: "American Pet Products Association, 2024",
    },
    {
      title: "Subscription boxes and auto-ship are the real revenue",
      description:
        "The most successful pet DTC brands make 60-70% of their revenue from subscriptions — food, treats, supplements on auto-ship. Cold outreach that references a brand's specific subscription model and retention gaps gets 4x more replies than generic pitches.",
    },
    {
      title: "Vet partnerships and retail placement require targeted outreach",
      description:
        "Getting pet products into vet offices, pet stores, or chains like Petco requires personalized outreach that references the retailer's existing brands and shelf positioning. Generic emails about your \"premium pet brand\" don't cut it.",
    },
  ],

  beforeEmail: {
    subject: "Pet brand partnership",
    body: "Hello,\n\nI came across your pet brand and love what you're doing.\n\nWe help pet product companies increase their online sales through targeted marketing campaigns. Our team has extensive experience in the pet industry.\n\nWould you be interested in scheduling a call to discuss how we can help grow your brand?",
  },
  afterEmail: {
    subject: "Your grain-free line is missing a key segment",
    body: "Hey — I noticed your grain-free dog food line covers adult and senior formulas but doesn't have a puppy-specific option.\n\nMost pet food brands at your price point ($55-70/bag) see 25-30% of new customers come in through the puppy segment, then stay for life.\n\nI put together a quick analysis of how three similar brands launched puppy lines and the subscription uptake they saw. Want me to send it over?",
  },

  exampleSequence: [
    { subject: "Your grain-free line — missing segment", preview: "Identifies a product gap in their catalog based on competitive analysis" },
    { subject: "How [similar pet brand] filled this gap", preview: "Case study from a comparable brand that expanded their product line" },
    { subject: "Puppy segment → lifetime subscription data", preview: "Specific retention data for the product category they're missing" },
    { subject: "Quick win for your auto-ship program", preview: "Subscription optimization angle based on their current pricing" },
    { subject: "Last note — totally understand if not now", preview: "Low-pressure close with a door-open for future timing" },
  ],

  steps: [
    {
      title: "Paste a pet brand URL",
      description:
        "Drop any pet product brand URL. ColdCopy reads their product catalog, pet categories (dog, cat, multi-pet), pricing tiers, subscription options, and brand story.",
    },
    {
      title: "Describe your offer",
      description:
        "Tell ColdCopy what you're pitching: marketing services, wholesale, ingredient supply, subscription platform, fulfillment — any angle that serves pet brands.",
    },
    {
      title: "Get 5 emails in 8 seconds",
      description:
        "ColdCopy generates a full sequence referencing their actual products, pet categories, price points, and business model. Ready to send from Gmail, Instantly, or Lemlist.",
    },
  ],

  faqs: [
    {
      question: "Does ColdCopy work for both dog and cat product brands?",
      answer:
        "Yes. ColdCopy reads whatever pet categories the brand sells — dogs, cats, birds, reptiles, multi-pet. It references the specific animals and products from their site in the email copy.",
    },
    {
      question: "Can I use this for outreach to pet retail chains?",
      answer:
        "Absolutely. Paste the retailer's website URL, describe your product line and terms, and ColdCopy generates a sequence that references the retailer's existing pet brand portfolio and positioning.",
    },
    {
      question: "Does it handle pet supplement and health product brands?",
      answer:
        "Yes. ColdCopy extracts product details including ingredients, health claims on the website, and formulation details. It uses these as context points in the outreach — referencing what the brand highlights publicly.",
    },
    {
      question: "Can ColdCopy write outreach to veterinary offices?",
      answer:
        "Yes. Paste a vet clinic's website URL, describe your product, and ColdCopy generates outreach referencing the clinic's services, specialties, and patient focus.",
    },
    {
      question: "What does ColdCopy cost?",
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
              name: "How to write cold emails for pet product brands",
              description:
                "Generate personalized cold email sequences for pet product DTC brands in 8 seconds using ColdCopy.",
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
