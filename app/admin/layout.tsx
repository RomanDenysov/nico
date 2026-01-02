import type { Route } from "next";
import { Container } from "@/components/container";
import { SecondaryNav } from "@/components/secondary-nav";

interface SecondaryNavItem {
  href: Route;
  label: string;
}
const secondaryNavItems: SecondaryNavItem[] = [
  { href: "/admin/menu", label: "Menu" },
  { href: "/admin/info", label: "Info" },
];

export default function AdminLayout(props: LayoutProps<"/admin">) {
  return (
    <Container className="flex min-h-screen flex-col py-12">
      <SecondaryNav items={secondaryNavItems} />
      <div className="flex-1 grow rounded-none bg-brand/10 px-4 py-6">
        {props.children}
      </div>
    </Container>
  );
}
