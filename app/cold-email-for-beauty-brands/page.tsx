import type { Metadata } from "next"
import { VerticalLanding, type VerticalContent } from "@/components/VerticalLanding"

export const metadata: Metadata = {
  title: "Cold Email Sequences for Beauty & Skincare Brands — ColdCopy",
  description:
    "Generate personalized cold email sequences for beauty and skincare DTC brands in 8 seconds. Paste a brand URL, get 5 emails referencing their actual products and positioning.",
  alternates: { canonical: "https://coldcopy.pro/cold-email-for-beauty-brands" },
  openGraph: {
    title: "Cold Email Sequences for Beauty & Skincare Brands — ColdCopy",
    description:
      "Paste a beauty brand URL. Get a personalized 5-email cold sequence in 8 seconds.",
    url: "https://coldcopy.pro/cold-email-for-beauty-brands",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630 }],
  },
}

const content: VerticalContent = {
  vertical: "Beauty & Skincare",
  verticalSlug: "beauty-brands",
  heroTagline: "Cold email that gets replies",
  heroDescription:
    "Paste any beauty or skincare brand URL. ColdCopy reads their product line, ingredients, price range, and brand aesthetic — then writes a 5-email sequence that sounds like you know their brand inside out. 8 seconds.",

  painPoints: [
    {
      title: "Influencer outreach at scale is a time sink",
      description:
        "Beauty brands depend on influencer partnerships and UGC. But writing personalized pitches to creators — referencing their content style, audience, and which of your products fits — takes 30-45 minutes per person. Most founders give up after 5 emails.",
      stat: "92% of beauty consumers trust influencer recommendations over brand advertising",
      statSource: "Influencer Marketing Hub, 2024",
    },
    {
      title: "Retail buyers want specificity, not lookbooks",
      description:
        "Getting into Sephora, Ulta, or boutique retailers requires cold outreach that demonstrates you understand their shelf. Generic emails about your \"clean beauty line\" get deleted. Emails that reference their current product gaps and customer demographics get replies.",
    },
    {
      title: "Seasonal launches create outreach bottlenecks",
      description:
        "Every new collection, limited edition, or seasonal launch requires a fresh round of outreach to press, retailers, and creators. Most beauty founders can handle 2-3 great pitches per launch — but they need 20-30. ColdCopy closes that gap.",
    },
  ],

  beforeEmail: {
    subject: "Beauty brand collaboration",
    body: "Hi!\n\nI love your content and I think you'd be a great fit for our clean beauty brand.\n\nWe have a range of skincare products that your followers would love. We'd be happy to send you some free samples in exchange for a review.\n\nLet me know if you're interested!",
  },
  afterEmail: {
    subject: "Your vitamin C serum content is 🔥 — quick idea",
    body: "Hey Mia — I've been following your skincare routines and your vitamin C serum reviews consistently get 3-4x the engagement of your other content.\n\nWe make a stabilized vitamin C + niacinamide serum ($42) that uses a different delivery system than the ones you've reviewed. The before/after results photograph really well.\n\nWant me to send one over? No strings — if you don't like it, zero obligation to post.",
  },

  exampleSequence: [
    { subject: "Your vitamin C content — quick idea", preview: "References specific content performance and product-audience fit" },
    { subject: "How [similar creator] positioned our serum", preview: "Social proof from a comparable creator partnership" },
    { subject: "The ingredient angle your audience would love", preview: "Highlights a specific differentiator based on their review history" },
    { subject: "Holiday collection — early access for you", preview: "Exclusive access angle tied to seasonal timing" },
    { subject: "No worries either way", preview: "Friendly breakup email, zero pressure" },
  ],

  steps: [
    {
      title: "Paste a beauty brand or creator URL",
      description:
        "Drop any beauty brand, skincare company, or influencer URL. ColdCopy reads their products, ingredients, price positioning, and brand aesthetic.",
    },
    {
      title: "Describe your pitch",
      description:
        "Tell ColdCopy what you're offering: influencer partnership, wholesale deal, PR samples, co-branded launch — whatever the angle is.",
    },
    {
      title: "Get 5 emails in 8 seconds",
      description:
        "ColdCopy generates a full sequence with real product references, ingredient callouts, and brand-specific context. Copy/paste or export as CSV.",
    },
  ],

  faqs: [
    {
      question: "Can ColdCopy write influencer outreach for beauty brands?",
      answer:
        "Yes. Paste a creator's social profile or website URL. ColdCopy reads their content themes, audience, and product preferences to write a sequence that demonstrates genuine familiarity with their work.",
    },
    {
      question: "Does it reference specific ingredients and formulations?",
      answer:
        "Yes. ColdCopy extracts ingredient lists, key actives, and product claims from the brand's website. It uses these as context points in the email copy — never making medical or efficacy claims, just referencing what the brand highlights.",
    },
    {
      question: "Can I use ColdCopy for retail buyer outreach?",
      answer:
        "Absolutely. Paste the retailer's website, describe your brand and wholesale terms, and ColdCopy generates a sequence that references the retailer's existing product mix, price positioning, and shelf gaps.",
    },
    {
      question: "Does it work for clean beauty and indie brands?",
      answer:
        "Yes. ColdCopy works for any beauty or skincare brand regardless of size. It reads whatever is on the prospect's website — certifications, ingredient philosophy, sustainability messaging — and incorporates it into the sequence.",
    },
    {
      question: "How much does ColdCopy cost for beauty brands?",
      answer:
        "One free sequence with no signup. Then $19/month for unlimited sequences across all verticals. Cancel anytime.",
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
              name: "How to write cold emails for beauty and skincare brands",
              description:
                "Generate personalized cold email sequences for beauty and skincare DTC brands in 8 seconds using ColdCopy.",
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
