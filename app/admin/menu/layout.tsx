import { Suspense } from "react";
import { MenuTypesList } from "./menu-types-list";

export default function AdminMenuLayout(props: LayoutProps<"/admin/menu">) {
  return (
    <div className="flex flex-1 grow">
      <Suspense>
        <MenuTypesList />
      </Suspense>
      <div className="flex-1 grow">{props.children}</div>
    </div>
  );
}
