import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.sakengjelderdyr.no" }],
        destination: "https://sakengjelderdyr.no/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
