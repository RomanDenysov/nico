import type { MetadataRoute } from "next";
import env from "@/env";
import { getPublicMenuTypes } from "@/features/public-menu/queries";

const BASE_URL = env.NEXT_PUBLIC_APP_URL;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const menuTypes = await getPublicMenuTypes();

  const menuPages = menuTypes.map((type) => ({
    url: `${BASE_URL}/${type.slug}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 0.8,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...menuPages,
  ];
}
