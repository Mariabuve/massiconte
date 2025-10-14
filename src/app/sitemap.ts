import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.drmassimilianoconte.com";
  return [
    { url: `${base}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/blog`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/contact`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/aviso-legal`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/politica-de-privacidad`, changeFrequency: "yearly", priority: 0.3 },
  ];
}


