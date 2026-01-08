import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // Enables static HTML export
  images: { unoptimized: true },
  assetPrefix: "",
  basePath: "",
  env: {
    NEXT_PUBLIC_BASE_URL: 'https://ecomaccounting.github.io',
  },
};

export default nextConfig;
