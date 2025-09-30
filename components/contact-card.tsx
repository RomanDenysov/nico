import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const contactData = [
  {
    label: "Volat",
    icon: PhoneIcon,
    href: "tel:+421905830548",
  },
  {
    label: "Poslat email",
    icon: MailIcon,
    href: "mailto:hello@nico.example",
  },
  {
    label: "Navigovat",
    icon: MapPinIcon,
    href: "https://maps.app.goo.gl/1234567890",
  },
];

export function ContactCard({ className }: { className?: string }) {
  return (
    <Card className={cn("relative max-w-sm", className)}>
      <CardHeader>
        <CardTitle className="text-lg md:text-lg lg:text-xl xl:text-2xl">
          Kontakt
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-4">
          {contactData.map((contact) => (
            <Link
              className={cn(buttonVariants({ variant: "brand", size: "sm" }))}
              href={contact.href}
              key={contact.href}
              rel="noopener noreferrer"
              target="_blank"
            >
              <contact.icon className="size-4" />
              {contact.label}
            </Link>
          ))}
        </div>
        {/* <div className="hidden h-96 overflow-hidden rounded-4xl md:block">
          <GoogleMapComponent />
        </div> */}
      </CardContent>
    </Card>
  );
}
