"use client";

import type { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

type SecondaryNavItem = {
  href: Route;
  label: string;
};

export function SecondaryNav({ items }: { items: SecondaryNavItem[] }) {
  const pathname = usePathname();
  const isActive = (path: Route) => pathname.includes(path);

  return (
    <nav aria-label="Secondary navigation">
      <ul className="flex flex-wrap gap-2">
        <SecondaryNavItem href="/" label="Domov" />
        {items.map(({ href, label }) => (
          <SecondaryNavItem
            active={isActive(href)}
            href={href}
            key={href}
            label={label}
          />
        ))}
      </ul>
    </nav>
  );
}

function SecondaryNavItem({
  href,
  label,
  active,
}: {
  href: Route;
  label: string;
  active?: boolean;
}) {
  return (
    <li>
      <Link
        className={cn(
          buttonVariants({ variant: "ghost", size: "sm" }),
          "rounded-none hover:bg-brand/10",
          active
            ? "bg-brand/10 font-semibold text-primary"
            : "hover:bg-brand/10"
        )}
        href={href}
        key={href}
      >
        {label}
      </Link>
    </li>
  );
}
