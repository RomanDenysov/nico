"use client";

import { PlusIcon } from "lucide-react";
import { useParams } from "next/navigation";
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
import { createMenuCategoryAction } from "../actions";

export function CreateCategoryDialog() {
  const params = useParams<{ typeId: string }>();
  const numberTypeId = Number(params.typeId);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full rounded-none" size="sm" variant="outline">
          <PlusIcon className="size-4" />
          kategória
        </Button>
      </DialogTrigger>
      <DialogContent className="rounded-none">
        <DialogHeader>
          <DialogTitle>Pridať kategóriu</DialogTitle>
        </DialogHeader>
        <form action={createMenuCategoryAction} className="space-y-4">
          <input name="typeId" type="hidden" value={numberTypeId} />
          <div className="space-y-2">
            <Label htmlFor="name">Názov</Label>
            <Input className="rounded-none" id="name" name="name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="slug">Slug</Label>
            <Input className="rounded-none" id="slug" name="slug" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Popis</Label>
            <Textarea
              className="rounded-none"
              id="description"
              name="description"
            />
          </div>
          <Button className="w-full rounded-none" type="submit">
            Vytvoriť
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
