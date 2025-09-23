import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { GoogleMapComponent } from "./google-map-component";
import { buttonVariants } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const contactData = {
  phone: {
    label: "Volat",
    icon: PhoneIcon,
    href: "tel:+421905830548",
  },
  email: {
    label: "Poslat email",
    icon: MailIcon,
    href: "mailto:hello@nico.example",
  },
  address: {
    label: "Navigovat",
    icon: MapPinIcon,
    href: "https://maps.app.goo.gl/1234567890",
  },
};

export function ContactCard() {
  return (
    <Card className="bg-brand">
      <CardHeader className="text-white">
        <CardTitle>Kontakt</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-4">
          {Object.values(contactData).map((contact) => (
            <Link
              className={cn(
                buttonVariants({ variant: "brandOutline", size: "sm" })
              )}
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
        <div className="mt-6 hidden h-96 overflow-hidden rounded-4xl md:block">
          <GoogleMapComponent />
        </div>
      </CardContent>
    </Card>
  );
}
