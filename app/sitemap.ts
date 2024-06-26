import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://hnana.cc",
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1
        },
        {
            url: "https://hnana.cc/about",
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6

        },
        {
            url: "https://hnana.cc/writings",
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8
        },
        {
            url: "https://hnana.cc/craft",
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6
        }
    ]
}