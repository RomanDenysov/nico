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
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { MenuCategory } from "@/db/schema";
import { cn } from "@/lib/utils";
import { reorderMenuCategoriesAction } from "../actions";
import { CreateCategoryDialog } from "./create-category-dialog";
import { DeleteCategoryDialog } from "./delete-category-dialog";
import { EditCategoryDialog } from "./edit-category-dialog";

interface CategoriesSidebarProps {
  typeId: number;
  categories: MenuCategory[];
}

export function CategoriesSidebar({
  typeId,
  categories,
}: CategoriesSidebarProps) {
  const pathname = usePathname();
  const [localCategories, setLocalCategories] = useState(categories);

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

    const oldIndex = localCategories.findIndex((cat) => cat.id === active.id);
    const newIndex = localCategories.findIndex((cat) => cat.id === over.id);

    const newCategories = arrayMove(localCategories, oldIndex, newIndex);
    setLocalCategories(newCategories);

    const categoryIds = newCategories.map((cat) => cat.id);
    await reorderMenuCategoriesAction(categoryIds);
  };

  const isActive = (categorySlug: string) => {
    return pathname === `/admin/${typeId}/${categorySlug}`;
  };

  return (
    <aside className="flex min-h-full w-48 flex-col bg-background">
      <div className="border-border border-b p-4">
        <CreateCategoryDialog />
      </div>
      <nav className="flex-1 overflow-y-auto">
        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
          sensors={sensors}
        >
          <SortableContext
            items={localCategories.map((cat) => cat.id)}
            strategy={verticalListSortingStrategy}
          >
            <ul className="flex flex-col">
              {localCategories.length === 0 ? (
                <li className="px-4 py-3 text-muted-foreground text-sm">
                  Žiadne kategórie
                </li>
              ) : (
                localCategories.map((category) => (
                  <SortableCategoryItem
                    category={category}
                    isActive={isActive(category.slug)}
                    key={category.id}
                    typeId={typeId}
                  />
                ))
              )}
            </ul>
          </SortableContext>
        </DndContext>
      </nav>
    </aside>
  );
}

function SortableCategoryItem({
  category,
  isActive,
  typeId,
}: {
  category: MenuCategory;
  isActive: boolean;
  typeId: number;
}) {
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
        <EditCategoryDialog category={category} typeId={typeId} />
        <DeleteCategoryDialog categoryId={category.id} />
      </div>
    </li>
  );
}
