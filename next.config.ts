import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
