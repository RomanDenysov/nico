import { MapPinIcon, SendIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { addresses, footerSections } from "@/app/config";
import { cn } from "@/lib/utils";
import { AddressFields } from "./address-fields";
import { containerVariants } from "./container";
import { Icons } from "./icons";
import { Button } from "./ui/button";
import { FadeContainer, FadeDiv } from "./ui/fade";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Spotlight } from "./ui/spotlight";

export function Footer() {
  return (
    <footer
      className={cn(containerVariants({ variant: "default" }), "w-full")}
      id="footer"
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-4xl border border-transparent px-4 py-8 shadow-2xl shadow-black/25 drop-shadow-2xl sm:px-6 md:px-10 md:py-12",
          "transition-all duration-300",
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
        <FadeContainer>
          <div className="grid w-full flex-1 grid-cols-2 items-center gap-5 sm:gap-10 md:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] md:gap-12">
            <FadeDiv className="col-span-2 flex w-full flex-col items-center gap-5 md:col-span-1 md:items-stretch">
              <Link href="/">
                <Icons.title className="h-auto w-26 sm:w-30" />
              </Link>
              <div className="flex items-center gap-3">
                {footerSections.socials.items.map((item) => (
                  <Link href={item.href} key={item.href}>
                    <item.icon className="size-5" />
                  </Link>
                ))}
              </div>
            </FadeDiv>
            <div className="flex flex-row items-start gap-2 md:flex-col">
              {addresses.map((address) => (
                <FadeDiv
                  className="flex items-start gap-1.5"
                  key={address.city + address.street}
                >
                  <MapPinIcon className="mt-4 size-4" />
                  <AddressFields address={address} />
                </FadeDiv>
              ))}
            </div>
            <FadeDiv className="flex flex-col items-start gap-1.5">
              <div className="font-semibold text-base">Navigácia</div>
              {footerSections.links.items.map((item) => (
                <Link
                  className="font-medium text-sm leading-tight tracking-tight underline-offset-4 hover:underline"
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </FadeDiv>
            <div className="flex flex-col items-stretch justify-between gap-5 self-stretch">
              <FadeDiv className="size-fit">
                <FooterNewsletterForm />
              </FadeDiv>
              <Partners />
            </div>
          </div>
        </FadeContainer>
      </div>

      <div className="mx-auto my-4 w-full text-center text-muted-foreground text-xs">
        {`© ${new Date().getFullYear()} Všetky práva vyhradené pre Kavejo s.r.o.`}
      </div>
    </footer>
  );
}

function Partners({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-center gap-3",
        className
      )}
    >
      <Image
        alt="Partners"
        className="w-20"
        height={400}
        src="/logos/kofola-logo-black.png"
        width={600}
      />
      <Image
        alt="Partners"
        className="w-24"
        height={400}
        src="/logos/kromka-logo-black.png"
        width={600}
      />
      <Image
        alt="Partners"
        className="w-12"
        height={400}
        src="/logos/ciao-logo-black.png"
        width={600}
      />
    </div>
  );
}

function FooterNewsletterForm() {
  return (
    <form className="group flex flex-col gap-2">
      <Label htmlFor="email">
        Dostávajte najnovšie informácie o našich produktoch a akciách
      </Label>
      <div className="flex w-full flex-row items-center">
        <Input
          autoComplete="email"
          className="h-7 rounded-r-none rounded-l-4xl border-primary border-r-0 text-sm ring-primary/50 placeholder:text-primary/60 group-data-[invalid=true]:border-destructive group-data-[invalid=true]:ring-destructive/20"
          id="email"
          placeholder="Váš email"
          required
          type="email"
        />
        <Button className="h-7 rounded-l-none" size="icon" type="submit">
          <SendIcon className="size-4" />
        </Button>
      </div>
    </form>
  );
}
