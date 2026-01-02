import { PencilLineIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";

type MenuItem = {
  name: string;
  price: string;
  description: string;
};

type Props = {
  menu: MenuItem[];
};

export function MenuList({ menu }: Props) {
  return (
    <ul className="flex w-full flex-col gap-1">
      {menu.map((item) => (
        <MenuItem item={item} key={item.name} />
      ))}
    </ul>
  );
}

function MenuItem({ item }: { item: MenuItem }) {
  return (
    <li className="flex w-full items-start justify-between gap-4">
      <h4 className="font-semibold text-lg leading-tight">{item.name}</h4>
      <span className="font-medium text-base leading-tight">{item.price}</span>
      <MenuItemEditDialog item={item} />
    </li>
  );
}

function MenuItemEditDialog({ item }: { item: MenuItem }) {
  const [open, setOpen] = useState(false);

  const handleSave = () => {
    console.log("save");
    setOpen(false);
  };

  return (
    <Dialog onOpenChange={setOpen} open={open}>
      <DialogTrigger asChild>
        <Button className="ml-auto size-6" size="icon" variant="ghost">
          <PencilLineIcon className="size-4" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Menu Item</DialogTitle>
          <DialogDescription>Edit the menu item details</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <Input placeholder="Name" type="text" value={item.name} />
          <Input placeholder="Price" type="text" value={item.price} />
          <Input
            placeholder="Description"
            type="text"
            value={item.description}
          />
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button onClick={handleSave}>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
