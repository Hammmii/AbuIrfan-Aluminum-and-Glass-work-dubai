import type { Metadata } from "next";
import { Instrument_Serif } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { site, contact } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: site.name,
  url: site.url,
  telephone: contact.phoneDisplay,
  email: contact.emails.general,
  address: {
    "@type": "PostalAddress",
    streetAddress: contact.address.line,
    addressLocality: "Dubai",
    addressCountry: "AE",
  },
  areaServed: "United Arab Emirates",
};

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

const SITE_URL = "https://abuirfan.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Glass Rooms, Pergolas & Aluminum Systems in Dubai | Abu Irfan",
    template: "%s · Abu Irfan Glass & Aluminum",
  },
  description:
    "Abu Irfan designs, fabricates and installs premium glass & aluminum systems across Dubai and the UAE — glass rooms, pergolas, skylights, doors & windows, partitions, curtain walls and ACP cladding. Engineered for the Gulf climate.",
  keywords: [
    "glass and aluminum Dubai",
    "glass rooms Dubai",
    "aluminium pergola Dubai",
    "curtain wall Dubai",
    "glass partition Dubai",
    "ACP cladding Dubai",
    "Abu Irfan",
  ],
  authors: [
    { name: "ABU IRFAN FOR GLASS & ALUMINUM INSTALLATION & MAINTENANCE EST." },
  ],
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Abu Irfan Glass & Aluminum",
    title: "Glass Rooms, Pergolas & Aluminum Systems in Dubai | Abu Irfan",
    description:
      "Premium glass & aluminum design, fabrication and installation across Dubai and the UAE — engineered for the Gulf climate.",
    locale: "en_AE",
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={instrumentSerif.variable}>
      <head>
        {/* Preload LCP-critical self-hosted fonts (display + body). */}
        <link
          rel="preload"
          href="/fonts/ClashDisplay-600.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Satoshi-400.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <SmoothScroll>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-paper focus:px-4 focus:py-2 focus:text-ink focus:shadow-card focus:outline-none"
          >
            Skip to content
          </a>
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <MobileCtaBar />
        </SmoothScroll>
      </body>
    </html>
  );
}
