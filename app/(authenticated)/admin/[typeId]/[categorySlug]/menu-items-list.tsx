"use client";

import { useState } from "react";
import { SortableMenuItems } from "@/components/admin/sortable-menu-items";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { updateMenuItemAction } from "@/features/menu-items/actions";

interface MenuItem {
  id: number;
  name: string;
  description: string | null;
  price: string;
  order: number;
  isComboMenu: boolean;
}

export function MenuItemsList({
  categoryId,
  initialItems,
}: {
  categoryId: number;
  initialItems: MenuItem[];
}) {
  const [editingItem, setEditingItem] = useState<MenuItem | null>(null);

  return (
    <>
      <SortableMenuItems items={initialItems} onEdit={setEditingItem} />
      {editingItem && (
        <EditItemDialog
          categoryId={categoryId}
          item={editingItem}
          onOpenChange={(open) => {
            if (!open) {
              setEditingItem(null);
            }
          }}
          open={true}
        />
      )}
    </>
  );
}

function EditItemDialog({
  item,
  categoryId,
  open,
  onOpenChange,
}: {
  item: MenuItem;
  categoryId: number;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Dialog onOpenChange={onOpenChange} open={open}>
      <DialogContent className="max-h-[90vh] overflow-y-auto rounded-none">
        <DialogHeader>
          <DialogTitle>Upraviť položku menu</DialogTitle>
        </DialogHeader>
        <form
          action={updateMenuItemAction}
          className="space-y-4"
          onSubmit={() => {
            onOpenChange(false);
          }}
        >
          <input name="id" type="hidden" value={item.id} />
          <input name="categoryId" type="hidden" value={categoryId} />
          <div className="space-y-2">
            <Label htmlFor="edit-name">Názov</Label>
            <Input
              className="rounded-none"
              defaultValue={item.name}
              id="edit-name"
              name="name"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="edit-description">Popis</Label>
            <Textarea
              className="rounded-none"
              defaultValue={item.description ?? ""}
              id="edit-description"
              name="description"
              rows={4}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="edit-price">Cena</Label>
            <Input
              className="rounded-none"
              defaultValue={item.price}
              id="edit-price"
              name="price"
              required
            />
          </div>
          <div className="flex items-center gap-2">
            <input
              className="h-4 w-4 rounded-none border-input"
              defaultChecked={item.isComboMenu}
              id="edit-isComboMenu"
              name="isComboMenu"
              type="checkbox"
            />
            <Label className="cursor-pointer" htmlFor="edit-isComboMenu">
              Combo Menu
            </Label>
          </div>
          <Button className="w-full rounded-none" type="submit">
            Uložiť
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
