import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
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
