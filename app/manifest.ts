import { MetadataRoute } from "next";
export const dynamic = "force-static";
export default function manifest(): MetadataRoute.Manifest {
  const dynamicShortcuts = [
    {
      name: `Our Story`,
      short_name: `Our Story`,
      description: `Why we chose to specialize — and why that decision changed everything.`,
      url: `/our-story`,
      icons: [
        {
          src: "/android-chrome-192x192.png", // Fallback to main icon
          sizes: "192x192",
          type: "image/png",
        },
      ],
    },
    {
      name: `Services`,
      short_name: `Services`,
      description: `Explore our range of services tailored for eCommerce success.`,
      url: `/services`,
      icons: [
        {
          src: "/android-chrome-192x192.png", // Fallback to main icon
          sizes: "192x192",
          type: "image/png",
        },
      ],
    },
    {
      name: `Contact Us`,
      short_name: `Contact`,
      description: `Have questions or need professional guidance? Reach out to our team.`,
      url: `/contact`,
      icons: [
        {
          src: "/android-chrome-192x192.png", // Fallback to main icon
          sizes: "192x192",
          type: "image/png",
        },
      ],
    }
  ];
  return {

    name: "task360 - Simple Finance for eCommerce & Growing Businesses",
    short_name: "task360",
    description: "Focus on growing your online business while we handle your books, taxes, and compliance with ease.",
    lang: "en-IN",
    dir: "ltr",
    id: "/?source=pwa",
    start_url: "/?source=pwa",
    scope: "/",
    display: "standalone",
    orientation: "any",
    display_override: ["window-controls-overlay", "standalone"],


    background_color: "#ffffff",
    theme_color: "#0a58ca",

    /* Hint to browser: this PWA supports both */
    categories: ["business", "finance", "productivity"],

    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        src: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
    ],

    shortcuts: dynamicShortcuts,

    screenshots: [
      {
        src: "/screenshots/homepage.png",
        sizes: "1476x3200",
        type: "image/png",
        label: "Homepage",
        form_factor: "narrow",
      },
      {
        src: "/screenshots/services.png",
        sizes: "1476x3200",
        type: "image/png",
        label: "Product Detail Page",
        form_factor: "narrow",
      },
      {
        src: "/screenshots/homepage-wide.png",
        sizes: "2560x1440",
        type: "image/png",
        label: "Homepage",
        form_factor: "wide",
      },
      {
        src: "/screenshots/services-wide.png",
        sizes: "2560x1440",
        type: "image/png",
        label: "Product Detail Page",
        form_factor: "wide",
      },
    ],

    prefer_related_applications: false,

    
  };
}
