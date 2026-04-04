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
