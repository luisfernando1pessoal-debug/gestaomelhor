import { MetadataRoute } from "next";
import { getAllNicheSlugs } from "@/lib/niches";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://seudominio.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  const nichePages = getAllNicheSlugs().map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...nichePages,
  ];
}
