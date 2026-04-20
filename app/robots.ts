import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://laneloaf.1sec.plus/sitemap.xml",
    host: "https://laneloaf.1sec.plus",
  };
}
