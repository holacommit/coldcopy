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
  heroTagline: "For supplement & wellness brands doing their own outreach",
  heroHeadline: "Get your supplement line into gyms, stores, and buyer inboxes — without writing every pitch yourself",
  heroDescription:
    "You built the product. Now you need to get it in front of buyers. ColdCopy reads each prospect's website — their current brands, price range, and customer focus — and writes a personalized 5-email outreach sequence in 8 seconds. No compliance headaches. No generic decks.",
  painSectionTitle: "Why supplement brands struggle to scale outreach",

  painPoints: [
    {
      title: "Every retail buyer already has a supplement wall",
      description:
        "Health food stores, gyms, and corporate wellness programs carry 5-10 supplement brands max. The ones that get in send pitches that reference the buyer's actual product mix and gaps — not a one-size-fits-all deck. ColdCopy reads each prospect's site so your pitch sounds like it was written for them specifically.",
    },
    {
      title: "Compliance anxiety makes most outreach too safe to work",
      description:
        "The instinct is to play it safe: no health claims, nothing controversial. But \"premium quality supplements\" gets deleted instantly. ColdCopy focuses on business angles — category gaps, margin opportunity, reorder velocity — not product efficacy. Personalized without the compliance risk.",
    },
    {
      title: "You don't have time to research every prospect",
      description:
        "A good pitch to a gym starts with: what brands do they carry? What's their customer demographic? What's missing from their offer? That's 30 minutes of research per prospect. ColdCopy does it in 8 seconds from their website.",
      stat: "Personalized cold emails get 2-3x higher reply rates than generic templates",
      statSource: "Woodpecker, 2024 Cold Email Benchmarks",
    },
  ],

  beforeEmail: {
    subject: "Supplement partnership opportunity",
    body: "Hi Sarah,\n\nI represent [Brand], a premium supplement company. We make high-quality protein, pre-workout, and recovery products.\n\nWe'd love to partner with your gym to offer our products to your members. We offer competitive wholesale margins.\n\nWould you be open to a quick call?",
  },
  afterEmail: {
    subject: "Your members are asking for a magnesium option",
    body: "Sarah — I noticed your gym carries 3 pre-workouts and 2 proteins but nothing for recovery or sleep.\n\nMagnesium glycinate is the #1 requested supplement by CrossFit members right now. We supply 14 gyms in your area — average sell-through is 40 units/month.\n\nI can drop off samples this week.",
  },

  exampleSequence: [
    { subject: "Your members are asking for a magnesium option", preview: "References the gym's current supplement mix and identifies the missing recovery category" },
    { subject: "What [nearby gym] added last quarter", preview: "Social proof from a comparable gym already carrying the product" },
    { subject: "40 units/month — here's what that looks like for your floor", preview: "Specific revenue projection based on their member volume and traffic" },
    { subject: "Sample drop-off — no commitment", preview: "Low-friction next step offer with zero pressure to buy" },
    { subject: "Last note — no hard feelings", preview: "Clean breakup email with an open door for future timing" },
  ],

  steps: [
    {
      title: "Paste the URL of the buyer you want to pitch",
      description:
        "Drop any gym, health food store, retailer, or corporate wellness page into ColdCopy. It reads their current brands, customer focus, and positioning.",
    },
    {
      title: "Describe your supplement line and offer",
      description:
        "Tell ColdCopy what you make and what you're offering: wholesale terms, sample drop-off, revenue share — whatever your pitch is.",
    },
    {
      title: "Get 5 personalized emails in 8 seconds",
      description:
        "ColdCopy writes a full sequence referencing the buyer's actual product gaps and customer profile. Copy/paste into Gmail or export as CSV for Instantly or Lemlist.",
    },
  ],

  faqs: [
    {
      question: "Will ColdCopy make health claims about my products?",
      answer:
        "No. ColdCopy writes business-focused outreach — category gaps, margin opportunity, reorder velocity, and partnership angles. It never generates efficacy claims or medical statements, so you stay on the right side of FTC and platform rules.",
    },
    {
      question: "Can I use this to pitch gym owners and retail buyers?",
      answer:
        "Yes. Paste any gym, health food store, pharmacy, or independent retailer URL. ColdCopy reads their current supplement offering and writes a sequence that references what they carry and what's missing.",
    },
    {
      question: "What about pitching corporate wellness programs?",
      answer:
        "Works great. Paste the company's website, describe your bulk or subscription offer, and ColdCopy generates outreach that references their industry, team size signals, and wellness positioning.",
    },
    {
      question: "Can I use ColdCopy for influencer outreach?",
      answer:
        "Yes. Paste a creator's website or link-in-bio page. ColdCopy reads their content focus and audience to write a pitch that demonstrates you actually know their work — not a copy-paste PR blast.",
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
