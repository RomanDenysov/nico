"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import db from "@/db";
import { menuCategories, type NewMenuCategory } from "@/db/schema";
import { getMenuCategories, reorderMenuCategories } from "./queries";

const menuCategorySchema = z.object({
  name: z.string().min(1, "Názov je povinný"),
  slug: z.string().min(1, "Slug je povinný"),
  description: z.string().optional(),
  typeId: z.coerce.number().int().positive(),
});

export async function createMenuCategory(data: NewMenuCategory) {
  const [result] = await db.insert(menuCategories).values(data).returning();
  return result;
}

export async function updateMenuCategory(
  id: number,
  data: Partial<NewMenuCategory>
) {
  const [result] = await db
    .update(menuCategories)
    .set(data)
    .where(eq(menuCategories.id, id))
    .returning();
  return result;
}

export async function deleteMenuCategory(id: number) {
  await db.delete(menuCategories).where(eq(menuCategories.id, id));
}

export async function createMenuCategoryAction(formData: FormData) {
  const typeId = z.coerce
    .number()
    .int()
    .positive()
    .parse(formData.get("typeId"));
  const categories = await getMenuCategories(typeId);
  const maxOrder =
    categories.length > 0 ? Math.max(...categories.map((c) => c.order)) : -1;

  const data = menuCategorySchema.parse({
    name: formData.get("name"),
    slug: formData.get("slug"),
    description: formData.get("description") || undefined,
    typeId,
  });

  await createMenuCategory({ ...data, order: maxOrder + 1 });
  revalidatePath("/admin");
}

export async function updateMenuCategoryAction(formData: FormData) {
  const id = z.coerce.number().int().positive().parse(formData.get("id"));
  const data = menuCategorySchema.parse({
    name: formData.get("name"),
    slug: formData.get("slug"),
    description: formData.get("description") || undefined,
    typeId: formData.get("typeId"),
  });

  await updateMenuCategory(id, data);
  revalidatePath("/admin");
}

export async function deleteMenuCategoryAction(formData: FormData) {
  const id = z.coerce.number().int().positive().parse(formData.get("id"));
  await deleteMenuCategory(id);
  revalidatePath("/admin");
}

export async function reorderMenuCategoriesAction(categoryIds: number[]) {
  await reorderMenuCategories(categoryIds);
  revalidatePath("/admin");
}
