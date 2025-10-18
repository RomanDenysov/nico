"use client";

import { PhoneIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import useScroll from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";
import { containerVariants } from "./container";
import { Icons } from "./icons";
import { buttonVariants } from "./ui/button";

type NavLink = {
  href: string;
  label: string;
};

const PHONE_NUMBER = "+421905830548";

const SCROLL_THRESHOLD = 15;

const navLinks: NavLink[] = [
  { href: "/#about", label: "O nás" },
  { href: "/#menu", label: "Menu" },
  // { href: "#footer", label: "Kontakt" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const scrolled = useScroll(SCROLL_THRESHOLD);

  return (
    <header
      className={cn(
        containerVariants({ variant: "default" }),
        "sticky top-4 right-0 left-0 z-40 h-12 w-full"
      )}
    >
      {open && (
        <button
          aria-label="Close mobile navigation"
          className="fixed top-0 right-0 left-0 z-10 size-full cursor-pointer touch-none select-none bg-white/10 backdrop-blur-[1px] transition-opacity duration-300 will-change-transform"
          onClick={() => setOpen(false)}
          type="button"
        />
      )}
      <div
        className={cn(
          "relative z-20 min-h-(--header-height) rounded-4xl border border-transparent bg-transparent transition duration-300",
          scrolled || open
            ? "bg-gradient-to-r from-brand-foreground/45 to-brand-foreground/20 shadow-2xl shadow-black/25 drop-shadow-2xl backdrop-blur-sm"
            : ""
        )}
      >
        <div className="flex h-full items-center justify-between gap-3 rounded-4xl p-2.5">
          <Link href="/">
            <Icons.title
              className={cn("h-6 text-primary transition-colors duration-300")}
            />
          </Link>
          <nav className="hidden flex-row items-center gap-2 md:flex">
            {navLinks.map((link) => (
              <Link
                className={cn(
                  buttonVariants({ variant: "ghost", size: "sm" }),
                  "hover:bg-brand/10"
                )}
                href={link.href}
                key={link.href}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              "ml-auto hidden hover:bg-brand/10 md:flex"
            )}
            href={`tel:${PHONE_NUMBER}`}
          >
            <PhoneIcon />
            Zavolajte nám
          </Link>
          <NavMenuButton
            open={open}
            setOpen={setOpen}
            showBackground={scrolled}
          />
        </div>
        <nav
          className={cn(
            "mt-6 flex flex-col gap-6 px-2 pb-2 ease-in-out will-change-transform md:hidden",
            open ? "" : "hidden"
          )}
        >
          <ul className="space-y-4 px-2 font-medium text-2xl">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
          <Link
            className={cn(
              buttonVariants({ variant: "brand" }),
              "w-full text-lg text-white"
            )}
            href={`tel:${PHONE_NUMBER}`}
          >
            <PhoneIcon className="size-4" />
            Zavolajte nám
          </Link>
        </nav>
      </div>
    </header>
  );
}

const NavMenuButton = ({
  showBackground,
  open,
  setOpen,
}: {
  showBackground: boolean;
  open: boolean;
  setOpen: (open: boolean) => void;
}) => (
  <button
    aria-controls="mobile-nav"
    aria-expanded={open}
    aria-label="Open mobile navigation"
    className={cn(
      "relative flex size-9 cursor-pointer items-center overflow-hidden rounded-full bg-transparent p-1.5 focus:outline-none focus:ring-2 focus:ring-brand-foreground/40 md:hidden",
      showBackground && "bg-muted/45"
    )}
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
