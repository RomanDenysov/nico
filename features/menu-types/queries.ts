import "server-only";

import { asc, eq } from "drizzle-orm";
import db from "@/db";
import { menuTypes } from "@/db/schema";

export function getMenuTypes() {
  return db.query.menuTypes.findMany({
    orderBy: [asc(menuTypes.order)],
  });
}

export function getMenuType(id: number) {
  return db.query.menuTypes.findFirst({
    where: eq(menuTypes.id, id),
  });
}

export function getMenuTypeById(id: number) {
  return db.query.menuTypes.findFirst({
    where: eq(menuTypes.id, id),
  });
}

export async function reorderMenuTypes(typeIds: number[]): Promise<void> {
  await Promise.all(
    typeIds.map((id, index) =>
      db.update(menuTypes).set({ order: index }).where(eq(menuTypes.id, id))
    )
  );
}
