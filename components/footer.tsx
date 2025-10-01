import {
  Facebook,
  Instagram,
  type LucideIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { containerVariants } from "./container";
import { Icons } from "./icons";
import { buttonVariants } from "./ui/button";
import { FadeContainer, FadeDiv } from "./ui/fade";

export type SiteFooterProps = {
  email?: string;
  phone?: string;
  address?: string;
  socials?: Social[];
};

type Social = {
  icon: LucideIcon;
  href: string;
};

type Section = {
  title: string;
  items: {
    label: string;
    icon?: LucideIcon;
    href: string;
  }[];
};

const sections: Record<string, Section> = {
  contacts: {
    title: "Kontakt",
    items: [
      {
        label: "Email",
        icon: MailIcon,
        href: "mailto:hello@nico.example",
      },
      {
        label: "Telefón",
        icon: PhoneIcon,
        href: "tel:+421905830548",
      },
      {
        label: "Adresa",
        icon: MapPinIcon,
        href: "https://maps.app.goo.gl/1234567890",
      },
    ],
  },
  links: {
    title: "Odkazy",
    items: [
      { label: "O nás", href: "#about" },
      { label: "Menu", href: "#menu" },
      { label: "Kontakt", href: "#contact" },
    ],
  },
  socials: {
    title: "Sledujte nás",
    items: [
      { label: "Instagram", href: "#instagram", icon: Instagram },
      { label: "Facebook", href: "#facebook", icon: Facebook },
    ],
  },
};

function _FooterSocials({ socials }: { socials: Social[] }) {
  return (
    <ul className="flex gap-3">
      {socials.map((s, i) => (
        <li key={`${s.href}-${i}`}>
          <Link
            className={cn(
              buttonVariants({ size: "icon" }),
              "size-10 rounded-full bg-brand-foreground text-brand hover:bg-brand-foreground/80"
            )}
            href={s.href}
            rel="noopener noreferrer"
            target="_blank"
          >
            <s.icon className="size-6" />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function Footer() {
  return (
    <footer className={cn(containerVariants({ variant: "default" }), "w-full")}>
      <div
        className={cn(
          "overflow-hidden rounded-4xl border border-transparent p-6 shadow-2xl shadow-black/25 drop-shadow-2xl md:p-8",
          "transition-all duration-600",
          "bg-gradient-to-l from-brand/20 to-brand/15 backdrop-blur-sm"
        )}
      >
        <FadeContainer className="flex flex-col gap-10">
          <center className="flex items-center justify-center">
            <Link href="/">
              <Icons.title className="w-40 text-brand" />
            </Link>
          </center>
          <div className="flex flex-col-reverse items-center justify-between gap-5 md:flex-row">
            <FadeDiv className="flex-1">
              <Partners />
            </FadeDiv>
            <div className="grid flex-1 grid-cols-3 gap-10">
              {Object.entries(sections).map(([key, section]) => (
                <FadeDiv className="flex flex-col gap-2" key={key}>
                  <h3 className="font-semibold text-lg text-white">
                    {section.title}
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {section.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          className={cn(
                            buttonVariants({ variant: "link", size: "sm" }),
                            "text-muted"
                          )}
                          href={item.href}
                        >
                          {item.icon && <item.icon className="size-4" />}
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </FadeDiv>
              ))}
            </div>
          </div>
        </FadeContainer>
      </div>

      <div className="mx-auto my-4 w-full text-center text-muted-foreground text-xs">
        {`© ${new Date().getFullYear()} Nico. Všechna práva vyhrazena.`}
      </div>
    </footer>
  );
}

function Partners({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center gap-5", className)}>
      <Icons.square className="size-20 text-brand" />
    </div>
  );
}
