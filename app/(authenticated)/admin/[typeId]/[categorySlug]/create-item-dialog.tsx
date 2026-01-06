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
import { createMenuItemAction } from "@/features/menu-items/actions";

export function CreateItemDialog({ categoryId }: { categoryId: number }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="rounded-none">+ položka</Button>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto rounded-none">
        <DialogHeader>
          <DialogTitle>Pridať položku menu</DialogTitle>
        </DialogHeader>
        <form action={createMenuItemAction} className="space-y-4">
          <input name="categoryId" type="hidden" value={categoryId} />
          <div className="space-y-2">
            <Label htmlFor="name">Názov</Label>
            <Input className="rounded-none" id="name" name="name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Popis</Label>
            <Textarea
              className="rounded-none"
              id="description"
              name="description"
              rows={4}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="price">Cena</Label>
            <Input className="rounded-none" id="price" name="price" required />
          </div>
          <div className="flex items-center gap-2">
            <input
              className="h-4 w-4 rounded-none border-input"
              id="isComboMenu"
              name="isComboMenu"
              type="checkbox"
            />
            <Label className="cursor-pointer" htmlFor="isComboMenu">
              Combo Menu
            </Label>
          </div>
          <Button className="w-full rounded-none" type="submit">
            Vytvoriť
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
