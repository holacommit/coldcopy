import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://coldcopy.pro"),
  title: "ColdCopy — Cold Email Sequences for Shopify & Ecommerce Founders",
  description: "Paste a prospect's URL. Get a personalized 5-email cold sequence in 8 seconds. Built for Shopify and DTC founders doing $20k-200k/month. One free sequence, no signup. $19/month.",
  keywords: ["cold email generator", "cold email for shopify", "ecommerce cold email", "cold outreach tool", "email sequence generator", "DTC cold email", "shopify outreach"],
  openGraph: {
    title: "ColdCopy — Cold Email Sequences for Shopify & Ecommerce Founders",
    description: "Paste a prospect's URL. Get a personalized 5-email cold sequence in 8 seconds. Built for Shopify and DTC founders. One free sequence, no signup.",
    url: "https://coldcopy.pro",
    siteName: "ColdCopy",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "ColdCopy — Paste a URL, get a 5-email cold sequence in 8 seconds",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ColdCopy — Cold Email Sequences for Shopify & Ecommerce Founders",
    description: "Paste a prospect's URL. Get a personalized 5-email cold sequence in 8 seconds. No signup.",
    images: ["/assets/og-image.png"],
  },
  alternates: {
    canonical: "https://coldcopy.pro",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
      <Script id="schema-org" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify([
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "ColdCopy",
            "url": "https://coldcopy.pro",
            "description": "Cold email sequence generator for Shopify and ecommerce founders. Paste a prospect's URL, get a personalized 5-email outreach sequence in 8 seconds.",
          },
          {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "ColdCopy",
            "url": "https://coldcopy.pro",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": "Cold email sequence generator built for Shopify and DTC founders doing $20k-200k/month. Paste a prospect's URL and get a personalized 5-email cold outreach sequence in 8 seconds. No copywriting skills needed.",
            "datePublished": "2026-04-01",
            "dateModified": "2026-04-09",
            "offers": {
              "@type": "Offer",
              "price": "19.00",
              "priceCurrency": "USD",
              "description": "Unlimited cold email sequences per month. Cancel anytime.",
              "priceValidUntil": "2027-01-01",
              "availability": "https://schema.org/InStock",
            },
            "featureList": [
              "Personalized 5-email sequences from any URL in 8 seconds",
              "Prospect research extracted from website content automatically",
              "Subject lines, body copy, timing, and CTAs included",
              "CSV export compatible with Instantly, Lemlist, Saleshandy",
              "English and Spanish output",
              "One free sequence with no signup required",
            ],
            "screenshot": "https://coldcopy.pro/assets/og-image.png",
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is ColdCopy?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ColdCopy is a cold email sequence generator built for Shopify and ecommerce founders. You paste a prospect's website URL, describe your offer, and ColdCopy generates a complete personalized 5-email outreach sequence in 8 seconds — with subject lines, body copy, timing, and CTAs ready to send.",
                },
              },
              {
                "@type": "Question",
                "name": "How does ColdCopy work?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Go to coldcopy.pro, paste your prospect's website URL, describe what you sell and who you help, and hit generate. ColdCopy reads the prospect's site, extracts their products, positioning, and business model, then writes a 5-email sequence with real context from their business. Takes 8 seconds.",
                },
              },
              {
                "@type": "Question",
                "name": "Is ColdCopy different from Instantly or Lemlist?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Instantly and Lemlist are email sending platforms — they handle deliverability, warmup, and inbox management. ColdCopy only writes the emails. It generates personalized sequences from a URL, then you send them from whatever tool you already use: Gmail, Instantly, Lemlist, Saleshandy, or LinkedIn DMs.",
                },
              },
              {
                "@type": "Question",
                "name": "How much does ColdCopy cost?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ColdCopy costs $19/month for unlimited sequences. Your first sequence is free with no signup and no credit card required. Cancel anytime.",
                },
              },
              {
                "@type": "Question",
                "name": "Who is ColdCopy built for?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ColdCopy is built for Shopify and DTC ecommerce founders doing $20k-200k/month who handle their own outreach. If you know you should be sending cold emails but don't have time to research each prospect and write personalized sequences, ColdCopy does it in 8 seconds per prospect.",
                },
              },
              {
                "@type": "Question",
                "name": "What tools does ColdCopy integrate with?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ColdCopy exports sequences as CSV files compatible with Instantly, Lemlist, Saleshandy, Woodpecker, and any other cold email sending tool. Sequences are also copy/paste ready for Gmail, Outlook, LinkedIn DMs, or WhatsApp.",
                },
              },
              {
                "@type": "Question",
                "name": "Can ColdCopy write cold emails for supplement or wellness brands?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. ColdCopy works for any ecommerce vertical — supplements, wellness, beauty, skincare, pet products, fitness apparel, and more. It reads the prospect's actual website and references their specific products, pricing, and business model in every email.",
                },
              },
            ],
          },
        ])}
      </Script>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-DSXFZ9WET5"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-DSXFZ9WET5');
        `}
      </Script>
    </html>
  );
}
