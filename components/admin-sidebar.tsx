"use client";

import type { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

export function AdminSidebar({
  items,
}: {
  items: { href: Route; label: string }[];
}) {
  const pathname = usePathname();
  const isActive = (path: Route) => pathname.includes(path);
  return (
    <aside className="w-36 rounded-none">
      <nav aria-label="Admin sidebar">
        <ul className="flex w-full flex-col gap-1">
          {items.map(({ href, label }) => (
            <li key={href}>
              <Link
                className={cn(
                  buttonVariants({ variant: "ghost", size: "sm" }),
                  "w-full justify-start rounded-none hover:bg-brand/10",
                  isActive(href)
                    ? "bg-brand/10 font-semibold text-primary"
                    : "hover:bg-brand/10"
                )}
                href={href}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
