import type { MetadataRoute } from "next";

const BASE_URL = "https://prism-template-two.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/legal", "/privacy"],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
