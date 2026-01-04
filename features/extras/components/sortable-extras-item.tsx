"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical } from "lucide-react";
import type { Extra } from "@/db/schema";
import { cn } from "@/lib/utils";
import { DeleteExtraDialog } from "./delete-extra-dialog";
import { EditExtraDialog } from "./edit-extra-dialog";

export function ExtrasSortableItem({ item }: { item: Extra }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      className={cn(
        "flex items-center justify-between border border-border bg-background p-4",
        isDragging && "shadow-lg"
      )}
      ref={setNodeRef}
      style={style}
    >
      <div className="flex flex-1 items-center gap-3">
        <button
          {...attributes}
          {...listeners}
          className="cursor-grab touch-none active:cursor-grabbing"
          type="button"
        >
          <GripVertical className="size-5 text-muted-foreground" />
        </button>
        <div className="flex-1">
          <h3 className="font-medium">{item.name}</h3>
          <p className="font-medium text-muted-foreground text-sm">
            {item.price}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <EditExtraDialog extra={item} />
        <DeleteExtraDialog extraId={item.id} />
      </div>
    </div>
  );
}
