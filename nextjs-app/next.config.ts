import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: isProd ? "export" : undefined, // Enable static export only for production
  trailingSlash: true, // Adds trailing slashes to paths
  assetPrefix: isProd ? "/Nishanth-kalluri.github.io/" : undefined, // Use the repository name in production
  basePath: isProd ? "/Nishanth-kalluri.github.io" : undefined, // Set the base path only for production
};

export default nextConfig;
