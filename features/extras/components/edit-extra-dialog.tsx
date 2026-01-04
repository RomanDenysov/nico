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
import type { Extra } from "@/db/schema";
import { updateExtraAction } from "../actions";

export function EditExtraDialog({ extra }: { extra: Extra }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="rounded-none" size="sm" variant="outline">
          Upraviť
        </Button>
      </DialogTrigger>
      <DialogContent className="rounded-none">
        <DialogHeader>
          <DialogTitle>Upraviť extra</DialogTitle>
        </DialogHeader>
        <form action={updateExtraAction} className="space-y-4">
          <input name="id" type="hidden" value={extra.id} />
          <div className="space-y-2">
            <Label htmlFor={`edit-name-${extra.id}`}>Názov</Label>
            <Input
              className="rounded-none"
              defaultValue={extra.name}
              id={`edit-name-${extra.id}`}
              name="name"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor={`edit-price-${extra.id}`}>Cena</Label>
            <Input
              className="rounded-none"
              defaultValue={extra.price}
              id={`edit-price-${extra.id}`}
              name="price"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor={`edit-order-${extra.id}`}>Poradie</Label>
            <Input
              className="rounded-none"
              defaultValue={extra.order}
              id={`edit-order-${extra.id}`}
              name="order"
              required
              type="number"
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
