import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Enforces consistent URL structure for search engine bots */
  trailingSlash: false, 

  /* Optimizes production builds and handles minor layout compilation */
  reactStrictMode: true,
  poweredByHeader: false, // Security best practice: hides that you are running Next.js

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  
  // Cast to any to prevent TypeScript from blocking the build over local dev network configs
  ...({
    allowedDevOrigins: ['192.168.29.82'],
  } as any),
};

export default nextConfig;