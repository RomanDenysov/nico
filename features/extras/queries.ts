import "server-only";

import { asc, eq } from "drizzle-orm";
import db from "@/db";
import { extras } from "@/db/schema";

export function getExtras() {
  return db.query.extras.findMany({
    orderBy: [asc(extras.order)],
  });
}

export function getExtraById(id: number) {
  return db.query.extras.findFirst({
    where: eq(extras.id, id),
  });
}

export async function reorderExtras(extraIds: number[]): Promise<void> {
  await Promise.all(
    extraIds.map((id, index) =>
      db.update(extras).set({ order: index }).where(eq(extras.id, id))
    )
  );
}
