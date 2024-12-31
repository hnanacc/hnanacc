import { MetadataRoute } from "next";
import { BASE_URL } from "@/lib/constants";

function pages(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE_URL}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/writings`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/projects`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}

function writings(): MetadataRoute.Sitemap {
  return [];
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [...pages(), ...writings()];
}
