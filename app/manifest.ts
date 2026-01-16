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
        purpose: "maskable",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },      
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
        purpose: "any",
      },
    ],

    shortcuts: dynamicShortcuts,

    screenshots: [
      {
        src: "/screenshots/home1.png",
        sizes: "412x915",
        type: "image/png",
        label: "Homepage",
        form_factor: "narrow",
      },
      {
        src: "/screenshots/homew1.png",
        sizes: "1920x1080",
        type: "image/png",
        label: "Homepage",
        form_factor: "narrow",
      },
      {
        src: "/screenshots/home2.png",
        sizes: "412x915",
        type: "image/png",
        label: "Personalize",
        form_factor: "narrow",
      },
      {
        src: "/screenshots/os.png",
        sizes: "412x915",
        type: "image/png",
        label: "Our Story",
        form_factor: "narrow",
      }, 
      {
        src: "/screenshots/osw.png",
        sizes: "1920x1080",
        type: "image/png",
        label: "Our Story",
        form_factor: "narrow",
      },
      {
        src: "/screenshots/home3.png",
        sizes: "412x915",
        type: "image/png",
        label: "Why task360",
        form_factor: "narrow",
      },
      {
        src: "/screenshots/home4.png",
        sizes: "412x915",
        type: "image/png",
        label: "Services",
        form_factor: "narrow",
      },
      
      
      {
        src: "/screenshots/homew2.png",
        sizes: "1920x1080",
        type: "image/png",
        label: "How it works",
        form_factor: "narrow",
      },
      {
        src: "/screenshots/homew3.png",
        sizes: "1920x1080",
        type: "image/png",
        label: "Personalize",
        form_factor: "narrow",
      },
      {
        src: "/screenshots/homew4.png",
        sizes: "1920x1080",
        type: "image/png",
        label: "Services",
        form_factor: "narrow",
      },
      
    ]
  };
}
