import { Route } from "next";
import Link from "next/link";
import { Button } from "./ui/button";
import { PencilLineIcon } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { useState } from "react";
import { Input } from "./ui/input";

type Category = {
    name: string;
    href: Route;
}

type Props = {
    categories: Category[];
}

export function CategoriesList({ categories }: Props){
    return <ul className="flex flex-col gap-1">
        {categories.map((category) => (
            <li key={category.name}>
                <Link href={category.href}>
                    {category.name}
                </Link>
            </li>
        ))}
    </ul>
}

function CategoryItem({ category }: { category: Category }){
    return (<li className="flex items-start justify-between gap-4 w-full">
            <Link href={category.href}>
                {category.name}
            </Link>
            <CategoryEditDialog category={category} />
        </li>)
}

function CategoryEditDialog({ category }: { category: Category }){
    const [open, setOpen] = useState(false);

    return <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
            <Button variant="ghost" size="icon" className="size-6 ml-auto">
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
            <Input type="text" value={category.name} onChange={handleNameChange} />
            <Textarea value={category.description} onChange={handleDescriptionChange} />
        </DialogContent>
    </Dialog>
}