import { MapPinIcon } from "lucide-react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

type Address = {
  street: string;
  city: string;
  postalCode: string;
  phone: {
    label: string;
    href: string;
  };
  email: {
    label: string;
    href: string;
  };
  image: StaticImageData;
  map: string;
};

export function AddressFields({ address }: { address: Address }) {
  return (
    <HoverCard openDelay={300}>
      <div className="flex flex-col font-medium text-sm leading-tight tracking-tight">
        <HoverCardTrigger className="group">
          <p className="underline-offset-4 group-hover:underline">
            {address.street}
          </p>
          <p className="underline-offset-4 group-hover:underline">
            {address.postalCode} {address.city}
          </p>
        </HoverCardTrigger>
        <Link
          className="underline-offset-4 hover:underline"
          href={address.phone.href}
        >
          {address.phone.label}
        </Link>
        <Link
          className="underline-offset-4 hover:underline"
          href={address.email.href}
        >
          {address.email.label}
        </Link>
      </div>
      <HoverCardContent
        align="start"
        className="relative aspect-video w-80 overflow-hidden rounded-4xl p-0"
      >
        <div className="absolute inset-0">
          <Image
            alt={`Nico caffé ${address.city} exterior`}
            className="size-full object-cover object-center"
            height={320}
            src={address.image}
            width={640}
          />
        </div>
        <div className="absolute right-4 bottom-4 z-10">
          <Link href={address.map} rel="noopener noreferrer" target="_blank">
            <Badge className="px-1" variant="secondary">
              <MapPinIcon className="size-3" />
              Navigovať
            </Badge>
          </Link>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
