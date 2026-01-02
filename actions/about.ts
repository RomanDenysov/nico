"use server";

import { cacheTag, updateTag } from "next/cache";
import { getAboutItems, setAboutItems } from "@/lib/redis";
import type { AboutItem } from "@/lib/types";

export async function getAbout(): Promise<AboutItem[]> {
  "use cache";
  cacheTag("config:about");
  return getAboutItems();
}

export async function updateAboutItem(
  id: string,
  data: Partial<AboutItem>,
): Promise<void> {
  const items = await getAboutItems();
  const index = items.findIndex((i) => i.id === id);
  if (index === -1) {
    throw new Error("Položka nenájdená");
  }
  items[index] = { ...items[index], ...data };
  await setAboutItems(items);
  updateTag("config:about");
}

export async function addAboutItem(
  item: Omit<AboutItem, "id">,
): Promise<void> {
  const items = await getAboutItems();
  const newItem: AboutItem = {
    ...item,
    id: crypto.randomUUID(),
  };
  items.push(newItem);
  await setAboutItems(items);
  updateTag("config:about");
}

export async function deleteAboutItem(id: string): Promise<void> {
  const items = await getAboutItems();
  const filtered = items.filter((i) => i.id !== id);
  await setAboutItems(filtered);
  updateTag("config:about");
}

export async function reorderAboutItems(orderedIds: string[]): Promise<void> {
  const items = await getAboutItems();
  const ordered = orderedIds
    .map((id) => items.find((i) => i.id === id))
    .filter((item): item is AboutItem => item !== undefined);
  await setAboutItems(ordered);
  updateTag("config:about");
}
