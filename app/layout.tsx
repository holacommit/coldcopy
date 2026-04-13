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
