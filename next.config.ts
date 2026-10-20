import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
  async redirects() {
    return [
      {
        source: "/blog/how-to-become-a-barista-in-singapore",
        destination: "/blog/how-to-become-a-barista-in-malaysia",
        permanent: true,
      },
      {
        source: "/blog/how-to-become-a-barista-in-Malaysia",
        destination: "/blog/how-to-become-a-barista-in-malaysia",
        permanent: true,
      },
      {
        source: "/lumax_logo.jpg",
        destination: "/logo.png",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};

export default nextConfig;
