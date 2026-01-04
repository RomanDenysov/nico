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
import { useState } from "react";
import type { Extra } from "@/db/schema";
import { reorderExtrasAction } from "../actions";
import { ExtrasSortableItem } from "./sortable-extras-item";

export function SortableExtras({ items }: { items: Extra[] }) {
  const [localItems, setLocalItems] = useState(items);

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

    const oldIndex = localItems.findIndex((item) => item.id === active.id);
    const newIndex = localItems.findIndex((item) => item.id === over.id);

    const newItems = arrayMove(localItems, oldIndex, newIndex);
    setLocalItems(newItems);

    const itemIds = newItems.map((item) => item.id);
    await reorderExtrasAction(itemIds);
  };

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      sensors={sensors}
    >
      <SortableContext
        items={localItems.map((item) => item.id)}
        strategy={verticalListSortingStrategy}
      >
        <div className="space-y-4">
          {localItems.length === 0 ? (
            <p className="text-muted-foreground text-sm">Žiadne extras</p>
          ) : (
            localItems.map((item) => (
              <ExtrasSortableItem item={item} key={item.id} />
            ))
          )}
        </div>
      </SortableContext>
    </DndContext>
  );
}
