"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import db from "@/db";
import { extras, type NewExtra } from "@/db/schema";

const extraSchema = z.object({
  name: z.string().min(1, "Názov je povinný"),
  price: z.string().min(1, "Cena je povinná"),
  order: z.coerce.number().int().min(0),
});

export async function createExtra(data: NewExtra) {
  const [result] = await db.insert(extras).values(data).returning();
  return result;
}

export async function updateExtra(id: number, data: Partial<NewExtra>) {
  const [result] = await db
    .update(extras)
    .set(data)
    .where(eq(extras.id, id))
    .returning();
  return result;
}

export async function deleteExtra(id: number) {
  await db.delete(extras).where(eq(extras.id, id));
}

export async function createExtraAction(formData: FormData) {
  const data = extraSchema.parse({
    name: formData.get("name"),
    price: formData.get("price"),
    order: formData.get("order"),
  });

  await createExtra(data);
  revalidatePath("/admin/extras");
}

export async function updateExtraAction(formData: FormData) {
  const id = z.coerce.number().int().positive().parse(formData.get("id"));
  const data = extraSchema.parse({
    name: formData.get("name"),
    price: formData.get("price"),
    order: formData.get("order"),
  });

  await updateExtra(id, data);
  revalidatePath("/admin/extras");
}

export async function deleteExtraAction(formData: FormData) {
  const id = z.coerce.number().int().positive().parse(formData.get("id"));
  await deleteExtra(id);
  revalidatePath("/admin/extras");
}

export async function reorderExtrasAction(extraIds: number[]) {
  await Promise.all(
    extraIds.map((id, index) =>
      db.update(extras).set({ order: index }).where(eq(extras.id, id))
    )
  );
  revalidatePath("/admin/extras");
}
