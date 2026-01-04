"use client";

import { use } from "react";
import type { MenuType } from "@/db/schema";
import { CreateMenuTypeDialog } from "./create-menu-type-dialog";
import { MenuTypesSortableList } from "./menu-types-sortable-list";

export function MenuTypesSidebar({
  promiseTypes,
}: {
  promiseTypes: Promise<MenuType[]>;
}) {
  const initialTypes = use(promiseTypes);

  return (
    <aside className="flex min-h-full w-48 flex-col bg-background">
      <div className="border-border border-b p-4">
        <CreateMenuTypeDialog />
      </div>
      <MenuTypesSortableList types={initialTypes} />
    </aside>
  );
}
