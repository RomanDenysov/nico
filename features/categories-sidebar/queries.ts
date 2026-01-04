import "server-only";

import { asc, eq } from "drizzle-orm";
import db from "@/db";
import { menuCategories } from "@/db/schema";

export function getMenuCategories(typeId: number) {
  return db.query.menuCategories.findMany({
    where: eq(menuCategories.typeId, typeId),
    orderBy: [asc(menuCategories.order)],
  });
}

export function getMenuCategory(slug: string) {
  return db.query.menuCategories.findFirst({
    where: eq(menuCategories.slug, slug),
  });
}

export function getMenuCategoryById(id: number) {
  return db.query.menuCategories.findFirst({
    where: eq(menuCategories.id, id),
  });
}

export async function reorderMenuCategories(
  categoryIds: number[]
): Promise<void> {
  await Promise.all(
    categoryIds.map((id, index) =>
      db
        .update(menuCategories)
        .set({ order: index })
        .where(eq(menuCategories.id, id))
    )
  );
}
