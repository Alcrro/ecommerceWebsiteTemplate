import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  sassOptions: {
    silenceDeprecations: ["legacy-js-api"],
  },
  fonts: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: ["**"],
      },
    ],
  },
};

export default nextConfig;
