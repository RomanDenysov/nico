import { Container } from "@/components/container";
import { MenuTypesLoader } from "@/features/menu-types/components/menu-types-loader";

/**
 * Admin layout - sync for cacheability.
 * Auth is handled by middleware, data fetching is streamed via Suspense.
 */
export default function AdminLayout(props: LayoutProps<"/admin">) {
  return (
    <Container className="flex h-full min-h-screen flex-col py-12">
      <div className="flex size-full min-h-[calc(100vh-8rem)] flex-1 divide-x divide-border border border-border bg-background">
        <MenuTypesLoader />
        <div className="flex flex-1">{props.children}</div>
      </div>
    </Container>
  );
}
