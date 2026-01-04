"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import db from "@/db";
import { menuItems, type NewMenuItem } from "@/db/schema";
import { getMaxMenuItemOrder } from "./queries";

const menuItemSchema = z.object({
  name: z.string().min(1, "Názov je povinný"),
  description: z.string().optional(),
  price: z.string().min(1, "Cena je povinná"),
  categoryId: z.coerce.number().int().positive(),
  isComboMenu: z.coerce.boolean().default(false),
});

export async function createMenuItem(data: NewMenuItem) {
  const [result] = await db.insert(menuItems).values(data).returning();
  return result;
}

export async function updateMenuItem(id: number, data: Partial<NewMenuItem>) {
  const [result] = await db
    .update(menuItems)
    .set(data)
    .where(eq(menuItems.id, id))
    .returning();
  return result;
}

export async function deleteMenuItem(id: number) {
  await db.delete(menuItems).where(eq(menuItems.id, id));
}

export async function createMenuItemAction(formData: FormData) {
  const categoryId = z.coerce
    .number()
    .int()
    .positive()
    .parse(formData.get("categoryId"));
  const maxOrder = await getMaxMenuItemOrder(categoryId);

  const data = menuItemSchema.parse({
    name: formData.get("name"),
    description: formData.get("description") || undefined,
    price: formData.get("price"),
    categoryId,
    isComboMenu:
      formData.get("isComboMenu") === "on" ||
      formData.get("isComboMenu") === "true",
  });

  await createMenuItem({ ...data, order: maxOrder + 1 });
  revalidatePath("/admin");
}

export async function updateMenuItemAction(formData: FormData) {
  const id = z.coerce.number().int().positive().parse(formData.get("id"));
  const data = menuItemSchema.parse({
    name: formData.get("name"),
    description: formData.get("description") || undefined,
    price: formData.get("price"),
    categoryId: formData.get("categoryId"),
    isComboMenu:
      formData.get("isComboMenu") === "on" ||
      formData.get("isComboMenu") === "true",
  });

  await updateMenuItem(id, data);
  revalidatePath("/admin");
}

export async function deleteMenuItemAction(formData: FormData) {
  const id = z.coerce.number().int().positive().parse(formData.get("id"));
  await deleteMenuItem(id);
  revalidatePath("/admin");
}

export async function reorderMenuItemsAction(itemIds: number[]) {
  const { reorderMenuItems } = await import("./queries");
  await reorderMenuItems(itemIds);
  revalidatePath("/admin");
}
