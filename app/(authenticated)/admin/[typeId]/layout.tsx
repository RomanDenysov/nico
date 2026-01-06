import { Suspense } from "react";
import { CategoriesLoader } from "@/features/categories-sidebar/components/categories-loader";

async function CategoriesLoaderWrapper({
  params,
}: {
  params: Promise<{ typeId: string }>;
}) {
  const { typeId } = await params;
  return <CategoriesLoader typeId={Number(typeId)} />;
}

function CategoriesLoaderSkeleton() {
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

export default async function AdminMenuTypeLayout({
  children,
  params,
}: LayoutProps<"/admin/[typeId]">) {
  return (
    <>
      <Suspense fallback={<CategoriesLoaderSkeleton />}>
        <CategoriesLoaderWrapper params={params} />
      </Suspense>
      <div className="flex-1 grow overflow-auto border-border border-l p-6">
        {children}
      </div>
    </>
  );
}
