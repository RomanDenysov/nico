import { Suspense } from "react";
import { getExtras } from "../queries";
import { CreateExtraDialog } from "./create-extra-dialog";
import { SortableExtras } from "./sortable-extras";

/** Async data-fetching component wrapped in Suspense */
async function ExtrasData() {
  const extras = await getExtras();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-2xl">Extras</h1>
        <CreateExtraDialog />
      </div>

      <SortableExtras items={extras} />
    </div>
  );
}

function ExtrasSkeleton() {
  return (
    <div className="animate-pulse space-y-6">
      <div className="flex items-center justify-between">
        <div className="h-8 w-32 rounded bg-muted" />
        <div className="h-10 w-32 rounded bg-muted" />
      </div>
      <div className="space-y-4">
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
 * Sync wrapper that streams extras data.
 * Can be used in cached layouts since it's not async itself.
 */
export function ExtrasLoader() {
  return (
    <Suspense fallback={<ExtrasSkeleton />}>
      <ExtrasData />
    </Suspense>
  );
}
