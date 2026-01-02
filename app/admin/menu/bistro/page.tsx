import { AdminSidebar } from "@/components/admin-sidebar";
import { buttonVariants } from "@/components/ui/button";
import { BistroCategory } from "@/lib/types";
import { cn } from "@/lib/utils";
import Link from "next/link";
const bistroCategories: BistroCategory[] = [
  'menu',
  'soups',
  'bowls',
  'panAsia',
  'classics',
  'sweets',
  'streetFood',
];

export default async function AdminMenuBistroPage({ searchParams }: { searchParams: Promise<{ category: BistroCategory }> }) {
  const { category } = await searchParams;
  return <div className="flex">
    <aside className="w-30 rounded-none">
        <ul className="flex flex-col gap-1">

        {bistroCategories.map((c) => (
            <li key={c}>
                <Link href={`/admin/menu/bistro?category=${c}`} className={cn(buttonVariants({ variant: 'ghost', size: 'sm' }),'rounded-none capitalize w-full justify-start hover:bg-brand/10', category === c ? 'bg-brand/10 text-primary font-semibold' : 'hover:bg-brand/10')}>
                    {c}
                </Link>
            </li>
        ))}
        </ul>
    </aside>
    <section className="flex-1 grow">
        
    </section>
  </div>;
}