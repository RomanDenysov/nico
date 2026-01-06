"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import type { MenuCategory } from "@/db/schema";
import { useMounted } from "@/hooks/use-mounted";
import { cn } from "@/lib/utils";

export function CategoriesSortableItem({
  category,
  isActive,
  typeId,
  children,
}: {
  category: MenuCategory;
  isActive: boolean;
  typeId: number;
  children: ReactNode;
}) {
  const mounted = useMounted();
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: category.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  if (!mounted) {
    return null;
  }

  return (
    <li className="group relative" ref={setNodeRef} style={style}>
      <Link
        className={cn(
          "flex items-center gap-2 border-border border-b px-4 py-3 pr-16 text-sm transition-colors hover:bg-muted/50",
          isActive && "bg-muted font-semibold",
          isDragging && "shadow-lg"
        )}
        href={`/admin/${typeId}/${category.slug}`}
      >
        <button
          id={`sortable-category-item-${category.id}`}
          {...attributes}
          {...listeners}
          className="cursor-grab touch-none opacity-0 transition-opacity active:cursor-grabbing group-hover:opacity-100"
          onClick={(e) => e.preventDefault()}
          type="button"
        >
          <GripVertical className="size-4 text-muted-foreground" />
        </button>
        <span>{category.name}</span>
      </Link>
      <div className="absolute top-1/2 right-2 flex -translate-y-1/2 items-center gap-1 opacity-0 transition-opacity group-hover:opacity-100">
        {children}
      </div>
    </li>
  );
}
