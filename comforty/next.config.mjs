/** @type {import('next').NextConfig} */
const nextConfig = {
  // define hostname
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

export default nextConfig;
