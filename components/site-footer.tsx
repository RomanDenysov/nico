import { type LucideIcon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Icons } from "./icons";
import { buttonVariants } from "./ui/button";

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

function FooterSocials({ socials }: { socials: Social[] }) {
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

export function SiteFooter({
  email,
  phone,
  address,
  socials = [],
}: SiteFooterProps) {
  return (
    <footer className="w-full pt-20">
      <div className="flex flex-col items-center justify-between rounded-4xl border bg-brand px-6 shadow-2xl drop-shadow-2xl">
        <center className="mt-6 mb-8 flex items-center justify-center">
          <Link
            className="flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-full border border-brand-foreground bg-brand p-1.5 text-brand-foreground transition-colors duration-200 hover:bg-brand/40"
            href="/"
          >
            <Icons.logo className="size-10" />
          </Link>
        </center>
        <div className="flex w-full max-w-7xl flex-row flex-wrap items-start justify-between gap-8 pb-12">
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-lg text-white">Kontakt</h3>
            {email ? (
              <Link
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }),
                  "rounded-4xl border-brand-foreground bg-transparent text-brand-foreground hover:bg-brand-foreground/60"
                )}
                href={`mailto:${email}`}
              >
                <MailIcon className="size-4" />
                {email}
              </Link>
            ) : null}
            {phone ? (
              <Link
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }),
                  "rounded-4xl border-brand-foreground bg-transparent text-brand-foreground hover:bg-brand-foreground/60"
                )}
                href={`tel:${phone.replace(/\s+/g, "")}`}
              >
                <PhoneIcon className="size-4" />
                {phone}
              </Link>
            ) : null}
            {address ? (
              <Link
                className={cn(
                  buttonVariants({ size: "sm" }),
                  "w-fit rounded-4xl bg-brand-foreground text-brand hover:bg-brand-foreground/60"
                )}
                href={`tel:${address.replace(/\s+/g, "")}`}
              >
                <MapPinIcon className="size-4" />
                {address}
              </Link>
            ) : null}
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-white">Odkazy</h3>
            <ul className="flex flex-col gap-2 font-medium text-base text-brand-foreground">
              <li>
                <Link
                  className="transition-all duration-200 hover:underline hover:underline-offset-4"
                  href="#hero"
                >
                  O nás
                </Link>
              </li>
              <li>
                <Link
                  className="transition-all duration-200 hover:underline hover:underline-offset-4"
                  href="#menu"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  className="transition-all duration-200 hover:underline hover:underline-offset-4"
                  href="#cta"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-white">Sledujte nás</h3>
            <FooterSocials socials={socials} />
          </div>
        </div>
      </div>

      <div className="mx-auto my-4 w-full text-center text-muted-foreground text-xs">
        {`© ${new Date().getFullYear()} Nico. Všechna práva vyhrazena.`}
      </div>
    </footer>
  );
}
