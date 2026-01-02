import { useState } from "react";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { PencilLineIcon } from "lucide-react";
import { Input } from "./ui/input";

type MenuItem = {
    name: string;
    price: string;
    description: string;
}

type Props = {
    menu: MenuItem[];
}

export function MenuList({ menu }: Props){
    return <ul className="flex flex-col gap-1 w-full">
        {menu.map((item) => (
            <MenuItem key={item.name} item={item} />
        ))}
    </ul>
}


function MenuItem({ item }: { item: MenuItem }){
    
    return <li className="flex items-start justify-between gap-4 w-full">
            <h4 className="font-semibold text-lg leading-tight">{item.name}</h4>
            <span className="font-medium text-base leading-tight">{item.price}</span>
<MenuItemEditDialog item={item} />
    </li>
}

function MenuItemEditDialog({ item }: { item: MenuItem }){
    const [open, setOpen] = useState(false);


    const handleSave = () => {
        console.log('save');
        setOpen(false);
    }

    return (<Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
            <Button variant="ghost" size="icon" className="size-6 ml-auto">
                <PencilLineIcon className="size-4" />
            </Button>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Edit Menu Item</DialogTitle>
                <DialogDescription>Edit the menu item details</DialogDescription>
            </DialogHeader>
            <div className="flex flex-col gap-4">
                <Input type="text" placeholder="Name" value={item.name} />
                <Input type="text" placeholder="Price" value={item.price} />
                <Input type="text" placeholder="Description" value={item.description} />
            </div>
            <DialogFooter>
                <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                </DialogClose>  
                <Button onClick={handleSave}>Save</Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>)
}