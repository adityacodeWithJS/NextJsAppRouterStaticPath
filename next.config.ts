import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
  domains:['66974b0d02f3150fb66d25c5.mockapi.io','api.vercel.app','i.pinimg.com','i.pinimg.com','raw.githubusercontent.com']
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
