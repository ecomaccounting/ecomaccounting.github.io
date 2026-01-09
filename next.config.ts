import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // Enables static HTML export
  images: { unoptimized: true },
  assetPrefix: "",
  basePath: "",
  env: {
    NEXT_PUBLIC_BASE_URL: 'https://ecomaccounting.github.io',
    NEXT_PUBLIC_WHATSAPP: '918989459947',

  },
};

export default nextConfig;
