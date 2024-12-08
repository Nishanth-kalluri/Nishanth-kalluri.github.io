import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enables static HTML export
  trailingSlash: true, // Adds trailing slashes to paths
  assetPrefix: "/Nishanth-kalluri.github.io/", // Use the repository name
  basePath: "/Nishanth-kalluri.github.io", // Set the base path to match GitHub Pages' structure
};

export default nextConfig;
