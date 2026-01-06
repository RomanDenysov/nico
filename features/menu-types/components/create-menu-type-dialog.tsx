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
import { createMenuTypeAction } from "../actions";

export function CreateMenuTypeDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full rounded-none" size="sm" variant="outline">
          + new type
        </Button>
      </DialogTrigger>
      <DialogContent className="rounded-none">
        <DialogHeader>
          <DialogTitle>Pridať typ menu</DialogTitle>
        </DialogHeader>
        <form action={createMenuTypeAction} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Názov</Label>
            <Input className="rounded-none" id="name" name="name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="slug">Slug</Label>
            <Input className="rounded-none" id="slug" name="slug" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="image">Obrázok (cesta)</Label>
            <Input className="rounded-none" id="image" name="image" />
          </div>
          <Button className="w-full rounded-none" type="submit">
            Vytvoriť
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
