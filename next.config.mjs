/** @type {import('next').NextConfig} */
const nextConfig = {
  // ── Image Optimization ───────────────────────────────────────
  images: {
    // Automatically serve WebP/AVIF for supported browsers
    formats: ["image/webp", "image/avif"],
    // Allow remote images from Unsplash (used in services drawers)
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    // Minimize layout shift
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // ── SEO Config ───────────────────────────────────────────────
  trailingSlash: false,

  // ── Security Headers ─────────────────────────────────────────
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "Content-Security-Policy",
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://images.unsplash.com; font-src 'self' data:;",
          },
        ],
      },
      {
        // Long-term caching for static assets
        source: "/images/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // ── Compiler / Build ─────────────────────────────────────────
  // Strip console.log in production
  compiler: {
    removeConsole: process.env.NODE_ENV === "production"
      ? { exclude: ["error", "warn"] }
      : false,
  },

  // ── Performance ───────────────────────────────────────────────
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
