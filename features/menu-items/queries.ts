import "server-only";

import { asc, eq } from "drizzle-orm";
import db from "@/db";
import { menuItems } from "@/db/schema";

export function getMenuItems(categoryId: number) {
  return db.query.menuItems.findMany({
    where: eq(menuItems.categoryId, categoryId),
    orderBy: [asc(menuItems.order)],
  });
}

export async function getMaxMenuItemOrder(categoryId: number): Promise<number> {
  const items = await db.query.menuItems.findMany({
    where: eq(menuItems.categoryId, categoryId),
    columns: { order: true },
  });

  if (items.length === 0) {
    return -1;
  }

  return Math.max(...items.map((item) => item.order));
}

export function getMenuItem(id: number) {
  return db.query.menuItems.findFirst({
    where: eq(menuItems.id, id),
  });
}

export async function reorderMenuItems(itemIds: number[]): Promise<void> {
  await Promise.all(
    itemIds.map((id, index) =>
      db.update(menuItems).set({ order: index }).where(eq(menuItems.id, id))
    )
  );
}
