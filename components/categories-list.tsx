import { PencilLineIcon } from "lucide-react";
import type { Route } from "next";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";

type Category = {
  name: string;
  href: Route;
};

type Props = {
  categories: Category[];
};

export function CategoriesList({ categories }: Props) {
  return (
    <ul className="flex flex-col gap-1">
      {categories.map((category) => (
        <li key={category.name}>
          <Link href={category.href}>{category.name}</Link>
        </li>
      ))}
    </ul>
  );
}

function CategoryItem({ category }: { category: Category }) {
  return (
    <li className="flex w-full items-start justify-between gap-4">
      <Link href={category.href}>{category.name}</Link>
      <CategoryEditDialog category={category} />
    </li>
  );
}

function CategoryEditDialog({ category }: { category: Category }) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog onOpenChange={setOpen} open={open}>
      <DialogTrigger asChild>
        <Button className="ml-auto size-6" size="icon" variant="ghost">
          <PencilLineIcon className="size-4" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Category</DialogTitle>
          <DialogDescription>
            Edit the category name and description.
          </DialogDescription>
        </DialogHeader>
        <Input onChange={handleNameChange} type="text" value={category.name} />
        <Textarea
          onChange={handleDescriptionChange}
          value={category.description}
        />
      </DialogContent>
    </Dialog>
  );
}
