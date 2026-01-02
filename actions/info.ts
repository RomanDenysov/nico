"use server";

import { cacheLife, cacheTag, updateTag } from "next/cache";
import { getRestaurantInfo, setRestaurantInfo } from "@/lib/redis";
import type { RestaurantInfo } from "@/lib/types";

export async function getRestaurantInfoCached(): Promise<RestaurantInfo | null> {
  "use cache";
  cacheLife("max");
  cacheTag("config:info");
  return getRestaurantInfo();
}

export async function updateRestaurantInfo(
  data: RestaurantInfo
): Promise<void> {
  await setRestaurantInfo(data);
  updateTag("config:info");
}
