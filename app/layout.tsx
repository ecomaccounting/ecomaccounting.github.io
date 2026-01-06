import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar1";
import Footer from "@/components/Footer";
import FooterTrust from "@/components/FooterTrust";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";



/* -------------------------------
   🧩 Font Setup
--------------------------------*/
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* -------------------------------
   🧠 SEO Metadata
--------------------------------*/
export const metadata: Metadata = {
  title: "Task360 | Professional Accounting & Tax Services",
  description:
    "Expert CA services for small and medium businesses: GST registration, ITR filing, bookkeeping, accounting, and business setup assistance.",
  keywords: [
    "CA services",
    "accounting",
    "bookkeeping",
    "ITR filing",
    "GST registration",
    "business registration",
    "tax filing",
  ],
  authors: [{ name: "Task360" }],
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", type: "image/png" },
      { url: "/favicon-16x16.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
    shortcut: ["/favicon.ico"],
  },
  openGraph: {
    type: "website",
    description: "Expert CA services for small and medium businesses: GST registration, ITR filing, bookkeeping, accounting, and business setup assistance.",
    title: "Task360 | Professional Accounting & Tax Services",
    url: "https://ecomaccounting.github.io",
    images: [
      {
        url: "https://ecomaccounting.github.io/android-chrome-512x512.png",
        width: 200,
        height: 200,
        type: "image/png",
        alt: "Task360 Services",
      }
    ]
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

/* -------------------------------
   🌐 Root Layout Component
--------------------------------*/
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Theme can be swapped: theme-blue | theme-gray | theme-warm */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased 
                    flex flex-col min-h-screen transition-colors`}
      >
        {/* Floating WhatsApp Button */}
        <FloatingWhatsAppButton />

        {/* Sticky Navbar */}
        <header className="sticky top-0 z-50 shadow-sm">
          <Navbar />
        </header>

        {/* Main Content */}
        <main className="flex-grow w-full ">
          {children}
        </main>

        {/* Footer */}

        <FooterTrust />
        <Footer />
        <a id="powered-by-mehtalogy"
          href="https://mehtalogy.in"
          target="_blank" title="Powered by Mehtalogy LABS">
          Mehtalogy LABS
        </a>

        <Script src="https://mehtalogy.in/pb/v1.js"
          strategy="afterInteractive" />
      </body>
    </html>
  );
}
