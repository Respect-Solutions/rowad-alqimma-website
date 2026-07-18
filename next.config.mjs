import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin();

// Cover images for Articles are served by the external seodashboard API —
// allow that host (falls back to a permissive pattern if the env var isn't set yet).
function articlesImagePatterns() {
  const apiUrl = process.env.SEODASHBOARD_API_URL;

  if (!apiUrl) {
    return [
      { protocol: "https", hostname: "**" },
      { protocol: "http", hostname: "**" },
    ];
  }

  try {
    const { protocol, hostname } = new URL(apiUrl);
    return [{ protocol: protocol.replace(":", ""), hostname }];
  } catch {
    return [];
  }
}

const nextConfig = {
  compress: true,

  images: {
    remotePatterns: articlesImagePatterns(),
  },

  async headers() {
    return [
      {
        // Long-term cache for all public static assets (images, SVGs, fonts)
        source: "/assets/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default withNextIntl(nextConfig);
