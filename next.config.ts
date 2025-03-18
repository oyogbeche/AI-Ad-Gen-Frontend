import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "**",
      },
    ],
    domains: [
      "oaidalleapiprodscus.blob.core.windows.net",
      "genz.ad",
      "2.img-dpreview.com",
      "www.sciencebuddies.org",
      " cdn.lucidpic.com",
    ],
  }
};

export default nextConfig;