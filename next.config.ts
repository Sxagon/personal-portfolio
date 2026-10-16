import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  poweredByHeader: false,
  experimental: {
    // Inline the (small) stylesheet into the HTML so it does not block the first paint.
    inlineCss: true,
  },
  images: {
    // Allow remote stock photos while the real photo is not in /public yet.
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
};

export default withNextIntl(nextConfig);
