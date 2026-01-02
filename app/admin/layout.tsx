import { Container } from "@/components/container";
import { SecondaryNav } from "@/components/secondary-nav";
import { Route } from "next";

type SecondaryNavItem = {
    href: Route;
    label: string;
}
const secondaryNavItems: SecondaryNavItem[] = [
  { href: '/admin/menu', label: 'Menu' },
  { href: '/admin/info', label: 'Info' },

];

export default function AdminLayout(props: LayoutProps<'/admin'>) {
  return <Container className="min-h-screen py-12 flex flex-col">
    <SecondaryNav items={secondaryNavItems} />
    <div className="bg-brand/10 rounded-none py-6 px-4 grow flex-1">
    {props.children}
    </div>
  </Container>;
}