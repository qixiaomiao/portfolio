import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [{ source: "/projects", destination: "/#projects", permanent: false }];
  },
};

export default nextConfig;
