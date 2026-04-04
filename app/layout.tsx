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
  title: "ColdCopy — Cold Email Sequences That Get Replies",
  description: "Paste a prospect's URL. Get a personalized 5-email cold outreach sequence in 8 seconds. Built for founders, freelancers, and anyone doing their own sales. $19/month.",
  openGraph: {
    title: "ColdCopy — Cold Email Sequences That Get Replies",
    description: "Paste a prospect's URL. Get a personalized 5-email cold outreach sequence in 8 seconds. Built for founders, freelancers, and anyone doing their own sales.",
    url: "https://coldcopy.pro",
    siteName: "ColdCopy",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "ColdCopy — Cold Email Sequences That Get Replies",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ColdCopy — Cold Email Sequences That Get Replies",
    description: "Paste a prospect's URL. Get a personalized 5-email cold outreach sequence in 8 seconds.",
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
            "description": "AI-powered cold email sequence generator. Paste a prospect's URL, get a personalized 5-email outreach sequence in 8 seconds.",
          },
          {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "ColdCopy",
            "url": "https://coldcopy.pro",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": "Paste a prospect's URL and get a personalized 5-email cold outreach sequence in 8 seconds. Built for founders, freelancers, consultants, and anyone doing their own sales outreach.",
            "offers": {
              "@type": "Offer",
              "price": "19.00",
              "priceCurrency": "USD",
              "description": "Unlimited cold email sequences per month",
            },
            "featureList": [
              "Unlimited personalized 5-email sequences",
              "AI prospect research from URL",
              "English and Spanish output",
              "CSV export for Instantly, Lemlist, Saleshandy",
            ],
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
                  "text": "ColdCopy is an AI-powered cold email sequence generator. You paste a prospect's website URL or LinkedIn profile, describe what you do, and ColdCopy generates a complete personalized 5-email outreach sequence in 8 seconds.",
                },
              },
              {
                "@type": "Question",
                "name": "How does ColdCopy work?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Go to ColdCopy.pro, paste your prospect's website URL or LinkedIn, describe what you do and who you help, and hit generate. In 8 seconds you get a full 5-email sequence with subject lines, body copy, timing, and CTAs — ready to send.",
                },
              },
              {
                "@type": "Question",
                "name": "Is ColdCopy a cold email platform?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. ColdCopy only writes the emails — it does not send them. There is no inbox setup, domain warmup, or deliverability dashboard. You copy the generated emails and send from wherever you already work: Gmail, Outlook, LinkedIn, or any other tool.",
                },
              },
              {
                "@type": "Question",
                "name": "How much does ColdCopy cost?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ColdCopy costs $19/month for unlimited sequences. You can try your first sequence free with no signup or credit card required. Cancel anytime.",
                },
              },
              {
                "@type": "Question",
                "name": "What tools does ColdCopy integrate with?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ColdCopy exports sequences as CSV, compatible with Instantly, Lemlist, Saleshandy, and any other sending tool. Sequences are also copy/paste ready for Gmail, LinkedIn DMs, Outlook, or WhatsApp.",
                },
              },
              {
                "@type": "Question",
                "name": "Does ColdCopy work in Spanish?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. ColdCopy generates cold email sequences in both English and Spanish.",
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
