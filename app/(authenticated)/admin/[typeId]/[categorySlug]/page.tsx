import { MenuItemsLoader } from "./menu-items-loader";

export default function AdminMenuItemsPage({
  params,
}: {
  params: Promise<{ typeId: string; categorySlug: string }>;
}) {
  return (
    <div className="flex-1 grow overflow-auto">
      <MenuItemsLoader params={params} />
    </div>
  );
}
