/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "",
  assetPrefix: "./",
  distDir: "out",
  trailingSlash: true,
  // Prevent files from being created with underscore prefix
  webpack: (config) => {
    config.output.assetModuleFilename = "assets/[hash][ext]";
    config.output.chunkFilename = "assets/[name].[chunkhash].js";
    config.output.publicPath = "./";
    return config;
  },
};

module.exports = nextConfig;
