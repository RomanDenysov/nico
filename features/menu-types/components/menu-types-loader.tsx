import { Suspense } from "react";
import { getMenuTypes } from "../queries";
import { CreateMenuTypeDialog } from "./create-menu-type-dialog";
import { MenuTypesSortableList } from "./menu-types-sortable-list";

/** Async data-fetching component wrapped in Suspense */
async function MenuTypesData() {
  const types = await getMenuTypes();
  return (
    <aside className="flex min-h-full w-48 flex-col bg-background">
      <div className="border-border border-b p-4">
        <CreateMenuTypeDialog />
      </div>
      <MenuTypesSortableList types={types} />
    </aside>
  );
}

function MenuTypesSkeleton() {
  return (
    <aside className="flex min-h-full w-48 animate-pulse flex-col bg-background">
      <div className="border-border border-b p-4">
        <div className="h-8 rounded bg-muted" />
      </div>
      <nav className="flex-1 grow overflow-y-auto p-2">
        <div className="space-y-2">
          {[...new Array(5)].map((_, i) => (
            <div
              className="h-10 rounded bg-muted"
              key={`skeleton-${i.toString()}`}
            />
          ))}
        </div>
      </nav>
    </aside>
  );
}

/**
 * Sync wrapper that streams menu types data.
 * Can be used in cached layouts since it's not async itself.
 */
export function MenuTypesLoader() {
  return (
    <Suspense fallback={<MenuTypesSkeleton />}>
      <MenuTypesData />
    </Suspense>
  );
}
