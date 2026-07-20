import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    formats: ["image/avif", "image/webp"]
  },

  poweredByHeader: false,

  compress: true,

  async headers() {
    ...
  }
};

export default nextConfig;

  poweredByHeader: false,

  compress: true,

  async headers() {
    // ...
  }
  },

  images: {
    formats: ["image/avif", "image/webp"]
  },

  poweredByHeader: false,

  compress: true,

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff"
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin"
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN"
          }
        ]
      }
    ];
  }
};

export default nextConfig;
