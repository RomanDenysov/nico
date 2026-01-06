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
import { createExtraAction } from "../actions";

export function CreateExtraDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="rounded-none">Pridať extra</Button>
      </DialogTrigger>
      <DialogContent className="rounded-none">
        <DialogHeader>
          <DialogTitle>Pridať extra</DialogTitle>
        </DialogHeader>
        <form action={createExtraAction} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Názov</Label>
            <Input className="rounded-none" id="name" name="name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="price">Cena</Label>
            <Input className="rounded-none" id="price" name="price" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="order">Poradie</Label>
            <Input
              className="rounded-none"
              defaultValue={0}
              id="order"
              name="order"
              required
              type="number"
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
