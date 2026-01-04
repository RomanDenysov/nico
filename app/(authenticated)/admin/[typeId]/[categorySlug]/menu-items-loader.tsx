import { notFound } from "next/navigation";
import { Suspense } from "react";
import { getMenuCategory } from "@/features/categories-sidebar/queries";
import { getMenuItems } from "@/features/menu-items/queries";
import { getMenuType } from "@/features/menu-types/queries";
import { CreateItemDialog } from "./create-item-dialog";
import { MenuItemsList } from "./menu-items-list";

/** Async data-fetching component wrapped in Suspense */
async function MenuItemsData({
  params,
}: {
  params: Promise<{ typeId: string; categorySlug: string }>;
}) {
  const { typeId, categorySlug } = await params;
  const menuType = await getMenuType(Number(typeId));
  const menuCategory = await getMenuCategory(categorySlug);

  if (!(menuType && menuCategory)) {
    notFound();
  }

  const items = await getMenuItems(menuCategory.id);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-semibold text-2xl">
            {menuType.name} / {menuCategory.name}
          </h1>
          <p className="text-muted-foreground text-sm">{categorySlug}</p>
        </div>
        <CreateItemDialog categoryId={menuCategory.id} />
      </div>

      <MenuItemsList categoryId={menuCategory.id} initialItems={items} />
    </div>
  );
}

function MenuItemsSkeleton() {
  return (
    <div className="animate-pulse space-y-6">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <div className="h-8 w-64 rounded bg-muted" />
          <div className="h-4 w-32 rounded bg-muted" />
        </div>
        <div className="h-10 w-24 rounded bg-muted" />
      </div>
      <div className="space-y-2">
        {[...new Array(5)].map((_, i) => (
          <div
            className="h-16 rounded bg-muted"
            key={`skeleton-${i.toString()}`}
          />
        ))}
      </div>
    </div>
  );
}

/**
 * Sync wrapper that streams menu items data.
 * Can be used in cached layouts since it's not async itself.
 */
export function MenuItemsLoader({
  params,
}: {
  params: Promise<{ typeId: string; categorySlug: string }>;
}) {
  return (
    <Suspense fallback={<MenuItemsSkeleton />}>
      <MenuItemsData params={params} />
    </Suspense>
  );
}
