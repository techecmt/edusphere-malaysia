import type { MetadataRoute } from "next";
import { absoluteUrl } from "./data/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/api/",
      },
      {
        userAgent: "GPTBot",
        allow: ["/", "/llms.txt", "/llms-full.txt"],
        disallow: "/api/",
      },
      {
        userAgent: "ChatGPT-User",
        allow: ["/", "/llms.txt", "/llms-full.txt"],
        disallow: "/api/",
      },
      {
        userAgent: "PerplexityBot",
        allow: ["/", "/llms.txt", "/llms-full.txt"],
        disallow: "/api/",
      },
      {
        userAgent: "ClaudeBot",
        allow: ["/", "/llms.txt", "/llms-full.txt"],
        disallow: "/api/",
      },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
