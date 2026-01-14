import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar1";
import Footer from "@/components/layout/Footer";
import FooterTrust from "@/components/layout/FooterTrust";
import FloatingWhatsAppButton from "@/components/layout/FloatingWhatsAppButton";
import RegisterSW from "@/components/layout/sw";
import GoToTop from "@/components/layout/GoToTop";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0a58ca",
};


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
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
  title: {
    default: "task360 – Simple Finance for eCommerce | Best financial services India",
    template: "%s | task360" // This allows Page.tsx to just provide "Explore Services"
  },
  description: "Accounting, GST, tax & compliance services for eCommerce sellers and growing businesses. Focus on growth while we handle finance.",
  applicationName: "task360",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  authors: [{ name: "task360" }],
  creator: "task360",
  publisher: "task360",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  manifest: "/manifest.webmanifest",

  appleWebApp: {
    capable: true,
    title: "task360",
    statusBarStyle: "default",
  },

  openGraph: {
    type: "website",
    siteName: "task360",
    title: "task360 – Simple Finance for eCommerce & Growing Businesses",
    description:
      "Professional accounting, GST, tax & compliance services for eCommerce sellers and startups.",
    url: `/`,
    images: ["/img/og-task360.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "task360 – Simple Finance for eCommerce & Growing Businesses",
    description:
      "Accounting, GST, tax & compliance services for eCommerce sellers and startups.",
    images: [`/img/og-task360.png`],
  },

  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16" },
      { url: "/favicon-32x32.png", sizes: "32x32" },
      { url: "/favicon.ico" },
    ],
    apple: "/apple-touch-icon.png",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: `/`,
  }
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
        <main className="flex-grow w-full p-4 mx-auto">
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
        <GoToTop />
        <Script src="https://mehtalogy.in/pb/v1.js"
          strategy="afterInteractive" />
        <RegisterSW />
      </body>
    </html>
  );
}
