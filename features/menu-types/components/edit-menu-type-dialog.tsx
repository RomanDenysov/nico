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
import type { MenuType } from "@/db/schema";
import { updateMenuTypeAction } from "../actions";

export function EditMenuTypeDialog({ type }: { type: MenuType }) {
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
          <DialogTitle>Upraviť typ menu</DialogTitle>
        </DialogHeader>
        <form action={updateMenuTypeAction} className="space-y-4">
          <input name="id" type="hidden" value={type.id} />
          <div className="space-y-2">
            <Label htmlFor={`edit-name-${type.id}`}>Názov</Label>
            <Input
              className="rounded-none"
              defaultValue={type.name}
              id={`edit-name-${type.id}`}
              name="name"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor={`edit-slug-${type.id}`}>Slug</Label>
            <Input
              className="rounded-none"
              defaultValue={type.slug}
              id={`edit-slug-${type.id}`}
              name="slug"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor={`edit-image-${type.id}`}>Obrázok (cesta)</Label>
            <Input
              className="rounded-none"
              defaultValue={type.image ?? ""}
              id={`edit-image-${type.id}`}
              name="image"
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
