import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Recommended for highlighting potential issues in development
  output: "standalone", // Ensures compatibility for serverless deployments like Vercel
};

export default nextConfig;
