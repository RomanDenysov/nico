import "server-only";

import { asc, eq } from "drizzle-orm";
import { cacheLife, cacheTag } from "next/cache";
import db from "@/db";
import {
  type Extra,
  extras,
  type MenuCategory,
  type MenuItem,
  type MenuType,
  menuCategories,
  menuItems,
  menuTypes,
} from "@/db/schema";

/**
 * Get all menu types for homepage menu cards.
 * Cached with tag-based invalidation for admin updates.
 */
export async function getPublicMenuTypes(): Promise<MenuType[]> {
  "use cache";
  cacheLife("max");
  cacheTag("menu-types");

  return await db.query.menuTypes.findMany({
    orderBy: [asc(menuTypes.order)],
  });
}

/**
 * Get complete menu data for a specific menu type (by slug).
 * Returns type, categories with items, and combo menu item if present.
 * Cached with granular tags for efficient invalidation.
 */
export async function getPublicMenuByTypeSlug(typeSlug: string): Promise<{
  type: MenuType;
  categories: Array<{
    category: MenuCategory;
    items: MenuItem[];
  }>;
  comboItem: MenuItem | null;
}> {
  "use cache";
  cacheLife("max");
  cacheTag("menu-types");
  cacheTag(`menu-type-${typeSlug}`);

  // Get menu type by slug
  const type = await db.query.menuTypes.findFirst({
    where: eq(menuTypes.slug, typeSlug),
  });

  if (!type) {
    throw new Error(`Menu type not found: ${typeSlug}`);
  }

  // Tag with numeric ID for stable invalidation
  cacheTag(`menu-type-id-${type.id}`);

  // Get all categories for this menu type, ordered
  const categories = await db.query.menuCategories.findMany({
    where: eq(menuCategories.typeId, type.id),
    orderBy: [asc(menuCategories.order)],
  });

  // Get all items for each category, ordered
  const categoriesWithItems = await Promise.all(
    categories.map(async (category) => {
      const items = await db.query.menuItems.findMany({
        where: eq(menuItems.categoryId, category.id),
        orderBy: [asc(menuItems.order)],
      });

      return {
        category,
        items,
      };
    })
  );

  // Find combo menu item (first item with isComboMenu === true)
  let comboItem: MenuItem | null = null;
  for (const { items } of categoriesWithItems) {
    const combo = items.find((item) => item.isComboMenu);
    if (combo) {
      comboItem = combo;
      break;
    }
  }

  return {
    type,
    categories: categoriesWithItems,
    comboItem,
  };
}

/**
 * Get all extras for display on menu pages.
 * Cached with tag-based invalidation for admin updates.
 */
export async function getPublicExtras(): Promise<Extra[]> {
  "use cache";
  cacheLife("max");
  cacheTag("extras");

  return await db.query.extras.findMany({
    orderBy: [asc(extras.order)],
  });
}
