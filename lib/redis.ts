import { Redis } from "@upstash/redis";
import type { MenuItem, ExtraItem, RestaurantInfo, Category, AboutItem } from "./types";

const redis = new Redis({
  url: process.env.KV_REST_API_URL!,
  token: process.env.KV_REST_API_TOKEN!,
});

// Menu functions - support menu:type:category format
export async function getMenuCategory(
  type: string,
  category: string,
): Promise<MenuItem[]> {
  const data = await redis.get<MenuItem[]>(`menu:${type}:${category}`);
  return data ?? [];
}

export async function setMenuCategory(
  type: string,
  category: string,
  items: MenuItem[],
): Promise<void> {
  await redis.set(`menu:${type}:${category}`, items);
}

export async function getExtras(): Promise<ExtraItem[]> {
  const data = await redis.get<ExtraItem[]>("menu:extras");
  return data ?? [];
}

export async function setExtras(items: ExtraItem[]): Promise<void> {
  await redis.set("menu:extras", items);
}

export async function getRestaurantInfo(): Promise<RestaurantInfo | null> {
  const data = await redis.get<RestaurantInfo>("config:info");
  return data;
}

export async function setRestaurantInfo(info: RestaurantInfo): Promise<void> {
  await redis.set("config:info", info);
}

export async function getAboutItems(): Promise<AboutItem[]> {
  const data = await redis.get<AboutItem[]>("config:about");
  return data ?? [];
}

export async function setAboutItems(items: AboutItem[]): Promise<void> {
  await redis.set("config:about", items);
}

export async function getCategories(): Promise<Category[]> {
  const data = await redis.get<Category[]>("config:categories");
  return data ?? [];
}

export async function setCategories(categories: Category[]): Promise<void> {
  await redis.set("config:categories", categories);
}

export async function getCategory(id: string): Promise<Category | null> {
  const categories = await getCategories();
  return categories.find((cat) => cat.id === id) ?? null;
}

export { redis };
