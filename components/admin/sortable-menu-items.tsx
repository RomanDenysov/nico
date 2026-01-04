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
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  deleteMenuItemAction,
  reorderMenuItemsAction,
} from "@/features/menu-items/actions";
import { cn } from "@/lib/utils";

interface MenuItem {
  id: number;
  name: string;
  description: string | null;
  price: string;
  order: number;
  isComboMenu: boolean;
}

interface SortableMenuItemsProps {
  items: MenuItem[];
  onEdit: (item: MenuItem) => void;
}

function SortableItem({
  item,
  onEdit,
}: {
  item: MenuItem;
  onEdit: (item: MenuItem) => void;
}) {
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
        "flex items-start justify-between border border-border bg-background p-4",
        isDragging && "shadow-lg"
      )}
      ref={setNodeRef}
      style={style}
    >
      <button
        id={`sortable-menu-item-${item.id}`}
        {...attributes}
        {...listeners}
        className="mr-2 cursor-grab touch-none active:cursor-grabbing"
        type="button"
      >
        <GripVertical className="size-5 text-muted-foreground" />
      </button>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <h3 className="font-medium">{item.name}</h3>
          {item.isComboMenu && (
            <span className="bg-brand/20 px-2 py-0.5 text-xs">Combo Menu</span>
          )}
        </div>
        <p className="font-medium text-muted-foreground text-sm">
          {item.price}
        </p>
        {item.description && (
          <p className="mt-1 text-muted-foreground text-sm">
            {item.description}
          </p>
        )}
      </div>
      <div className="flex items-center gap-2">
        <Button
          className="rounded-none"
          onClick={() => onEdit(item)}
          size="sm"
          type="button"
          variant="outline"
        >
          Upraviť
        </Button>
        <DeleteMenuItemDialog itemId={item.id} />
      </div>
    </div>
  );
}

export function SortableMenuItems({ items, onEdit }: SortableMenuItemsProps) {
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

    // Update order in database
    const itemIds = newItems.map((item) => item.id);
    await reorderMenuItemsAction(itemIds);
  };

  return (
    <DndContext
      collisionDetection={closestCenter}
      id="sortable-menu-items"
      onDragEnd={handleDragEnd}
      sensors={sensors}
    >
      <SortableContext
        items={localItems.map((item) => item.id)}
        strategy={verticalListSortingStrategy}
      >
        <div className="space-y-4">
          {localItems.length === 0 ? (
            <p className="text-muted-foreground text-sm">Žiadne položky</p>
          ) : (
            localItems.map((item) => (
              <SortableItem item={item} key={item.id} onEdit={onEdit} />
            ))
          )}
        </div>
      </SortableContext>
    </DndContext>
  );
}

function DeleteMenuItemDialog({ itemId }: { itemId: number }) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          className="rounded-none"
          size="sm"
          type="button"
          variant="destructive"
        >
          Zmazať
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="rounded-none">
        <AlertDialogHeader>
          <AlertDialogTitle>Ste si istí?</AlertDialogTitle>
          <AlertDialogDescription>
            Táto akcia nemôže byť vrátená späť. Toto natrvalo vymaže položku
            menu.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Zrušiť</AlertDialogCancel>
          <form action={deleteMenuItemAction}>
            <input name="id" type="hidden" value={itemId} />
            <AlertDialogAction asChild>
              <Button
                className="rounded-none"
                type="submit"
                variant="destructive"
              >
                Zmazať
              </Button>
            </AlertDialogAction>
          </form>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
