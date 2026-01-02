"use server";

import { cacheTag, updateTag } from "next/cache";
import { getMenuCategory, setMenuCategory, getExtras, setExtras, getCategories, setCategories, getCategory } from "@/lib/redis";
import type { MenuItem, ExtraItem, Category } from "@/lib/types";

// Helper to parse category string (format: "type:category" or legacy "category")
function parseCategory(category: string): { type: string; cat: string } {
  if (category.includes(':')) {
    const [type, ...catParts] = category.split(':');
    return { type, cat: catParts.join(':') };
  }
  // Legacy format - assume bistro for backward compatibility
  return { type: 'bistro', cat: category };
}

export async function getMenuItems(type: string, category: string): Promise<MenuItem[]> {
  "use cache";
  cacheTag(`menu:${type}:${category}`);
  return getMenuCategory(type, category);
}

export async function getMenuCategoryCached(category: string): Promise<MenuItem[]> {
  "use cache";
  const { type, cat } = parseCategory(category);
  cacheTag(`menu:${type}:${cat}`);
  return getMenuCategory(type, cat);
}

export async function getExtrasCached(): Promise<ExtraItem[]> {
  "use cache";
  cacheTag("menu:extras");
  return getExtras();
}

export async function addMenuItem(
  type: string,
  category: string,
  item: Omit<MenuItem, "id">,
): Promise<void> {
  const items = await getMenuCategory(type, category);
  const newItem: MenuItem = {
    ...item,
    id: crypto.randomUUID(),
  };
  items.push(newItem);
  await setMenuCategory(type, category, items);
  updateTag(`menu:${type}:${category}`);
}

export async function updateMenuItem(
  type: string,
  category: string,
  id: string,
  item: Partial<MenuItem>,
): Promise<void> {
  const items = await getMenuCategory(type, category);
  const index = items.findIndex((i) => i.id === id);
  if (index === -1) {
    throw new Error("Položka nenájdená");
  }
  items[index] = { ...items[index], ...item };
  await setMenuCategory(type, category, items);
  updateTag(`menu:${type}:${category}`);
}

export async function deleteMenuItem(
  type: string,
  category: string,
  id: string,
): Promise<void> {
  const items = await getMenuCategory(type, category);
  const filtered = items.filter((i) => i.id !== id);
  await setMenuCategory(type, category, filtered);
  updateTag(`menu:${type}:${category}`);
}

export async function reorderMenuItems(
  type: string,
  category: string,
  orderedIds: string[],
): Promise<void> {
  const items = await getMenuCategory(type, category);
  const ordered = orderedIds
    .map((id) => items.find((i) => i.id === id))
    .filter((item): item is MenuItem => item !== undefined);
  await setMenuCategory(type, category, ordered);
  updateTag(`menu:${type}:${category}`);
}

// Legacy functions for backward compatibility with category string format
export async function addMenuItemLegacy(
  category: string,
  item: Omit<MenuItem, "id">,
): Promise<void> {
  const { type, cat } = parseCategory(category);
  await addMenuItem(type, cat, item);
}

export async function updateMenuItemLegacy(
  category: string,
  id: string,
  item: Partial<MenuItem>,
): Promise<void> {
  const { type, cat } = parseCategory(category);
  await updateMenuItem(type, cat, id, item);
}

export async function deleteMenuItemLegacy(
  category: string,
  id: string,
): Promise<void> {
  const { type, cat } = parseCategory(category);
  await deleteMenuItem(type, cat, id);
}

export async function reorderMenuItemsLegacy(
  category: string,
  orderedIds: string[],
): Promise<void> {
  const { type, cat } = parseCategory(category);
  await reorderMenuItems(type, cat, orderedIds);
}

export async function addExtraItem(item: Omit<ExtraItem, "id">): Promise<void> {
  const items = await getExtras();
  const newItem: ExtraItem = {
    ...item,
    id: crypto.randomUUID(),
  };
  items.push(newItem);
  await setExtras(items);
  updateTag("menu:extras");
}

export async function updateExtraItem(
  id: string,
  item: Partial<ExtraItem>,
): Promise<void> {
  const items = await getExtras();
  const index = items.findIndex((i) => i.id === id);
  if (index === -1) {
    throw new Error("Položka nenájdená");
  }
  items[index] = { ...items[index], ...item };
  await setExtras(items);
  updateTag("menu:extras");
}

export async function deleteExtraItem(id: string): Promise<void> {
  const items = await getExtras();
  const filtered = items.filter((i) => i.id !== id);
  await setExtras(filtered);
  updateTag("menu:extras");
}

export async function getCategoriesCached(): Promise<Category[]> {
  "use cache";
  cacheTag("config:categories");
  return getCategories();
}

export async function getCategoryCached(id: string): Promise<Category | null> {
  "use cache";
  cacheTag("config:categories");
  return getCategory(id);
}

export async function addCategory(category: Omit<Category, "id">): Promise<void> {
  const categories = await getCategories();
  const newCategory: Category = {
    ...category,
    id: crypto.randomUUID(),
  };
  categories.push(newCategory);
  await setCategories(categories);
  updateTag("config:categories");
}

export async function updateCategory(id: string, category: Partial<Category>): Promise<void> {
  const categories = await getCategories();
  const index = categories.findIndex((cat) => cat.id === id);
  if (index === -1) {
    throw new Error("Kategória nenájdená");
  }
  categories[index] = { ...categories[index], ...category };
  await setCategories(categories);
  updateTag("config:categories");
}

export async function deleteCategory(id: string): Promise<void> {
  const categories = await getCategories();
  const filtered = categories.filter((cat) => cat.id !== id);
  await setCategories(filtered);
  updateTag("config:categories");
}
