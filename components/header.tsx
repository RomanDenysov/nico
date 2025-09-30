"use client";

import { PhoneIcon, XIcon } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { useRef, useState } from "react";
import { useClickOutside } from "@/hooks/use-click-outside";
import { cn } from "@/lib/utils";
import { containerVariants } from "./container";
import { Icons } from "./icons";
import { buttonVariants } from "./ui/button";

type NavLink = {
  href: string;
  label: string;
};

const navLinks: NavLink[] = [
  { href: "#about", label: "O nás" },
  { href: "#menu", label: "Menu" },
  { href: "#contact", label: "Kontakt" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);

  useClickOutside({ ref: headerRef, callback: () => setOpen(false) });

  return (
    <header
      className={cn(
        containerVariants({ variant: "default" }),
        "sticky top-4 z-40 h-12 w-full"
      )}
      ref={headerRef}
    >
      <div className="flex items-center gap-2 rounded-full border border-brand-foreground bg-background p-2 shadow-2xl drop-shadow-2xl">
        <NavMenuButton open={open} setOpen={setOpen} />
        <Link
          className="flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-full border border-brand-foreground bg-brand p-1.5 text-brand-foreground transition-colors duration-200 hover:bg-brand/40"
          href="/"
        >
          <Icons.logo pathLength={2} size={24} strokeWidth={1} />
        </Link>
        <nav className="hidden space-x-2 md:block">
          {navLinks.map((link) => (
            <Link
              className={cn(
                "px-3 font-medium transition-all duration-200 hover:underline hover:underline-offset-4 sm:text-lg md:text-xl"
              )}
              href={link.href}
              key={link.href}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          className={cn(buttonVariants({ variant: "brand" }), "ml-auto")}
          href="tel:+421723456789"
        >
          <PhoneIcon className="size-4" />
          Rezervovat
        </Link>
      </div>
    </header>
  );
}

const NavMenuButton = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) => (
  <button
    aria-controls="mobile-nav"
    aria-expanded={open}
    aria-label="Open mobile navigation"
    className="relative flex size-9 cursor-pointer items-center overflow-hidden rounded-full bg-muted p-1.5 focus:outline-none focus:ring-1 focus:ring-brand-foreground/40 md:hidden"
    onClick={() => {
      setOpen(!open);
    }}
    type="button"
  >
    <Icons.menu
      className={cn(
        "absolute size-6 scale-100 transition-all duration-200",
        open && "rotate-90 scale-0"
      )}
    />
    <XIcon
      className={cn(
        "absolute size-6 scale-0 transition-all duration-200",
        open && "rotate-90 scale-100"
      )}
    />
  </button>
);

const variants = {
  open: {
    opacity: 1,
    scaleY: 1,
    transition: { duration: 0.2 },
  },
  closed: {
    opacity: 0,
    scaleY: 0,
    transition: { duration: 0.2 },
  },
};

const _NavMenuContent = ({
  links,
  open,
  onNavigate,
}: {
  links: NavLink[];
  open: boolean;
  onNavigate?: () => void;
}) => (
  <motion.nav
    animate={open ? "open" : "closed"}
    aria-label="Mobile navigation"
    className="flex w-full origin-top flex-col gap-1 overflow-hidden rounded-4xl bg-brand-foreground p-2 md:hidden"
    id="mobile-nav"
    initial="closed"
    style={{ transformOrigin: "top" }}
    variants={variants}
  >
    {links.map((link) => (
      <Link
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "h-11 justify-start px-3 text-base"
        )}
        href={link.href}
        key={link.href}
        onClick={onNavigate}
      >
        {link.label}
      </Link>
    ))}
  </motion.nav>
);
