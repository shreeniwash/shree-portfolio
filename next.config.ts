import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "printerdesksupport.com",
      },
      {
        protocol: "https",
        hostname: "www.precisionhearthealth.com",
      },
    ],
  },
};

export default nextConfig;
