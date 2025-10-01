import { MenuList } from "@/components/menu-list";
import { categories } from "@/lib/menu";
import { DialogView } from "../dialog-view";

export default function ModalMenu() {
  return (
    <DialogView>
      <div className="max-h-[70vh] overflow-y-auto">
        <MenuList categories={categories} className="px-1" />
      </div>
    </DialogView>
  );
}
