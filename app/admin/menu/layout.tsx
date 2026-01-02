import { AdminSidebar } from "@/components/admin-sidebar";
import { Route } from "next";

const adminSidebarItems: { href: Route, label: string }[] = [
  { href: '/admin/menu/bistro', label: 'Bistro' },
  { href: '/admin/menu/breakfast', label: 'Breakfast' },
  { href: '/admin/menu/extras', label: 'Extras' },
];

export default function AdminMenuLayout(props: LayoutProps<'/admin/menu'>) {
  return <div className="flex gap-4 grow flex-1">
    <AdminSidebar items={adminSidebarItems} />
    <section className="flex-1 px-4">
      {props.children}
    </section>
  </div>;
}