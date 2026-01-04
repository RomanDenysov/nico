"use client";

import {
  closestCenter,
  DndContext,
  type DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { MenuType } from "@/db/schema";
import { cn } from "@/lib/utils";
import { reorderMenuTypesAction } from "../actions";
import { MenuTypesSortableItem } from "./menu-types-sortable-item";

export function MenuTypesSortableList({ types }: { types: MenuType[] }) {
  const pathname = usePathname();
  const [localTypes, setLocalTypes] = useState(types);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over || active.id === over.id) {
      return;
    }

    const oldIndex = localTypes.findIndex((type) => type.id === active.id);
    const newIndex = localTypes.findIndex((type) => type.id === over.id);

    const newTypes = arrayMove(localTypes, oldIndex, newIndex);
    setLocalTypes(newTypes);

    const typeIds = newTypes.map((type) => type.id);
    await reorderMenuTypesAction(typeIds);
  };

  const isTypeActive = (id: number) => pathname.startsWith(`/admin/${id}`);
  const isExtrasActive = pathname === "/admin/extras";

  return (
    <nav className="flex-1 grow overflow-y-auto">
      <DndContext
        collisionDetection={closestCenter}
        id="sortable-menu-types"
        onDragEnd={handleDragEnd}
        sensors={sensors}
      >
        <SortableContext
          items={localTypes.map((type) => type.id)}
          strategy={verticalListSortingStrategy}
        >
          <ul className="flex flex-col">
            {localTypes.map((type) => (
              <MenuTypesSortableItem
                isActive={isTypeActive(type.id)}
                key={type.id}
                type={type}
              />
            ))}
            <li>
              <Link
                className={cn(
                  "block border-border border-b py-3 pr-4 pl-10 text-sm transition-colors hover:bg-muted/50",
                  isExtrasActive && "bg-muted font-semibold"
                )}
                href="/admin/extras"
              >
                Extras
              </Link>
            </li>
          </ul>
        </SortableContext>
      </DndContext>
    </nav>
  );
}
