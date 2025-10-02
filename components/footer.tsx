import {
  Facebook,
  Instagram,
  type LucideIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { containerVariants } from "./container";
import { Icons } from "./icons";
import { buttonVariants } from "./ui/button";
import { FadeContainer, FadeDiv } from "./ui/fade";
import { Spotlight } from "./ui/spotlight";
import { Tilt } from "./ui/tilt";

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
        label: "Napište nám",
        icon: MailIcon,
        href: "mailto:hello@nico.example",
      },
      {
        label: "Zavolajte nám",
        icon: PhoneIcon,
        href: "tel:+421905830548",
      },
      {
        label: "Najdite nás",
        icon: MapPinIcon,
        href: "https://maps.app.goo.gl/1234567890",
      },
    ],
  },
  links: {
    title: "Odkazy",
    items: [
      { label: "O nás", href: "#about" },
      { label: "Menu", href: "menu" },
      { label: "Kontakt", href: "#contact" },
    ],
  },
  socials: {
    title: "Sledujte nás",
    items: [
      { label: "Na Instagram", href: "#instagram", icon: Instagram },
      { label: "Na Facebook", href: "#facebook", icon: Facebook },
    ],
  },
};

export function Footer() {
  return (
    <footer className={cn(containerVariants({ variant: "default" }), "w-full")}>
      <Tilt
        className="group relative rounded-4xl"
        isRevese
        rotationFactor={2}
        springOptions={{
          stiffness: 26.7,
          damping: 4.1,
          mass: 0.2,
        }}
        style={{
          transformOrigin: "center center",
        }}
      >
        <div
          className={cn(
            "relative overflow-hidden rounded-4xl border border-transparent px-6 py-8 shadow-2xl shadow-black/25 drop-shadow-2xl md:px-8 md:py-12",
            "transition-all duration-600",
            "bg-gradient-to-l from-brand/20 to-brand/15 backdrop-blur-sm"
          )}
        >
          <Spotlight
            className="bg-brand/50"
            size={80}
            springOptions={{
              stiffness: 26.7,
              damping: 4.1,
              mass: 0.2,
            }}
          />
          <FadeContainer className="flex flex-col gap-16">
            <center className="flex items-center justify-center">
              <Link href="/">
                <Icons.title className="h-auto w-60 text-brand" />
              </Link>
            </center>
            <div className="flex flex-col-reverse items-center justify-between gap-5 md:flex-row md:gap-10">
              <FadeDiv className="">
                <Partners />
              </FadeDiv>
              <div className="grid flex-1 grid-cols-2 gap-5 sm:grid-cols-3 sm:gap-8 md:gap-10">
                {Object.entries(sections).map(([key, section]) => (
                  <FadeDiv className="flex flex-col gap-2" key={key}>
                    <h3 className="font-semibold text-lg">{section.title}</h3>
                    <ul className="flex flex-col gap-2">
                      {section.items.map((item) => (
                        <li key={item.href}>
                          <Link
                            className={cn(
                              buttonVariants({ variant: "link", size: "sm" })
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
      </Tilt>

      <div className="mx-auto my-4 w-full text-center text-muted-foreground text-xs">
        {`© ${new Date().getFullYear()} Nico. Všechna práva vyhrazena.`}
      </div>
    </footer>
  );
}

function Partners({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <Image
        alt="Partners"
        className="w-60"
        height={400}
        src="/logos/kofola-logo.png"
        width={600}
      />
    </div>
  );
}
