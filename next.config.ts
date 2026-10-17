import type { NextConfig } from "next";

/**
 * Static export for GitHub Pages (project page → /mo-portfolio-v3/).
 * The deploy workflow builds with `npm run build` and uploads `out/`.
 */
const nextConfig: NextConfig = {
  output: "export",
  basePath: "/mo-portfolio-v3",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
