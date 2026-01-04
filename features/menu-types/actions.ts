"use server";

import { eq } from "drizzle-orm";
import { refresh, updateTag } from "next/cache";
import { z } from "zod";
import db from "@/db";
import { menuTypes, type NewMenuType } from "@/db/schema";
import { getMenuTypes, reorderMenuTypes } from "./queries";

const menuTypeSchema = z.object({
  name: z.string().min(1, "Názov je povinný"),
  slug: z.string().min(1, "Slug je povinný"),
  image: z.string().optional(),
});

export async function createMenuType(data: NewMenuType) {
  const [result] = await db.insert(menuTypes).values(data).returning();
  return result;
}

export async function updateMenuType(id: number, data: Partial<NewMenuType>) {
  const [result] = await db
    .update(menuTypes)
    .set(data)
    .where(eq(menuTypes.id, id))
    .returning();
  return result;
}

export async function deleteMenuType(id: number) {
  await db.delete(menuTypes).where(eq(menuTypes.id, id));
}

export async function createMenuTypeAction(formData: FormData) {
  const types = await getMenuTypes();
  const maxOrder =
    types.length > 0 ? Math.max(...types.map((t) => t.order)) : -1;

  const data = menuTypeSchema.parse({
    name: formData.get("name"),
    slug: formData.get("slug"),
    image: formData.get("image") || undefined,
  });

  const result = await createMenuType({ ...data, order: maxOrder + 1 });
  updateTag("menu-types");
  updateTag(`menu-type-id-${result.id}`);
  refresh();
}

export async function updateMenuTypeAction(formData: FormData) {
  const id = z.coerce.number().int().positive().parse(formData.get("id"));
  const data = menuTypeSchema.parse({
    name: formData.get("name"),
    slug: formData.get("slug"),
    image: formData.get("image") || undefined,
  });

  await updateMenuType(id, data);
  updateTag("menu-types");
  updateTag(`menu-type-id-${id}`);
  refresh();
}

export async function deleteMenuTypeAction(formData: FormData) {
  const id = z.coerce.number().int().positive().parse(formData.get("id"));
  await deleteMenuType(id);
  updateTag("menu-types");
  updateTag(`menu-type-id-${id}`);
  refresh();
}

export async function reorderMenuTypesAction(typeIds: number[]) {
  await reorderMenuTypes(typeIds);
  updateTag("menu-types");
  // Invalidate all affected menu types
  for (const id of typeIds) {
    updateTag(`menu-type-id-${id}`);
  }
  refresh();
}
