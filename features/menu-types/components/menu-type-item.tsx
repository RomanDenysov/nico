"use client";

import type { MenuType } from "@/db/schema";
import { DeleteMenuTypeDialog } from "./delete-menu-type-dialog";
import { EditMenuTypeDialog } from "./edit-menu-type-dialog";

export function MenuTypeItem({ type }: { type: MenuType }) {
  return (
    <>
      <EditMenuTypeDialog type={type} />
      <DeleteMenuTypeDialog typeId={type.id} />
    </>
  );
}
