/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["dummyimage.com", "image.tmdb.org"],
  },
};

module.exports = nextConfig;
