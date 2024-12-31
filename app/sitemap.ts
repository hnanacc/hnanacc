import fs from "node:fs";
import path from "node:path";
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
  const contentDirec = path.join(process.cwd(), "content");
  const contentNames = fs.readdirSync(contentDirec);

  return contentNames.map((fNameWithExt: string) => {
    const fName = fNameWithExt.split(".")[0].trim();
    return {
      url: `${BASE_URL}/writings/${fName}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    };
  });
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [...pages(), ...writings()];
}
