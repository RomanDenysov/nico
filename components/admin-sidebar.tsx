'use client'

import { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

export function AdminSidebar(
    { items }: { items: { href: Route, label: string }[] }
) {
    const pathname = usePathname();
    const isActive = (path: Route) => pathname.includes(path);
    return <aside className="w-36 rounded-none">
        <nav aria-label="Admin sidebar">
            <ul className="flex flex-col gap-2 w-full">
                {items.map(({ href, label }) => (
                    <li key={href}>
                        <Link href={href} className={cn(buttonVariants({ variant: 'ghost', size: 'sm' }),'rounded-none w-full justify-start hover:bg-brand/10',isActive(href) ? 'bg-brand/10 text-primary font-semibold' : 'hover:bg-brand/10')}>
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    </aside>;
}