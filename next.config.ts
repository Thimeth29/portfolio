import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // If your GitHub repository is named 'portfolio', uncomment the next line:
  // basePath: "/portfolio",
};

export default nextConfig;
