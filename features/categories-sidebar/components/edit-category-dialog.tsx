"use client";

import { PencilLineIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { MenuCategory } from "@/db/schema";
import { updateMenuCategoryAction } from "../actions";

export function EditCategoryDialog({
  category,
  typeId,
}: {
  category: MenuCategory;
  typeId: number;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="size-7 rounded-none"
          size="icon"
          type="button"
          variant="ghost"
        >
          <PencilLineIcon className="size-3" />
        </Button>
      </DialogTrigger>
      <DialogContent className="rounded-none">
        <DialogHeader>
          <DialogTitle>Upraviť kategóriu</DialogTitle>
        </DialogHeader>
        <form action={updateMenuCategoryAction} className="space-y-4">
          <input name="id" type="hidden" value={category.id} />
          <input name="typeId" type="hidden" value={typeId} />
          <div className="space-y-2">
            <Label htmlFor={`edit-name-${category.id}`}>Názov</Label>
            <Input
              className="rounded-none"
              defaultValue={category.name}
              id={`edit-name-${category.id}`}
              name="name"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor={`edit-slug-${category.id}`}>Slug</Label>
            <Input
              className="rounded-none"
              defaultValue={category.slug}
              id={`edit-slug-${category.id}`}
              name="slug"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor={`edit-description-${category.id}`}>Popis</Label>
            <Textarea
              className="rounded-none"
              defaultValue={category.description ?? ""}
              id={`edit-description-${category.id}`}
              name="description"
            />
          </div>
          <Button className="w-full rounded-none" type="submit">
            Uložiť
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
