import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve originals directly: Vercel's optimizer is returning HTTP 402
    // (OPTIMIZED_IMAGE_REQUEST_PAYMENT_REQUIRED) for uncached product images.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-37c7085b3a964a70aee9d7586ef459c4.r2.dev",
      },
    ],
    // Product photos on R2 are static — cache optimized variants for 31 days
    // instead of the 4h default so popular sizes aren't repeatedly re-written.
    minimumCacheTTL: 2678400,
    // Fewer width buckets means fewer unique (image x width) cache writes.
    // Drops the rarely-needed 2048/3840 desktop tier and unused small sizes.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [64, 128, 256, 384],
  },
};

export default nextConfig;
