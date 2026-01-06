import { Suspense } from "react";
import { getMenuCategories } from "../queries";
import { CategoriesSortableList } from "./categories-sortable-list";
import { CreateCategoryDialog } from "./create-category-dialog";

/** Async data-fetching component wrapped in Suspense */
async function CategoriesData({ typeId }: { typeId: number }) {
  const categories = await getMenuCategories(typeId);
  return (
    <aside className="flex min-h-full w-48 flex-col bg-background">
      <div className="border-border border-b p-4">
        <CreateCategoryDialog />
      </div>
      <CategoriesSortableList categories={categories} typeId={typeId} />
    </aside>
  );
}

function CategoriesSkeleton() {
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
 * Sync wrapper that streams categories data.
 * Can be used in cached layouts since it's not async itself.
 */
export function CategoriesLoader({ typeId }: { typeId: number }) {
  return (
    <Suspense fallback={<CategoriesSkeleton />}>
      <CategoriesData typeId={typeId} />
    </Suspense>
  );
}
