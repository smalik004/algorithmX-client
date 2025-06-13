/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "34.121.63.130",
        port: "5000",
        pathname: "/blog-images/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "5000",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "thealgorithmx.com",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "thealgorithmx.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
